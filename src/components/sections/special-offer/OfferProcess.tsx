'use client'

import { motion } from 'framer-motion'
import { RevealOnScroll, StaggerOnScroll, fadeUp } from '@/lib/animations'
import { EyebrowLabel } from '@/components/ui/EyebrowLabel'
import { OFFER_STEPS } from '@/data/specialOffer'

export function OfferProcess() {
  return (
    <section style={{ padding: 'clamp(3.5rem, 9vw, 8rem) clamp(1.25rem, 6vw, 2.5rem)', background: '#0f0f0f' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <RevealOnScroll style={{ marginBottom: 'clamp(3rem, 7vw, 5rem)' }}>
          <EyebrowLabel>How to claim it</EyebrowLabel>
          <h2 style={{ fontFamily: "'Fraunces', serif", fontWeight: 300, fontSize: 'clamp(2.25rem, 5vw, 4.25rem)', letterSpacing: '-0.03em', lineHeight: 1, margin: 0, color: '#f0ede8' }}>
            Four simple <em style={{ color: '#CE307D', fontStyle: 'italic' }}>steps.</em>
          </h2>
        </RevealOnScroll>

        <div style={{ position: 'relative' }}>
          <motion.div
            initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            style={{ position: 'absolute', top: '7px', left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, #CE307D, rgba(206,48,125,0.15))', transformOrigin: 'left' }}
            className="hidden lg:block"
          />
          <StaggerOnScroll className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ display: 'grid', gap: 'clamp(2.25rem, 4vw, 3rem)' }}>
            {OFFER_STEPS.map(step => (
              <motion.div key={step.num} variants={fadeUp} whileHover="hover" style={{ position: 'relative' }}>
                <motion.span
                  variants={{ hover: { scale: 1.3, background: '#CE307D' } }}
                  style={{ display: 'block', width: '15px', height: '15px', borderRadius: '50%', border: '1px solid #CE307D', background: '#0f0f0f', marginBottom: '2rem', position: 'relative' }}
                />
                <span style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(2.75rem, 5vw, 4rem)', fontWeight: 300, letterSpacing: '-0.04em', lineHeight: 1, color: 'rgba(240,237,232,0.14)', display: 'block', marginBottom: '1rem' }}>{step.num}</span>
                <motion.h3
                  variants={{ hover: { color: '#CE307D' } }}
                  style={{ fontFamily: "'Fraunces', serif", fontWeight: 300, fontSize: 'clamp(1.3rem, 2.4vw, 1.65rem)', letterSpacing: '-0.02em', margin: '0 0 0.75rem', color: '#f0ede8' }}
                >
                  {step.title}
                </motion.h3>
                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem', lineHeight: 1.75, margin: 0, maxWidth: '30ch' }}>{step.desc}</p>
              </motion.div>
            ))}
          </StaggerOnScroll>
        </div>
      </div>
    </section>
  )
}
