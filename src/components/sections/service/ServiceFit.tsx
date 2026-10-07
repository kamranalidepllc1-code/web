'use client'

import { motion } from 'framer-motion'
import { RevealOnScroll, StaggerOnScroll, fadeUp } from '@/lib/animations'
import { EyebrowLabel } from '@/components/ui/EyebrowLabel'
import type { ServicePageContent } from '@/types/site'

type Item = { title: string; desc: string }

function FitColumn({ eyebrow, heading, accent, items }: { eyebrow: string; heading: string; accent: string; items: Item[] }) {
  return (
    <div style={{ minWidth: 0 }}>
      <RevealOnScroll>
        <EyebrowLabel>{eyebrow}</EyebrowLabel>
        <h2 style={{ fontFamily: "var(--font-fraunces), serif", fontWeight: 300, fontSize: 'clamp(2rem, 4vw, 3.25rem)', letterSpacing: '-0.03em', lineHeight: 1.05, margin: '0 0 clamp(1.25rem, 3vw, 1.75rem)', color: 'var(--fg)' }}>
          {heading} <em style={{ color: '#CE307D', fontStyle: 'italic' }}>{accent}</em>
        </h2>
      </RevealOnScroll>
      <StaggerOnScroll>
        {items.map(item => (
          <motion.div key={item.title} variants={fadeUp}
            style={{ display: 'flex', gap: '0.95rem', padding: '1.15rem 0', borderTop: '1px solid rgba(var(--line-rgb), 0.08)' }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#CE307D', flexShrink: 0, marginTop: '0.6rem' }} />
            <div>
              <h3 style={{ fontFamily: "var(--font-fraunces), serif", fontWeight: 300, fontSize: 'clamp(1.15rem, 1.8vw, 1.35rem)', letterSpacing: '-0.015em', lineHeight: 1.25, margin: '0 0 0.4rem', color: 'var(--fg)' }}>{item.title}</h3>
              <p style={{ color: 'rgba(var(--fg-rgb),0.75)', fontSize: '0.9rem', lineHeight: 1.75, margin: 0, maxWidth: '58ch' }}>{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </StaggerOnScroll>
    </div>
  )
}

/** "Who this service is for" alongside "Why Digi Era Pro". */
export function ServiceFit({ shortName, fit }: { shortName: string; fit: ServicePageContent['fit'] }) {
  return (
    <section style={{ padding: 'clamp(2rem, 4vw, 3rem) clamp(1.25rem, 6vw, 2.5rem)', background: 'var(--bg)' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'grid', gap: 'clamp(2.5rem, 6vw, 5rem)', alignItems: 'start' }} className="grid grid-cols-1 lg:grid-cols-2">
        <FitColumn eyebrow="Who it’s for" heading={`Who ${shortName} is`} accent="built for." items={fit.audience} />
        <FitColumn eyebrow="Why Digi Era Pro" heading="Why businesses" accent="choose us." items={fit.why} />
      </div>
    </section>
  )
}
