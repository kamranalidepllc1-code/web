import Image from 'next/image'
import Link from 'next/link'
import { RevealOnScroll } from '@/lib/animations'

export function AboutHero() {
  return (
    <section className="about-hero" style={{ minHeight: '72vh', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', background: 'var(--bg)', paddingTop: 'clamp(90px, 14vw, 120px)' }}>
      <Image
        src="/Assets/about us/hero-bg.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        style={{ objectFit: 'cover', opacity: 0.55 }}
      />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(var(--bg-rgb),0.35) 0%, var(--bg) 88%)', pointerEvents: 'none' }} />
      <div className="hero-photo-scrim" aria-hidden="true" />
      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '900px', margin: '0 auto', padding: '0 clamp(1.25rem, 6vw, 2.5rem) clamp(2rem, 4vw, 3rem)' }}>
        <RevealOnScroll>
          <span style={{ fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#CE307D', display: 'block', marginBottom: '1.25rem' }}>About Digi Era Pro</span>
        </RevealOnScroll>
        <RevealOnScroll delay={0.1}>
          <h1 style={{ fontFamily: "var(--font-fraunces), serif", fontWeight: 300, fontSize: 'clamp(2.75rem, 7vw, 5.5rem)', letterSpacing: '-0.03em', lineHeight: 1.02, margin: '0 0 1.5rem', color: 'var(--fg)' }}>
            A marketing agency that works like <em style={{ color: '#CE307D', fontStyle: 'italic' }}>part of your team.</em>
          </h1>
        </RevealOnScroll>
        <RevealOnScroll delay={0.2}>
          <p style={{ color: 'var(--fg-strong)', fontSize: '1rem', lineHeight: 1.8, maxWidth: '56ch', margin: '0 auto' }}>
            Digi Era Pro LLC is a New York–based digital marketing agency, founded in 2018. We help small and local businesses across the United States get found on Google, run advertising that pays for itself, and present themselves professionally online.
          </p>
        </RevealOnScroll>
        <RevealOnScroll delay={0.3}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem', marginTop: '2.5rem', fontSize: '0.78rem', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
            <Link href="/" style={{ color: 'var(--fg-strong)', textDecoration: 'none' }}>Home</Link>
            <span style={{ color: 'rgba(var(--fg-rgb),0.3)' }}>/</span>
            <span style={{ color: '#CE307D' }}>About Us</span>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
