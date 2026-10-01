'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { RevealOnScroll, StaggerOnScroll, fadeUp } from '@/lib/animations'
import { VALUES } from '@/data/site'

const TITLES: Record<string, string> = {
  Conviction: 'We argue for the work.',
  Rigour: 'Evidence over guesswork.',
  Economy: 'Nothing extraneous.',
  Authorship: 'We own the outcome.',
}

export function AboutValues() {
  const [hoveredValue, setHoveredValue] = useState<string | null>(null)

  return (
    <section style={{ padding: 'clamp(2rem, 4vw, 3rem) clamp(1.25rem, 6vw, 2.5rem)', background: '#222429' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <RevealOnScroll style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
          <span style={{ fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#CE307D' }}>What drives us</span>
          <h2 style={{ fontFamily: "var(--font-fraunces), serif", fontWeight: 300, fontSize: 'clamp(2.25rem, 5vw, 4rem)', letterSpacing: '-0.03em', margin: '1rem 0 0', lineHeight: 1, color: '#f0ede8' }}>
            Principles, not just <em style={{ color: '#CE307D', fontStyle: 'italic' }}>slogans.</em>
          </h2>
        </RevealOnScroll>
        <StaggerOnScroll style={{ display: 'grid', gap: '1.25rem' }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((v, i) => {
            const highlighted = i === 0
            return (
              <motion.div
                key={v.word}
                onHoverStart={() => setHoveredValue(v.word)}
                onHoverEnd={() => setHoveredValue(null)}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  background: highlighted ? '#CE307D' : '#f5f5f5',
                  color: highlighted || hoveredValue === v.word ? '#fff' : '#1a1a1a',
                  borderRadius: '999px',
                  minHeight: 'clamp(280px, 75vw, 360px)',
                  padding: 'clamp(1.5rem, 5vw, 2.75rem) clamp(1.25rem, 3vw, 1.75rem)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  gap: '1.5rem',
                }}
              >
                {!highlighted && (
                  <motion.div
                    aria-hidden="true"
                    initial={{ height: 0 }}
                    animate={{ height: hoveredValue === v.word ? '100%' : 0 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    style={{ position: 'absolute', right: 0, bottom: 0, left: 0, zIndex: 0, background: '#CE307D' }}
                  />
                )}
                <v.icon style={{ position: 'relative', zIndex: 1 }} size={34} strokeWidth={1.4} color={highlighted || hoveredValue === v.word ? '#fff' : '#1a1a1a'} />
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <span style={{ fontSize: '0.68rem', letterSpacing: '0.14em', textTransform: 'uppercase', opacity: 0.75, display: 'block', marginBottom: '0.75rem' }}>{v.word}</span>
                  <p style={{ fontFamily: "var(--font-fraunces), serif", fontWeight: 400, fontSize: '1.15rem', lineHeight: 1.3, margin: 0 }}>{TITLES[v.word]}</p>
                  <p style={{ fontSize: '0.78rem', lineHeight: 1.65, opacity: 0.82, margin: '1rem auto 0', maxWidth: '24ch' }}>{v.desc}</p>
                </div>
                <span style={{ position: 'relative', zIndex: 1, marginTop: 'auto', fontSize: '1.1rem', opacity: 0.8 }}>↗</span>
              </motion.div>
            )
          })}
        </StaggerOnScroll>
      </div>
    </section>
  )
}
