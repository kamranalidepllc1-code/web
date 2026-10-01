'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { fadeUp } from '@/lib/animations'
import { hasServicePage, type Service } from '@/data/services'

export function ServiceCard({ service, index }: { service: Service; index: number }) {
  const [hovered, setHovered] = useState(index === 0)
  const card = (
    <motion.div
      variants={fadeUp}
      style={{ background: '#222429', padding: 'clamp(1.75rem, 5vw, 3rem) clamp(1.25rem, 4vw, 2.5rem)', display: 'flex', flexDirection: 'column', gap: '2rem', cursor: 'pointer', position: 'relative', minHeight: '340px', overflow: 'hidden' }}
      onHoverStart={() => setHovered(true)} onHoverEnd={() => setHovered(index === 0)}
      whileHover={{ background: '#2a2d33' }}
      whileTap={{ scale: 0.99 }}
    >
      {/* Glow on hover */}
      <motion.div animate={{ opacity: hovered ? 1 : 0 }} style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 30% 50%, rgba(206,48,125,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />
      {/* Top accent bar */}
      <motion.div animate={{ scaleX: hovered ? 1 : 0 }} initial={{ scaleX: index === 0 ? 1 : 0 }} transition={{ duration: 0.4 }} style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, #CE307D, #ff6eb4)', transformOrigin: 'left' }} />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', position: 'relative', zIndex: 1 }}>
        <motion.span animate={{ color: hovered ? '#CE307D' : 'rgba(240,237,232,0.15)', scale: hovered ? 1.15 : 1 }} style={{ display: 'inline-block' }}>
          <service.icon size={28} strokeWidth={1.5} />
        </motion.span>
        <span style={{ fontSize: '0.68rem', letterSpacing: '0.14em', color: hovered ? '#f0ede8' : 'rgba(240,237,232,0.2)', fontFamily: "var(--font-fraunces), serif" }}>{service.num}</span>
      </div>
      <div style={{ flex: 1, position: 'relative', zIndex: 1 }}>
        <h3 style={{ fontFamily: "var(--font-fraunces), serif", fontWeight: 300, fontSize: 'clamp(1.4rem, 2vw, 1.9rem)', letterSpacing: '-0.02em', margin: '0 0 1rem', color: '#f0ede8', lineHeight: 1.1 }}>{service.title}</h3>
        <p style={{ color: '#ffffff', fontSize: '0.88rem', lineHeight: 1.8, margin: 0 }}>{service.desc}</p>
      </div>
      <motion.div animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : -8 }} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', position: 'relative', zIndex: 1 }}>
        <span style={{ fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#CE307D' }}>Learn more</span>
        <span style={{ color: '#CE307D' }}>→</span>
      </motion.div>
    </motion.div>
  )
  if (!hasServicePage(service)) return card
  return (
    <Link href={service.href} style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}>
      {card}
    </Link>
  )
}
