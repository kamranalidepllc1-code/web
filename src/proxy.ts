import { NextResponse, type NextRequest } from 'next/server'
import { legacyTarget } from '@/lib/wordpress/legacy'

/**
 * Old WordPress URLs → Next.js routes, in a single 308 hop.
 *
 * Runs before routing and never calls the network (fetch caching doesn't work
 * in Proxy). Trailing slashes are handled here (skipTrailingSlashRedirect in
 * next.config.ts) so /resource/x/ goes straight to /blog/x instead of first
 * bouncing to /resource/x. Bare /<slug> URLs are verified against WordPress
 * by app/[...legacy]/page.tsx.
 */

/** First path segments that belong to this Next.js app. */
const APP_SEGMENTS = new Set(['', 'about', 'blog', 'contact', 'services', 'special-offer', 'search', 'admin', 'api'])

export function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl
  const hadSlash = pathname.length > 1 && pathname.endsWith('/')
  const path = hadSlash ? pathname.replace(/\/+$/, '') : pathname

  const target = legacyTarget(path)
  if (target) {
    const url = new URL(target, request.url)
    if (!target.includes('?') && search) url.search = search
    return NextResponse.redirect(url, 308)
  }

  if (hadSlash) {
    // Built with URL, not nextUrl.clone(): NextURL re-applies the original trailing slash.
    const url = new URL(path + search, request.url)
    const firstSegment = path.split('/')[1] ?? ''
    // Our own routes: canonicalise (/about/ → /about). Unknown: let the legacy page decide.
    return APP_SEGMENTS.has(firstSegment) ? NextResponse.redirect(url, 308) : NextResponse.rewrite(url)
  }

  return NextResponse.next()
}

export const config = {
  // Skip Next internals and files with an extension (images, fonts, sitemap.xml, robots.txt…).
  matcher: ['/((?!_next/|api/|.*\\.[a-zA-Z0-9]+$).*)'],
}
