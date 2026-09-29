'use client'

import { motion } from 'framer-motion'

export function ContactFinalCTA() {
  return (
    <section style={{ padding: 'clamp(4rem, 10vw, 9rem) clamp(1.25rem, 6vw, 2.5rem)', background: '#222429', textAlign: 'center' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          style={{ fontFamily: "'Fraunces', serif", fontWeight: 300, fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '-0.03em', lineHeight: 1.05, margin: '0 0 2.5rem', color: '#f0ede8' }}>
          Have an idea?<br />Let&apos;s make it <em style={{ color: '#CE307D', fontStyle: 'italic' }}>happen.</em>
        </motion.h2>
        <motion.a href="#contact-form"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
          style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', background: '#CE307D', color: '#fff', textDecoration: 'none', padding: '1.1rem 2.25rem', fontSize: '0.85rem', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 500, borderRadius: '10px' }}
          whileHover={{ y: -4, boxShadow: '0 16px 40px rgba(206,48,125,0.35)' }}
          whileTap={{ scale: 0.97 }}
        >
          Send Inquiry <span>→</span>
        </motion.a>
      </div>
    </section>
  )
}
