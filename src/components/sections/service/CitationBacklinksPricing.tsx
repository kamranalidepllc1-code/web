'use client'

import { Gem, Link2 } from 'lucide-react'
import { RevealOnScroll, StaggerOnScroll } from '@/lib/animations'
import { EyebrowLabel } from '@/components/ui/EyebrowLabel'
import { ServicePricingCard, type ServicePricingPlan } from '@/components/sections/service/WebDevelopmentPricing'

const citationPlans: ServicePricingPlan[] = [
    {
        name: 'Gold',
        pages: ' ',
        price: '$599',
        pricePeriod: '/ Month',
        icon: Link2,
        featured: true,
        category: 'Link building package',
        buttonLabel: 'Sign Up Now',
        features: [
            '30+ High-Authority Backlinks',
            'DA 60+ Guaranteed Sites',
            '30+ High-Quality NAP Citations',
            '20+ Premium Business Directories',
            'Profile & Content-Based Backlinks',
            'Core Keyword Ranking Support',
            'Detailed Submission Report (Live Links)',
        ],
        footer: {
            title: 'Month-to-month flexibility',
            description: 'No long-term contracts. Cancel anytime with a 30-day notice and zero fees.',
            termsHref: '#',
        },
    },
    {
        name: 'Premium',
        pages: ' ',
        price: 'Custom Plan',
        pricePeriod: '',
        icon: Gem,
        category: 'Link building package',
        buttonLabel: 'Call Now',
        features: [
            '60+ Premium Editorial Backlinks',
            'DA 70+ High-Traffic Sites',
            '60+ Advanced NAP Citations',
            '40+ Niche-Specific Directories',
            'Guest Posts & Contextual Backlinks',
            'Competitive Keyword Dominance',
            'Real-Time Live Link Monitoring Report',
        ],
    },
]

export function CitationBacklinksPricing() {
    return (
        <section id="citation-backlinks-pricing" style={{ padding: 'clamp(3.5rem, 9vw, 7rem) clamp(1.25rem, 6vw, 2.5rem)', background: '#272a30', scrollMarginTop: '60px' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <RevealOnScroll style={{ marginBottom: 'clamp(2.5rem, 6vw, 4rem)' }}>
                    <EyebrowLabel>The Authority Amplifier</EyebrowLabel>
                    <h2 style={{ fontFamily: "'Fraunces', serif", fontWeight: 300, fontSize: 'clamp(2.25rem, 5vw, 4.25rem)', lineHeight: 1, margin: 0, color: '#f0ede8' }}>
                        Choose your <em style={{ color: '#CE307D', fontStyle: 'italic' }}>best plan.</em>
                    </h2>
                </RevealOnScroll>

                <StaggerOnScroll className="social-pricing-grid" style={{ display: 'grid', gap: '1px', alignItems: 'stretch', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.08)', overflow: 'hidden' }}>
                    {citationPlans.map((plan) => <ServicePricingCard key={plan.name} plan={plan} />)}
                </StaggerOnScroll>
            </div>
        </section>
    )
}