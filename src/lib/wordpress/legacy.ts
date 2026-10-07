/**
 * Old WordPress URLs → Next.js routes. Pure (no network) so it can run in the
 * proxy and in the post-HTML link rewriter alike.
 *
 * WordPress permalinks were `/%category%/%postname%/`, so posts lived under
 * /blog/<slug>/ and /resource/<slug>/. Bare /<slug> URLs can't be mapped
 * without asking WordPress, so they are handled by app/[...legacy]/page.tsx.
 */

/** WordPress pages that have a Next.js equivalent. */
export const WP_PAGE_ALIASES: Record<string, string> = {
  '/about-us': '/about',
  '/services': '/#services',
  '/apps': '/services/app-development',
  '/branding': '/services/branding-strategy',
  '/citations': '/services/citation-backlinks',
  '/ecommerce': '/services/ecommerce-development',
  '/games': '/services/game-development',
  '/google-ads': '/services/google-ads',
  '/google-ads-managment': '/services/google-ads',
  '/google-my-business-optimization': '/services/gbp-optimization',
  '/graphic-designing': '/services/graphic-design',
  '/landing-page-website': '/services/landing-page',
  '/search-engine-optimization': '/services/search-engine-optimization',
  '/social-media-marketing': '/services/social-media-marketing',
  '/virtual-ai-solutions': '/services/ai-solutions',
  '/software': '/services/software-development',
  '/web-development': '/services/web-development',
  '/website-development': '/services/web-development',
}

const SLUG = '([a-z0-9][a-z0-9%-]*)'
const RULES: [RegExp, (m: RegExpMatchArray) => string][] = [
  [new RegExp(`^/resource/${SLUG}$`, 'i'), m => `/blog/${m[1]}`], // posts whose primary category was "resource"
  [new RegExp(`^/\\d{4}/\\d{2}(?:/\\d{2})?/${SLUG}$`, 'i'), m => `/blog/${m[1]}`], // date permalinks
  [new RegExp(`^/category/(?:[^/]+/)*${SLUG}$`, 'i'), m => `/blog?category=${m[1]}`],
  [new RegExp(`^/tag/${SLUG}$`, 'i'), m => `/blog?tag=${m[1]}`],
  [/^\/author\/[^/]+$/i, () => '/blog'],
  [/^\/resource$/i, () => '/blog?category=resource'],
]

/**
 * Next.js destination for a legacy WordPress path (no trailing slash), or null
 * when the path isn't a known legacy URL. Pagination suffixes (/page/2) are dropped.
 */
export function legacyTarget(pathname: string): string | null {
  const path = pathname.replace(/\/page\/\d+$/i, '')
  if (WP_PAGE_ALIASES[path.toLowerCase()]) return WP_PAGE_ALIASES[path.toLowerCase()]
  for (const [re, to] of RULES) {
    const m = path.match(re)
    if (m) return to(m)
  }
  return null
}

/** Hosts that served (or will serve) the WordPress front-end. */
export function isWordPressHost(host: string): boolean {
  const h = host.toLowerCase().replace(/^www\./, '')
  const wp = new URL(process.env.WORDPRESS_API_URL || 'https://digierapro.com/wp-json/wp/v2').hostname.replace(/^www\./, '')
  return h === 'digierapro.com' || h === wp
}

/**
 * Rewrites a link found inside WordPress post HTML so it stays on the Next.js
 * site: /blog/x/, /resource/x/ and date permalinks → /blog/x, WP pages → their
 * Next routes, other same-site links → root-relative. Uploads stay absolute.
 */
export function rewriteWordPressLink(href: string): string {
  let url: URL
  try {
    url = new URL(href)
  } catch {
    return href // relative, mailto:, tel:, #anchor…
  }
  if (!/^https?:$/.test(url.protocol) || !isWordPressHost(url.hostname)) return href
  if (/^\/(wp-content|wp-json|wp-admin|wp-includes)\//.test(url.pathname)) return href

  const path = url.pathname.replace(/\/+$/, '') || '/'
  const post = path.match(/^\/blog\/([a-z0-9][a-z0-9%-]*)$/i)
  const target = post ? `/blog/${post[1]}` : legacyTarget(path) ?? path
  return target + (target.includes('?') ? '' : url.search) + url.hash
}
