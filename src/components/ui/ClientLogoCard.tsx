'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { scaleUp } from '@/lib/animations'
import type { CLIENT_LOGOS } from '@/data/site'

export function ClientLogoCard({ client }: { client: (typeof CLIENT_LOGOS)[0] }) {
  const [hovered, setHovered] = useState(false)
  return (
    <motion.div
      variants={scaleUp}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ y: -7 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      style={{
        position: 'relative', overflow: 'visible', cursor: 'pointer',
        zIndex: hovered ? 5 : 1,
      }}
    >
      {/* Full-card link overlay */}
      <a
        href={client.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={client.name}
        style={{ position: 'absolute', inset: 0, zIndex: 2 }}
      />
      <div style={{
        position: 'relative', background: '#f5f5f5', padding: '2rem 1.5rem 1.25rem',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '0.85rem',
        minHeight: '150px', overflow: 'hidden',
      }}>
        {/* Dual direction border: each edge grows outward from its own center toward both corners on hover */}
        <motion.div
          initial={{ scaleX: 0 }} animate={{ scaleX: hovered ? 1 : 0 }} transition={{ duration: 0.80, ease: 'easeOut' }}
          style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: '#CE307D', transformOrigin: 'center' }}
        />
        <motion.div
          initial={{ scaleX: 0 }} animate={{ scaleX: hovered ? 1 : 0 }} transition={{ duration: 0.80, ease: 'easeOut' }}
          style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '2px', background: '#CE307D', transformOrigin: 'center' }}
        />
        <motion.div
          initial={{ scaleY: 0 }} animate={{ scaleY: hovered ? 1 : 0 }} transition={{ duration: 0.80, ease: 'easeOut' }}
          style={{ position: 'absolute', top: 0, bottom: 0, left: 0, width: '2px', background: '#CE307D', transformOrigin: 'center' }}
        />
        <motion.div
          initial={{ scaleY: 0 }} animate={{ scaleY: hovered ? 1 : 0 }} transition={{ duration: 0.80, ease: 'easeOut' }}
          style={{ position: 'absolute', top: 0, bottom: 0, right: 0, width: '2px', background: '#CE307D', transformOrigin: 'center' }}
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={client.img} alt={client.name} style={{ maxWidth: '150px', maxHeight: '60px', width: '100%', objectFit: 'contain' }} />
        <span style={{ fontSize: '0.68rem', letterSpacing: '0.03em', color: '#666', textAlign: 'center', lineHeight: 1.3 }}>{client.name}</span>
      </div>
    </motion.div>
  )
}
