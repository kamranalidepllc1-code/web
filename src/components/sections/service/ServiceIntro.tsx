'use client'

import { motion } from 'framer-motion'
import { RevealOnScroll, StaggerOnScroll, fadeUp } from '@/lib/animations'
import { EyebrowLabel } from '@/components/ui/EyebrowLabel'
import type { ServicePageContent } from '@/types/site'

export function ServiceIntro({ intro }: { intro: ServicePageContent['intro'] }) {
  return (
    <section id="overview" style={{ padding: 'clamp(2rem, 4vw, 3rem) clamp(1.25rem, 6vw, 2.5rem)', background: '#272a30', scrollMarginTop: '4rem' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'grid', gap: 'clamp(2.5rem, 6vw, 5rem)' }} className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <RevealOnScroll>
          <EyebrowLabel>Overview</EyebrowLabel>
          <h2 style={{ fontFamily: "var(--font-fraunces), serif", fontWeight: 300, fontSize: 'clamp(2.25rem, 5vw, 4.25rem)', letterSpacing: '-0.03em', lineHeight: 1.02, margin: 0, color: '#f0ede8' }}>
            {intro.heading} <em style={{ color: '#CE307D', fontStyle: 'italic' }}>{intro.headingAccent}</em>
          </h2>
        </RevealOnScroll>

        <div>
          <RevealOnScroll delay={0.1}>
            <p style={{ fontFamily: "var(--font-fraunces), serif", fontWeight: 300, fontSize: 'clamp(1.25rem, 2.2vw, 1.6rem)', lineHeight: 1.45, letterSpacing: '-0.01em', color: '#f0ede8', margin: '0 0 1.75rem' }}>
              {intro.lead}
            </p>
            {intro.body.map(p => (
              <p key={p} style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem', lineHeight: 1.85, margin: '0 0 1.1rem', maxWidth: '62ch' }}>{p}</p>
            ))}
          </RevealOnScroll>

          <StaggerOnScroll className="grid grid-cols-1 sm:grid-cols-2" style={{ display: 'grid', columnGap: '2rem', marginTop: '2rem' }}>
            {intro.highlights.map(h => (
              <motion.div key={h} variants={fadeUp}
                style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', padding: '1rem 0', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#CE307D', flexShrink: 0 }} />
                <span style={{ fontSize: '0.9rem', color: '#f0ede8' }}>{h}</span>
              </motion.div>
            ))}
          </StaggerOnScroll>
        </div>
      </div>
    </section>
  )
}
