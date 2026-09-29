'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, ChevronDown, Plus } from 'lucide-react'
import { NAV_LINKS } from '@/data/site'
import { SERVICES } from '@/data/services'

const MotionLink = motion(Link)

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1]

// 4 columns, filled top-to-bottom. Rows grow past 4 only if there are more than 16 services.
const MEGA_ROWS = Math.max(4, Math.ceil(SERVICES.length / 4))

export function Navbar() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [megaOpen, setMegaOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const navRef = useRef<HTMLElement>(null)
  const closeTimer = useRef<ReturnType<typeof setTimeout>>(undefined)

  const openMega = () => { clearTimeout(closeTimer.current); setMegaOpen(true) }
  const closeMega = () => { clearTimeout(closeTimer.current); setMegaOpen(false) }
  const scheduleCloseMega = () => {
    clearTimeout(closeTimer.current)
    closeTimer.current = setTimeout(() => setMegaOpen(false), 160)
  }
  const closeMobile = () => { setMenuOpen(false); setMobileServicesOpen(false) }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => () => clearTimeout(closeTimer.current), [])

  // Close the mega menu on outside click or Escape
  useEffect(() => {
    if (!megaOpen) return
    const onPointerDown = (e: PointerEvent) => {
      if (!navRef.current?.contains(e.target as Node)) setMegaOpen(false)
    }
    const onKeyDown = (e: KeyboardEvent) => { if (e.key === 'Escape') setMegaOpen(false) }
    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [megaOpen])

  const solid = scrolled || megaOpen || menuOpen

  return (
    <>
      <nav ref={navRef} style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: 'clamp(0.75rem, 2.5vw, 1.1rem) clamp(1rem, 5vw, 2.5rem)',
        background: solid ? 'rgba(34,36,41,0.97)' : 'transparent',
        backdropFilter: solid ? 'blur(20px)' : 'none',
        borderBottom: solid ? '1px solid rgba(255,255,255,0.07)' : 'none',
        transition: 'background 0.35s ease, backdrop-filter 0.35s ease, border-color 0.35s ease',
      }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', gap: '0.6rem' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/Assets/logo/logo.png"
            alt="Digi Era Pro"
            style={{ height: 'clamp(2.25rem, 7vw, 3.5rem)', width: 'auto', objectFit: 'contain', display: 'block' }}
            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
          />
        </Link>
        <ul style={{ display: 'flex', gap: 'clamp(1rem, 2.5vw, 2rem)', listStyle: 'none', margin: 0, padding: 0 }} className="hide-mobile">
          {NAV_LINKS.map(l => l.megaMenu ? (
            <li key={l.label}
              onPointerEnter={e => { if (e.pointerType === 'mouse') openMega() }}
              onPointerLeave={e => { if (e.pointerType === 'mouse') scheduleCloseMega() }}
            >
              <motion.button type="button"
                onClick={() => (megaOpen ? closeMega() : openMega())}
                aria-expanded={megaOpen} aria-controls="services-mega-menu"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', background: 'none', border: 'none', padding: 0, cursor: 'pointer', font: 'inherit', color: megaOpen ? '#CE307D' : '#ffffff', fontSize: '0.78rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}
                whileHover={{ color: '#CE307D' }}
              >
                {l.label}
                <motion.span animate={{ rotate: megaOpen ? 180 : 0 }} transition={{ duration: 0.3, ease }} style={{ display: 'inline-flex' }}>
                  <ChevronDown size={14} strokeWidth={1.5} />
                </motion.span>
              </motion.button>

              <AnimatePresence>
                {megaOpen && (
                  <motion.div id="services-mega-menu" key="mega"
                    initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.3, ease }}
                    style={{ position: 'absolute', top: '100%', left: 0, right: 0, background: '#222429', borderTop: '1px solid rgba(255,255,255,0.07)', borderBottom: '1px solid rgba(255,255,255,0.07)', boxShadow: '0 30px 60px rgba(0,0,0,0.45)', maxHeight: 'calc(100vh - 5.5rem)', overflowY: 'auto' }}
                  >
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, #CE307D, #ff6eb4, #CE307D)' }} />
                    <div style={{ maxWidth: '1400px', margin: '0 auto', padding: 'clamp(1.75rem, 3vw, 2.5rem) clamp(1rem, 5vw, 2.5rem) 2rem' }}>
                      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.25rem' }}>
                        <div>
                          <span style={{ fontSize: '0.68rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#CE307D', display: 'block', marginBottom: '0.5rem' }}>Our services</span>
                          <p style={{ fontFamily: "'Fraunces', serif", fontWeight: 300, fontSize: '1.6rem', letterSpacing: '-0.02em', lineHeight: 1.1, margin: 0, color: '#f0ede8' }}>
                            Craft at every <em style={{ fontStyle: 'italic', color: '#CE307D' }}>level.</em>
                          </p>
                        </div>
                        <Link href="/#services" className="mega-link" onClick={closeMega}>
                          View all services <span aria-hidden="true">→</span>
                        </Link>
                      </div>

                      <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gridTemplateRows: `repeat(${MEGA_ROWS}, auto)`, gridAutoFlow: 'column', columnGap: 'clamp(1.5rem, 3vw, 3rem)', listStyle: 'none', margin: 0, padding: 0 }}>
                        {SERVICES.map((s, i) => (
                          <motion.li key={s.slug} style={{ minWidth: 0 }}
                            initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.35, delay: 0.04 + Math.floor(i / MEGA_ROWS) * 0.05, ease }}
                          >
                            <Link href={s.href} className="mega-item" onClick={closeMega} aria-current={pathname === s.href ? 'page' : undefined}>
                              <span className="mega-item-num">{s.num}</span>
                              <span className="mega-item-body">
                                <span className="mega-item-title">{s.title}</span>
                                <span className="mega-item-tagline">{s.tagline}</span>
                              </span>
                              <ArrowUpRight className="mega-item-arrow" size={16} strokeWidth={1.5} aria-hidden="true" />
                            </Link>
                          </motion.li>
                        ))}
                      </ul>

                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
                        <span style={{ fontSize: '0.8rem', color: 'rgba(240,237,232,0.55)' }}>Not sure which service fits your business?</span>
                        <Link href="/contact" className="mega-link" onClick={closeMega} style={{ color: '#CE307D' }}>
                          Talk to our team <span aria-hidden="true">→</span>
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          ) : (
            <li key={l.label}>
              <MotionLink href={l.href}
                style={{ color: '#ffffff', fontSize: '0.78rem', letterSpacing: '0.08em', textDecoration: 'none', textTransform: 'uppercase' }}
                whileHover={{ color: '#CE307D' }}
              >{l.label}</MotionLink>
            </li>
          ))}
        </ul>
        <MotionLink href="/#contact"
          style={{ fontSize: '0.78rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#fff', background: '#CE307D', padding: '0.6rem 1.4rem', textDecoration: 'none', fontWeight: 500 }}
          whileHover={{ scale: 1.04, boxShadow: '0 0 24px rgba(206,48,125,0.5)' }}
          whileTap={{ scale: 0.97 }}
          className="hide-mobile"
        >Start a project</MotionLink>
        <button onClick={() => (menuOpen ? closeMobile() : setMenuOpen(true))}
          style={{ background: 'none', border: 'none', color: '#f0ede8', cursor: 'pointer', display: 'none', flexDirection: 'column', gap: '5px', padding: '4px' }}
          className="show-mobile" aria-label="Menu" aria-expanded={menuOpen}
        >
          <span style={{ display: 'block', width: '24px', height: '1px', background: '#f0ede8', transition: 'transform 0.3s', transform: menuOpen ? 'translateY(6px) rotate(45deg)' : 'none' }} />
          <span style={{ display: 'block', width: '24px', height: '1px', background: '#f0ede8', transition: 'opacity 0.3s', opacity: menuOpen ? 0 : 1 }} />
          <span style={{ display: 'block', width: '24px', height: '1px', background: '#f0ede8', transition: 'transform 0.3s', transform: menuOpen ? 'translateY(-6px) rotate(-45deg)' : 'none' }} />
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            style={{ position: 'fixed', inset: 0, zIndex: 99, background: '#222429', display: 'flex', flexDirection: 'column', overflowY: 'auto', overflowX: 'hidden', overscrollBehavior: 'contain' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, #CE307D, #ff6eb4, #CE307D)' }} />
            {/* margin: auto centers the links when they fit and lets the overlay scroll when the services list is open */}
            <div style={{ margin: 'auto 0', width: '100%', padding: '6.5rem clamp(1.25rem, 6vw, 2.5rem) 3rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
              {NAV_LINKS.map((l, i) => l.megaMenu ? (
                <motion.div key={l.label}
                  initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                  style={{ width: '100%', maxWidth: '640px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                >
                  <motion.button type="button"
                    onClick={() => setMobileServicesOpen(o => !o)}
                    aria-expanded={mobileServicesOpen} aria-controls="mobile-services"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', background: 'none', border: 'none', padding: 0, cursor: 'pointer', fontFamily: "'Fraunces', serif", fontWeight: 300, fontSize: '2.5rem', color: mobileServicesOpen ? '#CE307D' : '#f0ede8' }}
                    whileHover={{ color: '#CE307D', x: 10 }}
                  >
                    {l.label}
                    <motion.span animate={{ rotate: mobileServicesOpen ? 45 : 0 }} transition={{ duration: 0.3, ease }} style={{ display: 'inline-flex' }}>
                      <Plus size={24} strokeWidth={1.25} />
                    </motion.span>
                  </motion.button>
                  <AnimatePresence initial={false}>
                    {mobileServicesOpen && (
                      <motion.div id="mobile-services" key="mobile-services"
                        initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease }}
                        style={{ overflow: 'hidden', width: '100%' }}
                      >
                        <ul className="grid grid-cols-1 sm:grid-cols-2" style={{ listStyle: 'none', margin: 0, padding: '1.25rem 0 0', columnGap: '2rem' }}>
                          {SERVICES.map(s => (
                            <li key={s.slug} style={{ minWidth: 0 }}>
                              <Link href={s.href} className="mobile-service-link" onClick={closeMobile} aria-current={pathname === s.href ? 'page' : undefined}>
                                <span style={{ fontFamily: "'Fraunces', serif", fontSize: '0.7rem', letterSpacing: '0.1em', color: 'rgba(206,48,125,0.8)', flexShrink: 0, width: '1.4rem' }}>{s.num}</span>
                                <span style={{ minWidth: 0 }}>{s.title}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ) : (
                <MotionLink key={l.label} href={l.href} onClick={closeMobile}
                  initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                  style={{ fontFamily: "'Fraunces', serif", fontSize: '2.5rem', color: '#f0ede8', textDecoration: 'none' }}
                  whileHover={{ color: '#CE307D', x: 10 }}
                >{l.label}</MotionLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
