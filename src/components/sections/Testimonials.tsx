'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { RevealOnScroll } from '@/lib/animations'
import { ExpandableQuote } from '@/components/ui/ExpandableQuote'
import { useGoogleReviews } from '@/hooks/useGoogleReviews'
import { TESTIMONIALS } from '@/data/site'

export function Testimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [testimonialPaused, setTestimonialPaused] = useState(false)
  const testimonialRef = useRef<HTMLDivElement>(null)
  const { data: googleData } = useGoogleReviews()

  const clientVoices = googleData && googleData.reviews && googleData.reviews.length > 0
    ? googleData.reviews.map(r => ({ quote: r.text, author: r.author_name, title: r.relative_time_description, avatar: r.profile_photo_url, rating: r.rating }))
    : TESTIMONIALS

  useEffect(() => {
    if (testimonialPaused) return
    const interval = setInterval(() => {
      setActiveTestimonial(prev => (prev + 1) % clientVoices.length)
    }, 12000)
    return () => clearInterval(interval)
  }, [testimonialPaused, clientVoices.length])

  const active = clientVoices[activeTestimonial % clientVoices.length]

  return (
    <section style={{ padding: 'clamp(2rem, 4vw, 3rem) clamp(1.25rem, 6vw, 2.5rem)', background: '#222429', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '30%', left: '-10%', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(206,48,125,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <RevealOnScroll>
          <span style={{ fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#CE307D', display: 'block', marginBottom: '2.5rem' }}>Client voices</span>
        </RevealOnScroll>
        <div style={{ display: 'grid', gap: '6rem', alignItems: 'start' }} className="grid grid-cols-1 lg:grid-cols-2">
          <div style={{ position: 'sticky', top: '8rem' }}>
            <AnimatePresence mode="wait">
              <motion.div key={activeTestimonial}
                initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -24 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <ExpandableQuote quote={active.quote} />
              </motion.div>
            </AnimatePresence>
            <AnimatePresence mode="wait">
              <motion.div key={`a-${activeTestimonial}`}
                initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
                style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <Image src={active.avatar} alt={active.author} width={48} height={48} unoptimized
                  style={{ borderRadius: '50%', objectFit: 'cover', border: '2px solid rgba(206,48,125,0.4)', flexShrink: 0 }} />
                <div>
                  <div style={{ display: 'flex', gap: '2px', marginBottom: '0.3rem' }}>
                    {Array.from({ length: 5 }).map((_, si) => (
                      <span key={si} style={{ color: si < Math.round(active.rating) ? '#CE307D' : 'rgba(240,237,232,0.2)', fontSize: '0.85rem' }}>★</span>
                    ))}
                  </div>
                  <p style={{ fontWeight: 500, margin: '0 0 0.2rem', fontSize: '0.9rem', color: '#f0ede8' }}>{active.author}</p>
                  <p style={{ color: '#ffffff', margin: 0, fontSize: '0.8rem', letterSpacing: '0.04em' }}>{active.title}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          <div
            ref={testimonialRef}
            style={{ position: 'relative', height: '300px', overflow: 'hidden' }}
            onMouseEnter={() => setTestimonialPaused(true)}
            onMouseLeave={() => setTestimonialPaused(false)}
          >
            <div style={{
              display: 'flex', flexDirection: 'column', gap: '1px',
              animation: 'scrollUp 60s linear infinite',
              animationPlayState: testimonialPaused ? 'paused' : 'running',
            }}>
              {[...clientVoices, ...clientVoices].map((t, i) => (
                <motion.div key={i}
                  data-testimonial
                  onClick={() => { setActiveTestimonial(i % clientVoices.length); setTestimonialPaused(true) }}
                  style={{ padding: '1.25rem 2rem', cursor: 'pointer', borderLeft: '2px solid transparent', background: '#222429', flexShrink: 0 }}
                  whileHover={{ background: 'rgba(206,48,125,0.05)', borderLeftColor: '#CE307D' }}
                  transition={{ duration: 0.2 }}>
                  <p style={{ fontFamily: "var(--font-fraunces), serif", fontWeight: 300, fontSize: '0.95rem', margin: '0 0 0.3rem', color: '#ffffff', whiteSpace: 'nowrap' }}>{t.author}</p>
                  <p style={{ fontSize: '0.75rem', color: '#ffffff', margin: '0 0 0.3rem', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '28ch' }}>
                    {t.quote.slice(0, 60)}{t.quote.length > 60 ? '...' : ''}
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <div style={{ display: 'flex', gap: '1px' }}>
                      {Array.from({ length: 5 }).map((_, si) => (
                        <span key={si} style={{ color: si < Math.round(t.rating) ? '#CE307D' : 'rgba(240,237,232,0.15)', fontSize: '0.65rem' }}>★</span>
                      ))}
                    </div>
                    <span style={{ fontSize: '0.7rem', color: '#ffffff' }}>{t.rating}.0</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
