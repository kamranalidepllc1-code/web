import { notFound, permanentRedirect } from 'next/navigation'
import { postExists } from '@/lib/wordpress/api'

/**
 * Catches any path no other route matched. A bare /<slug> that is a published
 * WordPress post gets a 308 to /blog/<slug>; everything else is a real 404.
 * (Prefix-based legacy URLs are redirected earlier, in src/proxy.ts.)
 */
export default async function LegacyPath({ params }: PageProps<'/[...legacy]'>) {
  const { legacy } = await params
  const slug = legacy.length === 1 ? decodeURIComponent(legacy[0]).toLowerCase() : null
  if (slug && (await postExists(slug))) permanentRedirect(`/blog/${slug}`)
  notFound()
}
