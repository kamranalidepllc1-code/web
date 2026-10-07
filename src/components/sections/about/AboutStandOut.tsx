import { RevealOnScroll } from '@/lib/animations'

export function AboutStandOut() {
  return (
    <section
      aria-label="The Digi Era Pro team collaborating in a business meeting"
      style={{
        position: 'relative', minHeight: 'clamp(360px, 42vw, 500px)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden',
        backgroundImage: "url('/Assets/about us/imgi_127_a-business-meeting-1 (1).jpg')",
        backgroundPosition: 'center', backgroundSize: 'cover', backgroundAttachment: 'fixed',
      }}
    >
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(var(--bg-rgb),0.62)', pointerEvents: 'none' }} />
      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '820px', margin: '0 auto', padding: 'clamp(2rem, 4vw, 3rem) clamp(1.25rem, 6vw, 2.5rem)' }}>
        <RevealOnScroll>
          <span style={{ fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--fg-strong)', display: 'block', marginBottom: '1rem' }}>
            What makes us stand out
          </span>
        </RevealOnScroll>
        <RevealOnScroll delay={0.1}>
          <h2 style={{ fontFamily: "var(--font-outfit), sans-serif", fontWeight: 700, fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', letterSpacing: '-0.01em', lineHeight: 1.15, margin: '0 0 1.25rem', color: 'var(--fg-strong)' }}>
            Clear Communication. Consistent Follow-Through.
          </h2>
        </RevealOnScroll>
        <RevealOnScroll delay={0.2}>
          <p style={{ color: 'rgba(var(--fg-rgb),0.88)', fontSize: '0.95rem', lineHeight: 1.8, maxWidth: '62ch', margin: '0 auto' }}>
            Read our Google reviews and the same things come up again and again: a named account manager who answers quickly, patient explanations, and monthly updates on what changed. We can’t promise rankings — no honest agency can — but we can promise you will always know what we are doing and why.
          </p>
        </RevealOnScroll>
      </div>
    </section>
  )
}
