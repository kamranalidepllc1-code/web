'use client'

import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { STATS } from '@/data/site'

export function Hero() {
  const heroRef = useRef(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const { scrollYProgress: heroScroll } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroOpacity = useTransform(heroScroll, [0, 0.6], [1, 0])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    video.play().catch(() => { })
    const handleEnded = () => { video.currentTime = 0; video.play().catch(() => { }) }
    video.addEventListener('ended', handleEnded)
    return () => video.removeEventListener('ended', handleEnded)
  }, [])

  return (
    <section ref={heroRef} style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', position: 'relative', overflow: 'hidden', background: '#0a0a0a' }}>
      {/* Gradient orbs */}
      <div style={{ position: 'absolute', top: '10%', right: '5%', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(206,48,125,0.18) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '20%', left: '-5%', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(206,48,125,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <video ref={videoRef} autoPlay muted loop playsInline style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.45, pointerEvents: 'none' }}>
        <source src="/Assets/coverr-sitting-down-in-the-office-72-1080p.mp4" type="video/mp4" />
      </video>
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #0a0a0a 0%, transparent 60%)', pointerEvents: 'none' }} />

      <motion.div style={{ position: 'relative', zIndex: 1, padding: '0 clamp(1.25rem, 6vw, 2.5rem) clamp(3rem, 10vw, 6rem)', maxWidth: '1400px', margin: '0 auto', width: '100%', paddingTop: 'clamp(100px, 22vw, 140px)', opacity: heroOpacity }}>

        <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          style={{ fontFamily: "'Fraunces', serif", fontWeight: 300, fontSize: 'clamp(2.5rem, 7.2vw, 6.5rem)', lineHeight: 0.95, letterSpacing: '-0.03em', margin: '0 0 3rem', maxWidth: 'none', color: '#f0ede8' }}>
          The Digital Marketing<br /><em style={{ color: '#CE307D', fontStyle: 'italic' }}>Agency.</em>
        </motion.h1>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.5 }}
          style={{ display: 'flex', gap: 'clamp(1.5rem, 5vw, 3rem)', flexWrap: 'wrap', alignItems: 'flex-end', marginBottom: 'clamp(2.5rem, 6vw, 5rem)' }}>
          <p style={{ maxWidth: '38ch', color: '#ffffff', fontSize: '1rem', lineHeight: 1.75, margin: 0 }}>
            We are a full-service marketing agency helping brands grow through creative strategy, compelling content, and digital experiences. We turn ideas into meaningful campaigns that connect brands with their audiences.
          </p>
          <motion.a href="#work"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.75rem',
              color: '#f0ede8', textDecoration: 'none', fontSize: '0.8rem',
              letterSpacing: '0.1em', textTransform: 'uppercase', whiteSpace: 'nowrap',
              border: '1px solid rgba(240,237,232,0.2)', padding: '0.85rem 1.75rem',
              position: 'relative', overflow: 'hidden',
            }}
            whileHover={{ borderColor: '#CE307D', color: '#CE307D' }}
            whileTap={{ scale: 0.97 }}
          >
            <motion.span
              style={{ position: 'absolute', inset: 0, background: 'rgba(206,48,125,0.08)', opacity: 0 }}
              whileHover={{ opacity: 1 }}
            />
            <span style={{ position: 'relative', zIndex: 1 }}>View our work</span>
            <motion.span
              animate={{ y: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
              style={{ display: 'inline-block', position: 'relative', zIndex: 1 }}
            >↓</motion.span>
          </motion.a>
        </motion.div>

        {/* Stats bar */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
          style={{ display: 'grid', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '2.5rem', gap: '1px', background: 'rgba(255,255,255,0.06)' }}
          className="grid grid-cols-2 sm:grid-cols-4">
          {STATS.map(s => (
            <div key={s.label} style={{ padding: '1.5rem clamp(1rem, 4vw, 2rem)', background: '#0a0a0a' }}>
              <div style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 300, color: '#CE307D', letterSpacing: '-0.03em', lineHeight: 1 }}>{s.value}</div>
              <div style={{ fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#ffffff', marginTop: '0.5rem' }}>{s.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
