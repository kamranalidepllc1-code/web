'use client'

import { FileSearch, Database, Headset, Globe, type LucideIcon } from 'lucide-react'
import { StaggerOnScroll, fadeUp } from '@/lib/animations'
import { motion } from 'framer-motion'
import { useState } from 'react'

const FEATURES: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: FileSearch,
    title: 'Custom Solutions',
    desc: 'We believe in personalized strategies for every client. Your business is unique, and we make sure the plan we create is tailored specifically to meet your goals and drive real, lasting results.',
  },
  {
    icon: Database,
    title: 'Real Growth Focus',
    desc: "We focus on what truly matters—growing your business in meaningful ways. Our goal isn't just numbers; it's delivering results that help you succeed and thrive in the long term, not just the short term.",
  },
  {
    icon: Headset,
    title: 'Always Here for You',
    desc: "You're never alone in your journey. Our team is always available to provide hands-on support, expert advice, and guidance, making sure you're on the right track every step of the way.",
  },
  {
    icon: Globe,
    title: 'Long-Term Partnerships',
    desc: "We're not here for quick wins. Our focus is on building lasting relationships with our clients, helping your business grow and evolve as the digital world changes around you.",
  },
]

export function AboutStandOutFeatures() {
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null)

  return (
    <section style={{ padding: 'clamp(3rem, 7vw, 5rem) clamp(1.25rem, 6vw, 2.5rem)', background: '#222429' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <StaggerOnScroll style={{ display: 'grid', gap: '1.5rem' }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f) => (
            <motion.div
              key={f.title}
              onHoverStart={() => setHoveredFeature(f.title)}
              onHoverEnd={() => setHoveredFeature(null)}
              variants={fadeUp}
              whileHover={{
                y: -4,
                borderColor: 'rgba(206,48,125,0.4)',
                boxShadow: '0 12px 30px rgba(206,48,125,0.1)',
              }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              style={{
                background: hoveredFeature === f.title ? 'rgba(206,48,125,0.06)' : '#2a2d33',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '16px',
                padding: 'clamp(2rem, 4vw, 2.5rem) clamp(1.5rem, 3vw, 1.75rem)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                gap: '1.25rem',
              }}
            >
              <f.icon size={34} strokeWidth={1.4} color="#CE307D" />
              <div>
                <h3 style={{ fontFamily: "'Fraunces', serif", fontWeight: 400, fontSize: '1.15rem', color: '#f0ede8', margin: '0 0 0.85rem' }}>{f.title}</h3>
                <p style={{ fontSize: '0.88rem', lineHeight: 1.7, color: '#ffffff', margin: 0 }}>{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </StaggerOnScroll>
      </div>
    </section>
  )
}
