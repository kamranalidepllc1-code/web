'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { StaggerOnScroll, fadeUp } from '@/lib/animations'
import { OFFER_FEATURES } from '@/data/specialOffer'

// Row 1: featured card (2/3) + one card (1/3). Row 2: three equal cards.
const SPANS = ['md:col-span-2 lg:col-span-4', 'lg:col-span-2', 'lg:col-span-2', 'lg:col-span-2', 'lg:col-span-2']

function FeatureCard({ feature, index }: { feature: (typeof OFFER_FEATURES)[number]; index: number }) {
  const featured = index === 0
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      variants={fadeUp}
      onHoverStart={() => setHovered(true)} onHoverEnd={() => setHovered(false)}
      whileHover={{ background: featured ? '#d23a86' : 'var(--surface-2)' }}
      className={SPANS[index]}
      style={{
        background: featured ? '#CE307D' : 'var(--bg)',
        position: 'relative', overflow: 'hidden',
        padding: 'clamp(1.75rem, 3.5vw, 2.5rem) clamp(1.5rem, 3vw, 2.25rem)',
        display: 'flex', flexDirection: 'column', justifyContent: featured ? 'center' : 'flex-start',
        alignItems: featured ? 'flex-start' : 'center',
        textAlign: featured ? 'left' : 'center',
        minHeight: 'clamp(15rem, 24vw, 16.75rem)',
      }}
    >
      <motion.div animate={{ opacity: hovered ? 1 : 0 }} style={{ position: 'absolute', inset: 0, background: featured ? 'radial-gradient(circle at 20% 30%, rgba(255,255,255,0.14) 0%, transparent 60%)' : 'radial-gradient(circle at 50% 20%, rgba(206,48,125,0.14) 0%, transparent 65%)', pointerEvents: 'none' }} />
      <motion.div animate={{ scaleX: hovered ? 1 : 0 }} initial={{ scaleX: 0 }} transition={{ duration: 0.4 }} style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: featured ? '#fff' : 'linear-gradient(90deg, #CE307D, #ff6eb4)', transformOrigin: 'left' }} />

      <motion.span
        animate={{ scale: hovered ? 1.1 : 1 }}
        style={{
          position: 'relative', width: '4.25rem', height: '4.25rem', borderRadius: '50%', flexShrink: 0,
          background: featured ? '#fff' : '#CE307D', color: featured ? '#CE307D' : '#fff',
          display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.4rem',
        }}
      >
        <feature.icon size={30} strokeWidth={1.4} aria-hidden="true" />
      </motion.span>
      <h3 style={{ position: 'relative', fontFamily: "var(--font-fraunces), serif", fontWeight: 300, fontSize: 'clamp(1.35rem, 2.2vw, 1.65rem)', letterSpacing: '-0.02em', lineHeight: 1.2, margin: '0 0 0.85rem', color: featured ? '#fff' : 'var(--fg)' }}>
        {feature.title}
      </h3>
      <p style={{ position: 'relative', fontSize: '0.88rem', lineHeight: 1.8, margin: 0, color: featured ? '#fff' : 'var(--fg-strong)', maxWidth: featured ? '62ch' : '34ch' }}>
        {feature.desc}
      </p>

      <motion.div animate={{ width: hovered ? '100%' : '0%' }} transition={{ duration: 0.5 }} style={{ position: 'absolute', left: 0, bottom: 0, height: '1px', background: featured ? 'linear-gradient(90deg, #fff, transparent)' : 'linear-gradient(90deg, #CE307D, transparent)' }} />
    </motion.div>
  )
}

export function OfferIncluded() {
  return (
    <section style={{ padding: 'clamp(2rem, 4vw, 3rem) clamp(1.25rem, 6vw, 2.5rem)', background: 'var(--surface)' }}>
      <StaggerOnScroll
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6"
        style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gap: '1px', background: 'rgba(var(--line-rgb), 0.07)', border: '1px solid rgba(var(--line-rgb), 0.07)', overflow: 'hidden' }}
      >
        {OFFER_FEATURES.map((f, i) => <FeatureCard key={f.title} feature={f} index={i} />)}
      </StaggerOnScroll>
    </section>
  )
}
