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
    <div style={{ background: '#222429', color: '#f0ede8', fontFamily: "'Outfit', sans-serif", overflowX: 'hidden' }}>
      <Navbar />
      <ServiceHero content={content} />
      <ServiceIntro intro={content.intro} />
      <ServiceFeatures features={content.features} />
      <ServiceProcess process={content.process} />
      <ServiceShowcase showcase={content.showcase} />
      {content.pricing && <OfferPricing />}
      {content.stack && <ServiceStack stack={content.stack} />}
      {content.faq && <ServiceFAQ faq={content.faq} />}
      <ServiceCTA slug={content.slug} cta={content.cta} />
      <Contact />
    </div>
  )
}
