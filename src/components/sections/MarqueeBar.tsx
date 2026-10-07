'use client'

import { useEffect, useRef, useState, type CSSProperties } from 'react'
import { motion, useInView } from 'framer-motion'
import { MARQUEE_WORDS } from '@/data/site'

export function MarqueeBar() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [phase, setPhase] = useState<'typing' | 'scrolling'>('typing')
  const [typed, setTyped] = useState('')
  const [paused, setPaused] = useState(false)
  const firstWord = MARQUEE_WORDS[0]

  useEffect(() => {
    if (!inView || phase !== 'typing') return
    if (typed.length >= firstWord.length) {
      const t = setTimeout(() => setPhase('scrolling'), 700)
      return () => clearTimeout(t)
    }
    const t = setTimeout(() => setTyped(firstWord.slice(0, typed.length + 1)), 70)
    return () => clearTimeout(t)
  }, [inView, phase, typed, firstWord])

  const wordStyle: CSSProperties = {
    fontFamily: "var(--font-fraunces), serif", fontStyle: 'italic', fontWeight: 300,
    fontSize: 'clamp(1.25rem, 3vw, 2.5rem)', letterSpacing: '-0.02em', lineHeight: 1,
    color: 'transparent', WebkitTextStroke: '1.5px rgba(var(--fg-rgb),0.7)',
  } as CSSProperties

  return (
    <div
      ref={ref}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      style={{
        overflow: 'hidden', background: 'var(--bg)',
        borderTop: '1px solid rgba(var(--line-rgb), 0.08)', borderBottom: '1px solid rgba(var(--line-rgb), 0.08)',
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 6%, black 94%, transparent)',
        maskImage: 'linear-gradient(to right, transparent, black 6%, black 94%, transparent)',
      }}
    >
      <div style={{ padding: '2.5rem 0', overflow: 'hidden', display: 'flex', justifyContent: phase === 'scrolling' ? 'flex-start' : 'center' }}>
        {phase === 'scrolling' ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: '3.5rem', whiteSpace: 'nowrap', animation: 'marquee 34s linear infinite', animationPlayState: paused ? 'paused' : 'running' }}>
            {Array(8).fill(MARQUEE_WORDS).flat().map((t, i) => (
              <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: '3.5rem' }}>
                <span style={wordStyle}>{t}</span>
                <span style={{ color: '#CE307D', fontSize: 'clamp(1rem, 1.5vw, 1.5rem)' }}>✦</span>
              </span>
            ))}
          </div>
        ) : (
          <span style={wordStyle}>
            {typed}
            <motion.span animate={{ opacity: [1, 0] }} transition={{ duration: 0.6, repeat: Infinity, repeatType: 'reverse' }} style={{ marginLeft: '6px', color: '#CE307D', WebkitTextStroke: '0px' }}>|</motion.span>
          </span>
        )}
      </div>
    </div>
  )
}
