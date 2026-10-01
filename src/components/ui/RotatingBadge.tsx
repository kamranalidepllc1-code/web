'use client'

import { useId, useState, type CSSProperties, type ReactNode } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const MotionLink = motion.create(Link)

// Circumference of the r=42 text path, so the text wraps the circle exactly once
const PATH_LENGTH = 2 * Math.PI * 42

export function RotatingBadge({ text, href, label, children, size = 110, caption, style }: {
  text: string
  href: string
  label: string
  children: ReactNode
  size?: number
  /** Optional readable label + value shown under the badge */
  caption?: { title: string; value: string }
  style?: CSSProperties
}) {
  const [hovered, setHovered] = useState(false)
  const pathId = `badge-path-${useId().replace(/[^a-zA-Z0-9]/g, '')}`
  // Internal routes use Link; mailto:/tel:/external links use a plain anchor
  const Anchor = href.startsWith('/') ? MotionLink : motion.a
  const core = size * 0.38
  // Shrink the type for longer phrases so the letters don't overlap around the circle
  const fontSize = Math.min(8.5, PATH_LENGTH / (text.length * 0.8))

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.9rem', flexShrink: 0, ...style }}
    >
      <motion.div
        animate={{ y: hovered ? -4 : 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'relative', width: size, height: size, borderRadius: '50%',
          background: 'radial-gradient(circle at 30% 25%, #1c1d21 0%, #000 70%)',
          border: '1px solid rgba(255,255,255,0.12)',
          boxShadow: hovered ? '0 18px 40px rgba(0,0,0,0.35)' : '0 10px 26px rgba(0,0,0,0.25)',
          transition: 'box-shadow 0.35s ease',
        }}
      >
        {/* Static inner ring */}
        <svg width={size} height={size} viewBox="0 0 110 110" aria-hidden="true" style={{ position: 'absolute', inset: 0 }}>
          <circle cx="55" cy="55" r="31" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.75" strokeDasharray="2 3" />
        </svg>
        {/* Rotating text */}
        <motion.svg
          width={size} height={size} viewBox="0 0 110 110"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 14, ease: 'linear' }}
          style={{ position: 'absolute', inset: 0 }}
          aria-hidden="true"
        >
          <defs>
            <path id={pathId} d="M 55,55 m -42,0 a 42,42 0 1,1 84,0 a 42,42 0 1,1 -84,0" fill="none" />
          </defs>
          <text fontSize={fontSize} letterSpacing="2.5" fill="#f0ede8" fontFamily="var(--font-outfit), sans-serif">
            <textPath href={`#${pathId}`} textLength={PATH_LENGTH} lengthAdjust="spacing">{text}</textPath>
          </text>
        </motion.svg>
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {/* Soft pulse behind the icon */}
          <motion.span
            aria-hidden="true"
            animate={{ scale: [1, 1.55], opacity: [0.45, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeOut' }}
            style={{ position: 'absolute', width: core, height: core, borderRadius: '50%', background: '#CE307D', pointerEvents: 'none' }}
          />
          <Anchor
            href={href}
            aria-label={label}
            whileHover={{ scale: 1.1, rotate: -8 }} whileTap={{ scale: 0.95 }}
            style={{ position: 'relative', width: core, height: core, borderRadius: '50%', background: 'linear-gradient(135deg, #e04a93 0%, #CE307D 60%, #a8215f 100%)', boxShadow: '0 0 0 3px rgba(206,48,125,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '1.15rem', textDecoration: 'none' }}
          >{children}</Anchor>
        </div>
      </motion.div>

      {caption && (
        <a href={href} style={{ textAlign: 'center', textDecoration: 'none', color: '#fff', lineHeight: 1.3 }}>
          <span style={{ display: 'block', fontSize: '0.66rem', letterSpacing: '0.14em', textTransform: 'uppercase', opacity: 0.8 }}>{caption.title}</span>
          <span style={{ display: 'block', fontSize: '0.92rem', fontWeight: 600, marginTop: '0.2rem', textDecoration: hovered ? 'underline' : 'none', textUnderlineOffset: '3px' }}>{caption.value}</span>
        </a>
      )}
    </div>
  )
}
