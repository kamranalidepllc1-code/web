'use client'

import { motion } from 'framer-motion'
import { RevealOnScroll, StaggerOnScroll, fadeUp } from '@/lib/animations'
import { EyebrowLabel } from '@/components/ui/EyebrowLabel'
import { OFFER_WHY } from '@/data/specialOffer'

export function OfferWhy() {
  return (
    <section style={{ padding: 'clamp(2.25rem, 4.5vw, 3.25rem) clamp(1.25rem, 6vw, 2.5rem)', background: 'var(--bg)' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <RevealOnScroll style={{ maxWidth: '1000px', marginBottom: 'clamp(1.5rem, 3vw, 2rem)' }}>
          <EyebrowLabel>Why this offer</EyebrowLabel>
          <p style={{ fontFamily: "var(--font-fraunces), serif", fontWeight: 300, fontSize: 'clamp(1.75rem, 3.8vw, 3.25rem)', letterSpacing: '-0.025em', lineHeight: 1.2, margin: 0, color: 'var(--fg)' }}>
            A strong online presence shouldn&apos;t take five vendors. This offer brings the essentials together — <em style={{ color: '#CE307D', fontStyle: 'italic' }}>so you can focus on running your business.</em>
          </p>
        </RevealOnScroll>

        <StaggerOnScroll className="grid grid-cols-1 md:grid-cols-3" style={{ display: 'grid', gap: 'clamp(2rem, 4vw, 3.5rem)' }}>
          {OFFER_WHY.map((item, i) => (
            <motion.div key={item.label} variants={fadeUp} style={{ borderTop: '1px solid rgba(var(--line-rgb), 0.12)', paddingTop: '1.75rem', position: 'relative' }}>
              <motion.span
                initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.3 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                style={{ position: 'absolute', top: '-1px', left: 0, width: '3rem', height: '1px', background: '#CE307D', transformOrigin: 'left' }}
              />
              <span style={{ fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#CE307D', display: 'block', marginBottom: '1rem' }}>{item.label}</span>
              <p style={{ color: 'var(--fg-strong)', fontSize: '0.95rem', lineHeight: 1.8, margin: 0, maxWidth: '38ch' }}>{item.text}</p>
            </motion.div>
          ))}
        </StaggerOnScroll>
      </div>
    </section>
  )
}
