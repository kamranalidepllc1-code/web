import Image from 'next/image'
import Link from 'next/link'
import { RevealOnScroll } from '@/lib/animations'

export function AboutHero() {
  return (
    <section className="about-hero" style={{ minHeight: '72vh', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', background: '#222429', paddingTop: 'clamp(90px, 14vw, 120px)' }}>
      <Image
        src="/Assets/about us/hero-bg.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        style={{ objectFit: 'cover', opacity: 0.55 }}
      />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(34,36,41,0.35) 0%, #222429 88%)', pointerEvents: 'none' }} />
      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '900px', margin: '0 auto', padding: '0 clamp(1.25rem, 6vw, 2.5rem) clamp(2rem, 4vw, 3rem)' }}>
        <RevealOnScroll>
          <span style={{ fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#CE307D', display: 'block', marginBottom: '1.25rem' }}>About Digi Era Pro</span>
        </RevealOnScroll>
        <RevealOnScroll delay={0.1}>
          <h1 style={{ fontFamily: "var(--font-fraunces), serif", fontWeight: 300, fontSize: 'clamp(2.75rem, 7vw, 5.5rem)', letterSpacing: '-0.03em', lineHeight: 1.02, margin: '0 0 1.5rem', color: '#f0ede8' }}>
            We build brands people <em style={{ color: '#CE307D', fontStyle: 'italic' }}>remember.</em>
          </h1>
        </RevealOnScroll>
        <RevealOnScroll delay={0.2}>
          <p style={{ color: '#ffffff', fontSize: '1rem', lineHeight: 1.8, maxWidth: '56ch', margin: '0 auto' }}>
            Since 2018 we&apos;ve grown from a small startup into a full-service digital marketing agency — helping ambitious businesses across the US and Malaysia turn strategy into visible, measurable growth.
          </p>
        </RevealOnScroll>
        <RevealOnScroll delay={0.3}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem', marginTop: '2.5rem', fontSize: '0.78rem', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
            <Link href="/" style={{ color: '#ffffff', textDecoration: 'none' }}>Home</Link>
            <span style={{ color: 'rgba(240,237,232,0.3)' }}>/</span>
            <span style={{ color: '#CE307D' }}>About Us</span>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
