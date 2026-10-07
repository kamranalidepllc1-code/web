'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { fadeUp } from '@/lib/animations'

export type JournalPost = {
  date: string
  category: string
  title: string
  excerpt: string
  img: string | null
  /** width / height of `img`; when set the artwork is shown uncropped and undimmed (blog banners contain text). */
  imgRatio?: number
  readTime: string
  href?: string
}

const MotionLink = motion.create(Link)

export function JournalCard({ post, featured }: { post: JournalPost; featured?: boolean }) {
  const Wrapper = post.href ? MotionLink : motion.div
  return (
    <Wrapper
      href={post.href ?? ''}
      variants={fadeUp}
      style={{ background: 'var(--bg)', overflow: 'hidden', cursor: 'pointer', display: 'flex', flexDirection: 'column', position: 'relative', textDecoration: 'none', color: 'inherit', height: '100%' }}
      whileHover={{ background: 'var(--surface)' }}
    >
      <motion.div
        style={{ ...(post.imgRatio ? { aspectRatio: String(post.imgRatio) } : { height: featured ? '340px' : '220px' }), overflow: 'hidden', background: 'var(--surface-3)', flexShrink: 0, position: 'relative' }}
        whileHover={{ filter: 'brightness(0.85)' }}
        transition={{ duration: 0.6 }}
      >
        {post.img && (
          <Image
            src={post.img}
            alt={post.title}
            fill
            sizes={featured ? '(max-width: 768px) 100vw, 50vw' : '(max-width: 768px) 100vw, 25vw'}
            style={{ objectFit: 'cover', filter: post.imgRatio ? undefined : 'brightness(0.7)' }}
          />
        )}
        {!post.imgRatio && <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(var(--bg-rgb),0.7) 0%, transparent 50%)', pointerEvents: 'none' }} />}
      </motion.div>
      <div style={{ padding: '1.75rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <span style={{ fontSize: '0.68rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#CE307D', background: 'rgba(206,48,125,0.12)', border: '1px solid rgba(206,48,125,0.25)', padding: '0.25rem 0.7rem' }}>{post.category}</span>
          <span style={{ fontSize: '0.68rem', color: 'var(--fg-strong)', letterSpacing: '0.06em' }}>{post.date}</span>
        </div>
        <motion.h3
          style={{ fontFamily: "var(--font-fraunces), serif", fontWeight: 300, fontSize: featured ? '1.5rem' : '1.1rem', margin: 0, letterSpacing: '-0.01em', lineHeight: 1.2, color: 'var(--fg)' }}
          whileHover={{ color: '#CE307D' }}
        >{post.title}</motion.h3>
        {featured && <p style={{ color: 'var(--fg-strong)', fontSize: '0.85rem', lineHeight: 1.7, margin: 0 }}>{post.excerpt}</p>}
        <span style={{ fontSize: '0.7rem', letterSpacing: '0.08em', color: 'var(--fg-strong)', marginTop: 'auto' }}>{post.readTime}</span>
      </div>
    </Wrapper>
  )
}
