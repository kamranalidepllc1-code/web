import { RevealOnScroll, StaggerOnScroll } from '@/lib/animations'
import { TeamCard } from '@/components/ui/TeamCard'
import { TEAM } from '@/data/site'

export function Team() {
  return (
    <section id="team" style={{ padding: 'clamp(2rem, 4vw, 3rem) clamp(1.25rem, 6vw, 2.5rem)', background: 'var(--surface)' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <RevealOnScroll style={{ marginBottom: '1.75rem' }}>
          <span style={{ fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#CE307D' }}>The people</span>
          <h2 style={{ fontFamily: "var(--font-fraunces), serif", fontWeight: 300, fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', letterSpacing: '-0.03em', margin: '1rem 0 0', lineHeight: 1, color: 'var(--fg)' }}>Principals</h2>
        </RevealOnScroll>
        <StaggerOnScroll style={{ display: 'grid', gap: '1px', background: 'rgba(var(--line-rgb), 0.06)' }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map(person => (
            <TeamCard key={person.name} person={person} />
          ))}
        </StaggerOnScroll>
        <RevealOnScroll delay={0.2}>
          <p style={{ marginTop: '3rem', color: 'var(--fg-strong)', fontSize: '0.9rem', lineHeight: 1.7 }}>
            Supported by a wider team of 22 strategists, designers, developers, and producers across Berlin, New York, and Tokyo.
          </p>
        </RevealOnScroll>
      </div>
    </section>
  )
}
