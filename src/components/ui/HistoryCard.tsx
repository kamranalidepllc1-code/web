'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { fadeUp } from '@/lib/animations'
import type { HISTORY } from '@/data/site'

export function HistoryCard({ item, index }: { item: (typeof HISTORY)[0]; index: number }) {
  const [hovered, setHovered] = useState(index === 0)
  return (
    <motion.div
      variants={fadeUp}
      style={{ background: 'var(--surface)', padding: 'clamp(1.75rem, 6vw, 3.5rem)', display: 'flex', flexDirection: 'column', gap: '1.5rem', cursor: 'default', position: 'relative', overflow: 'hidden', minHeight: '260px' }}
      onHoverStart={() => setHovered(true)} onHoverEnd={() => setHovered(index === 0 ? true : false)}
      whileHover={{ background: 'var(--surface-3)' }}
    >
      <motion.div animate={{ opacity: hovered ? 1 : 0 }} style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 80% 20%, rgba(206,48,125,0.1) 0%, transparent 60%)', pointerEvents: 'none' }} />
      <motion.div animate={{ scaleX: hovered ? 1 : 0 }} initial={{ scaleX: index === 0 ? 1 : 0 }} transition={{ duration: 0.4 }} style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, #CE307D, transparent)', transformOrigin: 'left' }} />
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', position: 'relative', zIndex: 1 }}>
        <motion.span animate={{ color: hovered ? '#CE307D' : 'var(--fg-a08)' }} style={{ fontFamily: "var(--font-fraunces), serif", fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 300, letterSpacing: '-0.04em', lineHeight: 1 }}>{item.year}</motion.span>
        <span style={{ fontSize: '0.68rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: hovered ? 'var(--fg)' : 'rgba(var(--fg-rgb),0.2)', border: '1px solid rgba(var(--line-rgb), 0.08)', padding: '0.3rem 0.75rem', marginTop: '0.5rem' }}>0{index + 1}</span>
      </div>
      <div style={{ position: 'relative', zIndex: 1 }}>
        <h3 style={{ fontFamily: "var(--font-fraunces), serif", fontWeight: 300, fontSize: 'clamp(1.2rem, 2vw, 1.6rem)', letterSpacing: '-0.02em', margin: '0 0 0.75rem', color: 'var(--fg)', lineHeight: 1.15 }}>{item.title}</h3>
        <p style={{ color: 'var(--fg-strong)', fontSize: '0.9rem', lineHeight: 1.75, margin: 0 }}>{item.desc}</p>
      </div>
      <motion.div animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : -8 }} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: 'auto', position: 'relative', zIndex: 1 }}>
        <div style={{ width: '24px', height: '1px', background: '#CE307D' }} />
        <span style={{ fontSize: '0.68rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#CE307D' }}>Milestone</span>
      </motion.div>
    </motion.div>
  )
}
