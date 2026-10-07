import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Navbar } from '@/components/layout/Navbar'
import { Contact } from '@/components/sections/Contact'
import { BlogArticle } from '@/components/blog/BlogArticle'
import { BlogCard } from '@/components/blog/BlogCard'
import { getPostBySlug, getRelatedPosts } from '@/lib/wordpress/api'
import { SITE_URL } from '@/lib/blog/utils'
import { ORG_ID } from '@/lib/seo'

// Rendered on first request, then cached and refreshed from WordPress at most every 5 minutes.
export const revalidate = 300

export async function generateMetadata({ params }: PageProps<'/blog/[slug]'>): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) return { title: 'Article not found | Digi Era Pro', robots: { index: false } }

  const url = `${SITE_URL}/blog/${post.slug}`
  const { title, description, image } = post.seo

  return {
    title,
    description,
    authors: post.author ? [{ name: post.author }] : undefined,
    keywords: post.tags.map(t => t.name),
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      url,
      title,
      description,
      siteName: 'Digi Era Pro',
      publishedTime: post.date,
      modifiedTime: post.modified,
      authors: post.author ? [post.author] : undefined,
      section: post.categories[0]?.name,
      tags: post.tags.map(t => t.name),
      images: image ? [{ url: image, alt: post.image?.alt || post.title }] : undefined,
    },
    twitter: { card: image ? 'summary_large_image' : 'summary', title, description, images: image ? [image] : undefined },
  }
}

export default async function BlogPostPage({ params }: PageProps<'/blog/[slug]'>) {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) notFound()

  const related = await getRelatedPosts(post, 3)
  const url = `${SITE_URL}/blog/${post.slug}`

  const jsonLd: object[] = [
    {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      mainEntityOfPage: { '@type': 'WebPage', '@id': url },
      headline: post.headline,
      description: post.seo.description,
      image: post.seo.image ? [post.seo.image] : undefined,
      datePublished: post.date,
      dateModified: post.modified,
      author: post.author ? { '@type': 'Person', name: post.author } : undefined,
      publisher: {
        '@type': 'Organization',
        '@id': ORG_ID,
        name: 'Digi Era Pro',
        logo: { '@type': 'ImageObject', url: `${SITE_URL}/Assets/logo/logo.png` },
      },
      articleSection: post.categories[0]?.name,
      keywords: post.tags.map(t => t.name).join(', ') || undefined,
      url,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog` },
        { '@type': 'ListItem', position: 3, name: post.title, item: url },
      ],
    },
  ]
  if (post.faqs.length) {
    jsonLd.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: post.faqs.map(f => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })),
    })
  }

  return (
    <div style={{ background: 'var(--bg)', color: 'var(--fg)', fontFamily: "var(--font-outfit), sans-serif", overflowX: 'clip' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
      <Navbar />

      <main style={{ padding: 'clamp(7rem, 11vw, 8rem) clamp(1.25rem, 6vw, 2.5rem) clamp(2rem, 4vw, 3rem)', background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(206,48,125,0.12), transparent 70%)' }}>
        <nav aria-label="Breadcrumb" style={{ maxWidth: '780px', margin: '0 auto 2.5rem', fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(var(--fg-rgb),0.5)', textAlign: 'center' }}>
          <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
          <span style={{ margin: '0 0.6rem' }}>/</span>
          <Link href="/blog" style={{ color: 'inherit', textDecoration: 'none' }}>Blog</Link>
        </nav>
        <BlogArticle post={post} aiTools={Boolean(process.env.GROQ_API_KEY)} />
      </main>

      {related.length > 0 && (
        <section style={{ padding: '0 clamp(1.25rem, 6vw, 2.5rem) clamp(2rem, 4vw, 3rem)' }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
              <div>
                <span style={{ fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#CE307D' }}>Keep reading</span>
                <h2 style={{ fontFamily: "var(--font-fraunces), serif", fontWeight: 300, fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.03em', marginTop: '0.75rem' }}>Related articles</h2>
              </div>
              <Link href="/blog" style={{ fontSize: '0.78rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--fg-strong)', textDecoration: 'none', borderBottom: '1px solid rgba(var(--line-rgb), 0.15)', paddingBottom: '0.25rem' }}>
                All articles →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: '1px', background: 'rgba(var(--line-rgb), 0.06)', border: '1px solid rgba(var(--line-rgb), 0.06)' }}>
              {related.map(p => <BlogCard key={p.id} post={p} />)}
            </div>
          </div>
        </section>
      )}

      <Contact />
    </div>
  )
}
