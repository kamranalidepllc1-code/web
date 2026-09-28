'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeUp } from '@/lib/animations'
import type { JOURNAL } from '@/data/site'

export function JournalCard({ post, featured }: { post: (typeof JOURNAL)[0]; featured?: boolean }) {
  return (
    <motion.div
      variants={fadeUp}
      className={featured ? 'md:col-span-2' : undefined}
      style={{ background: '#0a0a0a', overflow: 'hidden', cursor: 'pointer', display: 'flex', flexDirection: 'column', position: 'relative' }}
      whileHover={{ background: '#0f0f0f' }}
    >
      <motion.div
        style={{ height: featured ? '340px' : '220px', overflow: 'hidden', background: '#1a1a1a', flexShrink: 0, position: 'relative' }}
        whileHover={{ filter: 'brightness(0.85)' }}
        transition={{ duration: 0.6 }}
      >
        <Image
          src={post.img}
          alt={post.title}
          fill
          sizes={featured ? '(max-width: 768px) 100vw, 50vw' : '(max-width: 768px) 100vw, 25vw'}
          style={{ objectFit: 'cover', filter: 'brightness(0.7)' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,10,10,0.7) 0%, transparent 50%)', pointerEvents: 'none' }} />
      </motion.div>
      <div style={{ padding: '1.75rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <span style={{ fontSize: '0.68rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#CE307D', background: 'rgba(206,48,125,0.12)', border: '1px solid rgba(206,48,125,0.25)', padding: '0.25rem 0.7rem' }}>{post.category}</span>
          <span style={{ fontSize: '0.68rem', color: '#ffffff', letterSpacing: '0.06em' }}>{post.date}</span>
        </div>
        <motion.h3
          style={{ fontFamily: "'Fraunces', serif", fontWeight: 300, fontSize: featured ? '1.5rem' : '1.1rem', margin: 0, letterSpacing: '-0.01em', lineHeight: 1.2, color: '#f0ede8' }}
          whileHover={{ color: '#CE307D' }}
        >{post.title}</motion.h3>
        {featured && <p style={{ color: '#ffffff', fontSize: '0.85rem', lineHeight: 1.7, margin: 0 }}>{post.excerpt}</p>}
        <span style={{ fontSize: '0.7rem', letterSpacing: '0.08em', color: '#ffffff', marginTop: 'auto' }}>{post.readTime}</span>
      </div>
    </motion.div>
  )
}
