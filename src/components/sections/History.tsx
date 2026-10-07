import { RevealOnScroll, StaggerOnScroll } from '@/lib/animations'
import { HistoryCard } from '@/components/ui/HistoryCard'
import { HISTORY } from '@/data/site'

export function History() {
  return (
    <section style={{ padding: 'clamp(2rem, 4vw, 3rem) clamp(1.25rem, 6vw, 2.5rem)', background: 'var(--surface)' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <RevealOnScroll style={{ marginBottom: '1.75rem' }}>
          <span style={{ fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#CE307D' }}>Our story</span>
          <h2 style={{ fontFamily: "var(--font-fraunces), serif", fontWeight: 300, fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', letterSpacing: '-0.03em', margin: '1rem 0 0', lineHeight: 1, color: 'var(--fg)' }}>From startup to <em style={{ color: '#CE307D', fontStyle: 'italic' }}>full-service agency.</em></h2>
        </RevealOnScroll>
        <StaggerOnScroll style={{ display: 'grid', gap: '1px', background: 'rgba(var(--line-rgb), 0.06)' }} className="grid grid-cols-1 md:grid-cols-2">
          {HISTORY.map((item, i) => (
            <HistoryCard key={item.year} item={item} index={i} />
          ))}
        </StaggerOnScroll>
      </div>
    </section>
  )
}
