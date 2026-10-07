'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { RevealOnScroll } from '@/lib/animations'
import { EyebrowLabel } from '@/components/ui/EyebrowLabel'
import { RotatingBadge } from '@/components/ui/RotatingBadge'
import { HISTORY } from '@/data/site'

export function AboutTimeline() {
  const [active, setActive] = useState(0)

  return (
    <section id="work" style={{ padding: 'clamp(2rem, 4vw, 3rem) clamp(1.25rem, 6vw, 2.5rem)', background: 'var(--surface)' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gap: 'clamp(2.5rem, 6vw, 4rem)', alignItems: 'center' }} className="grid grid-cols-1 lg:grid-cols-2">
          <div>
            <RevealOnScroll>
              <EyebrowLabel>Our story</EyebrowLabel>
              <h2 style={{ fontFamily: "var(--font-fraunces), serif", fontWeight: 300, fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', letterSpacing: '-0.03em', margin: '0 0 1.25rem', lineHeight: 1.05, color: 'var(--fg)' }}>
                Company History
              </h2>
              <p style={{ color: 'var(--fg-strong)', fontSize: '0.92rem', lineHeight: 1.8, margin: 0, maxWidth: '48ch' }}>
                What started as a two-person side project in 2018 has grown into a team spanning strategy, design, and performance marketing — without losing the parts that made clients stick around.
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={0.15}>
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', position: 'relative', paddingTop: '0.5rem', marginTop: '2.5rem' }}>
                <div style={{ position: 'absolute', top: 'calc(0.5rem + 9px)', left: 0, right: 0, height: '1px', transform: 'translateY(-50%)', background: 'rgba(var(--line-rgb), 0.12)' }} />
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
                        background: active === i ? '#CE307D' : 'var(--surface)',
                        borderColor: active === i ? '#CE307D' : 'var(--line-a30)',
                      }}
                      style={{ width: '18px', height: '18px', borderRadius: '50%', border: '2px solid' }}
                    />
                    <span style={{
                      fontFamily: "var(--font-fraunces), serif", fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
                      color: active === i ? 'var(--fg)' : 'rgba(var(--fg-rgb),0.4)', transition: 'color 0.2s',
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
                <h3 style={{ fontFamily: "var(--font-fraunces), serif", fontWeight: 300, fontSize: 'clamp(1.25rem, 3vw, 1.6rem)', letterSpacing: '-0.02em', margin: '0 0 0.6rem', color: '#CE307D' }}>
                  {HISTORY[active].title}
                </h3>
                <p style={{ color: 'var(--fg-strong)', fontSize: '0.9rem', lineHeight: 1.8, margin: 0 }}>
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
              <RotatingBadge text="GET IN TOUCH • DIGI ERA PRO • " href="/#contact" label="Contact us"
                style={{ position: 'absolute', left: 'clamp(-1rem, -3vw, -1.75rem)', bottom: 'clamp(-1rem, -3vw, -1.75rem)', zIndex: 2 }}
              >↗</RotatingBadge>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  )
}
