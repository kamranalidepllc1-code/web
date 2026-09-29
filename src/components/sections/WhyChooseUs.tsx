'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { RevealOnScroll } from '@/lib/animations'
import { WHY_CHOOSE_US } from '@/data/site'

export function WhyChooseUs() {
  const [activeWhyUs, setActiveWhyUs] = useState(0)

  return (
    <section style={{ padding: 'clamp(3.5rem, 9vw, 8rem) clamp(1.25rem, 6vw, 2.5rem)', background: '#272a30', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '10%', right: '-8%', width: '550px', height: '550px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(206,48,125,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gap: '6rem', alignItems: 'start' }} className="grid grid-cols-1 lg:grid-cols-2">
          <RevealOnScroll>
            <span style={{ fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#CE307D', display: 'block', marginBottom: '1.5rem' }}>Why choose us</span>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontWeight: 300, fontSize: 'clamp(2rem, 4vw, 3.5rem)', letterSpacing: '-0.03em', margin: '0 0 2.5rem', lineHeight: 1.1, color: '#f0ede8' }}>
              Here&apos;s what makes us <em style={{ color: '#CE307D', fontStyle: 'italic' }}>different.</em>
            </h2>
            <div style={{ display: 'flex', gap: '2.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', marginBottom: '2rem', flexWrap: 'wrap' }}>
              {WHY_CHOOSE_US.map((w, i) => (
                <button key={w.tab} onClick={() => setActiveWhyUs(i)}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0 0 1rem', fontSize: '0.78rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: activeWhyUs === i ? '#f0ede8' : 'rgba(240,237,232,0.4)', fontFamily: "'Outfit', sans-serif", position: 'relative', transition: 'color 0.2s' }}>
                  {w.tab}
                  {activeWhyUs === i && (
                    <motion.div layoutId="whyUsUnderline" style={{ position: 'absolute', left: 0, right: 0, bottom: '-1px', height: '2px', background: '#CE307D' }} />
                  )}
                </button>
              ))}
            </div>
            <AnimatePresence mode="wait">
              <motion.p key={activeWhyUs}
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                style={{ color: '#ffffff', fontSize: '0.95rem', lineHeight: 1.8, margin: 0, maxWidth: '48ch' }}>
                {WHY_CHOOSE_US[activeWhyUs].desc}
              </motion.p>
            </AnimatePresence>
          </RevealOnScroll>
          <RevealOnScroll delay={0.15}>
            <div style={{ position: 'relative', marginBottom: '3rem' }}>
              <div style={{ position: 'relative', width: '100%', aspectRatio: '800 / 560', borderRadius: '16px', overflow: 'hidden' }}>
                <Image src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=560&fit=crop&auto=format" alt="Our team"
                  fill sizes="(max-width: 1024px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
              </div>
              <div style={{ position: 'absolute', inset: 0, borderRadius: '16px', background: 'linear-gradient(180deg, transparent 50%, rgba(34,36,41,0.85) 100%)' }} />
              <div style={{
                position: 'absolute', left: '1.5rem', bottom: '-1.5rem', display: 'flex', alignItems: 'center', gap: '1rem',
                background: '#272a30', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '14px', padding: '1rem 1.5rem',
                boxShadow: '0 12px 30px rgba(0,0,0,0.4)',
              }}>
                <span style={{ fontFamily: "'Fraunces', serif", fontWeight: 300, fontSize: '2rem', color: '#CE307D', letterSpacing: '-0.03em', lineHeight: 1 }}>15+</span>
                <span style={{ fontSize: '0.75rem', color: '#ffffff', lineHeight: 1.3, maxWidth: '10ch' }}>Years driving client growth</span>
              </div>
            </div>
            <p style={{ color: '#ffffff', fontSize: '0.95rem', lineHeight: 1.8, margin: '2.5rem 0 0', maxWidth: '52ch' }}>
              There are a lot of digital marketing agencies out there. Here&apos;s why we stand out: our commitment to your success, our customized approach, and our results-driven strategies.
            </p>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  )
}
