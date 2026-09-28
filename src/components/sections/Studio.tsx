import { RevealOnScroll } from '@/lib/animations'

const STUDIO_STATS = [
  { v: '2018', l: 'Founded' },
  { v: '280+', l: 'Projects' },
  { v: '40+', l: 'Global clients' },
]

export function Studio() {
  return (
    <section style={{ padding: 'clamp(3.5rem, 9vw, 8rem) clamp(1.25rem, 6vw, 2.5rem)', background: '#0a0a0a', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '50%', right: '-5%', transform: 'translateY(-50%)', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(206,48,125,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <RevealOnScroll>
          <span style={{ fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#CE307D', display: 'block', marginBottom: '1.5rem' }}>About the Company</span>
        </RevealOnScroll>
        <div style={{ display: 'grid', gap: '6rem', alignItems: 'start' }} className="grid grid-cols-1 lg:grid-cols-2">
          <RevealOnScroll>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontWeight: 300, fontSize: 'clamp(2rem, 4vw, 3.5rem)', letterSpacing: '-0.03em', margin: 0, lineHeight: 1.1, color: '#f0ede8' }}>
              Strategy-led.<br /><em style={{ color: '#CE307D', fontStyle: 'italic' }}>Results</em> obsessed.
            </h2>
          </RevealOnScroll>
          <RevealOnScroll delay={0.15}>
            <p style={{ color: '#ffffff', fontSize: '0.95rem', lineHeight: 1.8, margin: '0 0 1rem' }}>Founded in 2018, Digi Era Pro started as a small team with one goal: help growing businesses build a real digital presence. Since then we&apos;ve become a full-service digital marketing agency trusted by clients across the US, and — since our 2025 expansion — Malaysia too.</p>
            <p style={{ color: '#ffffff', fontSize: '0.95rem', lineHeight: 1.8, margin: '0 0 3rem' }}>We stay lean and hands-on, so no account gets lost in a queue. Every client works directly with strategists, designers, and marketers who treat your growth like their own.</p>
            <div style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap' }}>
              {STUDIO_STATS.map(s => (
                <div key={s.l}>
                  <div style={{ fontFamily: "'Fraunces', serif", fontSize: '2rem', fontWeight: 300, color: '#CE307D', lineHeight: 1 }}>{s.v}</div>
                  <div style={{ fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#ffffff', marginTop: '0.4rem' }}>{s.l}</div>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  )
}
