'use client'

import { Gem, ListChecks } from 'lucide-react'
import { RevealOnScroll, StaggerOnScroll } from '@/lib/animations'
import { EyebrowLabel } from '@/components/ui/EyebrowLabel'
import { ServicePricingCard, type ServicePricingPlan } from '@/components/sections/service/WebDevelopmentPricing'

const googleAdsPlans: ServicePricingPlan[] = [
    {
        name: 'Basic',
        pages: 'Google Ads management',
        price: '$450.00',
        pricePeriod: '/ Month',
        icon: ListChecks,
        category: 'Google Ads package',
        ribbon: 'Up to $2,000.00 ad spend limit',
        features: [
            '1 High-Conversion Ad Variation',
            'Standard Search & Negative Keywords',
            'Weekly Bid & Budget Management',
            'Basic Conversion & Lead Tracking',
            'Monthly Performance Analytics Report',
        ],
        footer: {
            title: 'Month-to-month flexibility',
            description: 'No long-term contracts. Cancel anytime with a 30-day notice.',
            termsHref: '#',
            linkLabel: 'Privacy Policy',
        },
    },
    {
        name: 'Gold',
        pages: 'Expanded campaign management',
        price: '$875.00',
        pricePeriod: '/ Month',
        icon: ListChecks,
        featured: true,
        category: 'Google Ads package',
        ribbon: 'Up to $3,000.00 ad spend limit',
        features: [
            '3 High-Conversion Ad Variations',
            'Standard Search & Negative Keywords',
            'Weekly Bid & Budget Management',
            'Basic Conversion & Lead Tracking',
            'Monthly Performance Analytics Report',
        ],
        footer: {
            title: 'Month-to-month flexibility',
            description: 'No long-term contracts. Cancel anytime with a 30-day notice.',
            termsHref: '#',
            linkLabel: 'Privacy Policy',
        },
    },
    {
        name: 'Premium',
        pages: 'Advanced campaign optimization',
        price: '$1375.00',
        pricePeriod: '/ Month',
        icon: Gem,
        category: 'Google Ads package',
        ribbon: 'Up to $6,000.00 ad spend limit',
        features: [
            '5 High-Conversion Ad Variations',
            'Dynamic Ads & Multi-Variation Testing',
            'Advanced ROI & Smart Bidding Strategy',
            'Bi-Weekly Performance & Strategy Calls',
            'Dedicated Manager & Weekly Strategy Calls',
        ],
        footer: {
            title: 'Month-to-month flexibility',
            description: 'No long-term contracts. Cancel anytime with a 30-day notice.',
            termsHref: '#',
            linkLabel: 'Privacy Policy',
        },
    },
]

export function GoogleAdsPricing() {
    return (
        <section id="google-ads-pricing" style={{ padding: 'clamp(3.5rem, 9vw, 7rem) clamp(1.25rem, 6vw, 2.5rem)', background: '#272a30', scrollMarginTop: '60px' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <RevealOnScroll style={{ marginBottom: 'clamp(2.5rem, 6vw, 4rem)' }}>
                    <EyebrowLabel>Google Ads pricing packages</EyebrowLabel>
                    <h2 style={{ fontFamily: "'Fraunces', serif", fontWeight: 300, fontSize: 'clamp(2.25rem, 5vw, 4.25rem)', lineHeight: 1, margin: 0, color: '#f0ede8' }}>
                        Choose your <em style={{ color: '#CE307D', fontStyle: 'italic' }}>best plan.</em>
                    </h2>
                </RevealOnScroll>

                <StaggerOnScroll className="seo-pricing-grid" style={{ display: 'grid', gap: '1px', alignItems: 'stretch', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.08)', overflow: 'hidden' }}>
                    {googleAdsPlans.map((plan) => <ServicePricingCard key={plan.name} plan={plan} />)}
                </StaggerOnScroll>
            </div>
        </section>
    )
}