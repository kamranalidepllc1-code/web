import 'server-only'
import { cache } from 'react'
import { extractArticle, plainText, type ArticleFaq } from './content'
import { sanitizeBlogHtml } from '@/lib/blog/sanitize'

/**
 * WordPress (digierapro.com) is the blog CMS. Everything here is read-only and
 * runs on the server; responses go through the Next.js data cache and refresh
 * every WP_REVALIDATE seconds, so visitors never hit WordPress directly.
 *
 * Only published posts are ever returned: the requests are anonymous, and the
 * WordPress REST API refuses non-public statuses without authentication.
 */

const API_URL = (process.env.WORDPRESS_API_URL || 'https://digierapro.com/wp-json/wp/v2').replace(/\/$/, '')
export const WP_REVALIDATE = 300 // seconds
export const WP_CACHE_TAG = 'wordpress'
export const POSTS_PER_PAGE = 9

// ─── Public types ────────────────────────────────────────────────────────────

export type WPImage = { url: string; width: number | null; height: number | null; alt: string }
export type WPTerm = { id: number; name: string; slug: string; count: number }

export type PostSummary = {
  id: number
  slug: string
  title: string
  excerpt: string
  date: string
  modified: string
  author: string
  image: WPImage | null
  categories: WPTerm[]
  tags: WPTerm[]
}

export type Post = PostSummary & {
  /** WordPress status: 'publish' for public posts; 'draft' | 'pending' | 'future' | 'private' only in preview. */
  status: string
  /** The article's own H1 from the Elementor layout (falls back to the title). */
  headline: string
  html: string
  /** H2 sections for the "On this page" list; ids are set on the headings in `html`. */
  toc: { id: string; text: string }[]
  faqs: ArticleFaq[]
  seo: { title: string; description: string; image: string | null }
}

// ─── Raw REST shapes (only the fields we request) ────────────────────────────

type RawTerm = { id: number; name: string; slug: string; taxonomy: string; count?: number }
type RawPost = {
  id: number
  slug: string
  status?: string
  title: { rendered: string }
  excerpt: { rendered: string }
  content?: { rendered: string }
  date_gmt: string | null // null for drafts that were never scheduled
  modified_gmt: string
  yoast_head_json?: { title?: string; description?: string; og_image?: { url: string }[] }
  _embedded?: {
    author?: { name?: string }[]
    'wp:featuredmedia'?: { source_url?: string; alt_text?: string; media_details?: { width?: number; height?: number } }[]
    'wp:term'?: RawTerm[][]
  }
}

const LIST_FIELDS = 'id,slug,title,excerpt,date_gmt,modified_gmt,_links,_embedded'
const EMBED = 'author,wp:featuredmedia,wp:term'

// ─── Fetch helper ────────────────────────────────────────────────────────────

class WordPressError extends Error {
  constructor(message: string, readonly status: number, readonly code?: string) {
    super(message)
  }
}

async function wpFetch<T>(path: string, params: Record<string, string | number | undefined>) {
  const url = new URL(`${API_URL}/${path}`)
  for (const [k, v] of Object.entries(params)) if (v !== undefined && v !== '') url.searchParams.set(k, String(v))

  const res = await fetch(url, {
    headers: { Accept: 'application/json' },
    next: { revalidate: WP_REVALIDATE, tags: [WP_CACHE_TAG] },
  })
  if (!res.ok) {
    const body = await res.json().catch(() => ({}))
    throw new WordPressError(`WordPress API ${res.status} for ${url.pathname}${url.search}`, res.status, body?.code)
  }
  return {
    data: (await res.json()) as T,
    total: Number(res.headers.get('x-wp-total') ?? 0),
    totalPages: Number(res.headers.get('x-wp-totalpages') ?? 0),
  }
}

// ─── Mapping ─────────────────────────────────────────────────────────────────

const toIso = (gmt: string | null) => (gmt ? new Date(`${gmt}Z`) : new Date()).toISOString()

function cleanExcerpt(html: string) {
  return plainText(html).replace(/\s*\[(…|&hellip;|\.\.\.)\]\s*$/, '…')
}

function toSummary(p: RawPost): PostSummary {
  const media = p._embedded?.['wp:featuredmedia']?.[0]
  const terms = (p._embedded?.['wp:term'] ?? []).flat()
  const term = (t: RawTerm): WPTerm => ({ id: t.id, name: plainText(t.name), slug: t.slug, count: t.count ?? 0 })
  return {
    id: p.id,
    slug: p.slug,
    title: plainText(p.title.rendered),
    excerpt: cleanExcerpt(p.excerpt.rendered),
    date: toIso(p.date_gmt),
    modified: toIso(p.modified_gmt),
    author: p._embedded?.author?.[0]?.name ?? '',
    image: media?.source_url
      ? { url: media.source_url, width: media.media_details?.width ?? null, height: media.media_details?.height ?? null, alt: media.alt_text ?? '' }
      : null,
    categories: terms.filter(t => t.taxonomy === 'category' && t.slug !== 'uncategorized').map(term),
    tags: terms.filter(t => t.taxonomy === 'post_tag').map(term),
  }
}

// ─── Queries ─────────────────────────────────────────────────────────────────

export async function getPosts(opts: { page?: number; perPage?: number; category?: number; tag?: number; exclude?: number[] } = {}) {
  const { page = 1, perPage = POSTS_PER_PAGE, category, tag, exclude } = opts
  try {
    const { data, total, totalPages } = await wpFetch<RawPost[]>('posts', {
      status: 'publish',
      page,
      per_page: perPage,
      categories: category,
      tags: tag,
      exclude: exclude?.join(','),
      orderby: 'date',
      order: 'desc',
      _fields: LIST_FIELDS,
      _embed: EMBED,
    })
    return { posts: data.map(toSummary), total, totalPages }
  } catch (error) {
    // Asking for a page past the end is a 400 in WordPress; treat it as empty.
    if (error instanceof WordPressError && error.code === 'rest_post_invalid_page_number') return { posts: [], total: 0, totalPages: 0 }
    throw error
  }
}

/** Deduped per request so generateMetadata and the page share one lookup. */
export const getPostBySlug = cache(async (slug: string): Promise<Post | null> => {
  if (!/^[a-z0-9-%]+$/i.test(slug)) return null
  const { data } = await wpFetch<RawPost[]>('posts', {
    slug,
    status: 'publish',
    _fields: `${LIST_FIELDS},content,yoast_head_json`,
    _embed: EMBED,
  })
  return data[0] ? toPost(data[0]) : null
})

/** File name without WordPress's "-1024x474" size suffix, to spot the same upload at another size. */
function imageStem(url: string) {
  return (url.split('/').pop() ?? '').replace(/\.[a-z0-9]+$/i, '').replace(/-\d+x\d+$/, '')
}

function finishHtml(html: string, featured: WPImage | null) {
  let out = html
  // The featured image is shown above the article — drop its repeat inside the body.
  if (featured) {
    const stem = imageStem(featured.url)
    out = out.replace(/<figure>\s*<img[^>]*\ssrc="([^"]+)"[^>]*>[\s\S]*?<\/figure>/g, (m, src: string) => (imageStem(src) === stem ? '' : m))
  }
  // Anchor every H2 for the table of contents.
  const toc: { id: string; text: string }[] = []
  const used = new Set<string>()
  out = out.replace(/<h2>([\s\S]*?)<\/h2>/g, (_m, inner: string) => {
    const text = plainText(inner)
    let id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 60) || 'section'
    const base = id
    for (let n = 2; used.has(id); n++) id = `${base}-${n}`
    used.add(id)
    toc.push({ id, text })
    return `<h2 id="${id}">${inner}</h2>`
  })
  return { html: out, toc }
}

function toPost(raw: RawPost): Post {
  const summary = toSummary(raw)
  const article = extractArticle(raw.content?.rendered ?? '')
  const { html, toc } = finishHtml(sanitizeBlogHtml(article.html), summary.image)
  const yoast = raw.yoast_head_json
  return {
    ...summary,
    status: raw.status ?? 'publish',
    headline: article.headline || summary.title,
    html,
    toc,
    faqs: article.faqs.map(f => ({ question: f.question, answer: plainText(f.answer) })),
    seo: {
      title: yoast?.title || summary.title,
      description: yoast?.description || summary.excerpt,
      image: yoast?.og_image?.[0]?.url || summary.image?.url || null,
    },
  }
}

// ─── Preview (drafts & unsaved changes) ──────────────────────────────────────

/** Preview needs a WordPress user + Application Password (Users → Profile → Application Passwords). */
export function isPreviewConfigured() {
  return Boolean(process.env.WORDPRESS_PREVIEW_SECRET && process.env.WORDPRESS_USERNAME && process.env.WORDPRESS_APP_PASSWORD)
}

async function wpFetchAuthed<T>(path: string, params: Record<string, string | number>): Promise<T | null> {
  const url = new URL(`${API_URL}/${path}`)
  for (const [k, v] of Object.entries(params)) url.searchParams.set(k, String(v))
  const token = Buffer.from(`${process.env.WORDPRESS_USERNAME}:${process.env.WORDPRESS_APP_PASSWORD}`).toString('base64')
  const res = await fetch(url, {
    headers: { Accept: 'application/json', Authorization: `Basic ${token}` },
    cache: 'no-store', // never cache unpublished content
  })
  if (res.status === 404) return null
  if (res.status === 401 || res.status === 403) {
    throw new WordPressError('WordPress rejected the preview credentials (WORDPRESS_USERNAME / WORDPRESS_APP_PASSWORD).', res.status)
  }
  if (!res.ok) throw new WordPressError(`WordPress API ${res.status} for ${url.pathname}`, res.status)
  return (await res.json()) as T
}

/**
 * Loads any post (draft, pending, scheduled or published) by ID for preview.
 * If WordPress holds a newer autosave — what "Preview changes" creates for an
 * already-published post — its title, excerpt and content are shown instead.
 */
export async function getPreviewPost(id: number): Promise<Post | null> {
  if (!isPreviewConfigured() || !Number.isInteger(id) || id <= 0) return null

  const [raw, autosaves] = await Promise.all([
    wpFetchAuthed<RawPost>(`posts/${id}`, { _fields: `${LIST_FIELDS},status,content,yoast_head_json`, _embed: EMBED }),
    wpFetchAuthed<RawPost[]>(`posts/${id}/autosaves`, { _fields: 'id,title,excerpt,content,modified_gmt' }),
  ])
  if (!raw) return null

  const latest = (autosaves ?? []).sort((a, b) => b.modified_gmt.localeCompare(a.modified_gmt))[0]
  const merged = latest && latest.modified_gmt > raw.modified_gmt
    ? { ...raw, title: latest.title, excerpt: latest.excerpt, content: latest.content, modified_gmt: latest.modified_gmt }
    : raw
  return toPost(merged)
}

/**
 * Every published post with its extracted article text, for the AI knowledge
 * index. Fetched 10 per request so each response stays under the 2 MB limit of
 * the Next.js data cache (Elementor posts are ~130 KB of HTML each).
 */
export type KnowledgePost = PostSummary & { sections: { heading: string; text: string }[]; faqs: ArticleFaq[] }

export async function getPostsForKnowledge(): Promise<KnowledgePost[]> {
  // 5 per page keeps each response under the 2 MB data-cache limit (10 did not);
  // pages are fetched 4 at a time.
  const fetchPage = (page: number) =>
    wpFetch<RawPost[]>('posts', {
      status: 'publish', per_page: 5, page, orderby: 'date', order: 'desc',
      _fields: `${LIST_FIELDS},content`, _embed: 'wp:term',
    })
  const first = await fetchPage(1)
  const raws = [...first.data]
  const rest = Array.from({ length: Math.min(first.totalPages, 60) - 1 }, (_, i) => i + 2)
  for (let i = 0; i < rest.length; i += 4) {
    const batch = await Promise.all(rest.slice(i, i + 4).map(fetchPage))
    for (const r of batch) raws.push(...r.data)
  }

  return raws.map(raw => {
    const article = extractArticle(raw.content?.rendered ?? '')
    // One section per H2 so retrieval can return the relevant part of a long article.
    const sections = sanitizeBlogHtml(article.html)
      .split(/<h2[^>]*>/i)
      .map((part, i) => {
        const [head, body] = i === 0 ? ['', part] : (part.split(/<\/h2>/i) as [string, string?])
        return { heading: plainText(head ?? ''), text: plainText(body ?? '') }
      })
      .filter(s => s.text.length > 40)
    return {
      ...toSummary(raw),
      sections,
      faqs: article.faqs.map(f => ({ question: f.question, answer: plainText(f.answer) })),
    }
  })
}

/** Cheap, cached check used to redirect legacy /<slug> URLs. */
export async function postExists(slug: string): Promise<boolean> {
  if (!/^[a-z0-9][a-z0-9%-]*$/i.test(slug)) return false
  const { data } = await wpFetch<{ slug: string }[]>('posts', { slug, status: 'publish', _fields: 'slug' })
  return data.length > 0
}

/** Lightweight list of published posts (slug + title) for pickers. */
export async function getPostTitles(): Promise<{ slug: string; title: string }[]> {
  const out: { slug: string; title: string }[] = []
  for (let page = 1; page <= 50; page++) {
    const { data, totalPages } = await wpFetch<{ slug: string; title: { rendered: string } }[]>('posts', {
      status: 'publish', per_page: 100, page, _fields: 'slug,title', orderby: 'date', order: 'desc',
    })
    out.push(...data.map(p => ({ slug: p.slug, title: plainText(p.title.rendered) })))
    if (page >= totalPages) break
  }
  return out
}

/** Every published post's slug + modified date, for the sitemap. */
export async function getAllPostSlugs(): Promise<{ slug: string; modified: string }[]> {
  const out: { slug: string; modified: string }[] = []
  for (let page = 1; page <= 50; page++) {
    const { data, totalPages } = await wpFetch<{ slug: string; modified_gmt: string }[]>('posts', {
      status: 'publish', per_page: 100, page, _fields: 'slug,modified_gmt',
    })
    out.push(...data.map(p => ({ slug: p.slug, modified: toIso(p.modified_gmt) })))
    if (page >= totalPages) break
  }
  return out
}

export async function getCategories(): Promise<WPTerm[]> {
  const { data } = await wpFetch<RawTerm[]>('categories', { per_page: 100, hide_empty: 'true', _fields: 'id,name,slug,count' })
  return data.filter(c => c.slug !== 'uncategorized').map(c => ({ id: c.id, name: plainText(c.name), slug: c.slug, count: c.count ?? 0 }))
}

export async function getTags(): Promise<WPTerm[]> {
  const { data } = await wpFetch<RawTerm[]>('tags', { per_page: 100, hide_empty: 'true', orderby: 'count', order: 'desc', _fields: 'id,name,slug,count' })
  return data.map(t => ({ id: t.id, name: plainText(t.name), slug: t.slug, count: t.count ?? 0 }))
}

export async function getTermBySlug(taxonomy: 'categories' | 'tags', slug: string): Promise<WPTerm | null> {
  if (!/^[a-z0-9-%]+$/i.test(slug)) return null
  const { data } = await wpFetch<RawTerm[]>(taxonomy, { slug, _fields: 'id,name,slug,count' })
  const t = data[0]
  return t ? { id: t.id, name: plainText(t.name), slug: t.slug, count: t.count ?? 0 } : null
}

/** Posts sharing a tag with this one, topped up with the latest posts. */
export async function getRelatedPosts(post: PostSummary, limit = 3): Promise<PostSummary[]> {
  const related: PostSummary[] = []
  if (post.tags.length) {
    const { data } = await wpFetch<RawPost[]>('posts', {
      status: 'publish',
      tags: post.tags.map(t => t.id).join(','),
      exclude: post.id,
      per_page: limit,
      _fields: LIST_FIELDS,
      _embed: EMBED,
    })
    related.push(...data.map(toSummary))
  }
  if (related.length < limit) {
    const { posts } = await getPosts({ perPage: limit + 1, exclude: [post.id, ...related.map(r => r.id)] })
    related.push(...posts.slice(0, limit - related.length))
  }
  return related
}
