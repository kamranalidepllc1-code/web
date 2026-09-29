import type { Metadata } from 'next'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'
import { Navbar } from '@/components/layout/Navbar'
import { Contact } from '@/components/sections/Contact'
import { BlogArticle } from '@/components/blog/BlogArticle'
import { PreviewBanner } from '@/components/blog/PreviewBanner'
import { getPreviewPost } from '@/lib/wordpress/api'

export const metadata: Metadata = {
  title: 'Preview | Digi Era Pro',
  robots: { index: false, follow: false },
}

/**
 * Unpublished WordPress content, only reachable in Draft Mode (enabled by
 * /api/preview with the shared secret). Everyone else gets a 404.
 */
export default async function BlogPreviewPage({ params }: PageProps<'/blog/preview/[id]'>) {
  const { isEnabled } = await draftMode()
  if (!isEnabled) notFound()

  const { id } = await params
  const post = await getPreviewPost(Number(id))
  if (!post) notFound()

  return (
    <div style={{ background: '#222429', color: '#f0ede8', fontFamily: "'Outfit', sans-serif", overflowX: 'clip' }}>
      <Navbar />
      <main style={{ padding: 'clamp(7.5rem, 15vw, 10rem) clamp(1.25rem, 6vw, 2.5rem) clamp(4rem, 9vw, 6rem)', background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(206,48,125,0.12), transparent 70%)' }}>
        <BlogArticle post={post} />
      </main>
      <Contact />
      <PreviewBanner status={post.status} slug={post.slug} />
    </div>
  )
}
