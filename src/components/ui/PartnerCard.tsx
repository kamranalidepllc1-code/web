'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import type { PARTNERS } from '@/data/site'

const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1]

export function PartnerCard({ partner, index }: { partner: (typeof PARTNERS)[0]; index: number }) {
  const [hovered, setHovered] = useState(false)
  return (
    <motion.div
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.6, ease: easeOut }}
      style={{
        background: '#222429',
        padding: 'clamp(1.75rem, 5vw, 3rem) clamp(1.25rem, 4vw, 2.5rem)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1.25rem',
        minHeight: '160px',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'default',
      }}
      whileHover={{ background: '#2a2d33' }}
    >
      {/* Hover glow */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0 }}
        style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 50%, rgba(206,48,125,0.1) 0%, transparent 70%)', pointerEvents: 'none' }}
      />
      {/* Top accent line */}
      <motion.div
        animate={{ scaleX: hovered ? 1 : 0 }}
        initial={{ scaleX: 0 }}
        transition={{ duration: 0.4 }}
        style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, transparent, #CE307D, transparent)', transformOrigin: 'center' }}
      />
      {/* Logo image — no background, just the image itself */}
      <motion.div
        animate={{ y: hovered ? -4 : 0, scale: hovered ? 1.05 : 1 }}
        transition={{ duration: 0.35, ease: easeOut }}
        style={{ position: 'relative', zIndex: 1 }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={partner.img}
          alt={partner.name}
          style={{
            maxWidth: '140px',
            maxHeight: '52px',
            width: '100%',
            objectFit: 'contain',
            display: 'block',
            filter: hovered
              ? 'grayscale(0) drop-shadow(0 0 12px rgba(206,48,125,0.4))'
              : 'grayscale(1) opacity(0.55)',
            transition: 'filter 0.4s ease',
          }}
        />
      </motion.div>
      {/* Partner name — fades in on hover */}
      <motion.span
        animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 6 }}
        transition={{ duration: 0.3 }}
        style={{ fontSize: '0.68rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#ffffff', position: 'relative', zIndex: 1 }}
      >
        {partner.name}
      </motion.span>
    </motion.div>
  )
}
