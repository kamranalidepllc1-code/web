import { Navbar } from '@/components/layout/Navbar'
import { OfferHero } from '@/components/sections/special-offer/OfferHero'
import { OfferHighlight } from '@/components/sections/special-offer/OfferHighlight'
import { OfferIncluded } from '@/components/sections/special-offer/OfferIncluded'
import { OfferWhy } from '@/components/sections/special-offer/OfferWhy'
import { OfferProcess } from '@/components/sections/special-offer/OfferProcess'
import { OfferMarquee } from '@/components/sections/special-offer/OfferMarquee'
import { OfferPricing } from '@/components/sections/special-offer/OfferPricing'
import { OfferAvailability } from '@/components/sections/special-offer/OfferAvailability'
import { Contact } from '@/components/sections/Contact'
import { JsonLd } from '@/components/seo/JsonLd'
import { breadcrumbSchema, pageMetadata, webPageSchema } from '@/lib/seo'

const SEO = {
  title: 'Website, SEO & Marketing Bundle Offer | Digi Era Pro',
  description: 'One team for your website design, branding, Google Business Profile, SEO, social media, and content. See what is included in the Digi Era Pro growth bundle.',
  path: '/special-offer',
}

export const metadata = pageMetadata(SEO)

export default function SpecialOfferPage() {
  return (
    <div style={{ background: 'var(--bg)', color: 'var(--fg)', fontFamily: "var(--font-outfit), sans-serif", overflowX: 'hidden' }}>
      <JsonLd data={[
        webPageSchema({ name: SEO.title, description: SEO.description, path: SEO.path }),
        breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Special Offer', path: SEO.path }]),
      ]} />
      <Navbar />
      <OfferHero />
      <OfferHighlight />
      <OfferIncluded />
      <OfferWhy />
      <OfferProcess />
      <OfferMarquee />
      <OfferPricing />
      <OfferAvailability />
      <Contact />
    </div>
  )
}
