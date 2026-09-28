'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import { RevealOnScroll, StaggerOnScroll, fadeUp } from '@/lib/animations'
import { FOOTER_CONTACT } from '@/data/site'

const OFFICES = [
  { city: 'Florida', country: 'United States', img: '/Assets/contact-us/Florida.webp' },
  { city: 'Lahore', country: 'Pakistan', img: '/Assets/contact-us/Lahore.webp' },
  { city: 'New York', country: 'United States', img: '/Assets/contact-us/New York.webp' },
]

const phone = FOOTER_CONTACT.find(c => c.href.startsWith('tel:'))!
const email = FOOTER_CONTACT.find(c => c.href.startsWith('mailto:'))!

export function ContactOffices() {
  return (
    <section style={{ padding: 'clamp(3.5rem, 9vw, 8rem) clamp(1.25rem, 6vw, 2.5rem)', background: '#0a0a0a' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <RevealOnScroll style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span style={{ fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#CE307D' }}>Where to find us</span>
          <h2 style={{ fontFamily: "'Fraunces', serif", fontWeight: 300, fontSize: 'clamp(2.25rem, 5vw, 4rem)', letterSpacing: '-0.03em', margin: '1rem 0 1.5rem', lineHeight: 1, color: '#f0ede8' }}>
            Office <em style={{ color: '#CE307D', fontStyle: 'italic' }}>locations.</em>
          </h2>
          <p style={{ color: '#ffffff', fontSize: '0.95rem', lineHeight: 1.8, maxWidth: '48ch', margin: '0 auto' }}>
            We work with ambitious brands across three continents. Reach out to the team nearest you.
          </p>
        </RevealOnScroll>

        <StaggerOnScroll style={{ display: 'grid', gap: '1.5rem' }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {OFFICES.map(office => {
            const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${office.city}, ${office.country}`)}`
            return (
              <motion.a
                key={office.city}
                href={mapsUrl} target="_blank" rel="noopener noreferrer"
                aria-label={`Open ${office.city}, ${office.country} in Google Maps`}
                variants={fadeUp}
                whileHover="hover"
                style={{
                  position: 'relative', display: 'block', width: '100%', height: 'clamp(420px, 42vw, 520px)',
                  borderRadius: '18px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)', textDecoration: 'none',
                }}
              >
                <motion.div variants={{ hover: { scale: 1.06 } }} transition={{ duration: 0.4 }} style={{ position: 'absolute', inset: 0 }}>
                  <Image src={office.img} alt={`${office.city}, ${office.country} office`} fill sizes="(max-width: 1024px) 100vw, 33vw" style={{ objectFit: 'cover', objectPosition: 'top' }} />
                </motion.div>

                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 0%, transparent 35%, rgba(10,10,10,0.55) 65%, rgba(10,10,10,0.98) 100%)' }} />

                <motion.div
                  variants={{ hover: { opacity: 1 } }} initial={{ opacity: 0 }}
                  style={{ position: 'absolute', top: '1.25rem', right: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.4rem', background: 'rgba(10,10,10,0.6)', borderRadius: '999px', padding: '0.4rem 0.85rem' }}
                >
                  <MapPin size={13} color="#fff" />
                  <span style={{ color: '#fff', fontSize: '0.68rem', letterSpacing: '0.06em', textTransform: 'uppercase' }}>View on map</span>
                </motion.div>

                <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, padding: 'clamp(1.5rem, 3vw, 2rem)' }}>
                  <h3 style={{ fontFamily: "'Fraunces', serif", fontWeight: 400, fontStyle: 'italic', fontSize: '1.4rem', color: '#f0ede8', margin: '0 0 0.5rem' }}>
                    {office.city} Office
                  </h3>
                  <p style={{ color: '#ffffff', fontSize: '0.85rem', lineHeight: 1.6, margin: '0 0 1.1rem' }}>
                    {office.country}
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', color: '#f0ede8', fontSize: '0.82rem' }}>
                      <phone.icon size={13} style={{ color: '#CE307D', flexShrink: 0 }} /> {phone.value}
                    </span>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', color: '#f0ede8', fontSize: '0.82rem' }}>
                      <email.icon size={13} style={{ color: '#CE307D', flexShrink: 0 }} /> {email.value}
                    </span>
                  </div>
                </div>
              </motion.a>
            )
          })}
        </StaggerOnScroll>
      </div>
    </section>
  )
}
