'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeUp } from '@/lib/animations'
import type { VIDEO_STORIES } from '@/data/site'

export function StoryCard({
  story,
  playing,
  onPlay,
  onStop,
}: {
  story: (typeof VIDEO_STORIES)[0]
  playing: boolean
  onPlay: () => void
  onStop: () => void
}) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -4 }} transition={{ duration: 0.25 }}
      style={{ position: 'relative', aspectRatio: '9 / 16', overflow: 'hidden', background: 'var(--surface-2)', cursor: playing ? 'default' : 'pointer' }}
      onClick={() => { if (!playing) onPlay() }}
    >
      {playing ? (
        <>
          <iframe
            src={`https://www.youtube.com/embed/${story.videoId}?autoplay=1&playsinline=1&rel=0`}
            title={`${story.name}'s story`}
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0 }}
          />
          <motion.button
            aria-label="Close video"
            whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.92 }}
            onClick={(e) => { e.stopPropagation(); onStop() }}
            style={{
              position: 'absolute', top: '0.75rem', right: '0.75rem', width: '32px', height: '32px', borderRadius: '50%',
              background: 'rgba(0,0,0,0.6)', border: '1px solid rgba(255,255,255,0.4)', color: '#fff',
              display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontSize: '0.9rem', lineHeight: 1,
            }}
          >
            ✕
          </motion.button>
        </>
      ) : (
        <>
          <Image src={story.poster} alt={story.name} fill sizes="(max-width: 640px) 50vw, 25vw" style={{ objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.1)', transition: 'background 0.25s' }} />
          <motion.button
            aria-label={`Play ${story.name}'s story`}
            initial={{ x: '-50%', y: '-50%' }}
            whileHover={{ x: '-50%', y: '-50%', scale: 1.08 }} whileTap={{ x: '-50%', y: '-50%', scale: 0.94 }}
            style={{
              position: 'absolute', top: '50%', left: '50%',
              width: '64px', height: '64px', borderRadius: '50%',
              background: 'rgba(var(--line-rgb), 0.15)', backdropFilter: 'blur(4px)',
              border: '1.5px solid rgba(255,255,255,0.8)', boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
            }}
          >
            <span style={{ width: 0, height: 0, borderTop: '9px solid transparent', borderBottom: '9px solid transparent', borderLeft: '14px solid #fff', marginLeft: '4px' }} />
          </motion.button>
        </>
      )}
    </motion.div>
  )
}
