'use client'

import { motion } from 'framer-motion'
import { RevealOnScroll, StaggerOnScroll, fadeUp } from '@/lib/animations'
import { EyebrowLabel } from '@/components/ui/EyebrowLabel'
import type { ServicePageContent } from '@/types/site'

export function ServiceStack({ stack }: { stack: NonNullable<ServicePageContent['stack']> }) {
  return (
    <section style={{ padding: 'clamp(3.5rem, 8vw, 6rem) clamp(1.25rem, 6vw, 2.5rem)', background: '#0a0a0a', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'grid', gap: 'clamp(2rem, 5vw, 4rem)', alignItems: 'center' }} className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
        <RevealOnScroll>
          <EyebrowLabel>Technologies</EyebrowLabel>
          <h2 style={{ fontFamily: "'Fraunces', serif", fontWeight: 300, fontSize: 'clamp(1.9rem, 3.5vw, 2.9rem)', letterSpacing: '-0.03em', lineHeight: 1.05, margin: '0 0 1rem', color: '#f0ede8' }}>{stack.heading}</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', lineHeight: 1.75, margin: 0, maxWidth: '44ch' }}>{stack.note}</p>
        </RevealOnScroll>
        <StaggerOnScroll style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
          {stack.items.map(item => (
            <motion.span key={item} variants={fadeUp}
              whileHover={{ borderColor: '#CE307D', color: '#CE307D', y: -3 }}
              style={{ display: 'inline-flex', alignItems: 'center', border: '1px solid rgba(240,237,232,0.18)', borderRadius: '999px', padding: '0.85rem 1.5rem', fontFamily: "'Fraunces', serif", fontWeight: 300, fontSize: 'clamp(1rem, 1.6vw, 1.2rem)', color: '#f0ede8' }}>
              {item}
            </motion.span>
          ))}
        </StaggerOnScroll>
      </div>
    </section>
  )
}
