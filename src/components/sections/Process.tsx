'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { RevealOnScroll } from '@/lib/animations'
import { PROCESS_STEPS } from '@/data/site'

export function Process() {
  const [openProcess, setOpenProcess] = useState<number>(0)

  return (
    <section id="process" style={{ padding: 'clamp(2rem, 4vw, 3rem) clamp(1.25rem, 6vw, 2.5rem)', background: '#272a30' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <RevealOnScroll style={{ marginBottom: '1.75rem' }}>
          <span style={{ fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#CE307D' }}>How we work</span>
          <h2 style={{ fontFamily: "var(--font-fraunces), serif", fontWeight: 300, fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', letterSpacing: '-0.03em', margin: '1rem 0 0', lineHeight: 1, color: '#f0ede8' }}>The process</h2>
        </RevealOnScroll>
        <div>
          {PROCESS_STEPS.map((step, i) => {
            const isOpen = openProcess === i
            return (
              <RevealOnScroll key={step.num} delay={i * 0.05} style={{ borderTop: '1px solid rgba(255,255,255,0.07)', cursor: 'pointer' }}>
                <div onClick={() => setOpenProcess(i)}>
                  <motion.div style={{ display: 'grid', gridTemplateColumns: 'clamp(2.25rem, 8vw, 4rem) 1fr auto', gap: 'clamp(1rem, 3vw, 2rem)', padding: '2rem 0', alignItems: 'center' }}
                    whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                    <span style={{ fontFamily: "var(--font-fraunces), serif", fontSize: '0.85rem', color: isOpen ? '#f0ede8' : 'rgba(240,237,232,0.3)', transition: 'color 0.2s' }}>{step.num}</span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>
                      <h3 style={{ fontFamily: "var(--font-fraunces), serif", fontWeight: 300, fontSize: 'clamp(1.25rem, 3vw, 2rem)', margin: 0, letterSpacing: '-0.02em', color: isOpen ? '#CE307D' : '#f0ede8', transition: 'color 0.2s' }}>{step.phase}</h3>
                      <span style={{ fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#ffffff', border: '1px solid rgba(255,255,255,0.1)', padding: '0.3rem 0.8rem' }}>{step.duration}</span>
                    </div>
                    <motion.span animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.3 }} style={{ color: '#CE307D', fontSize: '1.5rem', display: 'inline-block', lineHeight: 1 }}>+</motion.span>
                  </motion.div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }} style={{ overflow: 'hidden' }}>
                        <div style={{ paddingBottom: '2.5rem', paddingLeft: 'clamp(1.5rem, 18vw, 6rem)' }}>
                          <p style={{ color: '#ffffff', fontSize: '0.95rem', lineHeight: 1.8, margin: 0, maxWidth: '60ch' }}>{step.desc}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </RevealOnScroll>
            )
          })}
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }} />
        </div>
      </div>
    </section>
  )
}
