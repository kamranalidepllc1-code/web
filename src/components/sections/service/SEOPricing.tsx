'use client'

import { Gem, ListChecks } from 'lucide-react'
import { RevealOnScroll, StaggerOnScroll } from '@/lib/animations'
import { EyebrowLabel } from '@/components/ui/EyebrowLabel'
import { ServicePricingCard, type ServicePricingPlan } from '@/components/sections/service/WebDevelopmentPricing'

const seoPlans: ServicePricingPlan[] = [
    {
        name: 'Silver',
        pages: 'SEO essentials',
        price: '$450.00',
        pricePeriod: '/ Month',
        icon: Gem,
        category: 'SEO package',
        buttonHref: 'https://buy.stripe.com/bJe28r0kg4Z28Ca2VZawo0t',
        features: [
            '5 keywords to be optimized',
            'Keywords Research and Analysis',
            'Duplicate content analysis',
            'Broken Links Check',
            'Up to 5 pages',
            'Meta Tags Optimization',
            'Google Analytic Account Setup',
            'Webmaster Tools Account Set Up',
        ],
        footer: {
            title: 'Month-to-month flexibility',
            description: 'No long-term contracts. Cancel anytime with a 30-day notice and zero fees.',
            termsHref: '#',
        },
    },
    {
        name: 'Gold',
        pages: 'Expanded keyword coverage',
        price: '$650.00',
        pricePeriod: '/ Month',
        icon: ListChecks,
        featured: true,
        category: 'SEO package',
        buttonHref: 'https://buy.stripe.com/00w5kD9UQgHK9GedADawo0v',
        features: [
            '10 keywords to be optimized',
            'Keywords Research and Analysis',
            'Duplicate content analysis',
            'URL Mapping',
            'Title Tag Optimization',
            'Meta Tags Optimization',
            'Google Analytic Account Setup',
            'Webmaster Tools Account Set Up',
        ],
        footer: {
            title: 'Month-to-month flexibility',
            description: 'No long-term contracts. Cancel anytime with a 30-day notice and zero fees.',
            termsHref: '#',
        },
    },
    {
        name: 'Premium',
        pages: 'Comprehensive site optimization',
        price: '$950.00',
        pricePeriod: '/ Month',
        icon: Gem,
        category: 'SEO package',
        buttonHref: 'https://buy.stripe.com/aFa6oH9UQcruaKi403awo0u',
        features: [
            '15 keywords to be optimized',
            'Keywords Research and Analysis',
            'In-depth Duplicate Content Analysis',
            'Up to 5 pages',
            'Schema Markup Implementation',
            'Website Speed Optimization',
            'Backlink Analysis and Strategy',
            'Landing Page Optimization',
        ],
        footer: {
            title: 'Month-to-month flexibility',
            description: 'No long-term contracts. Cancel anytime with a 30-day notice and zero fees.',
            termsHref: '#',
        },
    },
]

export function SEOPricing() {
    return (
        <section id="seo-pricing" style={{ padding: 'clamp(3.5rem, 9vw, 7rem) clamp(1.25rem, 6vw, 2.5rem)', background: 'var(--surface)', scrollMarginTop: '60px' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <RevealOnScroll style={{ marginBottom: 'clamp(2.5rem, 6vw, 4rem)' }}>
                    <EyebrowLabel>SEO pricing packages</EyebrowLabel>
                    <h2 style={{ fontFamily: "'Fraunces', serif", fontWeight: 300, fontSize: 'clamp(2.25rem, 5vw, 4.25rem)', lineHeight: 1, margin: 0, color: 'var(--fg)' }}>
                        Choose your <em style={{ color: '#CE307D', fontStyle: 'italic' }}>best plan.</em>
                    </h2>
                </RevealOnScroll>

                <StaggerOnScroll className="seo-pricing-grid" style={{ display: 'grid', gap: '1px', alignItems: 'stretch', background: 'rgba(var(--line-rgb), 0.08)', border: '1px solid rgba(var(--line-rgb), 0.08)', overflow: 'hidden' }}>
                    {seoPlans.map((plan) => <ServicePricingCard key={plan.name} plan={plan} />)}
                </StaggerOnScroll>
            </div>
        </section>
    )
}