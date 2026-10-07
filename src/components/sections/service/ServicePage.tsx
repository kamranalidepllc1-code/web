import type { Metadata } from 'next'
import { Navbar } from '@/components/layout/Navbar'
import { Contact } from '@/components/sections/Contact'
import { ServiceHero } from '@/components/sections/service/ServiceHero'
import { ServiceIntro } from '@/components/sections/service/ServiceIntro'
import { ServiceFeatures } from '@/components/sections/service/ServiceFeatures'
import { ServiceProcess } from '@/components/sections/service/ServiceProcess'
import { ServiceShowcase } from '@/components/sections/service/ServiceShowcase'
import { ServiceStack } from '@/components/sections/service/ServiceStack'
import { ServiceCTA } from '@/components/sections/service/ServiceCTA'
import { WebDevelopmentPricing } from '@/components/sections/service/WebDevelopmentPricing'
import { LandingPagePricing } from '@/components/sections/service/LandingPagePricing'
import { SEOPricing } from '@/components/sections/service/SEOPricing'
import { GoogleAdsPricing } from '@/components/sections/service/GoogleAdsPricing'
import { BrandingStrategyPricing } from '@/components/sections/service/BrandingStrategyPricing'
import { SocialMediaPricing } from '@/components/sections/service/SocialMediaPricing'
import { CitationBacklinksPricing } from '@/components/sections/service/CitationBacklinksPricing'
import { ServiceFAQ } from '@/components/sections/service/ServiceFAQ'
import { ServiceFit } from '@/components/sections/service/ServiceFit'
import { JsonLd } from '@/components/seo/JsonLd'
import { OfferPricing } from '@/components/sections/special-offer/OfferPricing'
import { getService } from '@/data/services'
import { ORG_ID, SITE_NAME, breadcrumbSchema, faqSchema, pageMetadata, webPageSchema } from '@/lib/seo'
import { SITE_URL } from '@/lib/blog/utils'
import type { ServicePageContent } from '@/types/site'

export function serviceMetadata(content: ServicePageContent): Metadata {
  return pageMetadata({ ...content.seo, path: `/services/${content.slug}` })
}

function serviceSchema(content: ServicePageContent) {
  const service = getService(content.slug)
  const path = `/services/${content.slug}`
  const url = `${SITE_URL}${path}`
  return [
    webPageSchema({ name: content.seo.title, description: content.seo.description, path }),
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${url}#service`,
      name: service.title,
      serviceType: service.title,
      description: content.seo.description,
      url,
      provider: { '@id': ORG_ID, '@type': 'Organization', name: SITE_NAME },
      areaServed: { '@type': 'Country', name: 'United States' },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: `${service.title} services`,
        itemListElement: content.features.items.map(item => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: item.title, description: item.desc },
        })),
      },
    },
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Services', path: '/#services' },
      { name: service.title, path },
    ]),
    faqSchema(content.faq),
  ]
}

// Shared layout for every /services/<slug> page. Each page supplies its own content.
export function ServicePage({ content }: { content: ServicePageContent }) {
  return (
    <div
      style={{
        background: 'var(--bg)',
        color: 'var(--fg)',
        fontFamily: "'Outfit', sans-serif",
        overflowX: 'hidden',
      }}
    >
      <JsonLd data={serviceSchema(content)} />
      <Navbar />
      <ServiceHero content={content} />
      <ServiceIntro intro={content.intro} />
      <ServiceFeatures features={content.features} />
      <ServiceProcess process={content.process} />
      {content.slug === 'web-development' && <WebDevelopmentPricing />}
      {content.slug === 'landing-page' && <LandingPagePricing />}
      {content.slug === 'search-engine-optimization' && <SEOPricing />}
      {content.slug === 'google-ads' && <GoogleAdsPricing />}
      {content.slug === 'branding-strategy' && <BrandingStrategyPricing />}
      {content.slug === 'social-media-marketing' && <SocialMediaPricing />}
      {content.slug === 'citation-backlinks' && <CitationBacklinksPricing />}
      <ServiceShowcase showcase={content.showcase} />
      <ServiceFit shortName={content.shortName} fit={content.fit} />
      {content.pricing && <OfferPricing />}
      {content.stack && <ServiceStack stack={content.stack} />}
      <ServiceFAQ faq={content.faq} shortName={content.shortName} />
      <ServiceCTA slug={content.slug} cta={content.cta} relatedSlugs={content.related} />
      <Contact />
    </div>
  )
}
