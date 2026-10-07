'use client'

import { useState } from 'react'
import { Loader2, MessageCircleQuestion, RotateCcw, Sparkles } from 'lucide-react'

type Summary = { summary: string; key_points: string[] }

export function BlogAiPanel({ slug }: { slug: string }) {
  const [summary, setSummary] = useState<Summary | null>(null)
  const [answer, setAnswer] = useState<string | null>(null)
  const [asking, setAsking] = useState(false)
  const [question, setQuestion] = useState('')
  const [busy, setBusy] = useState<'summary' | 'ask' | null>(null)
  const [error, setError] = useState<{ action: 'summary' | 'ask'; message: string } | null>(null)

  async function call(action: 'summary' | 'ask') {
    if (busy) return
    if (action === 'ask' && question.trim().length < 3) return
    setBusy(action)
    setError(null)
    try {
      const res = await fetch('/api/ai/blog', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(action === 'summary' ? { action, slug } : { action, slug, question: question.trim() }),
      })
      const json = await res.json()
      if (!res.ok) throw new Error(json.error || 'Something went wrong.')
      if (action === 'summary') setSummary(json)
      else setAnswer(json.answer)
    } catch (e) {
      setError({ action, message: e instanceof Error ? e.message : 'Something went wrong.' })
    } finally {
      setBusy(null)
    }
  }

  return (
    <section className="ai-blog" aria-label="AI tools for this article">
      <div className="ai-blog-actions">
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.68rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#CE307D', marginRight: '0.25rem' }}>
          <Sparkles size={13} /> AI
        </span>
        {!summary && (
          <button type="button" className="ai-blog-btn" onClick={() => call('summary')} disabled={busy !== null}>
            {busy === 'summary' ? <Loader2 size={13} className="animate-spin" /> : <Sparkles size={13} />} Summarise this article
          </button>
        )}
        <button type="button" className="ai-blog-btn" onClick={() => setAsking(a => !a)} aria-expanded={asking}>
          <MessageCircleQuestion size={13} /> Ask about this article
        </button>
      </div>

      {summary && (
        <div className="ai-blog-out">
          <p>{summary.summary}</p>
          {summary.key_points.length > 0 && <ul>{summary.key_points.map((k, i) => <li key={i}>{k}</li>)}</ul>}
        </div>
      )}

      {asking && (
        <form className="ai-blog-ask" onSubmit={e => { e.preventDefault(); call('ask') }}>
          <input value={question} onChange={e => setQuestion(e.target.value)} placeholder="e.g. How long does this take to show results?" maxLength={500} aria-label="Your question about this article" />
          <button type="submit" className="ai-blog-btn" disabled={busy !== null || question.trim().length < 3}>
            {busy === 'ask' ? <Loader2 size={13} className="animate-spin" /> : 'Ask'}
          </button>
        </form>
      )}
      {answer && <p className="ai-blog-out">{answer}</p>}

      {error && (
        <p className="ai-blog-out" style={{ color: '#ffb3b3', display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
          {error.message}
          <button type="button" className="ai-retry" onClick={() => call(error.action)}><RotateCcw size={12} /> Retry</button>
        </p>
      )}
      {(summary || answer) && (
        <p style={{ fontSize: '0.68rem', color: 'rgba(var(--fg-rgb),0.45)', marginTop: '0.7rem' }}>AI-generated from this article — may contain mistakes.</p>
      )}
    </section>
  )
}
