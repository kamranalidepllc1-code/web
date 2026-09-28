'use client'

import { motion } from 'framer-motion'
import { RevealOnScroll, StaggerOnScroll } from '@/lib/animations'
import { JournalCard } from '@/components/ui/JournalCard'
import { JOURNAL } from '@/data/site'

export function Journal() {
  return (
    <section id="journal" style={{ padding: 'clamp(3.5rem, 9vw, 8rem) clamp(1.25rem, 6vw, 2.5rem)', background: '#0a0a0a' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <RevealOnScroll style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <span style={{ fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#CE307D' }}>Thinking</span>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontWeight: 300, fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', letterSpacing: '-0.03em', margin: '1rem 0 0', lineHeight: 1, color: '#f0ede8' }}>Journal</h2>
          </div>
          <motion.a href="#" style={{ fontSize: '0.78rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#ffffff', textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.25rem' }}
            whileHover={{ color: '#CE307D', borderColor: '#CE307D' }}>All articles →</motion.a>
        </RevealOnScroll>
        <StaggerOnScroll style={{ display: 'grid', gap: '1px', background: 'rgba(255,255,255,0.06)' }} className="grid grid-cols-1 md:grid-cols-4">
          {JOURNAL.map((post, i) => (
            <JournalCard key={post.title} post={post} featured={i === 0} />
          ))}
        </StaggerOnScroll>
      </div>
    </section>
  )
}
