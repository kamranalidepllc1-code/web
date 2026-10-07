  'use client'

import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import { motion, useMotionValue, useMotionValueEvent, useReducedMotion, useTransform } from 'framer-motion'

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1]
const wipeEase: [number, number, number, number] = [0.76, 0, 0.24, 1]

const MIN_DURATION = 2200 // ms — lets the fill read as a deliberate reveal on fast connections
const MAX_DURATION = 8000 // ms — never trap the visitor behind the loader
const HOLD_AT_COMPLETE = 600 // ms

const CURTAINS = ['left', 'right'] as const
const CURTAIN_DURATION = 1.1
const PINK_LAG = 0.12

const WORDMARK = 'Digi Era Pro'
const SERVICES = ['SEO', 'Social Media', 'Branding', 'Google Ads', 'Web Development', 'Content Creation', 'Graphic Design', 'App Development']

type Phase = 'loading' | 'complete' | 'leaving' | 'done'

/**
 * The branded intro plays once, on the first visit. Every page opened after that
 * (client-side navigation) gets only the curtain reveal. Public site only — not the admin tools.
 */
export function Preloader() {
  const pathname = usePathname()
  // Count page changes; the layout (and this component) stays mounted across navigations.
  const [nav, setNav] = useState({ path: pathname, count: 0 })
  if (nav.path !== pathname) setNav({ path: pathname, count: nav.count + 1 })

  if (pathname?.startsWith('/admin')) return null
  return (
    <>
      <SitePreloader />
      {nav.count > 0 && <CurtainReveal key={nav.count} />}
    </>
  )
}

/** Both halves of the curtain. Closed until `opening`, then each slides out with a pink layer trailing it. */
function Curtains({ opening }: { opening: boolean }) {
  return (
    <div aria-hidden style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
      {CURTAINS.map(side => {
        const off = side === 'left' ? '-100%' : '100%'
        const box = { position: 'absolute' as const, top: 0, bottom: 0, width: '50.5%', [side]: 0 }
        return (
          <div key={side}>
            {opening && (
              <motion.div
                initial={{ x: '0%' }}
                animate={{ x: off }}
                transition={{ duration: CURTAIN_DURATION, delay: PINK_LAG, ease: wipeEase }}
                style={{ ...box, background: '#CE307D' }}
              />
            )}
            <motion.div
              initial={{ x: '0%' }}
              animate={{ x: opening ? off : '0%' }}
              transition={{ duration: CURTAIN_DURATION, ease: wipeEase }}
              style={{ ...box, background: 'var(--bg)', willChange: 'transform' }}
            />
          </div>
        )
      })}
    </div>
  )
}

/** Curtain-only reveal for page navigations: mounts closed over the new page, then opens. */
function CurtainReveal() {
  const reduceMotion = useReducedMotion()
  const [done, setDone] = useState(false)

  useEffect(() => {
    const id = window.setTimeout(() => setDone(true), (CURTAIN_DURATION + PINK_LAG) * 1000 + 100)
    return () => window.clearTimeout(id)
  }, [])

  if (done || reduceMotion) return null
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 9999, pointerEvents: 'none' }}>
      <Curtains opening />
    </div>
  )
}

function SitePreloader() {
  const [phase, setPhase] = useState<Phase>('loading')
  const reduceMotion = useReducedMotion()
  const progress = useMotionValue(0)
  const fillClip = useTransform(progress, v => `inset(${100 - v}% 0 0 0)`)
  const lineTop = useTransform(progress, v => `${100 - v}%`)
  const countRef = useRef<HTMLSpanElement>(null)

  useMotionValueEvent(progress, 'change', v => {
    if (countRef.current) countRef.current.textContent = String(Math.round(v)).padStart(2, '0')
  })

  // Progress: ease toward 90% while the page loads, glide to 100% once it's ready.
  useEffect(() => {
    const root = document.documentElement
    root.style.overflow = 'hidden'

    let loaded = document.readyState === 'complete'
    const onLoad = () => { loaded = true }
    window.addEventListener('load', onLoad)

    const start = performance.now()
    let current = 0
    let raf = 0

    const tick = (now: number) => {
      const elapsed = now - start
      const finished = (loaded && elapsed >= MIN_DURATION) || elapsed >= MAX_DURATION
      const target = finished ? 100 : 90 * (1 - Math.exp(-elapsed / 1300))
      current += (target - current) * (finished ? 0.1 : 0.05)

      if (finished && 100 - current < 0.5) {
        progress.set(100)
        setPhase('complete')
        return
      }
      progress.set(current)
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('load', onLoad)
      root.style.overflow = ''
    }
  }, [progress])

  // Hold on the completed state, open the curtains, then unmount.
  useEffect(() => {
    if (phase === 'complete') {
      const id = window.setTimeout(() => setPhase('leaving'), HOLD_AT_COMPLETE)
      return () => window.clearTimeout(id)
    }
    if (phase === 'leaving') {
      const total = reduceMotion ? 500 : (CURTAIN_DURATION + PINK_LAG) * 1000 + 100
      const id = window.setTimeout(() => {
        document.documentElement.style.overflow = ''
        setPhase('done')
      }, total)
      return () => window.clearTimeout(id)
    }
  }, [phase, reduceMotion])

  if (phase === 'done') return null

  const leaving = phase === 'leaving'
  const wordmarkStyle = {
    display: 'block', fontFamily: "var(--font-outfit), sans-serif", fontWeight: 700, textTransform: 'uppercase' as const,
    fontSize: 'clamp(2.6rem, 11.5vw, 10.5rem)', lineHeight: 1, letterSpacing: '-0.04em', whiteSpace: 'nowrap' as const,
  }

  return (
    <motion.div
      id="site-preloader"
      role="status"
      aria-live="polite"
      aria-label="Loading Digi Era Pro"
      animate={reduceMotion && leaving ? { opacity: 0 } : { opacity: 1 }}
      transition={{ duration: 0.4 }}
      style={{
        position: 'fixed', inset: 0, zIndex: 9999, color: 'var(--fg)',
        fontFamily: "var(--font-outfit), sans-serif", pointerEvents: leaving ? 'none' : 'auto',
      }}
    >
      {/* Curtains: the screen splits at the centre and both halves slide out, a pink layer trailing each */}
      <Curtains opening={leaving && !reduceMotion} />

      <motion.div
        animate={{ opacity: leaving ? 0 : 1, scale: leaving ? 0.96 : 1 }}
        transition={{ duration: 0.35, ease }}
        style={{
          position: 'absolute', inset: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center', padding: '0 clamp(1rem, 4vw, 2.5rem)',
        }}
      >
        {/* Logo mark */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease }}
          style={{ position: 'absolute', top: 'clamp(1.25rem, 4vw, 2.25rem)', left: 0, right: 0, display: 'flex', justifyContent: 'center' }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/Assets/logo/logo-112.webp" alt="Digi Era Pro" width={112} height={56} style={{ height: 'clamp(2.25rem, 6vw, 3rem)', width: 'auto', display: 'block' }} />
        </motion.div>

        {/* Wordmark: outline that fills with brand pink as the site loads.
            Its entrance is CSS (globals.css .preloader-rise) so it paints before hydration. */}
        <div className="preloader-rise" style={{ position: 'relative' }}>
          <span aria-hidden style={{ ...wordmarkStyle, color: 'transparent', WebkitTextStroke: '1px rgba(var(--fg-rgb),0.28)' }}>
            {WORDMARK}
          </span>
          <motion.span
            aria-hidden
            style={{
              ...wordmarkStyle, position: 'absolute', inset: 0, clipPath: fillClip,
              background: 'linear-gradient(180deg, #e0529a 0%, #CE307D 55%, #8f1d56 100%)',
              WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent',
            }}
          >
            {WORDMARK}
          </motion.span>
          {/* Scan line riding the fill edge */}
          <motion.span
            aria-hidden
            initial={{ opacity: 0.7 }}
            animate={{ opacity: phase === 'loading' ? 0.7 : 0 }}
            style={{
              position: 'absolute', left: '-4%', right: '-4%', top: lineTop, height: '1px',
              background: 'linear-gradient(90deg, transparent, var(--fg) 20%, var(--fg) 80%, transparent)',
              boxShadow: '0 0 12px rgba(206,48,125,0.9)',
            }}
          />
        </div>

        {/* Meta row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          style={{
            width: '100%', maxWidth: '62rem', marginTop: 'clamp(1.25rem, 3vw, 2rem)',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem',
            fontSize: '0.66rem', letterSpacing: '0.24em', textTransform: 'uppercase', color: 'rgba(var(--fg-rgb),0.5)',
          }}
        >
          <span>Est. 2018</span>
          <span className="hidden sm:inline">Strategy · Creativity · Growth</span>
          <span style={{ color: 'var(--fg)', fontVariantNumeric: 'tabular-nums', letterSpacing: '0.12em' }}>
            <span ref={countRef}>00</span><span style={{ color: '#CE307D' }}>%</span>
          </span>
        </motion.div>

        {/* Services ticker */}
        <motion.div
          aria-hidden
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          style={{
            position: 'absolute', bottom: 'clamp(1.25rem, 4vw, 2.25rem)', left: 0, right: 0, overflow: 'hidden',
            maskImage: 'linear-gradient(90deg, transparent, #000 15%, #000 85%, transparent)',
            WebkitMaskImage: 'linear-gradient(90deg, transparent, #000 15%, #000 85%, transparent)',
          }}
        >
          <div style={{ display: 'flex', width: 'max-content', animation: reduceMotion ? 'none' : 'marquee 22s linear infinite' }}>
            {[0, 1].map(copy => (
              <div key={copy} style={{ display: 'flex' }}>
                {SERVICES.map(s => (
                  <span key={s} style={{ padding: '0 1.4rem', fontSize: '0.68rem', letterSpacing: '0.24em', textTransform: 'uppercase', color: 'rgba(var(--fg-rgb),0.3)', whiteSpace: 'nowrap' }}>
                    {s}<span style={{ color: '#CE307D', marginLeft: '2.8rem' }}>✦</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
