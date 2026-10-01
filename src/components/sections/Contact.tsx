'use client'

import { motion } from 'framer-motion'
import { Phone } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa6'
import { RotatingBadge } from '@/components/ui/RotatingBadge'
import { FOOTER_EXPLORE, FOOTER_CONTACT, SOCIAL_LINKS } from '@/data/site'

export function Contact() {
  return (
    <section id="contact" style={{ padding: 'clamp(2.25rem, 6vw, 4rem) clamp(1rem, 4vw, 2rem) clamp(1.25rem, 4vw, 2.5rem)', background: '#CE307D', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '-30%', right: '-5%', width: '700px', height: '700px', borderRadius: '50%', background: 'rgba(255,255,255,0.06)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '-40%', left: '-10%', width: '500px', height: '500px', borderRadius: '50%', background: 'rgba(0,0,0,0.08)', pointerEvents: 'none' }} />
      <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gap: '3rem', alignItems: 'center', marginBottom: '2.75rem' }} className="grid grid-cols-1 lg:grid-cols-[1fr_auto]">
          <div>
            <motion.span initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              style={{ fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#ffffff', display: 'block', marginBottom: '1.5rem' }}>Let&apos;s work together</motion.span>
            <motion.h2 initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              style={{ fontFamily: "var(--font-fraunces), serif", fontWeight: 300, fontSize: 'clamp(1.6rem, 6vw, 5.5rem)', letterSpacing: '-0.03em', margin: 0, lineHeight: 0.95, color: '#fff', whiteSpace: 'nowrap' }}>
              Start your next <em style={{ fontStyle: 'italic', color: '#ffffff' }}>chapter.</em>
            </motion.h2>
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.25 }}
            style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', gap: 'clamp(1.5rem, 4vw, 3rem)' }} className="justify-center sm:justify-start lg:justify-end">
            <RotatingBadge text={`${FOOTER_CONTACT[0].value} • CALL US • `} href={FOOTER_CONTACT[0].href} label={`Call ${FOOTER_CONTACT[0].value}`} size={120}>
              <Phone size={20} />
            </RotatingBadge>
          </motion.div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.25)', paddingTop: 'clamp(1.5rem, 4vw, 3rem)' }}>
          <div className="grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4 lg:gap-12">
            <div className="col-span-2 lg:col-span-1">
              <span style={{ fontFamily: "var(--font-fraunces), serif", fontWeight: 700, fontSize: '1.6rem', letterSpacing: '-0.02em', color: '#fff' }}>
                DIGI ERA PRO
              </span>
              <p style={{ color: '#ffffff', fontSize: '0.9rem', lineHeight: 1.7, margin: '1.25rem 0 1.5rem', maxWidth: '32ch' }}>
                Your partner in building a strong online presence with creative, results-focused marketing!
              </p>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                {SOCIAL_LINKS.map(s => (
                  <motion.a key={s.name} href={s.href} aria-label={s.name}
                    style={{ width: '2.25rem', height: '2.25rem', borderRadius: '50%', background: 'rgba(0,0,0,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', flexShrink: 0 }}
                    whileHover={{ background: '#000', y: -3 }}>
                    <s.icon size={14} />
                  </motion.a>
                ))}
              </div>
            </div>
            <div className="lg:col-span-1">
              <h3 style={{ fontSize: '0.85rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#fff', margin: '0 0 1.5rem', fontWeight: 700 }}>Explore</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
                {FOOTER_EXPLORE.map(l => (
                  <motion.a key={l.label} href={l.href}
                    style={{ fontSize: '0.9rem', color: '#ffffff', textDecoration: 'none', display: 'inline-block', width: 'fit-content' }}
                    whileHover={{ x: 4, color: '#fff' }}>{l.label}</motion.a>
                ))}
              </div>
            </div>
            <div className="lg:col-span-1">
              <h3 style={{ fontSize: '0.85rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#fff', margin: '0 0 1.5rem', fontWeight: 700 }}>Contact</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {FOOTER_CONTACT.map(c => (
                  <motion.a key={c.label} href={c.href}
                    style={{ display: 'flex', gap: '0.85rem', alignItems: 'flex-start', textDecoration: 'none' }}
                    whileHover={{ x: 4 }}>
                    <c.icon size={17} style={{ color: '#fff', flexShrink: 0, marginTop: '0.15rem' }} />
                    <div>
                      <div style={{ fontSize: '0.78rem', color: '#ffffff' }}>{c.label}</div>
                      <div style={{ fontSize: '0.9rem', color: '#fff' }}>{c.value}</div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
            <div className="col-span-2 lg:col-span-1">
              <h3 style={{ fontSize: '0.85rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#fff', margin: '0 0 1.5rem', fontWeight: 700 }}>Follow our channel</h3>
              <motion.a href="https://wa.me/17866001595" target="_blank" rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem', background: '#fff', color: '#CE307D', padding: '1rem 1.5rem', fontSize: '0.85rem', letterSpacing: '0.06em', textTransform: 'uppercase', fontWeight: 600, textDecoration: 'none', borderRadius: '10px', width: '100%' }}
                whileHover={{ y: -3, boxShadow: '0 12px 30px rgba(0,0,0,0.2)' }} whileTap={{ scale: 0.97 }}>
                <FaWhatsapp size={17} /> Follow us
              </motion.a>
              <p style={{ color: '#ffffff', fontSize: '0.85rem', lineHeight: 1.7, margin: '1.1rem 0 0' }}>
                For the latest updates and news, join our WhatsApp channel.
              </p>
            </div>
          </div>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.25)', marginTop: '3.5rem', paddingTop: '1.75rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
            <p style={{ fontSize: '0.82rem', color: '#ffffff', margin: 0 }}>
              ©{new Date().getFullYear()}. All rights reserved by <span style={{ color: '#fff', fontWeight: 600 }}>Digi Era Pro LLC</span>
            </p>
            <a href="#" style={{ fontSize: '0.82rem', color: '#fff', textDecoration: 'underline' }}>Terms &amp; Conditions</a>
          </div>
        </div>
      </div>
    </section>
  )
}
