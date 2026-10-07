'use client'

import { PanelsTopLeft } from 'lucide-react'
import { RevealOnScroll } from '@/lib/animations'
import { EyebrowLabel } from '@/components/ui/EyebrowLabel'
import { ServicePricingCard, type ServicePricingPlan } from '@/components/sections/service/WebDevelopmentPricing'

const brandingPlan: ServicePricingPlan = {
    name: 'Gold',
    pages: 'Complete brand launch package',
    price: '$1,499',
    originalPrice: '$1,850',
    pricePeriod: '',
    icon: PanelsTopLeft,
    featured: true,
    category: 'Branding package',
    buttonLabel: 'Subscribe Now',
    buttonHref: 'https://buy.stripe.com/3cI00j4Aw8be9Ge9knawo0l',
    features: [
        'Premium Flyer Designs',
        'Premium Custom Service Video',
        'Full Social Media Setup',
        'High-Conversion Landing Page',
        'Custom Logo Design',
        'Business Card Design',
        'Google Business Profile (GBP) Setup',
    ],
}

export function BrandingStrategyPricing() {
    return (
        <section id="branding-strategy-pricing" style={{ padding: 'clamp(3.5rem, 9vw, 7rem) clamp(1.25rem, 6vw, 2.5rem)', background: 'var(--surface)', scrollMarginTop: '60px' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <RevealOnScroll style={{ marginBottom: 'clamp(2.5rem, 6vw, 4rem)' }}>
                    <EyebrowLabel>Branding price</EyebrowLabel>
                    <h2 style={{ fontFamily: "'Fraunces', serif", fontWeight: 300, fontSize: 'clamp(2.25rem, 5vw, 4.25rem)', lineHeight: 1, margin: 0, color: 'var(--fg)' }}>
                        Choose your <em style={{ color: '#CE307D', fontStyle: 'italic' }}>best plan.</em>
                    </h2>
                </RevealOnScroll>

                <div className="landing-pricing-grid">
                    <ServicePricingCard plan={brandingPlan} />
                </div>
            </div>
        </section>
    )
}