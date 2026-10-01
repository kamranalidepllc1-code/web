'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { getService } from '@/data/services'
import { ServiceVisual } from '@/components/sections/service/ServiceVisual'
import type { ServicePageContent } from '@/types/site'

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1]
const MotionLink = motion.create(Link)

export function ServiceHero({ content }: { content: ServicePageContent }) {
  const service = getService(content.slug)
  const { hero } = content

  return (
    <section style={{ position: 'relative', overflow: 'hidden', background: '#222429', padding: 'clamp(120px, 18vw, 170px) clamp(1.25rem, 6vw, 2.5rem) clamp(2rem, 4vw, 3rem)' }}>
      {/* Faint grid + glow */}
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)', backgroundSize: '72px 72px', maskImage: 'radial-gradient(ellipse at 70% 40%, #000 0%, transparent 70%)', WebkitMaskImage: 'radial-gradient(ellipse at 70% 40%, #000 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div aria-hidden="true" style={{ position: 'absolute', top: '10%', right: '-10%', width: '720px', height: '720px', maxWidth: '100vw', borderRadius: '50%', background: 'radial-gradient(circle, rgba(206,48,125,0.14) 0%, transparent 65%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 1, display: 'grid', gap: 'clamp(3rem, 6vw, 4rem)', alignItems: 'center' }} className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        <div style={{ minWidth: 0 }}>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}
            style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.74rem', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '2rem', flexWrap: 'wrap' }}>
            <Link href="/" style={{ color: '#ffffff', textDecoration: 'none' }}>Home</Link>
            <span style={{ color: 'rgba(240,237,232,0.3)' }}>/</span>
            <Link href="/#services" style={{ color: '#ffffff', textDecoration: 'none' }}>Services</Link>
            <span style={{ color: 'rgba(240,237,232,0.3)' }}>/</span>
            <span style={{ color: '#CE307D' }}>{service.title}</span>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.75rem', border: '1px solid rgba(206,48,125,0.5)', background: 'rgba(206,48,125,0.1)', padding: '0.45rem 1rem 0.45rem 0.8rem', borderRadius: '999px' }}>
            <service.icon size={15} strokeWidth={1.5} color="#CE307D" />
            <span style={{ fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#f0ede8' }}>{service.title}</span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.15, ease }}
            style={{ fontFamily: "var(--font-fraunces), serif", fontWeight: 300, fontSize: 'clamp(2.6rem, 6.5vw, 5.75rem)', lineHeight: 0.98, letterSpacing: '-0.035em', margin: '0 0 clamp(1.75rem, 4vw, 2.5rem)', color: '#f0ede8', maxWidth: '15ch' }}>
            {hero.title} <em style={{ color: '#CE307D', fontStyle: 'italic' }}>{hero.titleAccent}</em>
          </motion.h1>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.35 }}
            style={{ display: 'flex', gap: 'clamp(1.25rem, 3vw, 2rem)', alignItems: 'stretch', maxWidth: '600px', marginBottom: 'clamp(1.5rem, 3vw, 2rem)' }}>
            <span style={{ width: '1px', background: '#CE307D', flexShrink: 0 }} />
            <p style={{ color: '#ffffff', fontSize: '1rem', lineHeight: 1.75, margin: 0, maxWidth: '50ch' }}>{hero.summary}</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}
            style={{ display: 'flex', gap: '0.9rem', flexWrap: 'wrap' }}>
            <MotionLink href="/contact#contact-form"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', background: '#CE307D', color: '#fff', textDecoration: 'none', padding: '1.1rem 2.1rem', fontSize: '0.82rem', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 500, borderRadius: '10px', whiteSpace: 'nowrap' }}
              whileHover={{ y: -4, boxShadow: '0 16px 40px rgba(206,48,125,0.35)' }}
              whileTap={{ scale: 0.97 }}
            >
              {hero.cta} <span aria-hidden="true">→</span>
            </MotionLink>
            {/* In-page anchor, so a plain <a> is enough */}
            <motion.a href="#overview"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', color: '#f0ede8', textDecoration: 'none', fontSize: '0.82rem', letterSpacing: '0.08em', textTransform: 'uppercase', border: '1px solid rgba(240,237,232,0.25)', padding: '1.1rem 2.1rem', borderRadius: '10px', whiteSpace: 'nowrap' }}
              whileHover={{ borderColor: '#CE307D', color: '#CE307D' }}
              whileTap={{ scale: 0.97 }}
            >
              Learn more <span aria-hidden="true">↓</span>
            </motion.a>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 40, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 1.1, delay: 0.3, ease }}
          style={{ minWidth: 0, width: '100%', maxWidth: '560px', justifySelf: 'center' }}>
          <ServiceVisual variant={content.visual} />
        </motion.div>
      </div>
    </section>
  )
}
