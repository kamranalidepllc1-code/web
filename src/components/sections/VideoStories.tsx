'use client'

import { useEffect, useRef, useState } from 'react'
import { RevealOnScroll, StaggerOnScroll } from '@/lib/animations'
import { StoryCard } from '@/components/ui/StoryCard'
import { VIDEO_STORIES } from '@/data/site'

export function VideoStories() {
  const [playingStory, setPlayingStory] = useState<number | null>(null)
  const [activeSlide, setActiveSlide] = useState(0)
  const [touching, setTouching] = useState(false)
  const sliderRef = useRef<HTMLDivElement>(null)

  const handleScroll = () => {
    const el = sliderRef.current
    if (!el) return
    const slide = el.firstElementChild?.firstElementChild as HTMLElement | null
    if (!slide) return
    const step = slide.offsetWidth + 16
    setActiveSlide(Math.min(VIDEO_STORIES.length - 1, Math.round(el.scrollLeft / step)))
  }

  const goTo = (i: number) => {
    const el = sliderRef.current
    const slide = el?.firstElementChild?.children[i] as HTMLElement | undefined
    if (!el || !slide) return
    el.scrollTo({ left: slide.offsetLeft - (el.offsetWidth - slide.offsetWidth) / 2, behavior: 'smooth' })
  }

  // Mobile only: auto-advance one card at a time; pause while a video plays or the user is swiping
  useEffect(() => {
    if (playingStory !== null || touching) return
    if (!window.matchMedia('(max-width: 639px)').matches) return
    const id = setTimeout(() => goTo((activeSlide + 1) % VIDEO_STORIES.length), 3500)
    return () => clearTimeout(id)
  }, [activeSlide, playingStory, touching])

  return (
    <section style={{ padding: 'clamp(2rem, 4vw, 3rem) clamp(1.25rem, 6vw, 2.5rem)', background: 'var(--bg)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '20%', right: '-8%', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(206,48,125,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <RevealOnScroll style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
          <span style={{ fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#CE307D', display: 'block', marginBottom: '1rem' }}>Client stories</span>
          <h2 style={{ fontFamily: "var(--font-fraunces), serif", fontWeight: 300, fontSize: 'clamp(2rem, 4vw, 3.5rem)', letterSpacing: '-0.03em', color: 'var(--fg)', margin: '0 0 1rem', lineHeight: 1.05 }}>
            Stories of growth <em style={{ color: '#CE307D', fontStyle: 'italic' }}>&amp; success.</em>
          </h2>
          <p style={{ color: 'var(--fg-strong)', fontSize: '0.95rem', maxWidth: '52ch', margin: '0 auto' }}>
            Hear directly from business owners about working with our team on their marketing and websites.
          </p>
        </RevealOnScroll>
        <div
          ref={sliderRef}
          onScroll={handleScroll}
          onTouchStart={() => setTouching(true)}
          onTouchEnd={() => setTouching(false)}
          className="stories-slider overflow-x-auto snap-x snap-mandatory sm:overflow-visible"
        >
          <StaggerOnScroll className="flex gap-4 sm:grid sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
            {VIDEO_STORIES.map((s, i) => (
              <div key={s.name} className="shrink-0 w-full snap-center sm:w-auto">
                <StoryCard story={s} playing={playingStory === i} onPlay={() => setPlayingStory(i)} onStop={() => setPlayingStory(null)} />
              </div>
            ))}
          </StaggerOnScroll>
        </div>
        <div className="flex justify-center gap-2 mt-5 sm:hidden">
          {VIDEO_STORIES.map((s, i) => (
            <button
              key={s.name}
              type="button"
              aria-label={`Go to story ${i + 1}`}
              onClick={() => goTo(i)}
              style={{ width: activeSlide === i ? '22px' : '8px', height: '8px', borderRadius: '999px', border: 0, padding: 0, cursor: 'pointer', background: activeSlide === i ? '#CE307D' : 'rgba(255,255,255,0.3)', transition: 'width 0.3s, background 0.3s' }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
