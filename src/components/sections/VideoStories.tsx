'use client'

import { useState } from 'react'
import { RevealOnScroll, StaggerOnScroll } from '@/lib/animations'
import { StoryCard } from '@/components/ui/StoryCard'
import { VIDEO_STORIES } from '@/data/site'

export function VideoStories() {
  const [playingStory, setPlayingStory] = useState<number | null>(null)

  return (
    <section style={{ padding: 'clamp(3.5rem, 9vw, 8rem) clamp(1.25rem, 6vw, 2.5rem)', background: '#222429', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '20%', right: '-8%', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(206,48,125,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <RevealOnScroll style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span style={{ fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#CE307D', display: 'block', marginBottom: '1rem' }}>Client stories</span>
          <h2 style={{ fontFamily: "'Fraunces', serif", fontWeight: 300, fontSize: 'clamp(2rem, 4vw, 3.5rem)', letterSpacing: '-0.03em', color: '#f0ede8', margin: '0 0 1rem', lineHeight: 1.05 }}>
            Stories of growth <em style={{ color: '#CE307D', fontStyle: 'italic' }}>&amp; success.</em>
          </h2>
          <p style={{ color: '#ffffff', fontSize: '0.95rem', maxWidth: '52ch', margin: '0 auto' }}>
            From strategy to execution — hear directly from the founders and leaders we&apos;ve partnered with.
          </p>
        </RevealOnScroll>
        <StaggerOnScroll style={{ display: 'grid', gap: '1.5rem' }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {VIDEO_STORIES.map((s, i) => (
            <StoryCard key={s.name} story={s} playing={playingStory === i} onPlay={() => setPlayingStory(i)} onStop={() => setPlayingStory(null)} />
          ))}
        </StaggerOnScroll>
      </div>
    </section>
  )
}
