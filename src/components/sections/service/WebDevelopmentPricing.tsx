'use client'

import { Braces, Code2, Monitor, Wrench } from 'lucide-react'
import { RevealOnScroll, StaggerOnScroll } from '@/lib/animations'
import { EyebrowLabel } from '@/components/ui/EyebrowLabel'
import { PricingCard, type PricingCardPlan } from '@/components/sections/pricing/PricingCard'

const plans = [
    {
        name: 'Business Site',
        pages: '3-5 pages starting',
        price: '$1,299',
        icon: Monitor,
        buttonHref: 'https://buy.stripe.com/3cI3cv2so1MQ7y6gMPawo0o',
        features: [
            '3-5 fully designed pages',
            'Mobile-friendly, SEO-ready design',
            'Custom brand styling',
            'Basic CMS setup',
            'Contact forms and map integration',
            'Basic security setup',
            'One-time project',
        ],
    },
    {
        name: 'Premium Site',
        pages: '5-10 pages starting',
        price: '$1,949.99',
        icon: Wrench,
        featured: true,
        buttonHref: 'https://buy.stripe.com/9B6bJ1eb6fDG19I8gjawo0p',
        features: [
            '5-10 responsive pages',
            'Smart content recommendations',
            'SEO and performance optimization',
            'Priority support',
            'Custom UI/UX design',
        ],
    },
    {
        name: 'Enterprise',
        pages: '10-20 pages starting',
        price: '$3,785',
        icon: Code2,
        buttonHref: 'https://buy.stripe.com/eVqbJ18QM8be7y6547awo0y',
        features: [
            '10-20 responsive pages',
            'Chatbot and automation features',
            'Smart content recommendations',
            'CRM or API integrations',
            'SEO and performance optimization',
            'Priority support',
            'Custom UI/UX design',
        ],
    },
    {
        name: 'Custom-Coded Website',
        pages: 'Built around your requirements',
        price: 'Let’s talk',
        icon: Braces,
        buttonHref: 'tel:+17866001595',
        buttonLabel: 'Call (786) 600-1595',
        features: [
            'Fully custom architecture',
            'E-commerce or SaaS development',
            'CRM, API, and payment integrations',
            'Advanced backend setup',
            'Dedicated project manager',
            'Scalable, future-ready codebase',
        ],
    },
]

export type ServicePricingPlan = Omit<PricingCardPlan, 'subtitle'> & { pages: string }

export function ServicePricingCard({ plan }: { plan: ServicePricingPlan }) {
    const { pages, ...sharedPlan } = plan
    return <PricingCard plan={{ ...sharedPlan, subtitle: pages, buttonLabel: plan.buttonLabel ?? (plan.price === 'Let’s talk' ? 'Talk to our team' : 'Subscribe Now') }} />
}

export function WebDevelopmentPricing() {
    return (
        <section id="web-development-pricing" className="web-pricing-section" style={{ padding: 'clamp(4rem, 9vw, 7rem) clamp(1rem, 2vw, 2rem)', background: 'var(--surface)', scrollMarginTop: '60px' }}>
            <div style={{ maxWidth: '1600px', margin: '0 auto' }}>
                <RevealOnScroll style={{ marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
                    <EyebrowLabel>Web development pricing</EyebrowLabel>
                    <h2 style={{ fontFamily: "'Fraunces', serif", fontWeight: 300, fontSize: 'clamp(2.25rem, 5vw, 4.25rem)', lineHeight: 1, margin: 0, color: 'var(--fg)' }}>
                        Choose your <em style={{ color: '#CE307D', fontStyle: 'italic' }}>starting point.</em>
                    </h2>
                    <p style={{ color: 'rgba(var(--fg-rgb),0.7)', fontSize: '0.95rem', lineHeight: 1.7, margin: '1.25rem 0 0', maxWidth: '58ch' }}>
                        Clear starting packages for different stages of growth. We’ll confirm the final scope and quote around your needs.
                    </p>
                </RevealOnScroll>

                <StaggerOnScroll className="web-pricing-grid" style={{ display: 'grid', gap: '1px', alignItems: 'stretch', background: 'rgba(var(--line-rgb), 0.08)', border: '1px solid rgba(var(--line-rgb), 0.08)', overflow: 'hidden' }}>
                    {plans.map((plan) => <ServicePricingCard key={plan.name} plan={plan} />)}
                </StaggerOnScroll>
            </div>
        </section>
    )
}