'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { RevealOnScroll } from '@/lib/animations'

const EXPERTS = [
  { name: 'Muhammad', role: 'CEO / Co-Founder', img: '/Assets/about us/team/imgi_34_5-2.png' },
  { name: 'Eric Carter', role: 'Operation Manager', img: '/Assets/about us/team/imgi_35_4-1.png' },
  { name: 'Emma Wilson', role: 'Accounts / Finance Manager', img: '/Assets/about us/team/imgi_36_2-1-1.png' },
  { name: 'Sam Carter', role: 'Sales Manager', img: '/Assets/about us/team/imgi_37_3-2-1.png' },
  { name: 'Paul Smith', role: 'Customer Support Manager', img: '/Assets/about us/team/imgi_38_6-1.png' },
  { name: 'Kate Lyn', role: 'Customer Support Team Lead', img: '/Assets/about us/team/imgi_39_1-1-1.png' },
  { name: 'Peter Johnson', role: 'Senior Sales Closer', img: '/Assets/about us/team/imgi_40_Untitled-design-3-1.png' },
  { name: 'Steve King', role: 'Sales Closer', img: '/Assets/about us/team/imgi_31_Untitled-design-79-2_result.webp' },
  { name: 'Asif Ali', role: 'Administrative Manager', img: '/Assets/about us/team/imgi_32_Untitled-design-10-2.png' },
  { name: 'Amna Naveed', role: 'IT Manager', img: '/Assets/about us/team/imgi_33_Untitled-design-9-2.png' },
]

const SIDE_SCALE = 0.92

// Side cards are scaled down; shift them inward so neighbours stay edge to edge.
function cardPose(offset: number) {
  if (offset === 0) return { x: '0%', scale: 1 }
  const shift = Math.sign(offset) * (0.5 + (Math.abs(offset) - 0.5) * SIDE_SCALE)
  return { x: `${shift * 100}%`, scale: SIDE_SCALE }
}

export function AboutExperts() {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const [isHovered, setIsHovered] = useState(false)
  const len = EXPERTS.length

  const goPrev = () => {
    setDirection(-1)
    setIndex(i => (i - 1 + len) % len)
  }
  const goNext = () => {
    setDirection(1)
    setIndex(i => (i + 1) % len)
  }

  useEffect(() => {
    if (isHovered) return
    const interval = window.setInterval(goNext, 3000)
    return () => window.clearInterval(interval)
  }, [isHovered])

  return (
    <section style={{ padding: 'clamp(3.5rem, 9vw, 8rem) clamp(1.25rem, 6vw, 2.5rem)', background: '#222429' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <RevealOnScroll style={{ textAlign: 'center', marginBottom: 'clamp(3rem, 7vw, 5rem)' }}>
          <span style={{ fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#CE307D' }}>The people</span>
          <h2 style={{ fontFamily: "'Fraunces', serif", fontWeight: 300, fontSize: 'clamp(2.25rem, 5vw, 4rem)', letterSpacing: '-0.03em', margin: '1rem 0 0', lineHeight: 1.1, color: '#f0ede8' }}>
            Meet the experts who <em style={{ color: '#CE307D', fontStyle: 'italic' }}>drive your success.</em>
          </h2>
        </RevealOnScroll>

        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <motion.button
            onClick={goPrev}
            aria-label="Previous team member"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            style={{
              position: 'absolute', left: 'clamp(-0.25rem, -1.5vw, 0.75rem)', zIndex: 3, width: '44px', height: '44px', borderRadius: '50%',
              background: '#CE307D', border: 'none', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', flexShrink: 0,
            }}
          >
            <ChevronLeft size={20} />
          </motion.button>

          <div
            className="w-[var(--card-w)] sm:w-[calc(var(--card-w)*2.84)]"
            style={{ ['--card-w' as string]: 'clamp(220px, 26vw, 320px)', position: 'relative', height: 'calc(var(--card-w) * 1.72)', overflow: 'hidden' }}
          >
            <AnimatePresence initial={false} custom={direction}>
              {[-2, -1, 0, 1, 2].map(offset => {
                const i = (index + offset + len) % len
                const expert = EXPERTS[i]
                const isCenter = offset === 0
                return (
                  <motion.div
                    key={i}
                    custom={direction}
                    initial={cardPose(offset + direction)}
                    animate={cardPose(offset)}
                    variants={{ exit: (dir: number) => cardPose(offset - dir) }}
                    exit="exit"
                    transition={{ duration: 0.7, ease: [0.45, 0, 0.2, 1] }}
                    style={{
                      position: 'absolute', top: 0, bottom: 0, left: '50%', marginLeft: 'calc(var(--card-w) / -2)', width: 'var(--card-w)',
                      willChange: 'transform',
                      overflow: 'hidden', borderRadius: '18px', zIndex: isCenter ? 2 : 1,
                      boxShadow: isCenter ? '0 25px 60px rgba(0,0,0,0.5)' : 'none',
                    }}
                  >
                    <Image src={expert.img} alt={expert.name} fill sizes="(max-width: 640px) 80vw, 320px" style={{ objectFit: 'cover' }} priority={Math.abs(offset) <= 1} />
                    <motion.div
                      initial={false}
                      animate={{ opacity: isCenter ? 1 : 0 }}
                      transition={{ duration: 0.4, delay: isCenter ? 0.35 : 0 }}
                      style={{ position: 'absolute', inset: 0 }}
                    >
                      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 45%, rgba(206,48,125,0.55) 75%, rgba(206,48,125,0.92) 100%)' }} />
                      <div style={{ position: 'absolute', left: '1.5rem', right: '1.5rem', bottom: '1.75rem', textAlign: 'center' }}>
                        <span style={{ fontSize: '0.68rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.85)', display: 'block', marginBottom: '0.4rem' }}>{expert.role}</span>
                        <span style={{ fontFamily: "'Fraunces', serif", fontWeight: 500, fontSize: '1.5rem', color: '#ffffff' }}>{expert.name}</span>
                      </div>
                    </motion.div>
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </div>

          <motion.button
            onClick={goNext}
            aria-label="Next team member"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            style={{
              position: 'absolute', right: 'clamp(-0.25rem, -1.5vw, 0.75rem)', zIndex: 3, width: '44px', height: '44px', borderRadius: '50%',
              background: '#CE307D', border: 'none', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', flexShrink: 0,
            }}
          >
            <ChevronRight size={20} />
          </motion.button>
        </div>
      </div>
    </section>
  )
}
