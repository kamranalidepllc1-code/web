'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'
import { fadeUp } from '@/lib/animations'

export type PricingCardPlan = {
    name: string
    price: string
    icon: LucideIcon
    featured?: boolean
    category?: string
    subtitle?: string
    originalPrice?: string
    pricePeriod?: string
    buttonLabel?: string
    buttonHref?: string
    ribbon?: string
    features: string[]
    footer?: {
        title: string
        description: string
        termsHref: string
        linkLabel?: string
    }
}

export function PricingCard({ plan }: { plan: PricingCardPlan }) {
    const [hovered, setHovered] = useState(Boolean(plan.featured))
    const Icon = plan.icon

    return (
        <motion.article
            variants={fadeUp}
            onHoverStart={() => setHovered(true)}
            onHoverEnd={() => setHovered(Boolean(plan.featured))}
            whileHover={{ background: '#2a2d33' }}
            style={{ position: 'relative', display: 'flex', flexDirection: 'column', height: '100%', minHeight: '44.5rem', minWidth: 0, padding: 'clamp(1.75rem, 4vw, 2.75rem) clamp(1.25rem, 3vw, 2.25rem)', background: plan.featured ? 'linear-gradient(155deg, #2f2229 0%, #2a2d33 58%)' : '#222429', border: '1px solid rgba(240,237,232,0.14)', overflow: 'hidden' }}
        >
            <motion.div animate={{ opacity: hovered ? 1 : 0 }} style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 15%, rgba(206,48,125,0.14) 0%, transparent 65%)', pointerEvents: 'none' }} />
            <motion.div animate={{ scaleX: hovered ? 1 : 0 }} initial={{ scaleX: plan.featured ? 1 : 0 }} transition={{ duration: 0.4 }} style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, #CE307D, #ff6eb4)', transformOrigin: 'left' }} />
            {plan.ribbon && <span style={{ position: 'absolute', zIndex: 2, top: 0, right: 0, maxWidth: '75%', padding: '0.45rem 0.65rem', background: '#CE307D', color: '#fff', fontSize: '0.55rem', fontWeight: 600, letterSpacing: '0.05em', lineHeight: 1.35, textAlign: 'center', textTransform: 'uppercase' }}>{plan.ribbon}</span>}

            <div style={{ position: 'relative', zIndex: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '1.75rem' }}>
                <motion.span animate={{ color: hovered ? '#CE307D' : 'rgba(240,237,232,0.2)', scale: hovered ? 1.15 : 1 }} style={{ display: 'inline-block' }}>
                    <Icon size={30} strokeWidth={1.3} aria-hidden="true" />
                </motion.span>
                <span style={{ fontSize: '0.68rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: hovered ? '#f0ede8' : 'rgba(240,237,232,0.3)', transition: 'color 0.3s' }}>{plan.category ?? 'Pricing package'}</span>
            </div>

            <div style={{ position: 'relative', zIndex: 1 }}>
                <h3 style={{ fontFamily: "'Fraunces', serif", fontWeight: 300, fontSize: 'clamp(1.6rem, 2.6vw, 2rem)', letterSpacing: '-0.02em', margin: plan.subtitle ? '0 0 0.45rem' : '0 0 1.25rem', color: '#f0ede8' }}>{plan.name}</h3>
                {plan.subtitle && <p style={{ color: 'rgba(240,237,232,0.55)', fontSize: '0.78rem', lineHeight: 1.5, margin: 0 }}>{plan.subtitle}</p>}
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', paddingBottom: '1.5rem', marginTop: plan.subtitle ? '0.75rem' : 0, borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                    {plan.originalPrice && <span style={{ color: 'rgba(240,237,232,0.45)', fontFamily: "'Fraunces', serif", fontSize: '1rem', textDecoration: 'line-through', textDecorationColor: '#CE307D' }}>{plan.originalPrice}</span>}
                    <motion.span animate={{ color: hovered ? '#CE307D' : '#f0ede8' }} style={{ fontFamily: "'Fraunces', serif", fontWeight: 300, fontSize: 'clamp(2.5rem, 4.5vw, 3.25rem)', letterSpacing: '-0.035em', lineHeight: 1 }}>
                        {plan.price}
                    </motion.span>
                    {plan.pricePeriod !== undefined ? (
                        plan.pricePeriod && <span style={{ fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(240,237,232,0.55)' }}>{plan.pricePeriod}</span>
                    ) : plan.price !== 'Let’s talk' && (
                        <span style={{ fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(240,237,232,0.55)' }}>Starting price</span>
                    )}
                </div>
            </div>

            <ul style={{ position: 'relative', zIndex: 1, listStyle: 'none', margin: 0, padding: '0.75rem 0 0', flex: 1 }}>
                {plan.features.map(feature => (
                    <li key={feature} style={{ display: 'flex', gap: '0.75rem', alignItems: 'baseline', fontSize: '0.86rem', lineHeight: 1.6, color: '#fff', padding: '0.65rem 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <span style={{ color: '#CE307D', fontSize: '0.6rem', flexShrink: 0 }}>✦</span>{feature}
                    </li>
                ))}
            </ul>

            {plan.footer && (
                <div style={{ position: 'relative', zIndex: 1, paddingTop: '1.75rem' }}>
                    <p style={{ fontFamily: "'Fraunces', serif", fontWeight: 300, fontSize: '1.1rem', margin: '0 0 0.4rem', color: '#f0ede8' }}>{plan.footer.title}</p>
                    <p style={{ fontSize: '0.78rem', lineHeight: 1.7, margin: '0 0 0.75rem', color: 'rgba(240,237,232,0.6)' }}>{plan.footer.description}</p>
                    <a href={plan.footer.termsHref} style={{ fontSize: '0.72rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#CE307D', textDecoration: 'underline', textUnderlineOffset: '3px' }}>{plan.footer.linkLabel ?? 'Terms & Conditions'}</a>
                </div>
            )}

            <motion.a
                href={plan.buttonHref ?? '/contact#contact-form'}
                animate={{ background: hovered ? '#CE307D' : 'rgba(206,48,125,0)', borderColor: hovered ? '#CE307D' : 'rgba(240,237,232,0.25)' }}
                whileHover={{ y: -4, boxShadow: '0 16px 40px rgba(206,48,125,0.35)' }}
                whileTap={{ scale: 0.97 }}
                style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginTop: '1.5rem', border: '1px solid', color: '#fff', textDecoration: 'none', padding: '1rem', fontSize: '0.8rem', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', borderRadius: '10px' }}
            >
                {plan.buttonLabel ?? 'Subscribe Now'} <span aria-hidden="true">→</span>
            </motion.a>

            <motion.div animate={{ width: hovered ? '100%' : '0%' }} transition={{ duration: 0.5 }} style={{ position: 'absolute', left: 0, bottom: 0, height: '1px', background: 'linear-gradient(90deg, #CE307D, transparent)' }} />
        </motion.article>
    )
}