import { RevealOnScroll } from '@/lib/animations'
import { PartnersGrid } from '@/components/ui/PartnersGrid'
import { PARTNERS } from '@/data/site'

export function Partners() {
  return (
    <section style={{ padding: 'clamp(2rem, 4vw, 3rem) clamp(1.25rem, 6vw, 2.5rem)', background: '#222429', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '700px', height: '700px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(206,48,125,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <RevealOnScroll style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
          <h2 style={{ fontFamily: "var(--font-fraunces), serif", fontWeight: 300, fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.03em', color: '#f0ede8', margin: 0, lineHeight: 1 }}>
            Partners who <em style={{ color: '#CE307D', fontStyle: 'italic' }}>trust us.</em>
          </h2>
        </RevealOnScroll>
        <PartnersGrid partners={PARTNERS} />
      </div>
    </section>
  )
}
