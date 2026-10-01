import Link from 'next/link'
import { Fragment, type ReactNode } from 'react'

/**
 * Renders the small markdown subset the assistant uses (paragraphs, bullet and
 * numbered lists, **bold**, [links](/path)) as React elements — never as HTML.
 * Links are only rendered for this site (root-relative paths or digierapro.com);
 * anything else is shown as plain text.
 */

function safeHref(href: string): string | null {
  const h = href.trim()
  if (/^\/(?!\/)[\w\-./#?=&%]*$/.test(h)) return h
  const m = h.match(/^https?:\/\/(www\.)?digierapro\.com(\/[\w\-./#?=&%]*)?$/i)
  if (m) return m[2] || '/'
  if (/^(mailto:[^\s]+|tel:\+?[\d\s()-]+)$/i.test(h)) return h
  return null
}

function inline(text: string, keyBase: string): ReactNode[] {
  const out: ReactNode[] = []
  const re = /\[([^\]]{1,120})\]\(([^)\s]{1,300})\)|\*\*([^*]{1,200})\*\*|(\/(?:services|blog|contact|about|special-offer|search)[\w\-/#]*)/g
  let last = 0
  let m: RegExpExecArray | null
  let i = 0
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index))
    const key = `${keyBase}-${i++}`
    if (m[1] !== undefined) {
      const href = safeHref(m[2])
      out.push(href ? <AiLink key={key} href={href}>{m[1]}</AiLink> : <Fragment key={key}>{m[1]}</Fragment>)
    } else if (m[3] !== undefined) {
      out.push(<strong key={key}>{m[3]}</strong>)
    } else if (m[4] !== undefined) {
      out.push(<AiLink key={key} href={m[4]}>{m[4]}</AiLink>)
    }
    last = re.lastIndex
  }
  if (last < text.length) out.push(text.slice(last))
  return out
}

function AiLink({ href, children }: { href: string; children: ReactNode }) {
  if (href.startsWith('/')) return <Link href={href} className="ai-link">{children}</Link>
  return <a href={href} className="ai-link">{children}</a>
}

export function SafeMarkdown({ text }: { text: string }) {
  const blocks = text.replace(/\r/g, '').split(/\n{2,}/)
  return (
    <>
      {blocks.map((block, b) => {
        const lines = block.split('\n').filter(l => l.trim())
        if (!lines.length) return null
        const bullets = lines.every(l => /^\s*[-*•]\s+/.test(l))
        const numbered = lines.every(l => /^\s*\d+[.)]\s+/.test(l))
        if (bullets || numbered) {
          const Tag = numbered ? 'ol' : 'ul'
          return (
            <Tag key={b}>
              {lines.map((l, i) => <li key={i}>{inline(l.replace(/^\s*([-*•]|\d+[.)])\s+/, ''), `${b}-${i}`)}</li>)}
            </Tag>
          )
        }
        return (
          <p key={b}>
            {lines.map((l, i) => (
              <Fragment key={i}>
                {i > 0 && <br />}
                {inline(l.replace(/^#{1,6}\s+/, ''), `${b}-${i}`)}
              </Fragment>
            ))}
          </p>
        )
      })}
    </>
  )
}
