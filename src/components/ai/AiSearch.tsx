'use client'

import { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ArrowRight, RotateCcw, Search, Sparkles } from 'lucide-react'

type Result = { id: string; type: string; title: string; section?: string; url: string; snippet: string }
type Response = { query: string; results: Result[]; ai: { summary: string; recommended: { id: string; title: string; url: string; reason: string }[] } | null }

const GROUPS: { key: string; label: string; types: string[] }[] = [
  { key: 'services', label: 'Services', types: ['service'] },
  { key: 'answers', label: 'Answers & FAQs', types: ['faq'] },
  { key: 'articles', label: 'Articles', types: ['blog'] },
  { key: 'pages', label: 'Pages & offers', types: ['page', 'company', 'offer', 'review'] },
]
const EXAMPLES = ['I need help getting more customers from Google', 'My website gets visits but no enquiries', 'How much is Google Business Profile management?', 'We need a new logo and brand']
const TYPE_LABEL: Record<string, string> = { service: 'Service', faq: 'FAQ', blog: 'Article', page: 'Page', company: 'About us', offer: 'Offer', review: 'Review' }

/** syncUrl: keep /search?q= in the address bar (off when used inside the navbar popup) */
export function AiSearch({ initialQuery, syncUrl = true }: { initialQuery: string; syncUrl?: boolean }) {
  const router = useRouter()
  const [query, setQuery] = useState(initialQuery)
  const [data, setData] = useState<Response | null>(null)
  const [state, setState] = useState<'idle' | 'loading' | 'error'>(initialQuery ? 'loading' : 'idle')
  const [error, setError] = useState('')

  /** Pure request — returns data or an error message; callers apply state. */
  const fetchResults = useCallback(async (text: string): Promise<{ data: Response } | { error: string }> => {
    try {
      const res = await fetch('/api/ai/search', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ query: text.slice(0, 200) }) })
      const json = await res.json()
      return res.ok ? { data: json as Response } : { error: json.error || 'Search failed.' }
    } catch {
      return { error: 'Search failed. Check your connection and try again.' }
    }
  }, [])

  const apply = (r: { data: Response } | { error: string }) => {
    if ('data' in r) {
      setData(r.data)
      setState('idle')
    } else {
      setError(r.error)
      setState('error')
    }
  }

  const run = (q: string) => {
    const text = q.trim()
    if (text.length < 2) return
    setState('loading')
    setError('')
    if (syncUrl) router.replace(`/search?q=${encodeURIComponent(text)}`, { scroll: false })
    fetchResults(text).then(apply)
  }

  // A shared /search?q= link starts in the loading state and fetches once.
  useEffect(() => {
    if (initialQuery.trim().length < 2) return
    let active = true
    fetchResults(initialQuery.trim()).then(r => { if (active) apply(r) })
    return () => { active = false }
  }, [initialQuery, fetchResults])

  const grouped = GROUPS.map(g => ({ ...g, items: (data?.results ?? []).filter(r => g.types.includes(r.type)) })).filter(g => g.items.length)

  return (
    <div>
      <form className="ai-search-box" onSubmit={e => { e.preventDefault(); run(query) }} role="search">
        <input
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Describe what you need — e.g. “more customers from Google”"
          aria-label="Search the website"
          maxLength={200}
          autoFocus={!initialQuery}
        />
        <button type="submit" disabled={state === 'loading' || query.trim().length < 2}><Search size={15} /> Search</button>
      </form>

      {!data && state === 'idle' && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1.25rem' }}>
          {EXAMPLES.map(ex => (
            <button key={ex} type="button" className="ai-chip" style={{ fontSize: '0.8rem' }} onClick={() => { setQuery(ex); run(ex) }}>{ex}</button>
          ))}
        </div>
      )}

      {state === 'loading' && (
        <div style={{ display: 'grid', gap: '0.75rem', marginTop: '2rem' }} aria-busy="true" aria-label="Searching">
          <div className="ai-skeleton" style={{ height: 110 }} />
          <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: '0.75rem' }}>
            {[0, 1, 2].map(i => <div key={i} className="ai-skeleton" style={{ height: 140 }} />)}
          </div>
        </div>
      )}

      {state === 'error' && (
        <div style={{ marginTop: '2rem', padding: '1.25rem', borderRadius: 14, border: '1px solid rgba(239,90,90,0.35)', background: 'rgba(239,90,90,0.08)', color: '#ffb3b3', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
          <span>{error}</span>
          <button type="button" className="ai-retry" onClick={() => run(query)}><RotateCcw size={13} /> Try again</button>
        </div>
      )}

      {data && state !== 'loading' && (
        <div style={{ marginTop: '2rem' }} aria-live="polite">
          {data.ai && (data.ai.summary || data.ai.recommended.length > 0) && (
            <section style={{ borderRadius: 16, padding: 'clamp(1.1rem, 3vw, 1.5rem)', border: '1px solid rgba(206,48,125,0.3)', background: 'linear-gradient(180deg, rgba(206,48,125,0.1), rgba(206,48,125,0.02))', marginBottom: '2rem' }}>
              <p style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.68rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#CE307D' }}><Sparkles size={13} /> AI recommendation</p>
              {data.ai.summary && <p style={{ marginTop: '0.6rem', lineHeight: 1.7, color: 'rgba(240,237,232,0.88)' }}>{data.ai.summary}</p>}
              {data.ai.recommended.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: '0.75rem', marginTop: '1rem' }}>
                  {data.ai.recommended.map(r => (
                    <Link key={r.id} href={r.url} className="ai-result" style={{ background: '#272a30' }}>
                      <h3>{r.title}</h3>
                      <p>{r.reason}</p>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', marginTop: '0.7rem', fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#CE307D' }}>View <ArrowRight size={12} /></span>
                    </Link>
                  ))}
                </div>
              )}
            </section>
          )}

          {grouped.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '3rem 1rem', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16 }}>
              <p style={{ fontFamily: "var(--font-fraunces), serif", fontSize: '1.5rem', fontWeight: 300 }}>No matches on our website</p>
              <p style={{ color: 'rgba(240,237,232,0.65)', marginTop: '0.5rem' }}>Try different words, or <Link href="/contact" className="ai-link">contact our team</Link> — we’re happy to help.</p>
            </div>
          ) : (
            grouped.map(g => (
              <section key={g.key} style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(240,237,232,0.55)', marginBottom: '0.9rem' }}>{g.label}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style={{ gap: '0.75rem' }}>
                  {g.items.map(r => (
                    <Link key={r.id} href={r.url} className="ai-result">
                      <span className="ai-badge">{TYPE_LABEL[r.type] ?? r.type}</span>
                      <h3>{r.title}</h3>
                      {r.section && r.type !== 'service' && <p style={{ marginTop: '0.25rem', fontSize: '0.75rem', color: 'rgba(240,237,232,0.5)' }}>{r.section}</p>}
                      <p>{r.snippet}</p>
                    </Link>
                  ))}
                </div>
              </section>
            ))
          )}
        </div>
      )}
    </div>
  )
}
