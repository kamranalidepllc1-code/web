import type { Metadata } from 'next'
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

export const metadata: Metadata = {
  title: 'Special Offer | Digi Era Pro',
  description:
    'A limited-time offer from Digi Era Pro bringing together website design, branding, search, and social media — handled by one team.',
}

export default function SpecialOfferPage() {
  return (
    <div style={{ background: '#222429', color: '#f0ede8', fontFamily: "var(--font-outfit), sans-serif", overflowX: 'hidden' }}>
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
