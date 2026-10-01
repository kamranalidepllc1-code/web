'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeUp } from '@/lib/animations'
import type { TEAM } from '@/data/site'

export function TeamCard({ person }: { person: (typeof TEAM)[0] }) {
  const [hovered, setHovered] = useState(false)
  return (
    <motion.div variants={fadeUp} style={{ background: '#272a30', overflow: 'hidden', position: 'relative' }}
      onHoverStart={() => setHovered(true)} onHoverEnd={() => setHovered(false)}>
      <div style={{ height: '380px', overflow: 'hidden', background: '#30333a', position: 'relative' }}>
        <motion.div
          animate={{ scale: hovered ? 1.07 : 1 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ position: 'absolute', inset: 0 }}
        >
          <Image
            src={person.img}
            alt={person.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            style={{ objectFit: 'cover', filter: hovered ? 'brightness(0.6) saturate(0.8)' : 'brightness(0.75) saturate(0.9)' }}
          />
        </motion.div>
        <motion.div animate={{ opacity: hovered ? 1 : 0 }}
          style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(206,48,125,0.4) 0%, transparent 60%)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '1.75rem' }}>
          <p style={{ fontFamily: "var(--font-fraunces), serif", fontSize: '1.2rem', fontWeight: 300, margin: '0 0 0.25rem', color: '#fff' }}>{person.name}</p>
          <p style={{ fontSize: '0.72rem', letterSpacing: '0.08em', color: '#ffffff', textTransform: 'uppercase', margin: 0 }}>{person.role}</p>
        </motion.div>
      </div>
      <div style={{ padding: '1.25rem 1.5rem', borderTop: '1px solid rgba(255,255,255,0.06)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <p style={{ fontFamily: "var(--font-fraunces), serif", fontSize: '1.05rem', fontWeight: 300, margin: '0 0 0.2rem', color: '#f0ede8' }}>{person.name}</p>
          <p style={{ fontSize: '0.72rem', letterSpacing: '0.06em', color: '#ffffff', textTransform: 'uppercase', margin: 0 }}>{person.role}</p>
        </div>
        <motion.span animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : -6 }} style={{ color: '#CE307D', fontSize: '1.1rem' }}>→</motion.span>
      </div>
    </motion.div>
  )
}
