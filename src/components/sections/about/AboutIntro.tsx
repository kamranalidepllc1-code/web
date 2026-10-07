'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { RevealOnScroll } from '@/lib/animations'
import { EyebrowLabel } from '@/components/ui/EyebrowLabel'

const TAGGED_IMAGES = [
  { src: '/Assets/about us/focused-work.jpg', alt: 'A team member focused at her laptop', tag: 'Our Team' },
  { src: '/Assets/about us/studio-team.webp', alt: 'The team collaborating around a table', tag: 'Our Culture' },
]

export function AboutIntro() {
  const [videoOpen, setVideoOpen] = useState(false)

  return (
    <section style={{ padding: 'clamp(2rem, 4vw, 3rem) clamp(1.25rem, 6vw, 2.5rem)', background: 'var(--bg)' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gap: 'clamp(2.5rem, 6vw, 4rem)' }} className="grid grid-cols-1 lg:grid-cols-2">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(1.5rem, 4vw, 2.5rem)' }}>
            <RevealOnScroll>
              <EyebrowLabel>Who we are</EyebrowLabel>
              <h2 style={{ fontFamily: "var(--font-fraunces), serif", fontWeight: 300, fontSize: 'clamp(2rem, 4vw, 3.25rem)', letterSpacing: '-0.03em', margin: 0, lineHeight: 1.1, color: 'var(--fg)' }}>
                A small team, <em style={{ color: '#CE307D', fontStyle: 'italic' }}>fully invested</em> in your growth.
              </h2>
            </RevealOnScroll>
            <RevealOnScroll delay={0.1}>
              <div style={{ position: 'relative', width: '100%', aspectRatio: '4 / 3', borderRadius: '16px', overflow: 'hidden' }}>
                <Image
                  src="/Assets/about us/whiteboard-session.jpg"
                  alt="The Digi Era Pro team mapping out a strategy session"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </RevealOnScroll>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(1.5rem, 4vw, 2rem)', justifyContent: 'center' }}>
            <RevealOnScroll delay={0.1}>
              <div style={{ display: 'grid', gap: '1rem' }} className="grid grid-cols-2">
                {TAGGED_IMAGES.map(img => (
                  <div key={img.src} style={{ position: 'relative', width: '100%', aspectRatio: '4 / 3', borderRadius: '12px', overflow: 'hidden' }}>
                    <Image src={img.src} alt={img.alt} fill sizes="(max-width: 1024px) 50vw, 25vw" style={{ objectFit: 'cover' }} />
                    <span style={{
                      position: 'absolute', top: '0.6rem', left: '0.6rem', background: 'rgba(var(--bg-rgb),0.75)', color: 'var(--fg)',
                      fontSize: '0.62rem', letterSpacing: '0.04em', padding: '0.3rem 0.7rem', borderRadius: '999px',
                    }}>{img.tag}</span>
                  </div>
                ))}
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={0.2}>
              <p style={{ color: 'var(--fg-strong)', fontSize: '0.92rem', lineHeight: 1.8, margin: 0 }}>
                Digi Era Pro is a full-service digital marketing agency built around one idea: your growth should feel like a partnership, not a ticket queue. Our marketers, designers, and developers work as one team, so your website, search visibility, ads, and social media are planned together instead of by separate vendors.
              </p>
              <p style={{ color: 'var(--fg-strong)', fontSize: '0.92rem', lineHeight: 1.8, margin: '1rem 0 0' }}>
                Many of our clients are owner-run service businesses — contractors, detailers, home-service companies, and local professionals — where every new call matters. For them we focus on the work with the clearest payoff:{' '}
                <Link href="/services/gbp-optimization" style={{ color: '#CE307D', textDecoration: 'none' }}>Google Business Profile optimization</Link>,{' '}
                <Link href="/services/search-engine-optimization" style={{ color: '#CE307D', textDecoration: 'none' }}>local SEO</Link>,{' '}
                <Link href="/services/google-ads" style={{ color: '#CE307D', textDecoration: 'none' }}>Google Ads management</Link>, and{' '}
                <Link href="/services/website-design" style={{ color: '#CE307D', textDecoration: 'none' }}>websites designed to convert</Link>.
              </p>
            </RevealOnScroll>
            <RevealOnScroll delay={0.3}>
              <motion.button
                onClick={() => setVideoOpen(true)}
                whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.95 }}
                style={{
                  display: 'flex', alignItems: 'center', gap: '0.85rem', background: 'none', border: 'none', cursor: 'pointer', padding: 0,
                }}
                aria-label="Watch intro video"
              >
                <span style={{
                  width: '42px', height: '42px', borderRadius: '50%', border: '1.5px solid #CE307D',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                  <span style={{ width: 0, height: 0, borderTop: '6px solid transparent', borderBottom: '6px solid transparent', borderLeft: '9px solid #CE307D', marginLeft: '3px' }} />
                </span>
                <span style={{ fontSize: '0.78rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--fg)' }}>Watch Intro</span>
              </motion.button>
            </RevealOnScroll>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {videoOpen && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setVideoOpen(false)}
            style={{ position: 'fixed', inset: 0, zIndex: 200, background: 'rgba(0,0,0,0.9)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              style={{ position: 'relative', width: '100%', maxWidth: '960px', aspectRatio: '16 / 9', background: '#000' }}
            >
              <video
                src="/Assets/hero-office-720p.mp4"
                controls
                autoPlay
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <motion.button
                aria-label="Close video"
                onClick={() => setVideoOpen(false)}
                whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.92 }}
                style={{
                  position: 'absolute', top: '-2.5rem', right: 0, width: '36px', height: '36px', borderRadius: '50%',
                  background: 'rgba(var(--line-rgb), 0.1)', border: '1px solid rgba(255,255,255,0.4)', color: '#fff',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontSize: '1rem', lineHeight: 1,
                }}
              >
                ✕
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
