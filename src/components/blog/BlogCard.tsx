import Image from 'next/image'
import Link from 'next/link'
import { formatDate } from '@/lib/blog/utils'
import type { PostSummary } from '@/lib/wordpress/api'

/** Linked blog card in the same visual language as the home page Journal cards. */
// headingLevel keeps the outline sequential: h2 under a page h1, h3 under a section h2.
export function BlogCard({ post, featured, headingLevel = 'h3' }: { post: PostSummary; featured?: boolean; headingLevel?: 'h2' | 'h3' }) {
  const category = post.categories[0]
  const Heading = headingLevel
  return (
    <Link href={`/blog/${post.slug}`} className={`blog-card${featured ? ' md:col-span-2' : ''}`}
      style={{ background: 'var(--bg)', overflow: 'hidden', display: 'flex', flexDirection: 'column', textDecoration: 'none', color: 'inherit' }}>
      {/* WordPress banners carry their headline in the artwork, so keep their real proportions (no cropping). */}
      <div className="blog-card-media" style={{
        aspectRatio: post.image?.width && post.image?.height ? `${post.image.width} / ${post.image.height}` : '16 / 9',
        overflow: 'hidden', background: 'var(--surface-3)', flexShrink: 0, position: 'relative', borderBottom: '1px solid rgba(var(--line-rgb), 0.06)',
      }}>
        {post.image && (
          <Image src={post.image.url} alt={post.image.alt || post.title} fill
            sizes={featured ? '(max-width: 768px) 100vw, 66vw' : '(max-width: 768px) 100vw, (max-width: 1440px) 33vw, 460px'}
            style={{ objectFit: 'cover' }} />
        )}
      </div>
      <div style={{ padding: '1.75rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
          {category && (
            <span style={{ fontSize: '0.68rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#CE307D', background: 'rgba(206,48,125,0.12)', border: '1px solid rgba(206,48,125,0.25)', padding: '0.25rem 0.7rem' }}>{category.name}</span>
          )}
          <span style={{ fontSize: '0.68rem', color: 'var(--fg-strong)', letterSpacing: '0.06em' }}>{formatDate(post.date, 'short')}</span>
        </div>
        <Heading className="blog-card-title" style={{ fontFamily: "var(--font-fraunces), serif", fontWeight: 300, fontSize: featured ? '1.5rem' : '1.15rem', letterSpacing: '-0.01em', lineHeight: 1.25, color: 'var(--fg)' }}>
          {post.title}
        </Heading>
        {post.excerpt && (
          <p style={{ color: 'rgba(var(--fg-rgb),0.75)', fontSize: '0.85rem', lineHeight: 1.7, display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{post.excerpt}</p>
        )}
        <span style={{ fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#CE307D', marginTop: 'auto', paddingTop: '0.5rem' }}>Read article →</span>
      </div>
    </Link>
  )
}
