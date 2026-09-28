'use client'

import { motion } from 'framer-motion'
import { RevealOnScroll } from '@/lib/animations'
import { EyebrowLabel } from '@/components/ui/EyebrowLabel'
import { SPECIAL_OFFER } from '@/data/specialOffer'

function OfferBadge() {
  return (
    <div style={{ position: 'relative', width: '130px', height: '130px', flexShrink: 0 }}>
      <motion.svg
        width={130} height={130} viewBox="0 0 130 130"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 16, ease: 'linear' }}
        style={{ position: 'absolute', inset: 0 }}
        aria-hidden="true"
      >
        <defs>
          <path id="offerBadgePath" d="M 65,65 m -50,0 a 50,50 0 1,1 100,0 a 50,50 0 1,1 -100,0" fill="none" />
        </defs>
        <text fontSize="9" letterSpacing="3" fill="#f0ede8" fontFamily="'Outfit', sans-serif">
          <textPath href="#offerBadgePath">LIMITED TIME • SPECIAL OFFER • </textPath>
        </text>
      </motion.svg>
      <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#CE307D', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontFamily: "'Fraunces', serif", fontStyle: 'italic', fontSize: '1.3rem' }}>★</span>
      </div>
    </div>
  )
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="special-offer-row" style={{ display: 'grid', gridTemplateColumns: 'minmax(5.5rem, 7.5rem) 1fr', gap: '1.25rem', padding: '1.5rem 0', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
      <span className="special-offer-row-label" style={{ fontSize: '0.7rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(240,237,232,0.5)', paddingTop: '0.2rem' }}>{label}</span>
      <div className="special-offer-row-content">{children}</div>
    </div>
  )
}

export function OfferHighlight() {
  const { originalPrice, offerPrice, validUntil } = SPECIAL_OFFER

  return (
    <section className="special-offer-highlight" id="offer" style={{ padding: 'clamp(4rem, 10vw, 9rem) clamp(1.25rem, 6vw, 2.5rem)', background: '#0a0a0a', position: 'relative', overflow: 'hidden', scrollMarginTop: '60px' }}>
      <div style={{ position: 'absolute', top: '10%', right: '-12%', width: '620px', height: '620px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(206,48,125,0.14) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', display: 'grid', gap: 'clamp(3rem, 7vw, 6rem)', alignItems: 'center' }} className="grid grid-cols-1 lg:grid-cols-[5fr_6fr]">
        <RevealOnScroll>
          <EyebrowLabel>The offer</EyebrowLabel>
          <h2 style={{ fontFamily: "'Fraunces', serif", fontWeight: 300, fontSize: 'clamp(2.5rem, 5.5vw, 4.75rem)', letterSpacing: '-0.03em', lineHeight: 1, margin: '0 0 1.5rem', color: '#f0ede8' }}>
            {SPECIAL_OFFER.title.split(' ').slice(0, -1).join(' ')}{' '}
            <em style={{ color: '#CE307D', fontStyle: 'italic' }}>{SPECIAL_OFFER.title.split(' ').slice(-1)}</em>
          </h2>
          <p style={{ color: '#ffffff', fontSize: '0.95rem', lineHeight: 1.8, margin: '0 0 2.5rem', maxWidth: '44ch' }}>
            {SPECIAL_OFFER.summary}
          </p>
          <OfferBadge />
        </RevealOnScroll>

        <RevealOnScroll delay={0.15}>
          <motion.div
            className="special-offer-ticket"
            whileHover={{ borderColor: 'rgba(206,48,125,0.55)' }}
            style={{ position: 'relative', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '18px', background: 'linear-gradient(160deg, #141414 0%, #0f0f0f 100%)', padding: 'clamp(1.75rem, 4vw, 3rem)' }}
          >
            {/* ticket notches */}
            <span style={{ position: 'absolute', top: '50%', left: '-13px', width: '26px', height: '26px', borderRadius: '50%', background: '#0a0a0a', border: '1px solid rgba(255,255,255,0.12)', transform: 'translateY(-50%)' }} />
            <span style={{ position: 'absolute', top: '50%', right: '-13px', width: '26px', height: '26px', borderRadius: '50%', background: '#0a0a0a', border: '1px solid rgba(255,255,255,0.12)', transform: 'translateY(-50%)' }} />

            <div className="special-offer-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '1rem', marginBottom: '1.75rem', flexWrap: 'wrap' }}>
              <span style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(1.35rem, 2.6vw, 1.75rem)', fontWeight: 300, letterSpacing: '-0.02em', color: '#f0ede8' }}>What you get</span>
              <span style={{ fontSize: '0.7rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#CE307D' }}>Special offer</span>
            </div>

            <Row label="Includes">
              <div className="special-offer-pills" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {SPECIAL_OFFER.includes.map(item => (
                  <span key={item} className="special-offer-pill" style={{ fontSize: '0.8rem', color: '#f0ede8', border: '1px solid rgba(255,255,255,0.14)', padding: '0.5rem 0.85rem', borderRadius: '999px', background: 'rgba(255,255,255,0.02)' }}>{item}</span>
                ))}
              </div>
            </Row>

            <Row label="Value">
              {offerPrice ? (
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem', flexWrap: 'wrap' }}>
                  <span style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(2.25rem, 5vw, 3.25rem)', fontWeight: 300, letterSpacing: '-0.03em', color: '#CE307D', lineHeight: 1 }}>{offerPrice}</span>
                  {originalPrice && (
                    <span style={{ fontSize: '1rem', color: 'rgba(240,237,232,0.45)', textDecoration: 'line-through' }}>{originalPrice}</span>
                  )}
                </div>
              ) : (
                <p style={{ color: '#ffffff', fontSize: '0.92rem', lineHeight: 1.7, margin: 0 }}>
                  Tailored to your scope — shared with you on your discovery call.
                </p>
              )}
            </Row>

            <Row label="Valid">
              <p style={{ color: '#ffffff', fontSize: '0.92rem', lineHeight: 1.7, margin: 0 }}>
                {validUntil ?? 'For a limited time — ask us about current availability.'}
              </p>
            </Row>

            <div className="special-offer-action" style={{ borderTop: '1px dashed rgba(255,255,255,0.18)', paddingTop: '1.75rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '0.82rem', color: 'rgba(240,237,232,0.6)' }}>Mention the offer when you get in touch.</span>
              <motion.a href="/contact#contact-form"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', background: '#CE307D', color: '#fff', textDecoration: 'none', padding: '1rem 1.9rem', fontSize: '0.8rem', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 500, borderRadius: '10px', width: '100%', justifyContent: 'center' }}
                whileHover={{ y: -4, boxShadow: '0 16px 40px rgba(206,48,125,0.35)' }}
                whileTap={{ scale: 0.97 }}
              >
                Claim the offer <span>→</span>
              </motion.a>
            </div>
          </motion.div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
