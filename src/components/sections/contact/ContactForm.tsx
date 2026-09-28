'use client'

import { useState, type FormEvent } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { RevealOnScroll } from '@/lib/animations'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

type FormState = {
  name: string
  email: string
  phone: string
  message: string
}

const INITIAL_STATE: FormState = { name: '', email: '', phone: '', message: '' }

type Errors = Partial<Record<keyof FormState, string>>
type Status = 'idle' | 'loading' | 'success' | 'error'

const labelStyle: React.CSSProperties = {
  display: 'block', fontSize: '0.85rem', color: 'rgba(240,237,232,0.65)', marginBottom: '0.4rem',
}

function Field({
  id, label, error, children,
}: { id: string; label: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={id} style={labelStyle}>{label}</label>
      {children}
      {error && <p id={`${id}-error`} role="alert" style={{ color: '#ff8fb8', fontSize: '0.76rem', margin: '0.5rem 0 0' }}>{error}</p>}
    </div>
  )
}

function RotatingBadge() {
  const text = 'DIGI ERA PRO • LET’S TALK • DIGI ERA PRO • LET’S TALK • '
  return (
    <div style={{ position: 'relative', width: '150px', height: '150px', flexShrink: 0 }}>
      <motion.svg
        viewBox="0 0 200 200"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 18, ease: 'linear' }}
      >
        <defs>
          <path id="badgeCircle" d="M 100,100 m -88,0 a 88,88 0 1,1 176,0 a 88,88 0 1,1 -176,0" />
        </defs>
        <text fontSize="12.5" letterSpacing="1.5" fill="rgba(240,237,232,0.85)" style={{ fontFamily: "'Outfit', sans-serif" }}>
          <textPath href="#badgeCircle">{text}</textPath>
        </text>
      </motion.svg>
      <div style={{
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
        width: '78px', height: '78px', borderRadius: '50%', background: '#151515',
        border: '1px solid rgba(255,255,255,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <Image src="/Assets/logo/logo.png" alt="" width={40} height={40} style={{ objectFit: 'contain' }} />
      </div>
    </div>
  )
}

function SquiggleArrow() {
  return (
    <svg width="110" height="90" viewBox="0 0 110 90" fill="none" aria-hidden="true" style={{ opacity: 0.5 }}>
      <path
        d="M8 8c20 4 46 10 50 28 3 14-14 24-28 16-11-6-9-22 3-27 20-8 45 2 55 20"
        stroke="#f0ede8" strokeWidth="1.4" strokeLinecap="round" fill="none"
      />
      <path d="M79 40 L88 45 L80 52" stroke="#f0ede8" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  )
}

export function ContactForm() {
  const [form, setForm] = useState<FormState>(INITIAL_STATE)
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<Status>('idle')
  const [serverError, setServerError] = useState('')

  const update = (field: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm(f => ({ ...f, [field]: e.target.value }))

  const validate = (): Errors => {
    const next: Errors = {}
    if (!form.name.trim()) next.name = 'Please tell us your name.'
    if (!form.email.trim()) next.email = 'Please add an email address.'
    else if (!EMAIL_RE.test(form.email.trim())) next.email = 'That email address doesn’t look right.'
    if (!form.phone.trim()) next.phone = 'Please add a phone number.'
    if (!form.message.trim()) next.message = 'Tell us a little about your project.'
    else if (form.message.trim().length < 10) next.message = 'Please add a few more details (10+ characters).'
    return next
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const nextErrors = validate()
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    setStatus('loading')
    setServerError('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(data.error || 'Something went wrong. Please try again.')
      setStatus('success')
      setForm(INITIAL_STATE)
    } catch (err) {
      setStatus('error')
      setServerError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    }
  }

  return (
    <section id="contact-form" style={{ padding: 'clamp(3.5rem, 9vw, 8rem) clamp(1.25rem, 6vw, 2.5rem)', background: '#0a0a0a', position: 'relative' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gap: 'clamp(2.5rem, 6vw, 5rem)', alignItems: 'center' }} className="grid grid-cols-1 lg:grid-cols-2">

          <RevealOnScroll>
            <span style={{
              display: 'inline-block', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase',
              color: '#f0ede8', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: '999px', padding: '0.5rem 1.1rem', marginBottom: '1.75rem',
            }}>
              Contact Us
            </span>
            <h2 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', letterSpacing: '-0.02em', margin: '0 0 2.5rem', lineHeight: 1.12, color: '#f0ede8' }}>
              Ready to <span style={{ color: '#CE307D' }}>Bring</span> Your Vision to Life?
            </h2>
            <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>
              <RotatingBadge />
              <div className="hide-mobile" style={{ marginTop: '-1.5rem' }}>
                <SquiggleArrow />
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.12} className="lg:border-l lg:border-white/10 lg:pl-14">
            {status === 'success' ? (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                style={{ background: '#111111', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '20px', padding: 'clamp(2.5rem, 5vw, 3.5rem)', boxShadow: '0 30px 80px rgba(0,0,0,0.5)', textAlign: 'center' }}>
                <span style={{ fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#CE307D' }}>Message sent</span>
                <h3 style={{ fontFamily: "'Fraunces', serif", fontWeight: 300, fontSize: 'clamp(1.6rem, 3vw, 2.25rem)', letterSpacing: '-0.03em', margin: '1rem 0 1.25rem', color: '#f0ede8' }}>
                  Thanks — we got it.
                </h3>
                <p style={{ color: '#ffffff', fontSize: '0.92rem', lineHeight: 1.8, margin: '0 0 2rem' }}>
                  A member of our team will get back to you shortly. In the meantime, feel free to reach us directly at{' '}
                  <a href="mailto:info@digierapro.com" style={{ color: '#CE307D' }}>info@digierapro.com</a>.
                </p>
                <motion.button
                  onClick={() => setStatus('idle')}
                  whileHover={{ y: -3 }} whileTap={{ scale: 0.97 }}
                  style={{ background: 'none', border: '1px solid rgba(255,255,255,0.2)', color: '#f0ede8', padding: '0.85rem 1.75rem', fontSize: '0.78rem', letterSpacing: '0.08em', textTransform: 'uppercase', cursor: 'pointer', borderRadius: '999px' }}
                >
                  Send another message
                </motion.button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} noValidate
                style={{ display: 'grid', gap: '1.35rem', background: '#111111', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '20px', padding: 'clamp(2rem, 5vw, 3rem)', boxShadow: '0 30px 80px rgba(0,0,0,0.5)' }}>

                <Field id="name" label="Your full name *" error={errors.name}>
                  <input
                    id="name" name="name" type="text" placeholder="Jane Doe"
                    value={form.name} onChange={update('name')}
                    required aria-required="true" aria-invalid={!!errors.name} aria-describedby={errors.name ? 'name-error' : undefined}
                    className="underline-field"
                  />
                </Field>

                <Field id="email" label="Your email Address *" error={errors.email}>
                  <input
                    id="email" name="email" type="email" placeholder="jane@company.com"
                    value={form.email} onChange={update('email')}
                    required aria-required="true" aria-invalid={!!errors.email} aria-describedby={errors.email ? 'email-error' : undefined}
                    className="underline-field"
                  />
                </Field>

                <Field id="phone" label="Your number *" error={errors.phone}>
                  <input
                    id="phone" name="phone" type="tel" placeholder="(786) 000-0000"
                    value={form.phone} onChange={update('phone')}
                    required aria-required="true" aria-invalid={!!errors.phone} aria-describedby={errors.phone ? 'phone-error' : undefined}
                    className="underline-field"
                  />
                </Field>

                <Field id="message" label="Comment *" error={errors.message}>
                  <textarea
                    id="message" name="message" placeholder="Tell us a bit about your project."
                    value={form.message} onChange={update('message')}
                    required aria-required="true" aria-invalid={!!errors.message} aria-describedby={errors.message ? 'message-error' : undefined}
                    rows={4}
                    className="underline-field"
                    style={{ resize: 'vertical', minHeight: '100px', lineHeight: 1.6 }}
                  />
                </Field>

                {status === 'error' && serverError && (
                  <p role="alert" style={{ color: '#ff8fb8', fontSize: '0.85rem', margin: 0 }}>{serverError}</p>
                )}

                <motion.button
                  type="submit"
                  disabled={status === 'loading'}
                  whileHover={status === 'loading' ? undefined : { y: -3, boxShadow: '0 16px 40px rgba(206,48,125,0.35)' }}
                  whileTap={status === 'loading' ? undefined : { scale: 0.97 }}
                  style={{
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem',
                    background: '#CE307D', color: '#fff', border: 'none', padding: '1.1rem 2.25rem',
                    fontSize: '0.8rem', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 600,
                    borderRadius: '999px', cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                    opacity: status === 'loading' ? 0.7 : 1, width: 'fit-content', marginTop: '0.5rem',
                  }}
                >
                  {status === 'loading' ? (
                    <>
                      <motion.span
                        animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 0.8, ease: 'linear' }}
                        style={{ width: '14px', height: '14px', borderRadius: '50%', border: '2px solid rgba(255,255,255,0.4)', borderTopColor: '#fff', display: 'inline-block' }}
                      />
                      Sending…
                    </>
                  ) : (
                    'Send Your Request'
                  )}
                </motion.button>
              </form>
            )}
          </RevealOnScroll>
        </div>
      </div>
    </section>
  )
}
