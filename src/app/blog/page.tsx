import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Navbar } from '@/components/layout/Navbar'
import { Contact } from '@/components/sections/Contact'
import { BlogCard } from '@/components/blog/BlogCard'
import { getCategories, getPosts, getTermBySlug } from '@/lib/wordpress/api'
import { SITE_URL } from '@/lib/blog/utils'

const DESCRIPTION = 'Insights on digital marketing, SEO, branding, social media and web development from the Digi Era Pro team.'

type Filters = { page: number; category: string | null; tag: string | null }

function readFilters(sp: Record<string, string | string[] | undefined>): Filters {
  const one = (v: string | string[] | undefined) => (typeof v === 'string' && v ? v : null)
  return {
    page: Math.max(1, parseInt(one(sp.page) ?? '', 10) || 1),
    category: one(sp.category),
    tag: one(sp.tag),
  }
}

function listHref({ page, category, tag }: Filters) {
  const params = new URLSearchParams()
  if (category) params.set('category', category)
  if (tag) params.set('tag', tag)
  if (page > 1) params.set('page', String(page))
  const s = params.toString()
  return `/blog${s ? `?${s}` : ''}`
}

export async function generateMetadata({ searchParams }: PageProps<'/blog'>): Promise<Metadata> {
  const filters = readFilters(await searchParams)
  const [category, tag] = await Promise.all([
    filters.category ? getTermBySlug('categories', filters.category) : null,
    filters.tag ? getTermBySlug('tags', filters.tag) : null,
  ])
  const label = category?.name ?? tag?.name
  const title = label ? `${label} Articles | Digi Era Pro Blog` : 'Blog | Digi Era Pro'
  const url = `${SITE_URL}${listHref(filters)}`
  return {
    title,
    description: DESCRIPTION,
    alternates: { canonical: url },
    openGraph: { type: 'website', title, description: DESCRIPTION, url, siteName: 'Digi Era Pro' },
    twitter: { card: 'summary_large_image', title, description: DESCRIPTION },
  }
}

export default async function BlogIndexPage({ searchParams }: PageProps<'/blog'>) {
  const filters = readFilters(await searchParams)
  const [category, tag, categories] = await Promise.all([
    filters.category ? getTermBySlug('categories', filters.category) : null,
    filters.tag ? getTermBySlug('tags', filters.tag) : null,
    getCategories(),
  ])
  if ((filters.category && !category) || (filters.tag && !tag)) notFound()

  const { posts, total, totalPages } = await getPosts({ page: filters.page, category: category?.id, tag: tag?.id })
  const { total: allPosts } = category || tag ? await getPosts({ perPage: 1 }) : { total }
  // Only offer categories that actually narrow the list.
  const filterable = categories.filter(c => c.count > 0 && c.count < allPosts)
  const pages = Math.max(1, totalPages)
  const pageWindow = Array.from({ length: pages }, (_, i) => i + 1).filter(p => p === 1 || p === pages || Math.abs(p - filters.page) <= 1)

  const pill = (active: boolean): React.CSSProperties => ({
    fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none', padding: '0.5rem 1rem',
    border: `1px solid ${active ? '#CE307D' : 'rgba(255,255,255,0.12)'}`, background: active ? '#CE307D' : 'transparent',
    color: active ? '#fff' : 'rgba(240,237,232,0.75)', whiteSpace: 'nowrap',
  })

  return (
    <div style={{ background: '#0a0a0a', color: '#f0ede8', fontFamily: "'Outfit', sans-serif", overflowX: 'hidden' }}>
      <Navbar />

      <section style={{ padding: 'clamp(8rem, 16vw, 11rem) clamp(1.25rem, 6vw, 2.5rem) clamp(2.5rem, 6vw, 4rem)', background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(206,48,125,0.14), transparent 70%)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <span style={{ fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#CE307D' }}>{tag ? 'Tagged' : 'Thinking'}</span>
          <h1 style={{ fontFamily: "'Fraunces', serif", fontWeight: 300, fontSize: 'clamp(2.75rem, 7vw, 5.5rem)', letterSpacing: '-0.03em', lineHeight: 1, margin: '1rem 0 1.25rem' }}>
            {category || tag ? <>{(category ?? tag)!.name} <em style={{ color: '#CE307D' }}>articles.</em></> : <>The <em style={{ color: '#CE307D' }}>Journal.</em></>}
          </h1>
          <p style={{ maxWidth: '560px', color: 'rgba(240,237,232,0.7)', lineHeight: 1.7 }}>{DESCRIPTION}</p>

          {(filterable.length > 0 || tag) && (
            <nav aria-label="Blog categories" style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '2.5rem' }}>
              <Link href="/blog" style={pill(!category && !tag)}>All</Link>
              {filterable.map(c => (
                <Link key={c.id} href={listHref({ page: 1, category: c.slug, tag: null })} style={pill(c.id === category?.id)} aria-current={c.id === category?.id ? 'page' : undefined}>{c.name}</Link>
              ))}
              {tag && <span style={pill(true)}>#{tag.name}</span>}
            </nav>
          )}
        </div>
      </section>

      <section style={{ padding: '0 clamp(1.25rem, 6vw, 2.5rem) clamp(4rem, 9vw, 7rem)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          {posts.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '5rem 1rem', border: '1px solid rgba(255,255,255,0.06)' }}>
              <p style={{ fontFamily: "'Fraunces', serif", fontWeight: 300, fontSize: '1.75rem' }}>No articles yet.</p>
              <p style={{ color: 'rgba(240,237,232,0.6)', marginTop: '0.5rem' }}>{category || tag ? 'Nothing here yet — try another topic.' : 'Check back soon for new insights.'}</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: '1px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.06)' }}>
              {posts.map(post => <BlogCard key={post.id} post={post} />)}
            </div>
          )}

          {pages > 1 && (
            <nav aria-label="Pagination" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', marginTop: '3rem', flexWrap: 'wrap' }}>
              {filters.page > 1 && <Link href={listHref({ ...filters, page: filters.page - 1 })} style={pill(false)} rel="prev">← Newer</Link>}
              {pageWindow.map((p, i) => (
                <span key={p} style={{ display: 'contents' }}>
                  {i > 0 && p - pageWindow[i - 1] > 1 && <span style={{ color: 'rgba(240,237,232,0.4)' }}>…</span>}
                  <Link href={listHref({ ...filters, page: p })} style={pill(p === filters.page)} aria-current={p === filters.page ? 'page' : undefined}>{p}</Link>
                </span>
              ))}
              {filters.page < pages && <Link href={listHref({ ...filters, page: filters.page + 1 })} style={pill(false)} rel="next">Older →</Link>}
            </nav>
          )}
        </div>
      </section>

      <Contact />
    </div>
  )
}
