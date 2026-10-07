import type { MetadataRoute } from 'next'
import { getAllPostSlugs } from '@/lib/wordpress/api'
import { SITE_URL } from '@/lib/blog/utils'
import { SERVICES, hasServicePage } from '@/data/services'

// Rebuilt at most every 5 minutes, so new WordPress posts appear without a deploy.
export const revalidate = 300

// Service URLs come from the service registry, so a new service page is listed automatically.
const STATIC_ROUTES = [
  '', '/about', '/contact', '/special-offer', '/blog', '/privacy-policy', '/terms-conditions',
  ...SERVICES.filter(hasServicePage).map(s => s.href),
]

/** Next.js URLs only — never the old WordPress permalinks. */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllPostSlugs().catch(() => [])
  return [
    ...STATIC_ROUTES.map(path => ({ url: `${SITE_URL}${path}`, changeFrequency: 'monthly' as const, priority: path === '' ? 1 : path.startsWith('/services/') ? 0.8 : 0.7 })),
    ...posts.map(p => ({ url: `${SITE_URL}/blog/${p.slug}`, lastModified: p.modified, changeFrequency: 'weekly' as const, priority: 0.6 })),
  ]
}
