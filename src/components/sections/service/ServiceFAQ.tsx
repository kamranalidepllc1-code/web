'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import { RevealOnScroll, StaggerOnScroll, fadeUp } from '@/lib/animations'
import { EyebrowLabel } from '@/components/ui/EyebrowLabel'
import type { ServicePageContent } from '@/types/site'

export function ServiceFAQ({ faq }: { faq: NonNullable<ServicePageContent['faq']> }) {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section style={{ padding: 'clamp(3.5rem, 9vw, 8rem) clamp(1.25rem, 6vw, 2.5rem)', background: '#0f0f0f' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'grid', gap: 'clamp(2.5rem, 6vw, 5rem)', alignItems: 'start' }} className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
        <RevealOnScroll>
          <EyebrowLabel>FAQ</EyebrowLabel>
          <h2 style={{ fontFamily: "'Fraunces', serif", fontWeight: 300, fontSize: 'clamp(2.25rem, 5vw, 4.25rem)', letterSpacing: '-0.03em', lineHeight: 1, margin: '0 0 1.25rem', color: '#f0ede8' }}>
            Questions, <em style={{ color: '#CE307D', fontStyle: 'italic' }}>answered.</em>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', lineHeight: 1.75, margin: 0, maxWidth: '40ch' }}>
            Something we haven’t covered? Get in touch and we’ll talk it through.
          </p>
        </RevealOnScroll>

        <StaggerOnScroll style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          {faq.map((item, i) => {
            const isOpen = open === i
            return (
              <motion.div key={item.question} variants={fadeUp} style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                <button type="button" onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen} aria-controls={`faq-${i}`} id={`faq-q-${i}`}
                  style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1.25rem', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', padding: 'clamp(1.25rem, 3vw, 1.6rem) 0', color: isOpen ? '#CE307D' : '#f0ede8', transition: 'color 0.3s', fontFamily: "'Fraunces', serif", fontWeight: 300, fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', letterSpacing: '-0.015em', lineHeight: 1.3 }}>
                  {item.question}
                  <motion.span animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.3 }}
                    style={{ flexShrink: 0, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 34, height: 34, borderRadius: '50%', border: `1px solid ${isOpen ? '#CE307D' : 'rgba(240,237,232,0.2)'}`, color: isOpen ? '#CE307D' : '#f0ede8' }}>
                    <Plus size={16} strokeWidth={1.5} aria-hidden="true" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div id={`faq-${i}`} role="region" aria-labelledby={`faq-q-${i}`}
                      initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }} style={{ overflow: 'hidden' }}>
                      <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.92rem', lineHeight: 1.8, margin: 0, padding: '0 3rem clamp(1.25rem, 3vw, 1.6rem) 0', maxWidth: '62ch' }}>{item.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </StaggerOnScroll>
      </div>
    </section>
  )
}
