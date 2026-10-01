import 'server-only'
import { getPostsForKnowledge } from '@/lib/wordpress/api'
import { AI } from '../config'
import { aiLog } from '../log'
import { Bm25Index } from './bm25'
import { blogChunks, companyChunks, offerChunks, pageChunks, reviewChunks, serviceChunks } from './sources'
import type { KnowledgeChunk, SearchHit } from './types'

export type { KnowledgeChunk, SearchHit } from './types'

type Built = { index: Bm25Index; builtAt: number; blogCount: number }
let current: Built | null = null
let building: Promise<Built> | null = null

function staticChunks(): KnowledgeChunk[] {
  return [...companyChunks(), ...serviceChunks(), ...offerChunks(), ...pageChunks(), ...reviewChunks()]
}

async function build(): Promise<Built> {
  const started = Date.now()
  let posts: Awaited<ReturnType<typeof getPostsForKnowledge>> = []
  try {
    posts = await getPostsForKnowledge()
  } catch (error) {
    // WordPress down: keep the last good index, or fall back to site content only.
    aiLog('error', 'retrieval_wordpress_failed', { message: error instanceof Error ? error.message : 'unknown' })
    // Keep the last full index (or the site-only bootstrap) and retry after a short delay.
    if (current) return { ...current, builtAt: Date.now() - AI.indexTtlMs + 60_000 }
  }
  const index = new Bm25Index([...staticChunks(), ...blogChunks(posts)])
  aiLog('info', 'knowledge_index_built', { chunks: index.size, blogPosts: posts.length, ms: Date.now() - started })
  return { index, builtAt: Date.now(), blogCount: posts.length }
}

/**
 * Returns the index, rebuilding in the background once it is older than
 * AI.indexTtlMs. Never blocks on WordPress: the very first request is served
 * from a site-only index (services, FAQs, company, offers) built instantly,
 * and blog content joins as soon as the background build finishes.
 */
export async function getKnowledge(): Promise<Built> {
  if (!current) {
    current = { index: new Bm25Index(staticChunks()), builtAt: 0, blogCount: 0 }
    aiLog('info', 'knowledge_index_bootstrap', { chunks: current.index.size })
  }
  const stale = Date.now() - current.builtAt > AI.indexTtlMs
  if (stale && !building) {
    building = build()
      .then(b => (current = b))
      .finally(() => { building = null })
  }
  // Always serve the current index; a rebuild swaps in when ready.
  return current
}

export async function searchKnowledge(query: string, opts: Parameters<Bm25Index['search']>[1] = {}): Promise<SearchHit[]> {
  try {
    const { index } = await getKnowledge()
    return index.search(query, opts)
  } catch (error) {
    aiLog('error', 'retrieval_failed', { message: error instanceof Error ? error.message : 'unknown' })
    return []
  }
}

/**
 * Retrieval with reserved slots per content type, so services and FAQs aren't
 * crowded out by the (much larger) blog corpus. Results are ordered by score.
 */
export async function searchBalanced(
  query: string,
  quotas: Partial<Record<SearchHit['type'] | 'any', number>>,
  opts: { boostUrl?: string } = {},
): Promise<SearchHit[]> {
  try {
    const { index } = await getKnowledge()
    const picked = new Map<string, SearchHit>()
    for (const [type, n] of Object.entries(quotas) as [SearchHit['type'] | 'any', number][]) {
      if (type === 'any') continue
      const typed = index.search(query, { limit: n, types: [type], boostUrl: opts.boostUrl })
      // Drop weak matches (e.g. a service that only mentions "customers" in passing).
      const floor = (typed[0]?.score ?? 0) * 0.35
      for (const h of typed) if (h.score >= floor) picked.set(h.id, h)
    }
    if (quotas.any) {
      for (const h of index.search(query, { limit: quotas.any + picked.size, boostUrl: opts.boostUrl })) {
        if (picked.size >= Object.values(quotas).reduce((a, b) => a + (b ?? 0), 0)) break
        if (!picked.has(h.id)) picked.set(h.id, h)
      }
    }
    return [...picked.values()].sort((a, b) => b.score - a.score)
  } catch (error) {
    aiLog('error', 'retrieval_failed', { message: error instanceof Error ? error.message : 'unknown' })
    return []
  }
}

/** Collapses hits from the same page so results/sources list each URL once. */
export function dedupeByUrl<T extends { url: string }>(hits: T[]): T[] {
  const seen = new Set<string>()
  return hits.filter(h => (seen.has(h.url.split('#')[0]) ? false : (seen.add(h.url.split('#')[0]), true)))
}

/**
 * Formats retrieved chunks for the model. Content is wrapped as data and
 * clipped; tags/brackets are stripped so page text can't pose as instructions.
 */
export function formatContext(hits: SearchHit[], maxChars: number = AI.retrieval.maxContextChars): string {
  let used = 0
  const parts: string[] = []
  for (const h of hits) {
    const clean = (s: string) => s.replace(/[<>{}]/g, ' ').replace(/\s+/g, ' ').trim()
    const body = clean(h.text).slice(0, 1400)
    const block = `<source type="${h.type}" title="${clean(h.title)}"${h.section ? ` section="${clean(h.section)}"` : ''} url="${h.url}">\n${body}\n</source>`
    if (used + block.length > maxChars) break
    parts.push(block)
    used += block.length
  }
  return parts.join('\n')
}
