'use client'

import { Gem, ListChecks } from 'lucide-react'
import { RevealOnScroll, StaggerOnScroll } from '@/lib/animations'
import { EyebrowLabel } from '@/components/ui/EyebrowLabel'
import { ServicePricingCard, type ServicePricingPlan } from '@/components/sections/service/WebDevelopmentPricing'

const socialPlans: ServicePricingPlan[] = [
    {
        name: 'Gold',
        pages: 'Consistent social content and community care',
        price: '$450.00',
        pricePeriod: '/ Month',
        icon: ListChecks,
        featured: true,
        category: 'SMM package',
        buttonHref: 'https://buy.stripe.com/00wdR98QM4Z27y6gMPawo0r',
        features: [
            '2 engaging posts per week (custom-designed videos & graphics)',
            'Eye-catching visuals tailored to your brand identity',
            'Professional captions written to spark engagement and action',
            'Scheduled posting so your brand stays active, even when you’re not',
            'Hashtag and trend research to improve visibility and reach',
            'Basic engagement: responding to comments and DMs',
            'Monthly insights report to track what’s working and audience growth',
        ],
        footer: {
            title: 'Month-to-month flexibility',
            description: 'No long-term contracts. Cancel anytime with a 30-day notice and zero fees.',
            termsHref: '#',
        },
    },
    {
        name: 'Premium',
        pages: 'Organic social plus paid campaign management',
        price: '$750.00',
        pricePeriod: '/ Month',
        icon: Gem,
        category: 'SMM package',
        buttonHref: 'https://buy.stripe.com/3cI9ATffabnq5pY7cfawo0s',
        ribbon: 'Ad spend up to $2,000.00',
        features: [
            'Eye-catching visuals tailored to your brand',
            'Scroll-stopping captions designed to engage and convert',
            'Hashtag and trend research to boost reach',
            'Basic engagement: responding to comments and DMs',
            'Meta campaign setup, strategy, audience targeting, retargeting, creative testing, A/B testing, budget monitoring, and optimization',
            'Monthly insights report (organic + paid)',
            'Ongoing strategy adjustments based on performance',
        ],
        footer: {
            title: 'Month-to-month flexibility',
            description: 'No long-term contracts. Cancel anytime with a 30-day notice and zero fees.',
            termsHref: '#',
        },
    },
]

export function SocialMediaPricing() {
    return (
        <section id="social-media-pricing" style={{ padding: 'clamp(3.5rem, 9vw, 7rem) clamp(1.25rem, 6vw, 2.5rem)', background: 'var(--surface)', scrollMarginTop: '60px' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <RevealOnScroll style={{ marginBottom: 'clamp(2.5rem, 6vw, 4rem)' }}>
                    <EyebrowLabel>SMM pricing packages</EyebrowLabel>
                    <h2 style={{ fontFamily: "'Fraunces', serif", fontWeight: 300, fontSize: 'clamp(2.25rem, 5vw, 4.25rem)', lineHeight: 1, margin: 0, color: 'var(--fg)' }}>
                        Choose your <em style={{ color: '#CE307D', fontStyle: 'italic' }}>best plan.</em>
                    </h2>
                </RevealOnScroll>

                <StaggerOnScroll className="social-pricing-grid" style={{ display: 'grid', gap: '1px', alignItems: 'stretch', background: 'rgba(var(--line-rgb), 0.08)', border: '1px solid rgba(var(--line-rgb), 0.08)', overflow: 'hidden' }}>
                    {socialPlans.map((plan) => <ServicePricingCard key={plan.name} plan={plan} />)}
                </StaggerOnScroll>
            </div>
        </section>
    )
}