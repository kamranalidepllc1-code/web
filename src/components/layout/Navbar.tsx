'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, ChevronDown, Plus, Search, X } from 'lucide-react'
import { NAV_LINKS, PARTNERS } from '@/data/site'
import { SERVICES } from '@/data/services'
import { AiSearch } from '@/components/ai/AiSearch'
import { ThemeToggle } from '@/components/layout/ThemeToggle'

const MotionLink = motion.create(Link)

const SSL_BADGE = PARTNERS.find(p => p.name === 'Secured by PositiveSSL')!

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1]

// 4 columns, filled left-to-right in the order of SERVICES.
const MEGA_COLS = 4

export function Navbar() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [megaOpen, setMegaOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
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

  // Search popup: close on Escape and lock page scroll while open
  useEffect(() => {
    if (!searchOpen) return
    const onKeyDown = (e: KeyboardEvent) => { if (e.key === 'Escape') setSearchOpen(false) }
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = prevOverflow
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [searchOpen])

  const solid = scrolled || megaOpen || menuOpen

  return (
    <>
      <nav ref={navRef} style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: 'clamp(0.75rem, 2.5vw, 1.1rem) clamp(1rem, 5vw, 2.5rem)',
        background: solid ? 'rgba(var(--bg-rgb),0.97)' : 'transparent',
        backdropFilter: solid ? 'blur(20px)' : 'none',
        borderBottom: solid ? '1px solid rgba(var(--line-rgb), 0.07)' : 'none',
        transition: 'background 0.35s ease, backdrop-filter 0.35s ease, border-color 0.35s ease',
      }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', gap: '0.6rem' }}>
          <Image
            src="/Assets/logo/logo-112.webp"
            alt="Digi Era Pro"
            width={112}
            height={56}
            priority
            style={{ height: 'clamp(2.25rem, 7vw, 3.5rem)', width: 'auto', objectFit: 'contain', display: 'block' }}
          />
        </Link>
        {/* SSL trust badge — centered in the bar on mobile only */}
        <a href={SSL_BADGE.href} target="_blank" rel="noopener noreferrer" aria-label={SSL_BADGE.name}
          className="show-mobile"
          style={{ display: 'none', position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', alignItems: 'center' }}
        >
          <Image src={SSL_BADGE.img} alt={SSL_BADGE.name}
            width={120}
            height={36}
            style={{ height: 'clamp(1.5rem, 6vw, 2.25rem)', maxWidth: '30vw', width: 'auto', objectFit: 'contain', display: 'block' }}
          />
        </a>
        <ul style={{ display: 'flex', gap: 'clamp(1rem, 2.5vw, 2rem)', listStyle: 'none', margin: 0, padding: 0 }} className="hide-mobile">
          {NAV_LINKS.map(l => l.megaMenu ? (
            <li key={l.label}
              onPointerEnter={e => { if (e.pointerType === 'mouse') openMega() }}
              onPointerLeave={e => { if (e.pointerType === 'mouse') scheduleCloseMega() }}
            >
              <motion.button type="button"
                onClick={() => (megaOpen ? closeMega() : openMega())}
                aria-expanded={megaOpen} aria-controls="services-mega-menu"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', background: 'none', border: 'none', padding: 0, cursor: 'pointer', font: 'inherit', color: megaOpen ? '#CE307D' : 'var(--fg-strong)', fontSize: '0.78rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}
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
                    style={{ position: 'absolute', top: '100%', left: 0, right: 0, background: 'var(--bg)', borderTop: '1px solid rgba(var(--line-rgb), 0.07)', borderBottom: '1px solid rgba(var(--line-rgb), 0.07)', boxShadow: '0 30px 60px rgba(0,0,0,0.45)', maxHeight: 'calc(100vh - 5.5rem)', overflowY: 'auto' }}
                  >
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, #CE307D, #ff6eb4, #CE307D)' }} />
                    <div style={{ maxWidth: '1400px', margin: '0 auto', padding: 'clamp(1.75rem, 3vw, 2.5rem) clamp(1rem, 5vw, 2.5rem) 2rem' }}>
                      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.25rem' }}>
                        <div>
                          <span style={{ fontSize: '0.68rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#CE307D', display: 'block', marginBottom: '0.5rem' }}>Our services</span>
                          <p style={{ fontFamily: "var(--font-fraunces), serif", fontWeight: 300, fontSize: '1.6rem', letterSpacing: '-0.02em', lineHeight: 1.1, margin: 0, color: 'var(--fg)' }}>
                            Craft at every <em style={{ fontStyle: 'italic', color: '#CE307D' }}>level.</em>
                          </p>
                        </div>
                        <Link href="/#services" className="mega-link" onClick={closeMega}>
                          View all services <span aria-hidden="true">→</span>
                        </Link>
                      </div>

                      <ul style={{ display: 'grid', gridTemplateColumns: `repeat(${MEGA_COLS}, minmax(0, 1fr))`,columnGap: 'clamp(1.5rem, 3vw, 3rem)', listStyle: 'none', margin: 0, padding: 0 }}>
                        {SERVICES.map((s, i) => (
                          <motion.li key={s.slug} style={{ minWidth: 0 }}
                            initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.35, delay: 0.04 + (i % MEGA_COLS) * 0.05, ease }}
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
                        <span style={{ fontSize: '0.8rem', color: 'rgba(var(--fg-rgb),0.55)' }}></span>
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
                style={{ color: 'var(--fg-strong)', fontSize: '0.78rem', letterSpacing: '0.08em', textDecoration: 'none', textTransform: 'uppercase' }}
                whileHover={{ color: '#CE307D' }}
              >{l.label}</MotionLink>
            </li>
          ))}
        </ul>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(0.75rem, 1.5vw, 1.1rem)' }}>
        <motion.button type="button" onClick={() => { closeMega(); closeMobile(); setSearchOpen(true) }}
          aria-label="Search the website" title="Search" aria-haspopup="dialog" aria-expanded={searchOpen}
          style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 38, height: 38, borderRadius: '50%', border: '1px solid rgba(var(--line-rgb), 0.18)', background: 'none', color: 'var(--fg)', cursor: 'pointer', padding: 0 }}
          whileHover={{ borderColor: '#CE307D', color: '#CE307D' }}
        ><Search size={16} strokeWidth={1.8} /></motion.button>
        <ThemeToggle />
        <MotionLink href="/contact#contact-form"
          style={{ fontSize: '0.78rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#fff', background: '#CE307D', padding: '0.6rem 1.4rem', textDecoration: 'none', fontWeight: 500 }}
          whileHover={{ scale: 1.04, boxShadow: '0 0 24px rgba(206,48,125,0.5)' }}
          whileTap={{ scale: 0.97 }}
          className="hide-mobile"
        >Start a project</MotionLink>
        <button onClick={() => (menuOpen ? closeMobile() : setMenuOpen(true))}
          style={{ background: 'none', border: 'none', color: 'var(--fg)', cursor: 'pointer', display: 'none', flexDirection: 'column', gap: '5px', padding: '4px' }}
          className="show-mobile" aria-label="Menu" aria-expanded={menuOpen}
        >
          <span style={{ display: 'block', width: '24px', height: '1px', background: 'var(--fg)', transition: 'transform 0.3s', transform: menuOpen ? 'translateY(6px) rotate(45deg)' : 'none' }} />
          <span style={{ display: 'block', width: '24px', height: '1px', background: 'var(--fg)', transition: 'opacity 0.3s', opacity: menuOpen ? 0 : 1 }} />
          <span style={{ display: 'block', width: '24px', height: '1px', background: 'var(--fg)', transition: 'transform 0.3s', transform: menuOpen ? 'translateY(-6px) rotate(-45deg)' : 'none' }} />
        </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            style={{ position: 'fixed', inset: 0, zIndex: 99, background: 'var(--bg)', display: 'flex', flexDirection: 'column', overflowY: 'auto', overflowX: 'hidden', overscrollBehavior: 'contain' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, #CE307D, #ff6eb4, #CE307D)' }} />
            {/* margin: auto centers the links when they fit and lets the overlay scroll when the services list is open */}
            <div style={{ margin: 'auto 0', width: '100%', padding: '6.5rem clamp(1.25rem, 6vw, 2.5rem) 2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
              {NAV_LINKS.map((l, i) => l.megaMenu ? (
                <motion.div key={l.label}
                  initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                  style={{ width: '100%', maxWidth: '640px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                >
                  <motion.button type="button"
                    onClick={() => setMobileServicesOpen(o => !o)}
                    aria-expanded={mobileServicesOpen} aria-controls="mobile-services"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', background: 'none', border: 'none', padding: 0, cursor: 'pointer', fontFamily: "var(--font-fraunces), serif", fontWeight: 300, fontSize: '2.5rem', color: mobileServicesOpen ? '#CE307D' : 'var(--fg)' }}
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
                                <span style={{ fontFamily: "var(--font-fraunces), serif", fontSize: '0.7rem', letterSpacing: '0.1em', color: 'rgba(206,48,125,0.8)', flexShrink: 0, width: '1.4rem' }}>{s.num}</span>
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
                  style={{ fontFamily: "var(--font-fraunces), serif", fontSize: '2.5rem', color: 'var(--fg)', textDecoration: 'none' }}
                  whileHover={{ color: '#CE307D', x: 10 }}
                >{l.label}</MotionLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {searchOpen && (
          <motion.div key="search-popup"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}
            onClick={() => setSearchOpen(false)}
            style={{ position: 'fixed', inset: 0, zIndex: 200, background: 'rgba(10,11,13,0.72)', backdropFilter: 'blur(8px)', display: 'flex', justifyContent: 'center', alignItems: 'flex-start', padding: 'clamp(1rem, 8vh, 5rem) clamp(1rem, 4vw, 2rem)', overflowY: 'auto', overscrollBehavior: 'contain' }}
          >
            <motion.div role="dialog" aria-modal="true" aria-label="Search the website"
              initial={{ opacity: 0, y: -16, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.3, ease }}
              onClick={e => e.stopPropagation()}
              // Close when a result link is followed
              onClickCapture={e => { if ((e.target as HTMLElement).closest('a')) setSearchOpen(false) }}
              style={{ position: 'relative', width: '100%', maxWidth: '960px', background: 'var(--bg)', color: 'var(--fg)', borderRadius: 18, border: '1px solid rgba(var(--line-rgb), 0.08)', boxShadow: '0 40px 80px rgba(0,0,0,0.5)', padding: 'clamp(1.25rem, 4vw, 2.25rem)', fontFamily: "var(--font-outfit), sans-serif" }}
            >
              <div style={{ position: 'absolute', top: 0, left: 18, right: 18, height: '2px', background: 'linear-gradient(90deg, #CE307D, #ff6eb4, #CE307D)' }} />
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem', marginBottom: '1.25rem' }}>
                <div>
                  <span style={{ fontSize: '0.68rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#CE307D' }}>AI search</span>
                  <p style={{ fontFamily: "var(--font-fraunces), serif", fontWeight: 300, fontSize: 'clamp(1.5rem, 4vw, 2.1rem)', letterSpacing: '-0.02em', lineHeight: 1.1, margin: '0.4rem 0 0' }}>
                    What does your <em style={{ color: '#CE307D' }}>business need?</em>
                  </p>
                </div>
                <button type="button" onClick={() => setSearchOpen(false)} aria-label="Close search"
                  style={{ flexShrink: 0, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 38, height: 38, borderRadius: '50%', border: '1px solid rgba(var(--line-rgb), 0.18)', background: 'none', color: 'var(--fg)', cursor: 'pointer' }}
                ><X size={16} /></button>
              </div>
              <AiSearch initialQuery="" syncUrl={false} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
