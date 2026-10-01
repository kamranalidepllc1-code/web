import type { Metadata } from 'next'
import { Navbar } from '@/components/layout/Navbar'
import { Contact } from '@/components/sections/Contact'
import { AiSearch } from '@/components/ai/AiSearch'

export const metadata: Metadata = {
  title: 'Search | Digi Era Pro',
  description: 'Describe what your business needs and find the right Digi Era Pro service, answer or article.',
  robots: { index: false, follow: true },
}

export default async function SearchPage({ searchParams }: PageProps<'/search'>) {
  const { q } = await searchParams
  const initialQuery = typeof q === 'string' ? q.slice(0, 200) : ''

  return (
    <div style={{ background: '#222429', color: '#f0ede8', fontFamily: "var(--font-outfit), sans-serif", overflowX: 'clip' }}>
      <Navbar />
      <main style={{ padding: 'clamp(7rem, 12vw, 8.5rem) clamp(1.25rem, 6vw, 2.5rem) clamp(2rem, 4vw, 3rem)', background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(206,48,125,0.14), transparent 70%)', minHeight: '70vh' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <span style={{ fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#CE307D' }}>AI search</span>
          <h1 style={{ fontFamily: "var(--font-fraunces), serif", fontWeight: 300, fontSize: 'clamp(2.4rem, 6vw, 4.5rem)', letterSpacing: '-0.03em', lineHeight: 1.05, margin: '1rem 0 1rem' }}>
            What does your <em style={{ color: '#CE307D' }}>business need?</em>
          </h1>
          <p style={{ maxWidth: '600px', color: 'rgba(240,237,232,0.7)', lineHeight: 1.7, marginBottom: 'clamp(1.5rem, 3vw, 2.25rem)' }}>
            Describe your goal or problem in your own words — we’ll match it to our services, answers and articles.
          </p>
          <AiSearch initialQuery={initialQuery} />
        </div>
      </main>
      <Contact />
    </div>
  )
}
