'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { RevealOnScroll } from '@/lib/animations'
import type { ServicePageContent } from '@/types/site'

export function ServiceShowcase({ showcase }: { showcase: ServicePageContent['showcase'] }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])

  return (
    <section ref={ref} style={{ position: 'relative', overflow: 'hidden', minHeight: 'clamp(420px, 72vh, 680px)', display: 'flex', alignItems: 'flex-end', background: '#222429' }}>
      <motion.div style={{ position: 'absolute', inset: '-10% 0', y: imgY }}>
        {showcase.image ? (
          <Image src={showcase.image} alt="" fill sizes="100vw" style={{ objectFit: 'cover', objectPosition: 'center' }} />
        ) : (
          // No photo: brand-coloured grid and glows
          <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 75% 35%, rgba(206,48,125,0.45) 0%, transparent 45%), radial-gradient(circle at 20% 80%, rgba(255,110,180,0.18) 0%, transparent 40%), #272a30' }}>
            <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '56px 56px', maskImage: 'radial-gradient(ellipse at 70% 40%, #000 0%, transparent 75%)', WebkitMaskImage: 'radial-gradient(ellipse at 70% 40%, #000 0%, transparent 75%)' }} />
          </div>
        )}
      </motion.div>
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(34,36,41,0.95) 0%, rgba(34,36,41,0.55) 50%, rgba(34,36,41,0.35) 100%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(34,36,41,0.7) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ position: 'relative', zIndex: 1, width: '100%', maxWidth: '1400px', margin: '0 auto', padding: 'clamp(2rem, 4vw, 3rem) clamp(1.25rem, 6vw, 2.5rem)' }}>
        <RevealOnScroll>
          <p style={{ fontFamily: "var(--font-fraunces), serif", fontWeight: 300, fontSize: 'clamp(2.25rem, 6vw, 5.5rem)', letterSpacing: '-0.035em', lineHeight: 1, margin: '0 0 1.5rem', color: '#f0ede8', maxWidth: '16ch' }}>
            {showcase.statement} <em style={{ color: '#CE307D', fontStyle: 'italic' }}>{showcase.statementAccent}</em>
          </p>
          <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'stretch', maxWidth: '520px' }}>
            <span style={{ width: '1px', background: '#CE307D', flexShrink: 0 }} />
            <p style={{ color: '#ffffff', fontSize: '0.95rem', lineHeight: 1.75, margin: 0 }}>{showcase.caption}</p>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
