'use client'

import { motion } from 'framer-motion'
import { SPECIAL_OFFER } from '@/data/specialOffer'
import { FOOTER_CONTACT } from '@/data/site'

export function OfferAvailability() {
  const notes = [SPECIAL_OFFER.validUntil, SPECIAL_OFFER.availability].filter((n): n is string => Boolean(n))

  return (
    <section style={{ background: 'var(--bg)', overflow: 'hidden' }}>
      <div style={{ padding: 'clamp(2.25rem, 4.5vw, 3.25rem) clamp(1.25rem, 6vw, 2.5rem)', textAlign: 'center', position: 'relative' }}>
        <div style={{ position: 'absolute', left: '50%', top: '50%', width: '700px', height: '700px', transform: 'translate(-50%, -50%)', borderRadius: '50%', background: 'radial-gradient(circle, rgba(206,48,125,0.12) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative' }}>
          <motion.span initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{ fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#CE307D', display: 'block', marginBottom: '1.5rem' }}>
            Availability
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            style={{ fontFamily: "var(--font-fraunces), serif", fontWeight: 300, fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '-0.03em', lineHeight: 1.05, margin: '0 0 1.75rem', color: 'var(--fg)' }}>
            Ready when <em style={{ color: '#CE307D', fontStyle: 'italic' }}>you are.</em>
          </motion.h2>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}
            style={{ marginBottom: '2.5rem' }}>
            {notes.length > 0 ? (
              <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                {notes.map(note => (
                  <span key={note} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.85rem', color: 'var(--fg)', border: '1px solid rgba(206,48,125,0.45)', background: 'rgba(206,48,125,0.08)', padding: '0.6rem 1.2rem', borderRadius: '999px' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#CE307D' }} />
                    {note}
                  </span>
                ))}
              </div>
            ) : (
              <p style={{ color: 'var(--fg-strong)', fontSize: '1rem', lineHeight: 1.8, margin: '0 auto', maxWidth: '50ch' }}>
                This offer is available for a limited time. Get in touch and we&apos;ll confirm the details for your business.
              </p>
            )}
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.25 }}
            style={{ display: 'flex', justifyContent: 'center', gap: '0.9rem', flexWrap: 'wrap' }}>
            <motion.a href="/contact#contact-form"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', background: '#CE307D', color: '#fff', textDecoration: 'none', padding: '1.1rem 2.25rem', fontSize: '0.85rem', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 500, borderRadius: '10px' }}
              whileHover={{ y: -4, boxShadow: '0 16px 40px rgba(206,48,125,0.35)' }}
              whileTap={{ scale: 0.97 }}
            >
              Claim the offer <span>→</span>
            </motion.a>
            <motion.a href={FOOTER_CONTACT[1].href}
              style={{ display: 'inline-flex', alignItems: 'center', color: 'var(--fg)', textDecoration: 'none', fontSize: '0.85rem', letterSpacing: '0.08em', textTransform: 'uppercase', border: '1px solid rgba(var(--fg-rgb),0.25)', padding: '1.1rem 2.25rem', borderRadius: '10px' }}
              whileHover={{ borderColor: '#CE307D', color: '#CE307D' }}
              whileTap={{ scale: 0.97 }}
            >
              Call sales
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
