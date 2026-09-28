'use client'

import { motion } from 'framer-motion'
import { RevealOnScroll, StaggerOnScroll } from '@/lib/animations'
import { ValueCard } from '@/components/ui/ValueCard'
import { VALUES } from '@/data/site'

const PRINCIPLE_POINTS = [
  'Strategy before execution — always.',
  'Creative work backed by market research.',
  'Transparent reporting & measurable ROI.',
  'Long-term partnerships, not one-off projects.',
]

const PRINCIPLE_STATS = [
  { v: '4', l: 'Core values' },
  { v: '14+', l: 'Years in market' },
  { v: '12+', l: 'Industries served' },
]

export function Values() {
  return (
    <section style={{ padding: 'clamp(3.5rem, 9vw, 8rem) clamp(1.25rem, 6vw, 2.5rem)', background: '#0a0a0a', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', bottom: 0, right: 0, width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(206,48,125,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gap: '6rem', alignItems: 'start' }} className="grid grid-cols-1 lg:grid-cols-2">
          <RevealOnScroll>
            <span style={{ fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#CE307D' }}>Our principles</span>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontWeight: 300, fontSize: 'clamp(2rem, 4vw, 3.5rem)', letterSpacing: '-0.03em', margin: '1rem 0 2rem', lineHeight: 1.05, color: '#f0ede8' }}>
              We believe marketing is an <em style={{ color: '#CE307D', fontStyle: 'italic' }}>engine.</em>
            </h2>
            <p style={{ color: '#ffffff', fontSize: '0.95rem', lineHeight: 1.8, margin: '0 0 1.5rem' }}>
              Every project is a position. We advocate for clarity over complexity, durability over novelty, and specificity over safe generalism.
            </p>
            <p style={{ color: '#ffffff', fontSize: '0.9rem', lineHeight: 1.8, margin: '0 0 2rem' }}>
              We don&apos;t chase trends — we build strategies that outlast them. From brand identity to performance campaigns, every decision we make is rooted in data, driven by creativity, and measured by real outcomes.
            </p>
            <ul style={{ listStyle: 'none', margin: '0 0 2.5rem', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {PRINCIPLE_POINTS.map(point => (
                <li key={point} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.88rem', color: '#ffffff' }}>
                  <span style={{ color: '#CE307D', marginTop: '0.15rem', flexShrink: 0 }}>→</span>
                  {point}
                </li>
              ))}
            </ul>
            <div style={{ display: 'flex', gap: '3rem', marginBottom: '2.5rem' }}>
              {PRINCIPLE_STATS.map(s => (
                <div key={s.l}>
                  <div style={{ fontFamily: "'Fraunces', serif", fontSize: '2.5rem', fontWeight: 300, color: '#CE307D', lineHeight: 1 }}>{s.v}</div>
                  <div style={{ fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#ffffff', marginTop: '0.4rem' }}>{s.l}</div>
                </div>
              ))}
            </div>
            <motion.a href="#contact"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.78rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#CE307D', textDecoration: 'none', borderBottom: '1px solid rgba(206,48,125,0.4)', paddingBottom: '0.3rem' }}
              whileHover={{ gap: '1rem', borderColor: '#CE307D' }}
            >
              Work with us <span>→</span>
            </motion.a>
          </RevealOnScroll>
          <StaggerOnScroll style={{ display: 'grid', gap: '1px', background: 'transparent' }} className="grid grid-cols-1 sm:grid-cols-2">
            {VALUES.map((v, i) => (
              <ValueCard key={v.word} value={v} index={i} />
            ))}
          </StaggerOnScroll>
        </div>
      </div>
    </section>
  )
}
