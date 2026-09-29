'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { RevealOnScroll, StaggerOnScroll, fadeUp } from '@/lib/animations'
import { EyebrowLabel } from '@/components/ui/EyebrowLabel'
import { GBP_PLANS, GBP_TERMS_HREF } from '@/data/specialOffer'

function PlanCard({ plan }: { plan: (typeof GBP_PLANS)[number] }) {
  const [hovered, setHovered] = useState(plan.featured)

  return (
    <motion.div
      variants={fadeUp}
      onHoverStart={() => setHovered(true)} onHoverEnd={() => setHovered(plan.featured)}
      whileHover={{ background: '#2a2d33' }}
      style={{ background: '#222429', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', padding: 'clamp(1.75rem, 4vw, 2.75rem) clamp(1.25rem, 3vw, 2.25rem)' }}
    >
      <motion.div animate={{ opacity: hovered ? 1 : 0 }} style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 15%, rgba(206,48,125,0.14) 0%, transparent 65%)', pointerEvents: 'none' }} />
      <motion.div animate={{ scaleX: hovered ? 1 : 0 }} initial={{ scaleX: plan.featured ? 1 : 0 }} transition={{ duration: 0.4 }} style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, #CE307D, #ff6eb4)', transformOrigin: 'left' }} />

      <div style={{ position: 'relative', zIndex: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.75rem' }}>
        <motion.span animate={{ color: hovered ? '#CE307D' : 'rgba(240,237,232,0.2)', scale: hovered ? 1.15 : 1 }} style={{ display: 'inline-block' }}>
          <plan.icon size={30} strokeWidth={1.3} aria-hidden="true" />
        </motion.span>
        <span style={{ fontSize: '0.68rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: hovered ? '#f0ede8' : 'rgba(240,237,232,0.3)', transition: 'color 0.3s' }}>GBP Package</span>
      </div>

      <div style={{ position: 'relative', zIndex: 1 }}>
        <h3 style={{ fontFamily: "'Fraunces', serif", fontWeight: 300, fontSize: 'clamp(1.6rem, 2.6vw, 2rem)', letterSpacing: '-0.02em', margin: '0 0 1.25rem', color: '#f0ede8' }}>{plan.name}</h3>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.35rem', paddingBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <motion.span animate={{ color: hovered ? '#CE307D' : '#f0ede8' }} style={{ fontFamily: "'Fraunces', serif", fontWeight: 300, fontSize: 'clamp(2.5rem, 4.5vw, 3.25rem)', letterSpacing: '-0.035em', lineHeight: 1 }}>
            {plan.price}
          </motion.span>
          <span style={{ fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(240,237,232,0.55)' }}>/ Month</span>
        </div>
      </div>

      <ul style={{ position: 'relative', zIndex: 1, listStyle: 'none', margin: 0, padding: '0.75rem 0 0', flex: 1 }}>
        {plan.features.map(f => (
          <li key={f} style={{ display: 'flex', gap: '0.75rem', alignItems: 'baseline', fontSize: '0.86rem', lineHeight: 1.6, color: '#ffffff', padding: '0.65rem 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
            <span style={{ color: '#CE307D', fontSize: '0.6rem', flexShrink: 0 }}>✦</span>
            {f}
          </li>
        ))}
      </ul>

      <div style={{ position: 'relative', zIndex: 1, paddingTop: '1.75rem' }}>
        <p style={{ fontFamily: "'Fraunces', serif", fontWeight: 300, fontSize: '1.1rem', margin: '0 0 0.4rem', color: '#f0ede8' }}>Month-to-month flexibility</p>
        <p style={{ fontSize: '0.78rem', lineHeight: 1.7, margin: '0 0 0.75rem', color: 'rgba(240,237,232,0.6)' }}>
          No long-term contracts. Cancel anytime with a 30-day notice and zero fees.
        </p>
        <a href={GBP_TERMS_HREF} style={{ fontSize: '0.72rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#CE307D', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Terms &amp; Conditions</a>

        <motion.a
          href="/contact#contact-form"
          animate={{ background: hovered ? '#CE307D' : 'rgba(206,48,125,0)', borderColor: hovered ? '#CE307D' : 'rgba(240,237,232,0.25)' }}
          whileHover={{ y: -4, boxShadow: '0 16px 40px rgba(206,48,125,0.35)' }}
          whileTap={{ scale: 0.97 }}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginTop: '1.5rem', border: '1px solid', color: '#fff', textDecoration: 'none', padding: '1rem', fontSize: '0.8rem', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', borderRadius: '10px' }}
        >
          Subscribe now <span>→</span>
        </motion.a>
      </div>

      <motion.div animate={{ width: hovered ? '100%' : '0%' }} transition={{ duration: 0.5 }} style={{ position: 'absolute', left: 0, bottom: 0, height: '1px', background: 'linear-gradient(90deg, #CE307D, transparent)' }} />
    </motion.div>
  )
}

export function OfferPricing() {
  return (
    <section id="pricing" style={{ padding: 'clamp(3.5rem, 9vw, 7rem) clamp(1.25rem, 6vw, 2.5rem)', background: '#272a30', scrollMarginTop: '60px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <RevealOnScroll style={{ marginBottom: 'clamp(2.5rem, 6vw, 4rem)' }}>
          <EyebrowLabel>GBP Pricing Packages</EyebrowLabel>
          <h2 style={{ fontFamily: "'Fraunces', serif", fontWeight: 300, fontSize: 'clamp(2.25rem, 5vw, 4.25rem)', letterSpacing: '-0.03em', lineHeight: 1, margin: 0, color: '#f0ede8' }}>
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
