'use client'

import { motion } from 'framer-motion'
import { RevealOnScroll } from '@/lib/animations'

export function AboutCTA() {
  return (
    <section style={{ padding: 'clamp(2.25rem, 4.5vw, 3.25rem) clamp(1.25rem, 6vw, 2.5rem)', background: 'var(--bg)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '700px', height: '700px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(206,48,125,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ maxWidth: '700px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <RevealOnScroll>
          <h2 style={{ fontFamily: "var(--font-fraunces), serif", fontWeight: 300, fontSize: 'clamp(2.25rem, 5vw, 4rem)', letterSpacing: '-0.03em', margin: '0 0 1.25rem', lineHeight: 1.1, color: 'var(--fg)' }}>
            Let&apos;s talk about your <em style={{ color: '#CE307D', fontStyle: 'italic' }}>growth plan.</em>
          </h2>
          <p style={{ color: 'var(--fg-strong)', fontSize: '0.95rem', lineHeight: 1.8, margin: '0 auto 2.5rem', maxWidth: '48ch' }}>
            Tell us about your business and what you want more of. We&apos;ll review your current online presence and recommend where to start — no obligation.
          </p>
        </RevealOnScroll>
        <RevealOnScroll delay={0.1}>
          <motion.a href="/contact#contact-form"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', color: '#fff', background: '#CE307D', textDecoration: 'none', fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '1rem 2.25rem', fontWeight: 500 }}
            whileHover={{ scale: 1.04, boxShadow: '0 0 24px rgba(206,48,125,0.5)' }}
            whileTap={{ scale: 0.97 }}
          >
            Get in touch <span>→</span>
          </motion.a>
        </RevealOnScroll>
      </div>
    </section>
  )
}
