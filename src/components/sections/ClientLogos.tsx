import { RevealOnScroll, StaggerOnScroll } from '@/lib/animations'
import { ClientLogoCard } from '@/components/ui/ClientLogoCard'
import { CLIENT_LOGOS } from '@/data/site'

export function ClientLogos() {
  return (
    <section style={{ padding: 'clamp(2rem, 4vw, 3rem) clamp(1.25rem, 6vw, 2.5rem)', background: 'var(--bg)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '20%', left: '-8%', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(206,48,125,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gap: '4rem', alignItems: 'center' }} className="grid grid-cols-1 lg:grid-cols-2">
          <RevealOnScroll>
            <span style={{ fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#CE307D', display: 'block', marginBottom: '1rem' }}>Our clients</span>
            <h2 style={{ fontFamily: "var(--font-fraunces), serif", fontWeight: 300, fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.03em', color: 'var(--fg)', margin: '0 0 1.5rem', lineHeight: 1.1 }}>
              Our growing network of <em style={{ color: '#CE307D', fontStyle: 'italic' }}>trusted clients.</em>
            </h2>
            <p style={{ color: 'var(--fg-strong)', fontSize: '0.95rem', lineHeight: 1.8, margin: 0, maxWidth: '44ch' }}>
              A few of the contractors, detailers, and service businesses across the U.S. that rely on us for their websites, local search, and marketing.
            </p>
          </RevealOnScroll>
          <StaggerOnScroll style={{ display: 'grid', gap: '1px', background: 'rgba(var(--line-rgb), 0.06)' }} className="grid grid-cols-2 sm:grid-cols-3">
            {CLIENT_LOGOS.map(c => <ClientLogoCard key={c.name} client={c} />)}
          </StaggerOnScroll>
        </div>
      </div>
    </section>
  )
}
