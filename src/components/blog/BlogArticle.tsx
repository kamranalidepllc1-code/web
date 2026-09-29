import Image from 'next/image'
import Link from 'next/link'
import { FaFacebookF, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6'
import { formatDate, readingTime, SITE_URL } from '@/lib/blog/utils'
import type { Post } from '@/lib/wordpress/api'

/** Article layout for a WordPress post. `post.html` is extracted and sanitised server-side. */
export function BlogArticle({ post }: { post: Post }) {
  const category = post.categories[0]
  const url = `${SITE_URL}/blog/${post.slug}`
  const share = [
    { label: 'LinkedIn', icon: FaLinkedinIn, href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}` },
    { label: 'X', icon: FaXTwitter, href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(post.headline)}` },
    { label: 'Facebook', icon: FaFacebookF, href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}` },
  ]

  return (
    <article style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <header style={{ maxWidth: '920px', margin: '0 auto', textAlign: 'center', marginBottom: 'clamp(2rem, 5vw, 3.5rem)' }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.75rem 1rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
          {category && (
            <Link href={`/blog?category=${encodeURIComponent(category.slug)}`}
              style={{ fontSize: '0.68rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#CE307D', background: 'rgba(206,48,125,0.12)', border: '1px solid rgba(206,48,125,0.25)', padding: '0.3rem 0.8rem', textDecoration: 'none' }}>
              {category.name}
            </Link>
          )}
          <span style={{ fontSize: '0.72rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(240,237,232,0.6)' }}>
            <time dateTime={post.date}>{formatDate(post.date)}</time> · {readingTime(post.html)}
          </span>
        </div>
        <h1 style={{ fontFamily: "'Fraunces', serif", fontWeight: 300, fontSize: 'clamp(2.1rem, 5vw, 4rem)', letterSpacing: '-0.03em', lineHeight: 1.08, color: '#f0ede8' }}>
          {post.headline}
        </h1>
        {post.excerpt && (
          <p style={{ maxWidth: '720px', margin: '1.25rem auto 0', fontSize: 'clamp(1rem, 2vw, 1.15rem)', lineHeight: 1.7, color: 'rgba(240,237,232,0.7)' }}>{post.excerpt}</p>
        )}
      </header>

      {post.image && (
        <figure style={{ margin: '0 0 clamp(2.5rem, 6vw, 4.5rem)', borderRadius: '16px', overflow: 'hidden', background: '#2c2f35', border: '1px solid rgba(255,255,255,0.06)' }}>
          <Image
            src={post.image.url}
            alt={post.image.alt || post.title}
            width={post.image.width ?? 1200}
            height={post.image.height ?? 630}
            priority
            sizes="(max-width: 1260px) 100vw, 1200px"
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </figure>
      )}

      <div className="blog-layout">
        <div style={{ minWidth: 0 }}>
          <div className="blog-content" dangerouslySetInnerHTML={{ __html: post.html }} />

          {post.tags.length > 0 && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
              {post.tags.map(tag => (
                <Link key={tag.id} href={`/blog?tag=${encodeURIComponent(tag.slug)}`} className="blog-tag"
                  style={{ fontSize: '0.72rem', letterSpacing: '0.06em', color: 'rgba(240,237,232,0.7)', border: '1px solid rgba(255,255,255,0.12)', padding: '0.35rem 0.8rem', borderRadius: '999px', textDecoration: 'none' }}>
                  #{tag.name}
                </Link>
              ))}
            </div>
          )}
        </div>

        <aside className="blog-aside" aria-label="Article tools">
          {post.toc.length > 1 && (
            <nav className="blog-side-card blog-toc" aria-label="On this page">
              <p className="blog-side-label">On this page</p>
              <ol>
                {post.toc.map(item => (
                  <li key={item.id}><a href={`#${item.id}`}>{item.text}</a></li>
                ))}
              </ol>
            </nav>
          )}

          <div className="blog-side-card">
            <p className="blog-side-label">Share this article</p>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              {share.map(({ label, icon: Icon, href }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={`Share on ${label}`} className="blog-share">
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          <div className="blog-side-card blog-cta">
            <p style={{ fontFamily: "'Fraunces', serif", fontWeight: 300, fontSize: '1.45rem', lineHeight: 1.2, color: '#fff' }}>
              Ready to grow your business online?
            </p>
            <p style={{ fontSize: '0.86rem', lineHeight: 1.6, color: 'rgba(255,255,255,0.8)', margin: '0.75rem 0 1.25rem' }}>
              Talk to the Digi Era Pro team about a strategy built around your goals.
            </p>
            <Link href="/contact" className="blog-cta-btn">Start a project →</Link>
          </div>
        </aside>
      </div>
    </article>
  )
}
