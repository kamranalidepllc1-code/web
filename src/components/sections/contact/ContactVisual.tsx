'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const STATEMENT = 'We show up early, stay late, and get it done — together.'

export function ContactVisual() {
  const sectionRef = useRef(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const inView = useInView(sectionRef, { once: true, margin: '-100px' })
  const [typed, setTyped] = useState('')

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    video.play().catch(() => { })
    const handleEnded = () => { video.currentTime = 0; video.play().catch(() => { }) }
    video.addEventListener('ended', handleEnded)
    return () => video.removeEventListener('ended', handleEnded)
  }, [])

  useEffect(() => {
    if (!inView) return
    if (typed.length >= STATEMENT.length) return
    const t = setTimeout(() => setTyped(STATEMENT.slice(0, typed.length + 1)), 32)
    return () => clearTimeout(t)
  }, [inView, typed])

  return (
    <section ref={sectionRef} style={{ position: 'relative', minHeight: 'clamp(500px, 62vw, 760px)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        controls={false}
        preload="auto"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', pointerEvents: 'none' }}
      >
        <source src="/Assets/contact-us/Contact us.mp4" type="video/mp4" />
      </video>
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(10,10,10,0.68)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 55%, #0a0a0a 100%)', pointerEvents: 'none' }} />
      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '820px', margin: '0 auto', padding: 'clamp(3rem, 8vw, 4.5rem) clamp(1.25rem, 6vw, 2.5rem)' }}>
        <motion.span initial={{ opacity: 0, y: 10 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}
          style={{ fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#CE307D', display: 'block', marginBottom: '1.5rem' }}>
          How we work
        </motion.span>
        <p style={{ fontFamily: "'Fraunces', serif", fontWeight: 300, fontSize: 'clamp(1.5rem, 3.6vw, 2.75rem)', letterSpacing: '-0.02em', lineHeight: 1.25, color: '#f0ede8', margin: 0, minHeight: '1.25em' }}>
          {typed}
          {typed.length < STATEMENT.length && (
            <motion.span animate={{ opacity: [1, 0] }} transition={{ duration: 0.6, repeat: Infinity, repeatType: 'reverse' }} style={{ marginLeft: '3px', color: '#CE307D' }}>|</motion.span>
          )}
        </p>
      </div>
    </section>
  )
}
