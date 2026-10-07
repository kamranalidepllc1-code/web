'use client'

import { useEffect, useRef, useState } from 'react'
import { openAiAssistant } from '@/components/ai/AiAssistant'

const SIZE = 46

/** AI avatar that walks along the top edge of a card while the page scrolls; click opens the assistant. */
export function BlogAiBuddy() {
  const trackRef = useRef<HTMLDivElement>(null)
  const buddyRef = useRef<HTMLButtonElement>(null)
  const [walking, setWalking] = useState(false)

  useEffect(() => {
    const track = trackRef.current
    const buddy = buddyRef.current
    if (!track || !buddy) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let lastY = window.scrollY
    let x = 0
    let dir = 1
    let frame = 0
    let stopTimer: ReturnType<typeof setTimeout> | undefined

    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const max = Math.max(0, track.clientWidth - SIZE)
        const delta = Math.abs(window.scrollY - lastY) * 0.35
        lastY = window.scrollY
        // Walk back and forth between the card edges
        x += delta * dir
        if (x >= max) { x = max; dir = -1 }
        if (x <= 0) { x = 0; dir = 1 }
        buddy.style.setProperty('--x', `${x}px`)
        buddy.style.setProperty('--tilt', `${dir * 8}deg`)
      })
      setWalking(true)
      clearTimeout(stopTimer)
      stopTimer = setTimeout(() => setWalking(false), 220)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(frame)
      clearTimeout(stopTimer)
    }
  }, [])

  return (
    <div ref={trackRef} className="ai-buddy-track">
      <button
        ref={buddyRef}
        type="button"
        className={`ai-buddy${walking ? ' is-walking' : ''}`}
        onClick={openAiAssistant}
        aria-label="Open the Digi Era Pro AI assistant"
      >
        <span className="ai-buddy-bubble" aria-hidden="true">Ask me</span>
        {/* eslint-disable-next-line @next/next/no-img-element -- tiny local asset */}
        <img src="/Assets/ai-assistant.webp" alt="" width={SIZE} height={SIZE} className="ai-avatar" style={{ width: SIZE, height: SIZE }} />
      </button>
    </div>
  )
}
