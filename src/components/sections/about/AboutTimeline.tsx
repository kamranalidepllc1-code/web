'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { RevealOnScroll } from '@/lib/animations'
import { EyebrowLabel } from '@/components/ui/EyebrowLabel'
import { HISTORY } from '@/data/site'

function RotatingBadge() {
  return (
    <div style={{ position: 'absolute', left: 'clamp(-1rem, -3vw, -1.75rem)', bottom: 'clamp(-1rem, -3vw, -1.75rem)', width: '110px', height: '110px', zIndex: 2 }}>
      <motion.svg
        width={110} height={110} viewBox="0 0 110 110"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 14, ease: 'linear' }}
        style={{ position: 'absolute', inset: 0 }}
      >
        <defs>
          <path id="timelineBadgePath" d="M 55,55 m -42,0 a 42,42 0 1,1 84,0 a 42,42 0 1,1 -84,0" fill="none" />
        </defs>
        <text fontSize="8.5" letterSpacing="2.5" fill="#f0ede8" fontFamily="'Outfit', sans-serif">
          <textPath href="#timelineBadgePath">GET IN TOUCH • DIGI ERA PRO • </textPath>
        </text>
      </motion.svg>
      <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Link
          href="/#contact"
          aria-label="Contact us"
          style={{ width: '42px', height: '42px', borderRadius: '50%', background: '#CE307D', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '1.15rem', textDecoration: 'none' }}
        >↗</Link>
      </div>
    </div>
  )
}

export function AboutTimeline() {
  const [active, setActive] = useState(0)

  return (
    <section style={{ padding: 'clamp(3.5rem, 9vw, 8rem) clamp(1.25rem, 6vw, 2.5rem)', background: '#272a30' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gap: 'clamp(2.5rem, 6vw, 4rem)', alignItems: 'center' }} className="grid grid-cols-1 lg:grid-cols-2">
          <div>
            <RevealOnScroll>
              <EyebrowLabel>Our story</EyebrowLabel>
              <h2 style={{ fontFamily: "'Fraunces', serif", fontWeight: 300, fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', letterSpacing: '-0.03em', margin: '0 0 1.25rem', lineHeight: 1.05, color: '#f0ede8' }}>
                From startup to <em style={{ color: '#CE307D', fontStyle: 'italic' }}>full-service agency.</em>
              </h2>
              <p style={{ color: '#ffffff', fontSize: '0.92rem', lineHeight: 1.8, margin: 0, maxWidth: '48ch' }}>
                What started as a two-person side project in 2018 has grown into a team spanning strategy, design, and performance marketing — without losing the parts that made clients stick around.
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={0.15}>
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', position: 'relative', paddingTop: '0.5rem', marginTop: '2.5rem' }}>
                <div style={{ position: 'absolute', top: 'calc(0.5rem + 9px)', left: 0, right: 0, height: '1px', transform: 'translateY(-50%)', background: 'rgba(255,255,255,0.12)' }} />
                {HISTORY.map((item, i) => (
                  <button
                    key={item.year}
                    onClick={() => setActive(i)}
                    style={{
                      position: 'relative', zIndex: 1, background: 'none', border: 'none', cursor: 'pointer',
                      display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.85rem', padding: 0,
                      flex: '1 1 0',
                    }}
                  >
                    <motion.span
                      animate={{
                        scale: active === i ? 1.15 : 1,
                        background: active === i ? '#CE307D' : '#272a30',
                        borderColor: active === i ? '#CE307D' : 'rgba(255,255,255,0.3)',
                      }}
                      style={{ width: '18px', height: '18px', borderRadius: '50%', border: '2px solid' }}
                    />
                    <span style={{
                      fontFamily: "'Fraunces', serif", fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
                      color: active === i ? '#f0ede8' : 'rgba(240,237,232,0.4)', transition: 'color 0.2s',
                    }}>{item.year}</span>
                  </button>
                ))}
              </div>
            </RevealOnScroll>

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                style={{ marginTop: '1.75rem', maxWidth: '48ch' }}
              >
                <h3 style={{ fontFamily: "'Fraunces', serif", fontWeight: 300, fontSize: 'clamp(1.25rem, 3vw, 1.6rem)', letterSpacing: '-0.02em', margin: '0 0 0.6rem', color: '#CE307D' }}>
                  {HISTORY[active].title}
                </h3>
                <p style={{ color: '#ffffff', fontSize: '0.9rem', lineHeight: 1.8, margin: 0 }}>
                  {HISTORY[active].desc}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <RevealOnScroll delay={0.1}>
            <div style={{ position: 'relative', paddingBottom: 'clamp(1.5rem, 4vw, 2.25rem)', paddingLeft: 'clamp(1rem, 3vw, 1.75rem)' }}>
              <div style={{ position: 'relative', width: '100%', aspectRatio: '4 / 3', borderRadius: '16px', overflow: 'hidden' }}>
                <Image
                  src="/Assets/about us/story.jpg"
                  alt="Presenting campaign results to the team"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <RotatingBadge />
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  )
}
