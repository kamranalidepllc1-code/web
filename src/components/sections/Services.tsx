'use client'

import { RevealOnScroll, StaggerOnScroll } from '@/lib/animations'
import { ServiceCard } from '@/components/ui/ServiceCard'
import { SERVICES } from '@/data/services'
import { ServiceGiftBox } from './ServiceGiftBox'

export function Services() {
  return (
    <section id="services" style={{ padding: 'clamp(2rem, 4vw, 3rem) clamp(1.25rem, 6vw, 2.5rem)', background: 'var(--bg)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '800px', height: '800px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(206,48,125,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', gap: '1rem', marginBottom: '1.75rem' }}>
          <RevealOnScroll>
            <span style={{ fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#CE307D' }}>What we do</span>
            <h2 style={{ fontFamily: "var(--font-fraunces), serif", fontWeight: 300, fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', letterSpacing: '-0.03em', margin: '1rem 0 0', lineHeight: 1, color: 'var(--fg)' }}>
              Digital marketing <em style={{ fontStyle: 'italic', color: '#CE307D' }}>services.</em>
            </h2>
          </RevealOnScroll>
          <ServiceGiftBox />
        </div>
        <StaggerOnScroll style={{ display: 'grid', gap: '0', background: 'var(--bg)', overflow: 'hidden' }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.num} service={s} index={i} />
          ))}
        </StaggerOnScroll>
      </div>
    </section>
  )
}
