'use client'

import { useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Check, Copy, Loader2, LogOut, RotateCcw, Sparkles } from 'lucide-react'

const card: React.CSSProperties = { background: 'var(--surface-2)', border: '1px solid rgba(var(--line-rgb), 0.08)', borderRadius: 16, padding: 'clamp(1.1rem, 3vw, 1.6rem)' }
const label: React.CSSProperties = { display: 'block', fontSize: '0.68rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(var(--fg-rgb),0.55)', marginBottom: '0.45rem' }
const input: React.CSSProperties = { width: '100%', font: 'inherit', fontSize: '0.92rem', color: 'var(--fg)', background: 'var(--bg)', border: '1px solid rgba(var(--line-rgb), 0.14)', borderRadius: 10, padding: '0.65rem 0.8rem', outline: 'none' }
const primary: React.CSSProperties = { display: 'inline-flex', alignItems: 'center', gap: '0.45rem', border: 'none', borderRadius: 10, background: '#CE307D', color: '#fff', font: 'inherit', fontSize: '0.78rem', letterSpacing: '0.08em', textTransform: 'uppercase', padding: '0.75rem 1.2rem', cursor: 'pointer' }
const ghost: React.CSSProperties = { ...primary, background: 'transparent', border: '1px solid rgba(var(--line-rgb), 0.18)', color: 'var(--fg)' }

export function AdminAiLogin() {
  const router = useRouter()
  const [username, setUsername] = useState('')
  const [appPassword, setAppPassword] = useState('')
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    setBusy(true)
    setError('')
    const res = await fetch('/api/ai/admin/session', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ username, appPassword }) })
    const json = await res.json().catch(() => ({}))
    setBusy(false)
    if (!res.ok) return setError(json.error || 'Sign-in failed.')
    setAppPassword('')
    router.refresh()
  }

  return (
    <form onSubmit={submit} style={{ ...card, maxWidth: 440, display: 'grid', gap: '1rem' }}>
      <p style={{ fontFamily: "var(--font-fraunces), serif", fontSize: '1.35rem', fontWeight: 300 }}>Sign in with WordPress</p>
      <p style={{ fontSize: '0.85rem', lineHeight: 1.6, color: 'rgba(var(--fg-rgb),0.65)' }}>
        Use your WordPress username and an <strong>Application Password</strong> (WordPress → Users → Profile → Application Passwords). Your account must be able to edit posts.
      </p>
      {error && <p role="alert" style={{ fontSize: '0.85rem', color: '#ffb3b3', background: 'rgba(239,90,90,0.08)', border: '1px solid rgba(239,90,90,0.3)', borderRadius: 10, padding: '0.7rem 0.9rem' }}>{error}</p>}
      <label><span style={label}>WordPress username</span><input style={input} value={username} onChange={e => setUsername(e.target.value)} autoComplete="username" required /></label>
      <label><span style={label}>Application password</span><input style={input} type="password" value={appPassword} onChange={e => setAppPassword(e.target.value)} autoComplete="current-password" required /></label>
      <button type="submit" style={primary} disabled={busy}>{busy && <Loader2 size={15} className="animate-spin" />} Sign in</button>
    </form>
  )
}

const TOOLS = [
  { id: 'seo_titles', name: 'SEO titles', desc: '5 title options (50–60 chars)' },
  { id: 'meta_descriptions', name: 'Meta descriptions', desc: '5 options (140–160 chars)' },
  { id: 'faqs', name: 'FAQ generator', desc: '5 reader questions + answers' },
  { id: 'internal_links', name: 'Internal links', desc: 'Links to real site pages' },
  { id: 'summary', name: 'Summary', desc: 'Summary + key points' },
  { id: 'improve', name: 'Content improvement', desc: 'Clarity & SEO review' },
] as const
type ToolId = (typeof TOOLS)[number]['id']

/** Flattens any tool result into editable text blocks. */
function toBlocks(tool: ToolId, result: Record<string, unknown>): { title?: string; body: string; note?: string }[] {
  switch (tool) {
    case 'seo_titles': return (result.titles as { title: string; rationale: string }[]).map(t => ({ body: t.title, note: t.rationale }))
    case 'meta_descriptions': return (result.descriptions as { text: string; rationale: string }[]).map(d => ({ body: d.text, note: d.rationale }))
    case 'faqs': return (result.faqs as { question: string; answer: string }[]).map(f => ({ title: f.question, body: f.answer }))
    case 'internal_links': return (result.links as { anchor_text: string; target_url: string; where: string }[]).map(l => ({ title: `“${l.anchor_text}” → ${l.target_url}`, body: `<a href="${l.target_url}">${l.anchor_text}</a>`, note: l.where }))
    case 'summary': return [{ title: 'Summary', body: String(result.summary) }, { title: 'Key points', body: (result.key_points as string[]).map(k => `• ${k}`).join('\n') }]
    case 'improve': return (result.suggestions as { area: string; issue: string; suggestion: string }[]).map(s => ({ title: `${s.area}: ${s.issue}`, body: s.suggestion }))
  }
}

export function AdminAiTools({ userName, posts }: { userName: string; posts: { slug: string; title: string }[] }) {
  const router = useRouter()
  const [filter, setFilter] = useState('')
  const [slug, setSlug] = useState(posts[0]?.slug ?? '')
  const [tool, setTool] = useState<ToolId>('seo_titles')
  const [keyword, setKeyword] = useState('')
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')
  const [blocks, setBlocks] = useState<{ title?: string; body: string; note?: string }[] | null>(null)
  const [copied, setCopied] = useState<number | null>(null)

  const visible = useMemo(() => {
    const f = filter.toLowerCase()
    return f ? posts.filter(p => p.title.toLowerCase().includes(f) || p.slug.includes(f)) : posts
  }, [filter, posts])

  async function generate() {
    if (!slug || busy) return
    setBusy(true)
    setError('')
    setBlocks(null)
    try {
      const res = await fetch('/api/ai/admin/generate', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ slug, tool, focusKeyword: keyword.trim() || undefined }) })
      const json = await res.json().catch(() => ({}))
      if (res.status === 401) { router.refresh(); return }
      if (!res.ok) throw new Error(json.error || 'Generation failed.')
      setBlocks(toBlocks(tool, json.result))
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Generation failed.')
    } finally {
      setBusy(false)
    }
  }

  async function copy(i: number, text: string) {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(i)
      setTimeout(() => setCopied(c => (c === i ? null : c)), 1500)
    } catch { /* clipboard blocked — text is still selectable */ }
  }

  async function signOut() {
    await fetch('/api/ai/admin/session', { method: 'DELETE' })
    router.refresh()
  }

  const selected = posts.find(p => p.slug === slug)

  return (
    <div style={{ display: 'grid', gap: '1.25rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', flexWrap: 'wrap', fontSize: '0.85rem', color: 'rgba(var(--fg-rgb),0.65)' }}>
        <span>Signed in as <strong style={{ color: 'var(--fg)' }}>{userName}</strong></span>
        <button type="button" style={{ ...ghost, padding: '0.5rem 0.9rem' }} onClick={signOut}><LogOut size={14} /> Sign out</button>
      </div>

      <section style={{ ...card, display: 'grid', gap: '1.1rem' }}>
        <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: '1rem' }}>
          <label>
            <span style={label}>Find a post ({posts.length})</span>
            <input style={input} value={filter} onChange={e => setFilter(e.target.value)} placeholder="Filter by title…" />
          </label>
          <label>
            <span style={label}>Post</span>
            <select style={input} value={slug} onChange={e => { setSlug(e.target.value); setBlocks(null) }}>
              {visible.map(p => <option key={p.slug} value={p.slug}>{p.title}</option>)}
            </select>
          </label>
        </div>

        <div>
          <span style={label}>Tool</span>
          <div className="grid grid-cols-2 md:grid-cols-3" style={{ gap: '0.6rem' }}>
            {TOOLS.map(t => (
              <button key={t.id} type="button" onClick={() => { setTool(t.id); setBlocks(null) }}
                style={{ textAlign: 'left', font: 'inherit', cursor: 'pointer', borderRadius: 12, padding: '0.75rem 0.9rem', color: 'var(--fg)', background: tool === t.id ? 'rgba(206,48,125,0.14)' : 'var(--bg)', border: `1px solid ${tool === t.id ? '#CE307D' : 'rgba(var(--line-rgb), 0.1)'}` }}>
                <span style={{ display: 'block', fontSize: '0.9rem' }}>{t.name}</span>
                <span style={{ display: 'block', fontSize: '0.72rem', color: 'rgba(var(--fg-rgb),0.55)', marginTop: '0.2rem' }}>{t.desc}</span>
              </button>
            ))}
          </div>
        </div>

        {(tool === 'seo_titles' || tool === 'meta_descriptions') && (
          <label style={{ maxWidth: 420 }}>
            <span style={label}>Focus keyword (optional)</span>
            <input style={input} value={keyword} onChange={e => setKeyword(e.target.value)} maxLength={100} placeholder="e.g. web design new york" />
          </label>
        )}

        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <button type="button" style={primary} onClick={generate} disabled={busy || !slug}>
            {busy ? <Loader2 size={15} className="animate-spin" /> : <Sparkles size={15} />} {busy ? 'Generating…' : 'Generate suggestions'}
          </button>
          {selected && <a href={`/blog/${selected.slug}`} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.8rem', color: '#f38bbd' }}>View post ↗</a>}
        </div>
      </section>

      {error && (
        <div role="alert" style={{ ...card, borderColor: 'rgba(239,90,90,0.35)', background: 'rgba(239,90,90,0.08)', color: '#ffb3b3', display: 'flex', gap: '1rem', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' }}>
          {error}
          <button type="button" style={{ ...ghost, padding: '0.45rem 0.8rem' }} onClick={generate}><RotateCcw size={13} /> Retry</button>
        </div>
      )}

      {busy && <div className="ai-skeleton" style={{ height: 220 }} aria-label="Generating" />}

      {blocks && (
        <section style={{ display: 'grid', gap: '0.8rem' }} aria-live="polite">
          {blocks.length === 0 && <p style={{ ...card, color: 'rgba(var(--fg-rgb),0.7)' }}>No suggestions — try another tool or post.</p>}
          {blocks.map((b, i) => (
            <div key={i} style={{ ...card, padding: '1rem 1.1rem' }}>
              {b.title && <p style={{ fontSize: '0.88rem', fontWeight: 500, marginBottom: '0.5rem' }}>{b.title}</p>}
              <textarea
                style={{ ...input, minHeight: b.body.length > 160 ? 120 : 64, resize: 'vertical', lineHeight: 1.55 }}
                value={b.body}
                onChange={e => setBlocks(prev => prev!.map((x, j) => (j === i ? { ...x, body: e.target.value } : x)))}
                aria-label={`Suggestion ${i + 1}`}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '0.75rem', marginTop: '0.5rem', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '0.74rem', color: 'rgba(var(--fg-rgb),0.5)' }}>
                  {b.note}{(tool === 'seo_titles' || tool === 'meta_descriptions') && ` · ${b.body.length} chars`}
                </span>
                <button type="button" style={{ ...ghost, padding: '0.4rem 0.75rem', fontSize: '0.7rem' }} onClick={() => copy(i, b.body)}>
                  {copied === i ? <><Check size={13} /> Copied</> : <><Copy size={13} /> Copy</>}
                </button>
              </div>
            </div>
          ))}
          <p style={{ fontSize: '0.75rem', color: 'rgba(var(--fg-rgb),0.5)' }}>AI suggestions — review and edit before using them in WordPress. Nothing here is published.</p>
        </section>
      )}
    </div>
  )
}
