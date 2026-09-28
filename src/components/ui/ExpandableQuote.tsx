'use client'

import { useState } from 'react'

export function ExpandableQuote({ quote }: { quote: string }) {
  const [expanded, setExpanded] = useState(false)
  const LIMIT = 180
  const isLong = quote.length > LIMIT
  const displayed = expanded || !isLong ? quote : quote.slice(0, LIMIT) + '...'
  return (
    <div style={{ marginBottom: '2rem' }}>
      <blockquote style={{ fontFamily: "'Fraunces', serif", fontWeight: 300, fontSize: 'clamp(1rem, 2vw, 1.5rem)', lineHeight: 1.6, letterSpacing: '-0.01em', margin: '0 0 0.75rem', color: '#f0ede8', fontStyle: 'italic', borderLeft: '2px solid #CE307D', paddingLeft: '1.5rem' }}>
        &quot;{displayed}&quot;
      </blockquote>
      {isLong && (
        <button
          onClick={() => setExpanded(!expanded)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#CE307D', fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0 0 0 1.5rem', display: 'block' }}
        >
          {expanded ? 'Show less ↑' : 'Read more ↓'}
        </button>
      )}
    </div>
  )
}
