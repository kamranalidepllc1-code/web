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
import { OfferPricing } from '@/components/sections/special-offer/OfferPricing'
import { getService } from '@/data/services'
import type { ServicePageContent } from '@/types/site'

export function serviceMetadata(content: ServicePageContent): Metadata {
  return {
    title: `${getService(content.slug).title} | Digi Era Pro`,
    description: content.hero.summary,
  }
}

// Shared layout for every /services/<slug> page. Each page supplies its own content.
export function ServicePage({ content }: { content: ServicePageContent }) {
  return (
    <div
      style={{
        background: '#222429',
        color: '#f0ede8',
        fontFamily: "'Outfit', sans-serif",
        overflowX: 'hidden',
      }}
    >
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
      {content.pricing && <OfferPricing />}
      {content.stack && <ServiceStack stack={content.stack} />}
      {content.faq && <ServiceFAQ faq={content.faq} />}
      <ServiceCTA slug={content.slug} cta={content.cta} />
      <Contact />
    </div>
  )
}
