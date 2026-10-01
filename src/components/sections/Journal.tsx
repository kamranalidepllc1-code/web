'use client'

import { motion } from 'framer-motion'
import { RevealOnScroll, StaggerOnScroll } from '@/lib/animations'
import { JournalCard, type JournalPost } from '@/components/ui/JournalCard'
import { JOURNAL } from '@/data/site'

/** Shows the latest published blogs; falls back to the static journal until any are published. */
export function Journal({ posts }: { posts?: JournalPost[] }) {
  const items: JournalPost[] = posts?.length ? posts : JOURNAL
  const [featured, ...rest] = items
  const side = rest.slice(0, 4)
  return (
    <section id="journal" style={{ padding: 'clamp(2rem, 4vw, 3rem) clamp(1.25rem, 6vw, 2.5rem)', background: '#222429' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <RevealOnScroll style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '1.75rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <span style={{ fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#CE307D' }}>Thinking</span>
            <h2 style={{ fontFamily: "var(--font-fraunces), serif", fontWeight: 300, fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', letterSpacing: '-0.03em', margin: '1rem 0 0', lineHeight: 1, color: '#f0ede8' }}>Journal</h2>
          </div>
          <motion.a href="/blog" style={{ fontSize: '0.78rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#ffffff', textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.25rem' }}
            whileHover={{ color: '#CE307D', borderColor: '#CE307D' }}>All articles →</motion.a>
        </RevealOnScroll>
        {/* Featured post on the left, the next four in a 2×2 grid on the right. */}
        <StaggerOnScroll
          style={{ display: 'grid', gap: '1px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.06)' }}
          className={`grid grid-cols-1 ${side.length ? 'lg:grid-cols-2' : ''}`}
        >
          {featured && <JournalCard post={featured} featured />}
          {side.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: '1px', background: 'rgba(255,255,255,0.06)' }}>
              {side.map(post => <JournalCard key={post.title} post={post} />)}
            </div>
          )}
        </StaggerOnScroll>
      </div>
    </section>
  )
}
