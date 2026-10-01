'use client'

import { PanelsTopLeft } from 'lucide-react'
import { RevealOnScroll } from '@/lib/animations'
import { EyebrowLabel } from '@/components/ui/EyebrowLabel'
import { ServicePricingCard, type ServicePricingPlan } from '@/components/sections/service/WebDevelopmentPricing'

const landingPagePlan: ServicePricingPlan = {
    name: 'Landing Page',
    pages: 'Starting from',
    price: '$749.99',
    icon: PanelsTopLeft,
    category: 'Landing page package',
    buttonLabel: 'Subscribe Now',
    features: [
        '1 responsive landing page',
        'Conversion-focused layout',
        'Fast loading speed and SEO setup',
        'Custom call-to-action buttons',
        'Contact form integration',
        'Basic analytics setup',
        'One-time project',
    ],
}

export function LandingPagePricing() {
    return (
        <section id="landing-page-pricing" style={{ padding: 'clamp(4rem, 9vw, 7rem) clamp(1.25rem, 6vw, 2.5rem)', background: '#272a30', scrollMarginTop: '60px' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <RevealOnScroll style={{ marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
                    <EyebrowLabel>Landing page pricing</EyebrowLabel>
                    <h2 style={{ fontFamily: "'Fraunces', serif", fontWeight: 300, fontSize: 'clamp(2.25rem, 5vw, 4.25rem)', lineHeight: 1, margin: 0, color: '#f0ede8' }}>
                        Choose your <em style={{ color: '#CE307D', fontStyle: 'italic' }}>best plan.</em>
                    </h2>
                </RevealOnScroll>

                <div className="landing-pricing-grid">
                    <ServicePricingCard plan={landingPagePlan} />
                </div>
            </div>
        </section>
    )
}