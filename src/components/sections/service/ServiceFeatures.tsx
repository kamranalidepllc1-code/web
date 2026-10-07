'use client'

import { motion } from 'framer-motion'
import { RevealOnScroll, StaggerOnScroll, fadeUp } from '@/lib/animations'
import { EyebrowLabel } from '@/components/ui/EyebrowLabel'
import type { ServicePageContent } from '@/types/site'

export function ServiceFeatures({ features }: { features: ServicePageContent['features'] }) {
  return (
    <section style={{ padding: 'clamp(2rem, 4vw, 3rem) clamp(1.25rem, 6vw, 2.5rem)', background: 'var(--bg)', position: 'relative', overflow: 'hidden' }}>
      <div aria-hidden="true" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '800px', height: '800px', maxWidth: '100vw', borderRadius: '50%', background: 'radial-gradient(circle, rgba(206,48,125,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <RevealOnScroll style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: '1.5rem', marginBottom: 'clamp(1.5rem, 3vw, 2rem)' }}>
          <div>
            <EyebrowLabel>{features.eyebrow}</EyebrowLabel>
            <h2 style={{ fontFamily: "var(--font-fraunces), serif", fontWeight: 300, fontSize: 'clamp(2.25rem, 5vw, 4.25rem)', letterSpacing: '-0.03em', lineHeight: 1, margin: 0, color: 'var(--fg)' }}>
              {features.heading} <em style={{ color: '#CE307D', fontStyle: 'italic' }}>{features.headingAccent}</em>
            </h2>
          </div>
          {features.note && (
            <p style={{ color: 'rgba(var(--fg-rgb),0.65)', fontSize: '0.85rem', lineHeight: 1.7, margin: 0, maxWidth: '40ch' }}>{features.note}</p>
          )}
        </RevealOnScroll>

        <StaggerOnScroll className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" style={{ display: 'grid', columnGap: 'clamp(1.5rem, 4vw, 3.5rem)' }}>
          {features.items.map((item, i) => (
            <motion.div key={item.title} variants={fadeUp} whileHover="hover"
              style={{ position: 'relative', padding: 'clamp(1.5rem, 3vw, 2.25rem) 0', borderTop: '1px solid rgba(var(--line-rgb), 0.08)' }}>
              <motion.span
                variants={{ hidden: { scaleX: 0 }, show: { scaleX: 0 }, hover: { scaleX: 1 } }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                style={{ position: 'absolute', top: -1, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg, #CE307D, #ff6eb4)', transformOrigin: 'left' }}
              />
              <span style={{ fontFamily: "var(--font-fraunces), serif", fontSize: '0.75rem', letterSpacing: '0.14em', color: '#CE307D', display: 'block', marginBottom: '1.1rem' }}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <motion.h3 variants={{ hover: { x: 6 } }}
                style={{ fontFamily: "var(--font-fraunces), serif", fontWeight: 300, fontSize: 'clamp(1.35rem, 2.2vw, 1.7rem)', letterSpacing: '-0.02em', lineHeight: 1.15, margin: '0 0 0.75rem', color: 'var(--fg)' }}>
                {item.title}
              </motion.h3>
              <p style={{ color: 'rgba(var(--fg-rgb),0.75)', fontSize: '0.9rem', lineHeight: 1.75, margin: 0, maxWidth: '38ch' }}>{item.desc}</p>
            </motion.div>
          ))}
        </StaggerOnScroll>
      </div>
    </section>
  )
}
