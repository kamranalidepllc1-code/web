'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export function ContactHero() {
  return (
    <section style={{ minHeight: '100svh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', position: 'relative', overflow: 'hidden', background: 'var(--bg)' }}>
      <Image
        src="/Assets/contact-us/imgi_9_Bg1.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="contact-hero-image"
        // Anchor to the top so wide screens crop the bottom (under the gradient) instead of people's heads
        style={{ objectFit: 'cover', objectPosition: 'center top' }}
      />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(var(--bg-rgb),0.92) 0%, rgba(var(--bg-rgb),0.45) 45%, rgba(var(--bg-rgb),0.12) 100%)', pointerEvents: 'none' }} />
      <div className="hero-photo-scrim" aria-hidden="true" />

      <div style={{ position: 'relative', zIndex: 1, padding: '0 clamp(1.25rem, 6vw, 2.5rem) clamp(2rem, 4vw, 3rem)', maxWidth: '1400px', margin: '0 auto', width: '100%', paddingTop: 'clamp(100px, 22vw, 140px)' }}>
        <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          style={{ fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#CE307D', display: 'block', marginBottom: '1.25rem' }}>
          Contact
        </motion.span>

        <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          style={{ fontFamily: "var(--font-fraunces), serif", fontWeight: 300, fontSize: 'clamp(2.75rem, 7.5vw, 6.5rem)', lineHeight: 0.95, letterSpacing: '-0.03em', margin: '0 0 2rem', color: 'var(--fg)' }}>
          Contact <em style={{ color: '#CE307D', fontStyle: 'italic' }}>Digi Era Pro.</em>
        </motion.h1>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }}
          style={{ display: 'flex', gap: 'clamp(1.5rem, 5vw, 3rem)', flexWrap: 'wrap', alignItems: 'flex-end', marginBottom: 'clamp(1.5rem, 3vw, 2.25rem)' }}>
          <p style={{ maxWidth: '42ch', color: 'var(--fg-strong)', fontSize: '1rem', lineHeight: 1.75, margin: 0 }}>
            Tell us about your business and what you need — SEO, Google Ads, social media, a new website, or a mix. A member of our New York–based team will get back to you with next steps.
          </p>
          <motion.a href="#contact-form"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.75rem',
              color: 'var(--fg)', textDecoration: 'none', fontSize: '0.8rem',
              letterSpacing: '0.1em', textTransform: 'uppercase', whiteSpace: 'nowrap',
              border: '1px solid rgba(var(--fg-rgb),0.2)', padding: '0.85rem 1.75rem',
              position: 'relative', overflow: 'hidden',
            }}
            whileHover={{ borderColor: '#CE307D', color: '#CE307D' }}
            whileTap={{ scale: 0.97 }}
          >
            <motion.span style={{ position: 'absolute', inset: 0, background: 'rgba(206,48,125,0.08)', opacity: 0 }} whileHover={{ opacity: 1 }} />
            <span style={{ position: 'relative', zIndex: 1 }}>Start the conversation</span>
            <motion.span animate={{ y: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }} style={{ display: 'inline-block', position: 'relative', zIndex: 1 }}>↓</motion.span>
          </motion.a>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
          style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.78rem', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
          <Link href="/" style={{ color: 'var(--fg-strong)', textDecoration: 'none' }}>Home</Link>
          <span style={{ color: 'rgba(var(--fg-rgb),0.3)' }}>/</span>
          <span style={{ color: '#CE307D' }}>Contact</span>
        </motion.div>
      </div>
    </section>
  )
}
