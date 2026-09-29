import { RevealOnScroll, StaggerOnScroll } from '@/lib/animations'
import { HistoryCard } from '@/components/ui/HistoryCard'
import { HISTORY } from '@/data/site'

export function History() {
  return (
    <section id="work" style={{ padding: 'clamp(3.5rem, 9vw, 8rem) clamp(1.25rem, 6vw, 2.5rem)', background: '#272a30' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <RevealOnScroll style={{ marginBottom: '5rem' }}>
          <span style={{ fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#CE307D' }}>Our story</span>
          <h2 style={{ fontFamily: "'Fraunces', serif", fontWeight: 300, fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', letterSpacing: '-0.03em', margin: '1rem 0 0', lineHeight: 1, color: '#f0ede8' }}>Company History</h2>
        </RevealOnScroll>
        <StaggerOnScroll style={{ display: 'grid', gap: '1px', background: 'rgba(255,255,255,0.06)' }} className="grid grid-cols-1 md:grid-cols-2">
          {HISTORY.map((item, i) => (
            <HistoryCard key={item.year} item={item} index={i} />
          ))}
        </StaggerOnScroll>
      </div>
    </section>
  )
}
