import 'server-only'
import sanitizeHtml from 'sanitize-html'
import { rewriteWordPressLink } from '@/lib/wordpress/legacy'

/**
 * Allow-list for article HTML coming from WordPress. Strips Elementor classes
 * and inline styles (e.g. hard-coded black text) so the site's dark theme and
 * `.blog-content` typography apply.
 */
export function sanitizeBlogHtml(html: string): string {
  return sanitizeHtml(html, {
    allowedTags: [
      'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'br', 'strong', 'b', 'em', 'i', 'u', 's', 'a', 'ul', 'ol', 'li',
      'blockquote', 'pre', 'code', 'hr', 'img', 'figure', 'figcaption', 'details', 'summary',
      'table', 'thead', 'tbody', 'tr', 'th', 'td', 'div', 'iframe',
    ],
    allowedAttributes: {
      a: ['href', 'target', 'rel'],
      img: ['src', 'srcset', 'sizes', 'alt', 'title', 'width', 'height', 'loading', 'decoding'],
      th: ['colspan', 'rowspan'],
      td: ['colspan', 'rowspan'],
      div: ['data-youtube-video', 'class'],
      iframe: ['src', 'width', 'height', 'allowfullscreen', 'allow', 'frameborder'],
    },
    allowedClasses: { div: ['blog-faq'] },
    allowedSchemes: ['http', 'https', 'mailto', 'tel'],
    allowedSchemesByTag: { img: ['https', 'http'] },
    allowedIframeHostnames: ['www.youtube.com', 'youtube.com', 'www.youtube-nocookie.com', 'player.vimeo.com'],
    transformTags: {
      h1: 'h2', // the page title is the only H1
      a: (tagName, attribs) => {
        // Old WordPress permalinks (/blog/x/, /resource/x/, WP pages) → Next.js routes.
        const href = rewriteWordPressLink(attribs.href || '#')
        const external = /^https?:\/\//i.test(href)
        const attribsOut: Record<string, string> = external ? { href, target: '_blank', rel: 'noopener noreferrer' } : { href }
        return { tagName, attribs: attribsOut }
      },
      img: (tagName, attribs) => ({ tagName, attribs: { ...attribs, loading: 'lazy', decoding: 'async' } }),
    },
  })
}
