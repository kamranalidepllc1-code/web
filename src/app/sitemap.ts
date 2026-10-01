import type { MetadataRoute } from 'next'
import { getAllPostSlugs } from '@/lib/wordpress/api'
import { SITE_URL } from '@/lib/blog/utils'

// Rebuilt at most every 5 minutes, so new WordPress posts appear without a deploy.
export const revalidate = 300

const STATIC_ROUTES = [
  '', '/about', '/contact', '/special-offer', '/blog',
  '/services/app-development', '/services/branding-strategy', '/services/citation-backlinks',
  '/services/content-creation', '/services/game-development', '/services/gbp-optimization',
  '/services/google-ads', '/services/graphic-design', '/services/landing-page',
  '/services/search-engine-optimization', '/services/social-media-marketing',
  '/services/software-development', '/services/web-development',
]

/** Next.js URLs only — never the old WordPress permalinks. */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllPostSlugs().catch(() => [])
  return [
    ...STATIC_ROUTES.map(path => ({ url: `${SITE_URL}${path}`, changeFrequency: 'monthly' as const, priority: path === '' ? 1 : 0.7 })),
    ...posts.map(p => ({ url: `${SITE_URL}/blog/${p.slug}`, lastModified: p.modified, changeFrequency: 'weekly' as const, priority: 0.6 })),
  ]
}
