'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { RevealOnScroll } from '@/lib/animations'
import { SERVICES, hasServicePage } from '@/data/services'
import type { ServicePageContent } from '@/types/site'

const MotionLink = motion.create(Link)

export function ServiceCTA({ slug, cta }: { slug: string; cta: ServicePageContent['cta'] }) {
  const related = SERVICES.filter(s => s.slug !== slug && hasServicePage(s))

  return (
    <section style={{ padding: 'clamp(2.25rem, 4.5vw, 3.25rem) clamp(1.25rem, 6vw, 2.5rem)', background: '#222429', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
      <div aria-hidden="true" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '700px', height: '700px', maxWidth: '100vw', borderRadius: '50%', background: 'radial-gradient(circle, rgba(206,48,125,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ maxWidth: '760px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <RevealOnScroll>
          <h2 style={{ fontFamily: "var(--font-fraunces), serif", fontWeight: 300, fontSize: 'clamp(2.25rem, 5vw, 4rem)', letterSpacing: '-0.03em', margin: '0 0 1.25rem', lineHeight: 1.1, color: '#f0ede8' }}>
            {cta.heading} <em style={{ color: '#CE307D', fontStyle: 'italic' }}>{cta.headingAccent}</em>
          </h2>
          <p style={{ color: '#ffffff', fontSize: '0.95rem', lineHeight: 1.8, margin: '0 auto 2.5rem', maxWidth: '52ch' }}>{cta.body}</p>
        </RevealOnScroll>
        <RevealOnScroll delay={0.1}>
          <MotionLink href="/contact#contact-form"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', color: '#fff', background: '#CE307D', textDecoration: 'none', fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '1rem 2.25rem', fontWeight: 500 }}
            whileHover={{ scale: 1.04, boxShadow: '0 0 24px rgba(206,48,125,0.5)' }}
            whileTap={{ scale: 0.97 }}
          >
            {cta.button} <span aria-hidden="true">→</span>
          </MotionLink>
        </RevealOnScroll>

        {related.length > 0 && (
          <RevealOnScroll delay={0.2} style={{ marginTop: 'clamp(2rem, 4vw, 2.75rem)', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
            <span style={{ fontSize: '0.7rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(240,237,232,0.5)', display: 'block', marginBottom: '1.1rem' }}>Explore more services</span>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.75rem 2rem' }}>
              {related.map(s => (
                <Link key={s.slug} href={s.href} className="mega-link">
                  {s.title} <span aria-hidden="true">→</span>
                </Link>
              ))}
              <Link href="/#services" className="mega-link" style={{ color: '#CE307D' }}>
                All services <span aria-hidden="true">→</span>
              </Link>
            </div>
          </RevealOnScroll>
        )}
      </div>
    </section>
  )
}
