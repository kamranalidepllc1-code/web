'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUp, CheckCircle2, RotateCcw, Square, Trash2, X } from 'lucide-react'
import { SafeMarkdown } from './SafeMarkdown'

type Source = { title: string; url: string; type: string }
type Msg = { role: 'user' | 'assistant'; content: string; sources?: Source[]; lead?: boolean; error?: boolean }

const STORAGE_KEY = 'dep-ai-chat'
const SUGGESTIONS = [
  'I get website traffic but not enough customers',
  'Which service fits a small local business?',
  'What’s included in the Special Offer?',
  'How can I contact your team?',
]
const ease: [number, number, number, number] = [0.22, 1, 0.36, 1]
const AVATAR = '/Assets/ai-assistant.webp'

function Avatar({ size, className }: { size: number; className?: string }) {
  // eslint-disable-next-line @next/next/no-img-element -- tiny local asset, no optimisation needed
  return <img src={AVATAR} alt="" width={size} height={size} className={`ai-avatar ${className ?? ''}`} style={{ width: size, height: size }} />
}

function load(): Msg[] {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY)
    return raw ? (JSON.parse(raw) as Msg[]).slice(-30) : []
  } catch {
    return []
  }
}

export function AiAssistant() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Msg[]>([])
  const [input, setInput] = useState('')
  const [busy, setBusy] = useState(false)
  const abortRef = useRef<AbortController | null>(null)
  const listRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)
  const launcherRef = useRef<HTMLButtonElement>(null)

  useEffect(() => { setMessages(load()) }, [])
  useEffect(() => {
    try { sessionStorage.setItem(STORAGE_KEY, JSON.stringify(messages.filter(m => !m.error).slice(-30))) } catch { /* storage unavailable */ }
  }, [messages])
  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages, busy])
  useEffect(() => {
    if (!open) return
    inputRef.current?.focus()
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') close() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const close = () => {
    setOpen(false)
    launcherRef.current?.focus()
  }

  const send = useCallback(async (text: string, history: Msg[]) => {
    const content = text.trim().slice(0, 1500)
    if (!content || busy) return
    const base = [...history.filter(m => !m.error), { role: 'user' as const, content }]
    setMessages([...base, { role: 'assistant', content: '' }])
    setInput('')
    setBusy(true)
    const controller = new AbortController()
    abortRef.current = controller

    const patch = (fn: (m: Msg) => Msg) =>
      setMessages(prev => {
        const next = [...prev]
        next[next.length - 1] = fn(next[next.length - 1])
        return next
      })

    try {
      const res = await fetch('/api/ai/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: base.map(({ role, content }) => ({ role, content })), path: pathname }),
        signal: controller.signal,
      })
      if (!res.ok || !res.body) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.error || 'Something went wrong. Please try again.')
      }
      const reader = res.body.getReader()
      const decoder = new TextDecoder()
      let buffer = ''
      for (;;) {
        const { value, done } = await reader.read()
        if (done) break
        buffer += decoder.decode(value, { stream: true })
        const lines = buffer.split('\n')
        buffer = lines.pop() ?? ''
        for (const line of lines) {
          if (!line.trim()) continue
          const event = JSON.parse(line) as { type: string; text?: string; items?: Source[]; ok?: boolean; message?: string }
          if (event.type === 'text') patch(m => ({ ...m, content: m.content + event.text }))
          else if (event.type === 'sources') patch(m => ({ ...m, sources: event.items }))
          else if (event.type === 'lead' && event.ok) patch(m => ({ ...m, lead: true }))
          else if (event.type === 'error') throw new Error(event.message)
        }
      }
      patch(m => (m.content ? m : { ...m, content: 'Sorry, I didn’t get a response. Please try again.', error: true }))
    } catch (error) {
      if (controller.signal.aborted) {
        patch(m => (m.content ? m : { ...m, content: 'Stopped.', error: true }))
      } else {
        patch(m => ({ ...m, content: error instanceof Error ? error.message : 'Something went wrong.', error: true }))
      }
    } finally {
      setBusy(false)
      abortRef.current = null
    }
  }, [busy, pathname])

  const retry = () => {
    const lastUser = [...messages].reverse().find(m => m.role === 'user')
    if (!lastUser) return
    const idx = messages.lastIndexOf(lastUser)
    send(lastUser.content, messages.slice(0, idx))
  }

  if (pathname?.startsWith('/admin')) return null
  const lastIsError = messages.at(-1)?.error

  return (
    <>
      <AnimatePresence>
        {!open && (
          <motion.button
            ref={launcherRef}
            key="launcher"
            type="button"
            className="ai-launcher"
            onClick={() => setOpen(true)}
            initial={{ opacity: 0, y: 16, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.9 }}
            transition={{ duration: 0.35, ease }}
            aria-label="Open the Digi Era Pro AI assistant"
          >
            <Avatar size={40} />
            <span className="ai-launcher-label">Ask Digi AI</span>
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <motion.div
            key="panel"
            className="ai-panel"
            role="dialog"
            aria-modal="false"
            aria-label="Digi Era Pro AI assistant"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.35, ease }}
          >
            <header className="ai-head">
              <Avatar size={38} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <p className="ai-head-title">Digi Era Pro Assistant</p>
                <p className="ai-head-sub">AI · answers from our website</p>
              </div>
              {messages.length > 0 && (
                <button type="button" className="ai-icon-btn" onClick={() => { abortRef.current?.abort(); setMessages([]) }} aria-label="Clear conversation" title="Clear conversation">
                  <Trash2 size={15} />
                </button>
              )}
              <button type="button" className="ai-icon-btn" onClick={close} aria-label="Close assistant"><X size={17} /></button>
            </header>

            <div className="ai-body" ref={listRef} aria-live="polite">
              {messages.length === 0 ? (
                <div className="ai-empty">
                  <Avatar size={84} className="ai-avatar-float" />
                  <p className="ai-empty-title">Hi! How can we help your business grow?</p>
                  <p className="ai-empty-text">Ask about our services, pricing plans, or a problem you’re facing — I’ll point you to the right place.</p>
                  <div className="ai-suggestions">
                    {SUGGESTIONS.map(s => (
                      <button key={s} type="button" className="ai-chip" onClick={() => send(s, [])}>{s}</button>
                    ))}
                  </div>
                </div>
              ) : (
                messages.map((m, i) => (
                  <div key={i} className={`ai-msg ai-msg-${m.role}${m.error ? ' ai-msg-error' : ''}`}>
                    {m.role === 'assistant' && !m.content && busy && i === messages.length - 1 ? (
                      <span className="ai-typing" aria-label="Assistant is typing"><i /><i /><i /></span>
                    ) : m.role === 'assistant' ? (
                      <SafeMarkdown text={m.content} />
                    ) : (
                      <p>{m.content}</p>
                    )}
                    {m.lead && (
                      <p className="ai-lead-ok"><CheckCircle2 size={14} /> Details sent to our team</p>
                    )}
                    {m.sources && m.sources.length > 0 && !m.error && (
                      <div className="ai-sources">
                        {m.sources.map(s => (
                          <Link key={s.url} href={s.url} className="ai-source" onClick={() => { if (window.innerWidth < 640) setOpen(false) }}>
                            {s.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))
              )}
              {lastIsError && !busy && (
                <button type="button" className="ai-retry" onClick={retry}><RotateCcw size={13} /> Try again</button>
              )}
            </div>

            <form className="ai-input" onSubmit={e => { e.preventDefault(); send(input, messages) }}>
              <textarea
                ref={inputRef}
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(input, messages) } }}
                placeholder="Ask about services, pricing, or your goals…"
                rows={1}
                maxLength={1500}
                aria-label="Message"
                disabled={busy}
              />
              {busy ? (
                <button type="button" className="ai-send" onClick={() => abortRef.current?.abort()} aria-label="Stop generating"><Square size={14} /></button>
              ) : (
                <button type="submit" className="ai-send" disabled={!input.trim()} aria-label="Send message"><ArrowUp size={17} /></button>
              )}
            </form>
            <p className="ai-disclaimer">AI can make mistakes — please confirm details with our team. Don’t share sensitive information.</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
