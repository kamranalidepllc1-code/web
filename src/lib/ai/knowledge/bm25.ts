import type { KnowledgeChunk, SearchHit } from './types'

/**
 * Small BM25 keyword index. The knowledge base is a few hundred chunks, so an
 * in-memory index is fast (<5 ms per query) and needs no vector database.
 */

const STOPWORDS = new Set(
  ('a an and are as at be but by can do does for from get has have how i if in into is it its me my no not of on or our ' +
    'so than that the their them then there these they this to up us was we what when where which who why will with you your ' +
    'about also any just more most need want like would could should im ive dont help am get got getting really very ' +
    'lot lots much many enough some things thing way').split(' '),
)

/**
 * Conservative stemming: plurals, -ing/-ed, and a trailing "e", so
 * "services" ≈ "service", "optimizing" ≈ "optimize", "getting" ≈ "get" —
 * without collapsing different words ("customers" must not become "custom").
 */
function stem(word: string): string {
  let w = word
  if (w.length > 4 && w.endsWith('ies')) w = `${w.slice(0, -3)}y`
  else if (w.length > 5 && w.endsWith('ing')) w = w.slice(0, -3)
  else if (w.length > 4 && w.endsWith('ed')) w = w.slice(0, -2)
  else if (w.length > 3 && w.endsWith('s') && !w.endsWith('ss') && !w.endsWith('us')) w = w.slice(0, -1)
  if (/([bdfgklmnprt])$/.test(w)) w = w.slice(0, -1) // gett → get, runn → run
  if (w.length > 3 && w.endsWith('e')) w = w.slice(0, -1)
  return w
}

export function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter(w => w.length > 1 && !STOPWORDS.has(w))
    .map(stem)
}

/**
 * Everyday phrasing → the vocabulary used on the site. Expands queries only;
 * it never decides an answer.
 */
const EXPANSIONS: Record<string, string[]> = {
  customer: ['lead', 'conversion', 'enquiry'],
  client: ['lead', 'customer'],
  sale: ['conversion', 'lead', 'revenue'],
  traffic: ['seo', 'visitor', 'search'],
  rank: ['seo', 'search'],
  google: ['seo', 'ad', 'gbp', 'search'],
  map: ['gbp', 'local', 'google business profile'],
  local: ['gbp', 'citation', 'local seo'],
  ppc: ['google ad', 'paid'],
  paid: ['google ad', 'ppc'],
  ad: ['google ad', 'paid', 'campaign'],
  logo: ['brand', 'graphic design'],
  brand: ['branding strategy', 'identity'],
  website: ['web development', 'web design', 'landing page'],
  site: ['website', 'web development'],
  store: ['e-commerce', 'online store'],
  shop: ['e-commerce'],
  app: ['app development', 'mobile'],
  instagram: ['social media'],
  facebook: ['social media', 'meta'],
  tiktok: ['social media'],
  review: ['gbp', 'reputation'],
  backlink: ['citation', 'link building'],
  blog: ['content creation', 'article'],
  price: ['plan', 'pricing', 'cost'],
  cost: ['price', 'pricing', 'plan'],
  contact: ['phone', 'email', 'call'],
}

export function expandQuery(query: string): string[] {
  const base = tokenize(query)
  // Look expansions up on the raw words (and their singular), not the stems.
  const words = query.toLowerCase().replace(/[^a-z0-9\s]/g, ' ').split(/\s+/).filter(Boolean)
  const extra = words
    .flatMap(w => EXPANSIONS[w] ?? EXPANSIONS[w.replace(/s$/, '')] ?? EXPANSIONS[w.replace(/es$/, '')] ?? [])
    .flatMap(tokenize)
  return [...base, ...extra.map(t => `~${t}`)] // "~" marks expansions (weighted lower)
}

type Doc = { chunk: KnowledgeChunk; tf: Map<string, number>; len: number }

export class Bm25Index {
  private docs: Doc[] = []
  private df = new Map<string, number>()
  private avgLen = 1
  private readonly k1 = 1.2
  private readonly b = 0.75

  constructor(chunks: KnowledgeChunk[]) {
    for (const chunk of chunks) {
      // Title and keywords count several times so a match there outranks a passing mention.
      const tokens = [
        ...tokenize(chunk.title), ...tokenize(chunk.title), ...tokenize(chunk.title),
        ...tokenize(chunk.section ?? ''), ...tokenize(chunk.section ?? ''),
        ...tokenize((chunk.keywords ?? []).join(' ')), ...tokenize((chunk.keywords ?? []).join(' ')),
        ...tokenize(chunk.text),
      ]
      const tf = new Map<string, number>()
      for (const t of tokens) tf.set(t, (tf.get(t) ?? 0) + 1)
      for (const t of tf.keys()) this.df.set(t, (this.df.get(t) ?? 0) + 1)
      this.docs.push({ chunk, tf, len: tokens.length })
    }
    this.avgLen = this.docs.reduce((n, d) => n + d.len, 0) / Math.max(1, this.docs.length)
  }

  get size() {
    return this.docs.length
  }

  search(query: string, opts: { limit?: number; types?: KnowledgeChunk['type'][]; boostUrl?: string } = {}): SearchHit[] {
    const terms = expandQuery(query)
    if (!terms.length) return []
    const N = this.docs.length
    const hits: SearchHit[] = []
    for (const doc of this.docs) {
      if (opts.types && !opts.types.includes(doc.chunk.type)) continue
      let score = 0
      for (const raw of terms) {
        const expanded = raw.startsWith('~')
        const t = expanded ? raw.slice(1) : raw
        const f = doc.tf.get(t)
        if (!f) continue
        const df = this.df.get(t) ?? 0
        const idf = Math.log(1 + (N - df + 0.5) / (df + 0.5))
        score += (expanded ? 0.4 : 1) * idf * ((f * (this.k1 + 1)) / (f + this.k1 * (1 - this.b + (this.b * doc.len) / this.avgLen)))
      }
      if (score <= 0) continue
      score *= doc.chunk.boost ?? 1
      if (opts.boostUrl && doc.chunk.url === opts.boostUrl) score *= 1.6
      hits.push({ ...doc.chunk, score })
    }
    return hits.sort((a, b) => b.score - a.score).slice(0, opts.limit ?? 10)
  }
}
