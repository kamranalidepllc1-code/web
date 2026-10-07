'use client'

import { useEffect, useState } from 'react'

type TocItem = { id: string; text: string }

/** Table of contents that highlights the section currently in view. */
export function BlogToc({ items, variant }: { items: TocItem[]; variant: 'aside' | 'mobile' }) {
  const [active, setActive] = useState(items[0]?.id)

  useEffect(() => {
    const headings = items.map(i => document.getElementById(i.id)).filter((el): el is HTMLElement => !!el)
    if (!headings.length) return
    const onScroll = () => {
      // Last heading whose top has passed the sticky-header offset
      let current = headings[0].id
      for (const h of headings) {
        if (h.getBoundingClientRect().top <= 140) current = h.id
        else break
      }
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [items])

  const list = (
    <ol>
      {items.map(item => (
        <li key={item.id}>
          <a href={`#${item.id}`} aria-current={active === item.id ? 'location' : undefined}>{item.text}</a>
        </li>
      ))}
    </ol>
  )

  if (variant === 'mobile') {
    return (
      <details className="blog-side-card blog-toc blog-toc-mobile">
        <summary className="blog-side-label">On this page</summary>
        {list}
      </details>
    )
  }

  return (
    <nav className="blog-side-card blog-toc blog-toc-aside" aria-label="On this page">
      <p className="blog-side-label">On this page</p>
      {list}
    </nav>
  )
}

/** Thin bar under the navbar showing how far through the article the reader is. */
export function BlogProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const el = document.querySelector('.blog-content')
      if (!el) return
      const rect = el.getBoundingClientRect()
      const total = rect.height - window.innerHeight * 0.6
      setProgress(Math.min(1, Math.max(0, -rect.top / Math.max(total, 1))))
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return <div className="blog-progress" style={{ transform: `scaleX(${progress})` }} aria-hidden="true" />
}
