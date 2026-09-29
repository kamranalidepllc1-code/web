'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { fadeUp } from '@/lib/animations'
import type { VALUES } from '@/data/site'

export function ValueCard({ value, index }: { value: (typeof VALUES)[0]; index: number }) {
  const [hovered, setHovered] = useState(index === 0)
  return (
    <motion.div
      variants={fadeUp}
      style={{ background: '#222429', padding: 'clamp(1.75rem, 5vw, 3rem) clamp(1.25rem, 4vw, 2.5rem)', display: 'flex', flexDirection: 'column', gap: '1.5rem', cursor: 'default', position: 'relative', minHeight: '300px', overflow: 'hidden' }}
      onHoverStart={() => setHovered(true)} onHoverEnd={() => setHovered(index === 0)}
      whileHover={{ background: '#2a2d33' }}
    >
      <motion.div animate={{ opacity: hovered ? 1 : 0 }} style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 80%, rgba(206,48,125,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <motion.div animate={{ scaleX: hovered ? 1 : 0 }} initial={{ scaleX: index === 0 ? 1 : 0 }} transition={{ duration: 0.4 }} style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, #CE307D, #ff6eb4)', transformOrigin: 'left' }} />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', position: 'relative', zIndex: 1 }}>
        <motion.span animate={{ color: hovered ? '#CE307D' : 'rgba(240,237,232,0.15)', scale: hovered ? 1.15 : 1 }} style={{ display: 'inline-block' }}>
          <value.icon size={36} strokeWidth={1.2} />
        </motion.span>
        <span style={{ fontSize: '0.68rem', letterSpacing: '0.12em', color: hovered ? '#f0ede8' : 'rgba(240,237,232,0.2)' }}>0{index + 1}</span>
      </div>
      <div style={{ flex: 1, position: 'relative', zIndex: 1 }}>
        <h3 style={{ fontFamily: "'Fraunces', serif", fontWeight: 300, fontSize: 'clamp(1.3rem, 2vw, 1.6rem)', letterSpacing: '-0.02em', margin: '0 0 0.75rem', color: '#f0ede8' }}>{value.word}</h3>
        <p style={{ color: '#ffffff', fontSize: '0.88rem', lineHeight: 1.8, margin: 0 }}>{value.desc}</p>
      </div>
      <motion.div animate={{ width: hovered ? '100%' : '0%' }} style={{ height: '1px', background: 'linear-gradient(90deg, #CE307D, transparent)', position: 'relative', zIndex: 1 }} transition={{ duration: 0.5 }} />
    </motion.div>
  )
}
