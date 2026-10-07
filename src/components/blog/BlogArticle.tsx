import Image from 'next/image'
import Link from 'next/link'
import { FaFacebookF, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6'
import { formatDate, readingTime, SITE_URL } from '@/lib/blog/utils'
import type { Post } from '@/lib/wordpress/api'
import { BlogAiPanel } from '@/components/ai/BlogAiPanel'
import { BlogProgress, BlogToc } from '@/components/blog/BlogToc'
import { BlogAiBuddy } from '@/components/blog/BlogAiBuddy'
import { relatedServicesFor } from '@/data/services'

/** Article layout for a WordPress post. `post.html` is extracted and sanitised server-side. */
export function BlogArticle({ post, aiTools = false }: { post: Post; aiTools?: boolean }) {
  const category = post.categories[0]
  const services = relatedServicesFor([post.title, ...post.categories.map(c => c.name), ...post.tags.map(t => t.name)].join(' '))
  // Show "Updated" only when the post changed on a later day than it was published.
  const updated = post.modified && formatDate(post.modified) !== formatDate(post.date) ? post.modified : null
  const url = `${SITE_URL}/blog/${post.slug}`
  const share = [
    { label: 'LinkedIn', icon: FaLinkedinIn, href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}` },
    { label: 'X', icon: FaXTwitter, href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(post.headline)}` },
    { label: 'Facebook', icon: FaFacebookF, href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}` },
  ]

  return (
    <article style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <BlogProgress />
      <header style={{ maxWidth: '920px', margin: '0 auto', textAlign: 'center', marginBottom: 'clamp(1.5rem, 3vw, 2.25rem)' }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.75rem 1rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
          {category && (
            <Link href={`/blog?category=${encodeURIComponent(category.slug)}`}
              style={{ fontSize: '0.68rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#CE307D', background: 'rgba(206,48,125,0.12)', border: '1px solid rgba(206,48,125,0.25)', padding: '0.3rem 0.8rem', textDecoration: 'none' }}>
              {category.name}
            </Link>
          )}
          <span style={{ fontSize: '0.72rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(var(--fg-rgb),0.6)' }}>
            {post.author && <>By {post.author} · </>}
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            {updated && <> · Updated <time dateTime={updated}>{formatDate(updated)}</time></>}
            {' · '}{readingTime(post.html)}
          </span>
        </div>
        <h1 style={{ fontFamily: "var(--font-fraunces), serif", fontWeight: 300, fontSize: 'clamp(2.1rem, 5vw, 4rem)', letterSpacing: '-0.03em', lineHeight: 1.08, color: 'var(--fg)' }}>
          {post.headline}
        </h1>
        {post.excerpt && (
          <p style={{ maxWidth: '720px', margin: '1.25rem auto 0', fontSize: 'clamp(1rem, 2vw, 1.15rem)', lineHeight: 1.7, color: 'rgba(var(--fg-rgb),0.7)' }}>{post.excerpt}</p>
        )}
      </header>

      {post.image && (
        <figure style={{ margin: '0 0 clamp(2.5rem, 6vw, 4.5rem)', borderRadius: '16px', overflow: 'hidden', background: 'var(--surface-3)', border: '1px solid rgba(var(--line-rgb), 0.06)' }}>
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
          {post.toc.length > 1 && <BlogToc items={post.toc} variant="mobile" />}
          {aiTools && <BlogAiPanel slug={post.slug} />}
          <div className="blog-content" dangerouslySetInnerHTML={{ __html: post.html }} />

          {post.tags.length > 0 && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid rgba(var(--line-rgb), 0.08)' }}>
              {post.tags.map(tag => (
                <Link key={tag.id} href={`/blog?tag=${encodeURIComponent(tag.slug)}`} className="blog-tag"
                  style={{ fontSize: '0.72rem', letterSpacing: '0.06em', color: 'rgba(var(--fg-rgb),0.7)', border: '1px solid rgba(var(--line-rgb), 0.12)', padding: '0.35rem 0.8rem', borderRadius: '999px', textDecoration: 'none' }}>
                  #{tag.name}
                </Link>
              ))}
            </div>
          )}
        </div>

        <aside className="blog-aside" aria-label="Article tools">
          {post.toc.length > 1 && <BlogToc items={post.toc} variant="aside" />}

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

          <nav className="blog-side-card" aria-label="Related services">
            <p className="blog-side-label">Related services</p>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {services.map(s => (
                <li key={s.slug}>
                  <Link href={s.href} style={{ color: 'var(--fg)', textDecoration: 'none', fontSize: '0.9rem' }}>
                    {s.title} <span aria-hidden="true" style={{ color: '#CE307D' }}>→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="blog-side-card blog-cta">
            <BlogAiBuddy />
            <p style={{ fontFamily: "var(--font-fraunces), serif", fontWeight: 300, fontSize: '1.45rem', lineHeight: 1.2, color: '#fff' }}>
              Ready to grow your business online?
            </p>
            <p style={{ fontSize: '0.86rem', lineHeight: 1.6, color: 'rgba(255,255,255,0.8)', margin: '0.75rem 0 1.25rem' }}>
              Talk to the Digi Era Pro team about a strategy built around your goals.
            </p>
            <Link href="/contact#contact-form" className="blog-cta-btn">Start a project →</Link>
          </div>
        </aside>
      </div>
    </article>
  )
}
