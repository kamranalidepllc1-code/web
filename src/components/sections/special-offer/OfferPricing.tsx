'use client'

import { RevealOnScroll, StaggerOnScroll } from '@/lib/animations'
import { EyebrowLabel } from '@/components/ui/EyebrowLabel'
import { GBP_PLANS, GBP_TERMS_HREF } from '@/data/specialOffer'
import { PricingCard } from '@/components/sections/pricing/PricingCard'

function PlanCard({ plan }: { plan: (typeof GBP_PLANS)[number] }) {
  return (
    <PricingCard plan={{
      name: plan.name,
      price: plan.price,
      icon: plan.icon,
      featured: plan.featured,
      category: 'GBP Package',
      pricePeriod: '/ Month',
      buttonLabel: 'Subscribe now',
      features: plan.features,
      footer: {
        title: 'Month-to-month flexibility',
        description: 'No long-term contracts. Cancel anytime with a 30-day notice and zero fees.',
        termsHref: GBP_TERMS_HREF,
      },
    }} />
  )
}

export function OfferPricing() {
  return (
    <section id="pricing" style={{ padding: 'clamp(2rem, 4vw, 3rem) clamp(1.25rem, 6vw, 2.5rem)', background: '#272a30', scrollMarginTop: '60px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <RevealOnScroll style={{ marginBottom: 'clamp(1.5rem, 3vw, 2rem)' }}>
          <EyebrowLabel>GBP Pricing Packages</EyebrowLabel>
          <h2 style={{ fontFamily: "var(--font-fraunces), serif", fontWeight: 300, fontSize: 'clamp(2.25rem, 5vw, 4.25rem)', letterSpacing: '-0.03em', lineHeight: 1, margin: 0, color: '#f0ede8' }}>
            Choose your <em style={{ color: '#CE307D', fontStyle: 'italic' }}>best plan.</em>
          </h2>
        </RevealOnScroll>

        <StaggerOnScroll
          className="grid grid-cols-1 md:grid-cols-3"
          style={{ display: 'grid', gap: '1px', background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.07)', overflow: 'hidden' }}
        >
          {GBP_PLANS.map(plan => <PlanCard key={plan.name} plan={plan} />)}
        </StaggerOnScroll>
      </div>
    </section>
  )
}
