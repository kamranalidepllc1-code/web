import type { Metadata } from 'next'
import { SITE_URL } from '@/lib/blog/utils'

export const SITE_NAME = 'Digi Era Pro'
export const DEFAULT_OG_IMAGE = '/Assets/hero-office-poster.jpg'

/** Stable @id values so page-level schema can reference the site-wide entities. */
export const ORG_ID = `${SITE_URL}/#organization`
export const WEBSITE_ID = `${SITE_URL}/#website`

/**
 * Indexing is opt-in so staging/preview deployments (e.g. *.vercel.app) never
 * compete with the production domain. Set NEXT_PUBLIC_ALLOW_INDEXING=true on
 * the production deployment only.
 */
export const ALLOW_INDEXING = process.env.NEXT_PUBLIC_ALLOW_INDEXING === 'true'

type PageSeo = {
  /** Full document title, e.g. "SEO Services | Digi Era Pro". */
  title: string
  description: string
  /** Path from the site root, e.g. "/services/google-ads". */
  path: string
  image?: string
  noindex?: boolean
}

/** Complete per-page metadata: title, description, canonical, Open Graph and X. */
export function pageMetadata({ title, description, path, image = DEFAULT_OG_IMAGE, noindex }: PageSeo): Metadata {
  const url = `${SITE_URL}${path === '/' ? '' : path}`
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url || SITE_URL },
    openGraph: {
      type: 'website',
      url: url || SITE_URL,
      title,
      description,
      siteName: SITE_NAME,
      locale: 'en_US',
      images: [{ url: image, alt: title }],
    },
    twitter: { card: 'summary_large_image', title, description, images: [image] },
    ...(noindex ? { robots: { index: false, follow: true } } : {}),
  }
}

/** Escaped JSON for a <script type="application/ld+json"> tag. */
export function jsonLdString(data: object | object[]) {
  return JSON.stringify(data).replace(/</g, '\\u003c')
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path === '/' ? '' : item.path}` || SITE_URL,
    })),
  }
}

export function faqSchema(faq: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map(f => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })),
  }
}

export function webPageSchema({ name, description, path, type = 'WebPage' }: { name: string; description: string; path: string; type?: string }) {
  const url = `${SITE_URL}${path === '/' ? '' : path}` || SITE_URL
  return {
    '@context': 'https://schema.org',
    '@type': type,
    '@id': `${url}#webpage`,
    url,
    name,
    description,
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': ORG_ID },
    inLanguage: 'en-US',
  }
}
