'use client'

import { motion } from 'framer-motion'
import { RevealOnScroll } from '@/lib/animations'
import { FOOTER_CONTACT, SOCIAL_LINKS } from '@/data/site'

export function ContactInfo() {
  return (
    <section style={{ padding: 'clamp(2rem, 4vw, 3rem) clamp(1.25rem, 6vw, 2.5rem)', background: 'var(--bg)' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', borderTop: '1px solid rgba(var(--line-rgb), 0.08)', paddingTop: 'clamp(2.5rem, 6vw, 4rem)' }}>
        <div style={{ display: 'grid', gap: '2.5rem' }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <RevealOnScroll>
            <span style={{ fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#CE307D', display: 'block', marginBottom: '1rem' }}>Email</span>
            <a href={FOOTER_CONTACT[2].href} style={{ fontFamily: "var(--font-fraunces), serif", fontSize: 'clamp(1.15rem, 1.8vw, 1.4rem)', color: 'var(--fg)', textDecoration: 'none' }}>
              {FOOTER_CONTACT[2].value}
            </a>
          </RevealOnScroll>

          <RevealOnScroll delay={0.08}>
            <span style={{ fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#CE307D', display: 'block', marginBottom: '1rem' }}>Phone</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {FOOTER_CONTACT.filter(c => c.href.startsWith('tel:')).map(c => (
                <a key={c.value} href={c.href} style={{ fontFamily: "var(--font-fraunces), serif", fontSize: 'clamp(1.15rem, 1.8vw, 1.4rem)', color: 'var(--fg)', textDecoration: 'none' }}>
                  {c.value}
                </a>
              ))}
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.16}>
            <span style={{ fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#CE307D', display: 'block', marginBottom: '1rem' }}>Where we work</span>
            <p style={{ fontFamily: "var(--font-fraunces), serif", fontSize: 'clamp(1.15rem, 1.8vw, 1.4rem)', color: 'var(--fg)', margin: 0, lineHeight: 1.3 }}>
              United States &amp; Malaysia
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.24}>
            <span style={{ fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#CE307D', display: 'block', marginBottom: '1rem' }}>Follow along</span>
            <div style={{ display: 'flex', gap: '0.65rem' }}>
              {SOCIAL_LINKS.map(s => (
                <motion.a key={s.name} href={s.href} aria-label={`Digi Era Pro on ${s.name}`} target="_blank" rel="noopener noreferrer"
                  style={{ width: '2.25rem', height: '2.25rem', borderRadius: '50%', border: '1px solid rgba(var(--line-rgb), 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--fg)', flexShrink: 0 }}
                  whileHover={{ borderColor: '#CE307D', color: '#CE307D', y: -3 }}>
                  <s.icon size={14} />
                </motion.a>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  )
}
