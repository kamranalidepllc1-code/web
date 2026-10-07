'use client'

import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { SPECIAL_OFFER } from '@/data/specialOffer'

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1]

export function OfferHero() {
  const ref = useRef(null)

  return (
    <section ref={ref} style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', position: 'relative', overflow: 'hidden', background: 'var(--bg)' }}>
      <div style={{ position: 'absolute', inset: '-6% 0 0 0' }}>
        <Image
          className="special-offer-hero-image"
          src="/Assets/special-offer/hero.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center 40%' }}
        />
      </div>
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(var(--bg-rgb),0.96) 0%, rgba(var(--bg-rgb),0.6) 45%, rgba(var(--bg-rgb),0.25) 100%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(var(--bg-rgb),0.75) 0%, transparent 65%)', pointerEvents: 'none' }} />
      <div className="hero-photo-scrim" aria-hidden="true" />

      <div style={{ position: 'relative', zIndex: 1, padding: '0 clamp(1.25rem, 6vw, 2.5rem) clamp(2rem, 4vw, 3rem)', maxWidth: '1400px', margin: '0 auto', width: '100%', paddingTop: 'clamp(110px, 22vw, 150px)' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          style={{ display: 'inline-flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.75rem', border: '1px solid rgba(206,48,125,0.5)', background: 'rgba(206,48,125,0.1)', padding: '0.45rem 1rem 0.45rem 0.8rem', borderRadius: '999px' }}>
          <motion.span animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }} transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#CE307D', display: 'block' }} />
          <span style={{ fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--fg)' }}>Limited-time offer</span>
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.15, ease }}
          style={{ fontFamily: "var(--font-fraunces), serif", fontWeight: 300, fontSize: 'clamp(2.75rem, 8vw, 7.25rem)', lineHeight: 0.95, letterSpacing: '-0.035em', margin: '0 0 clamp(2rem, 4vw, 2.75rem)', color: 'var(--fg)', maxWidth: '14ch' }}>
          Something special, <em style={{ color: '#CE307D', fontStyle: 'italic' }}>for a limited time.</em>
        </motion.h1>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }}
          style={{ display: 'grid', gap: 'clamp(1.75rem, 4vw, 3rem)', alignItems: 'end', marginBottom: 'clamp(1.5rem, 3vw, 2rem)' }}
          className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_auto]">
          <div style={{ display: 'flex', gap: 'clamp(1.25rem, 3vw, 2rem)', alignItems: 'stretch', maxWidth: '640px' }}>
            <span style={{ width: '1px', background: '#CE307D', flexShrink: 0 }} />
            <div>
              <span style={{ fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#CE307D', display: 'block', marginBottom: '0.6rem' }}>{SPECIAL_OFFER.title}</span>
              <p style={{ color: 'var(--fg-strong)', fontSize: '1rem', lineHeight: 1.75, margin: 0, maxWidth: '48ch' }}>
                {SPECIAL_OFFER.summary}
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '0.9rem', flexWrap: 'wrap' }}>
            <motion.a href="#offer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', background: '#CE307D', color: '#fff', textDecoration: 'none', padding: '1.1rem 2.1rem', fontSize: '0.82rem', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 500, borderRadius: '10px', whiteSpace: 'nowrap' }}
              whileHover={{ y: -4, boxShadow: '0 16px 40px rgba(206,48,125,0.35)' }}
              whileTap={{ scale: 0.97 }}
            >
              Claim the offer
              <motion.span animate={{ y: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }} style={{ display: 'inline-block' }}>↓</motion.span>
            </motion.a>
            <motion.a href="/contact#contact-form"
              style={{ display: 'inline-flex', alignItems: 'center', color: 'var(--fg)', textDecoration: 'none', fontSize: '0.82rem', letterSpacing: '0.08em', textTransform: 'uppercase', border: '1px solid rgba(var(--fg-rgb),0.25)', padding: '1.1rem 2.1rem', borderRadius: '10px', whiteSpace: 'nowrap' }}
              whileHover={{ borderColor: '#CE307D', color: '#CE307D' }}
              whileTap={{ scale: 0.97 }}
            >
              Let&apos;s talk
            </motion.a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
          style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.78rem', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
          <Link href="/" style={{ color: 'var(--fg-strong)', textDecoration: 'none' }}>Home</Link>
          <span style={{ color: 'rgba(var(--fg-rgb),0.3)' }}>/</span>
          <span style={{ color: '#CE307D' }}>Special Offer</span>
        </motion.div>
      </div>
    </section>
  )
}
