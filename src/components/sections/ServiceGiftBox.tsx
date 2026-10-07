'use client'

import { useEffect, useRef, useState, type CSSProperties } from 'react'
import Link from 'next/link'
import { MotionConfig, motion, type Transition, type Variants } from 'framer-motion'
import { getService, hasServicePage } from '@/data/services'
import styles from './ServiceGiftBox.module.css'

const IDLE_DELAY = 1000 // ms without scrolling before the box opens

const BALLOONS = [
  { slug: 'search-engine-optimization', label: 'SEO' },
  { slug: 'google-ads', label: 'Google Ads' },
  { slug: 'graphic-design', label: 'Graphic Design' },
  { slug: 'social-media-marketing', label: 'Social Media Marketing' },
  { slug: 'citation-backlinks', label: 'Citation & Backlinks' },
  { slug: 'content-creation', label: 'Content Creation' },
  { slug: 'branding-strategy', label: 'Branding Strategy' },
].map(b => ({ ...b, service: getService(b.slug) }))

const spring: Transition = { type: 'spring', stiffness: 260, damping: 20 }
const boxVariants: Variants = {
  closed: { opacity: 0.4, scale: 0.92, y: 6, transition: { duration: 0.35 } },
  open: { opacity: 1, scale: 1, y: 0, transition: spring },
}
const lidVariants: Variants = {
  closed: { rotate: 0, x: 0, y: 0, transition: { duration: 0.3, ease: 'easeIn' } },
  // Hinged at the back-left; the low damping gives the lid its little bounce
  open: { rotate: -26, x: -4, y: -8, transition: { delay: 0.32, type: 'spring', stiffness: 320, damping: 11 } },
}
const glowVariants: Variants = {
  closed: { opacity: 0, scale: 0.6, transition: { duration: 0.3 } },
  open: { opacity: 1, scale: 1, transition: { delay: 0.4, duration: 0.7 } },
}

/**
 * "Gift box of services": once scrolling settles with the box on screen, the lid pops open and a
 * balloon per service rises out one by one; scrolling again pulls them back in. State only changes
 * on open/close — never per scroll event. Decorative (the same services are linked in the grid below),
 * so it is hidden from assistive tech and the balloons are pointer-only shortcuts.
 */
export function ServiceGiftBox() {
  const stageRef = useRef<HTMLDivElement>(null)
  // `cycle` rotates which services take which spot each time, so mobile (fewer spots) shows them all over time
  const [state, setState] = useState({ open: false, cycle: 0 })

  useEffect(() => {
    const stage = stageRef.current
    if (!stage) return
    let open = false
    let inView = false
    let timer = 0
    const set = (value: boolean) => {
      if (open === value) return
      open = value
      setState(prev => ({ open: value, cycle: value ? prev.cycle + 1 : prev.cycle }))
    }
    const schedule = () => {
      clearTimeout(timer)
      timer = window.setTimeout(() => {
        // Wait out the first-visit intro so the reveal is actually seen
        if (document.getElementById('site-preloader')) return schedule()
        if (inView) set(true)
      }, IDLE_DELAY)
    }
    const onScroll = () => { set(false); schedule() }
    const observer = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting
      if (inView) schedule()
      else set(false)
    }, { threshold: 0.5 })
    observer.observe(stage)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
      clearTimeout(timer)
    }
  }, [])

  const offset = (state.cycle * 4) % BALLOONS.length
  const balloons = [...BALLOONS.slice(offset), ...BALLOONS.slice(0, offset)]

  return (
    <MotionConfig reducedMotion="user">
      <div ref={stageRef} className={styles.stage} data-open={state.open || undefined} aria-hidden>
        <motion.div className={styles.glow} initial={false} animate={state.open ? 'open' : 'closed'} variants={glowVariants} />

        <ul className={styles.balloons}>
          {balloons.map((b, i) => (
            <li key={i} className={styles.balloon} style={{ '--i': i } as CSSProperties}>
              <span className={styles.float}>
                {hasServicePage(b.service) ? (
                  <Link href={b.service.href} className={styles.body} tabIndex={-1}><span>{b.label}</span></Link>
                ) : (
                  <span className={styles.body}><span>{b.label}</span></span>
                )}
                <svg className={styles.string} viewBox="0 0 12 46" aria-hidden><path d="M6 0 C 2 12, 10 26, 6 46" /></svg>
              </span>
            </li>
          ))}
        </ul>

        <motion.div className={styles.box} initial={false} animate={state.open ? 'open' : 'closed'} variants={boxVariants}>
          <motion.div className={styles.lid} variants={lidVariants}>
            <span className={styles.bow} />
          </motion.div>
          <div className={styles.boxBody} />
        </motion.div>
      </div>
    </MotionConfig>
  )
}
