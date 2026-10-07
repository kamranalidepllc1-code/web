'use client'

import { FileSearch, Database, Headset, Globe, type LucideIcon } from 'lucide-react'
import { StaggerOnScroll, fadeUp } from '@/lib/animations'
import { motion } from 'framer-motion'
import { useState } from 'react'

const FEATURES: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: FileSearch,
    title: 'Plans Built for Your Market',
    desc: 'We start with an audit of your website, Google Business Profile, and competitors, then recommend only the services that address what is actually holding you back.',
  },
  {
    icon: Database,
    title: 'Measured by Leads, Not Likes',
    desc: 'We set up call, form, and conversion tracking before campaigns launch, so progress is measured in inquiries and sales rather than impressions and follower counts.',
  },
  {
    icon: Headset,
    title: 'A Dedicated Account Manager',
    desc: 'You work with a named account manager who knows your business, coordinates our specialists, and walks you through progress each month.',
  },
  {
    icon: Globe,
    title: 'You Own Everything',
    desc: 'Your Google Business Profile, ad accounts, and tracking data stay in your name. If we ever stop working together, they stay with you.',
  },
]

export function AboutStandOutFeatures() {
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null)

  return (
    <section style={{ padding: 'clamp(2rem, 4vw, 3rem) clamp(1.25rem, 6vw, 2.5rem)', background: 'var(--bg)' }}>
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
                background: hoveredFeature === f.title ? 'rgba(206,48,125,0.06)' : 'var(--surface-2)',
                border: '1px solid rgba(var(--line-rgb), 0.08)',
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
                <h3 style={{ fontFamily: "var(--font-fraunces), serif", fontWeight: 400, fontSize: '1.15rem', color: 'var(--fg)', margin: '0 0 0.85rem' }}>{f.title}</h3>
                <p style={{ fontSize: '0.88rem', lineHeight: 1.7, color: 'var(--fg-strong)', margin: 0 }}>{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </StaggerOnScroll>
      </div>
    </section>
  )
}
