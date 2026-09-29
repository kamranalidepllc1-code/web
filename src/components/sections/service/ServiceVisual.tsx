'use client'

import { motion } from 'framer-motion'
import {
  BadgeCheck,
  Bell,
  Clock,
  Database,
  Gamepad2,
  Heart,
  Terminal,
  Trophy,
  Workflow,
  Globe,
  ImageIcon,
  Lock,
  MapPin,
  MousePointer2,
  Navigation,
  Phone,
  ShieldCheck,
  Smartphone,
  Star,
  Target,
  Search,
  Link2,
  Layers,
  Palette,
  CalendarDays,
  MessageCircle,
  Share2,
  PenLine,
  Sparkles,
  Megaphone,
  Users,
  LineChart,
  Fingerprint,
  Compass,
  Gauge,
  type LucideIcon,
} from 'lucide-react'
import type { ServicePageContent } from '@/types/site'

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1]

// Lightweight, illustrative mockups built from plain elements — no image assets.
export function ServiceVisual({ variant }: { variant: ServicePageContent['visual'] }) {
  return (
    <div style={{ position: 'relative', padding: 'clamp(1rem, 3vw, 1.75rem) 0' }} aria-hidden="true">
      {variant === 'web' && <WebVisual />}
      {variant === 'app' && <AppVisual />}
      {variant === 'software' && <SoftwareVisual />}
      {variant === 'game' && <GameVisual />}
      {variant === 'landing' && <LandingVisual />}
      {variant === 'gbp' && <GbpVisual />}
      {variant === 'seo' && <SeoVisual />}
      {variant === 'ads' && <AdsVisual />}
      {variant === 'design' && <DesignVisual />}
      {variant === 'social' && <SocialVisual />}
      {variant === 'links' && <LinksVisual />}
      {variant === 'content' && <ContentVisual />}
      {variant === 'brand' && <BrandVisual />}
    </div>
  )
}

function Frame({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <div style={{ position: 'relative', background: '#2a2d33', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 40px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(206,48,125,0.06)', ...style }}>
      {children}
    </div>
  )
}

function Chip({ icon: Icon, label, style, delay = 0 }: { icon: LucideIcon; label: string; style: React.CSSProperties; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: [0, -6, 0] }}
      transition={{ opacity: { delay: 0.9 + delay, duration: 0.5 }, y: { delay: 0.9 + delay, duration: 4, repeat: Infinity, ease: 'easeInOut' } }}
      style={{ position: 'absolute', zIndex: 2, display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(17,17,17,0.92)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '999px', padding: '0.5rem 0.9rem', fontSize: '0.72rem', letterSpacing: '0.04em', color: '#f0ede8', whiteSpace: 'nowrap', boxShadow: '0 12px 30px rgba(0,0,0,0.4)', ...style }}
    >
      <Icon size={14} strokeWidth={1.75} color="#CE307D" />
      {label}
    </motion.div>
  )
}

function Bar({ w, h = 6, color = 'rgba(240,237,232,0.14)', delay = 0, style }: { w: string; h?: number; color?: string; delay?: number; style?: React.CSSProperties }) {
  return (
    <motion.span
      initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.7, delay: 0.5 + delay, ease }}
      style={{ display: 'block', width: w, height: h, borderRadius: h, background: color, transformOrigin: 'left', ...style }}
    />
  )
}

function WebVisual() {
  const code: [number, string, string][] = [
    [0, '38%', '#CE307D'], [1, '55%', 'rgba(240,237,232,0.25)'], [2, '42%', 'rgba(240,237,232,0.14)'],
    [2, '60%', 'rgba(255,110,180,0.5)'], [1, '30%', 'rgba(240,237,232,0.25)'], [0, '22%', '#CE307D'],
    [0, '48%', 'rgba(240,237,232,0.14)'], [1, '66%', 'rgba(240,237,232,0.25)'], [1, '35%', 'rgba(255,110,180,0.5)'],
  ]
  return (
    <>
      <Frame>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.8rem 1rem', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
          <div style={{ display: 'flex', gap: '6px' }}>
            {['#CE307D', 'rgba(240,237,232,0.25)', 'rgba(240,237,232,0.12)'].map(c => <span key={c} style={{ width: 9, height: 9, borderRadius: '50%', background: c }} />)}
          </div>
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '0.4rem', background: 'rgba(255,255,255,0.05)', borderRadius: '999px', padding: '0.3rem 0.8rem', fontSize: '0.68rem', color: 'rgba(240,237,232,0.6)', minWidth: 0 }}>
            <Lock size={10} /> <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>yourbusiness.com</span>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.15fr', minHeight: 'clamp(240px, 38vw, 340px)' }}>
          <div style={{ padding: '1.25rem 1rem', borderRight: '1px solid rgba(255,255,255,0.07)', display: 'flex', flexDirection: 'column', gap: '0.8rem', background: '#272a30' }}>
            {code.map(([indent, w, c], i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <span style={{ fontSize: '0.55rem', color: 'rgba(240,237,232,0.2)', width: '0.9rem', textAlign: 'right', fontFamily: 'monospace' }}>{i + 1}</span>
                <Bar w={w} h={5} color={c} delay={i * 0.06} style={{ marginLeft: `${indent * 0.9}rem` }} />
              </div>
            ))}
            <motion.span animate={{ opacity: [1, 0, 1] }} transition={{ duration: 1, repeat: Infinity }} style={{ width: 2, height: 11, background: '#CE307D', marginLeft: '1.5rem' }} />
          </div>
          <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Bar w="28%" h={6} color="rgba(240,237,232,0.4)" />
              <div style={{ display: 'flex', gap: 5 }}>{[0, 1, 2].map(i => <Bar key={i} w="18px" h={4} delay={0.1 + i * 0.05} />)}</div>
            </div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 0.8 }}
              style={{ flex: 1, minHeight: 90, borderRadius: 10, background: 'linear-gradient(135deg, rgba(206,48,125,0.55), rgba(255,110,180,0.15) 60%, rgba(255,255,255,0.02))', padding: '0.9rem', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', gap: 6 }}>
              <Bar w="70%" h={7} color="rgba(255,255,255,0.8)" delay={0.5} />
              <Bar w="45%" h={7} color="rgba(255,255,255,0.8)" delay={0.6} />
              <Bar w="30%" h={12} color="#222429" delay={0.7} style={{ marginTop: 6, borderRadius: 4 }} />
            </motion.div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8 }}>
              {[0, 1, 2].map(i => (
                <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 + i * 0.1 }}
                  style={{ borderRadius: 8, border: '1px solid rgba(255,255,255,0.07)', padding: '0.55rem', display: 'flex', flexDirection: 'column', gap: 5 }}>
                  <span style={{ width: 12, height: 12, borderRadius: 4, background: 'rgba(206,48,125,0.5)' }} />
                  <Bar w="80%" h={4} delay={1 + i * 0.1} />
                  <Bar w="55%" h={4} delay={1.05 + i * 0.1} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Frame>
      <Chip icon={Smartphone} label="Responsive" style={{ left: '-0.5rem', bottom: '0.25rem' }} />
      <Chip icon={ShieldCheck} label="Fast & secure" style={{ right: '-0.5rem', top: '0.25rem' }} delay={0.3} />
    </>
  )
}

function LandingVisual() {
  return (
    <>
      <Frame style={{ padding: 'clamp(1rem, 3vw, 1.5rem)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.75rem' }}>
          <Bar w="22%" h={6} color="rgba(240,237,232,0.4)" />
          <Bar w="16%" h={14} color="rgba(206,48,125,0.35)" style={{ borderRadius: 4 }} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, textAlign: 'center', marginBottom: '1.75rem' }}>
          <Bar w="24%" h={5} color="#CE307D" style={{ transformOrigin: 'center' }} />
          <Bar w="78%" h={11} color="rgba(240,237,232,0.55)" delay={0.1} style={{ transformOrigin: 'center' }} />
          <Bar w="58%" h={11} color="rgba(240,237,232,0.55)" delay={0.2} style={{ transformOrigin: 'center' }} />
          <Bar w="66%" h={5} delay={0.3} style={{ transformOrigin: 'center', marginTop: 4 }} />
          <div style={{ position: 'relative', marginTop: 12 }}>
            <motion.span
              animate={{ scale: [1, 1.35], opacity: [0.55, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: 'easeOut' }}
              style={{ position: 'absolute', inset: 0, borderRadius: 8, border: '1px solid #CE307D' }}
            />
            <motion.span
              animate={{ scale: [1, 1, 0.94, 1] }} transition={{ duration: 3.2, times: [0, 0.62, 0.7, 0.78], repeat: Infinity, delay: 1.2 }}
              style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#CE307D', color: '#fff', borderRadius: 8, padding: '0.6rem 1.3rem', fontSize: '0.68rem', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 500 }}
            >
              Get started →
            </motion.span>
            <motion.span
              initial={{ x: 90, y: 70, opacity: 0 }}
              animate={{ x: [90, 18, 18, 90], y: [70, 14, 14, 70], opacity: [0, 1, 1, 0] }}
              transition={{ duration: 3.2, times: [0, 0.55, 0.8, 1], repeat: Infinity, delay: 1.2, ease: 'easeInOut' }}
              style={{ position: 'absolute', left: '50%', top: '50%', color: '#f0ede8' }}
            >
              <MousePointer2 size={18} fill="#f0ede8" strokeWidth={1} />
            </motion.span>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10 }}>
          {[0, 1, 2].map(i => (
            <motion.div key={i} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 + i * 0.12 }}
              style={{ borderRadius: 10, border: '1px solid rgba(255,255,255,0.07)', background: '#272a30', padding: '0.8rem 0.7rem', display: 'flex', flexDirection: 'column', gap: 7 }}>
              <span style={{ width: 18, height: 18, borderRadius: '50%', border: '1px solid rgba(206,48,125,0.6)' }} />
              <Bar w="75%" h={5} color="rgba(240,237,232,0.35)" delay={0.9 + i * 0.1} />
              <Bar w="90%" h={4} delay={1 + i * 0.1} />
              <Bar w="60%" h={4} delay={1.05 + i * 0.1} />
            </motion.div>
          ))}
        </div>
      </Frame>
      <Chip icon={Target} label="One clear goal" style={{ left: '-0.5rem', top: '0.25rem' }} />
      <Chip icon={Smartphone} label="Mobile-first" style={{ right: '-0.5rem', bottom: '0.25rem' }} delay={0.3} />
    </>
  )
}

function GbpVisual() {
  const roads: React.CSSProperties[] = [
    { top: '28%', left: '-10%', width: '120%', height: 10, transform: 'rotate(-8deg)' },
    { top: '62%', left: '-10%', width: '120%', height: 6, transform: 'rotate(5deg)' },
    { top: '-10%', left: '34%', width: 8, height: '120%', transform: 'rotate(12deg)' },
    { top: '-10%', left: '74%', width: 5, height: '120%', transform: 'rotate(-6deg)' },
  ]
  return (
    <>
      <Frame style={{ minHeight: 'clamp(320px, 46vw, 420px)', background: '#272a30' }}>
        {/* Stylized map */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        {roads.map((r, i) => <span key={i} style={{ position: 'absolute', background: 'rgba(255,255,255,0.06)', borderRadius: 4, ...r }} />)}
        <div style={{ position: 'absolute', left: '52%', top: '24%', transform: 'translate(-50%, -100%)' }}>
          <motion.span animate={{ scale: [0.6, 2.2], opacity: [0.6, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
            style={{ position: 'absolute', left: '50%', bottom: -6, width: 26, height: 10, marginLeft: -13, borderRadius: '50%', background: 'rgba(206,48,125,0.5)' }} />
          <motion.span initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5, type: 'spring', stiffness: 260, damping: 14 }} style={{ display: 'block', color: '#CE307D' }}>
            <MapPin size={40} fill="#CE307D" color="#222429" strokeWidth={1.25} />
          </motion.span>
        </div>

        {/* Profile card */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.8, ease }}
          style={{ position: 'absolute', left: 'clamp(0.75rem, 3vw, 1.25rem)', right: 'clamp(0.75rem, 3vw, 1.25rem)', bottom: 'clamp(0.75rem, 3vw, 1.25rem)', background: 'rgba(17,17,17,0.96)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 14, padding: 'clamp(0.9rem, 2.5vw, 1.2rem)' }}>
          <p style={{ fontFamily: "'Fraunces', serif", fontWeight: 300, fontSize: '1.2rem', margin: '0 0 0.35rem', color: '#f0ede8' }}>Your Business</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 3, marginBottom: '0.55rem' }}>
            {[0, 1, 2, 3, 4].map(i => (
              <motion.span key={i} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1 + i * 0.08 }} style={{ display: 'inline-flex' }}>
                <Star size={12} fill="#CE307D" color="#CE307D" />
              </motion.span>
            ))}
            <Bar w="30%" h={4} delay={0.6} style={{ marginLeft: 8 }} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.68rem', color: 'rgba(240,237,232,0.55)', marginBottom: '0.85rem' }}>
            <Clock size={11} /> Open · Hours up to date
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 6, marginBottom: '0.9rem' }}>
            {([[Phone, 'Call'], [Navigation, 'Directions'], [Globe, 'Website']] as const).map(([Icon, label]) => (
              <span key={label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, padding: '0.45rem 0', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 8, fontSize: '0.6rem', color: 'rgba(240,237,232,0.75)', letterSpacing: '0.04em' }}>
                <Icon size={13} color="#CE307D" strokeWidth={1.75} /> {label}
              </span>
            ))}
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.62rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(240,237,232,0.55)', marginBottom: 6 }}>
            <span>Profile completeness</span>
          </div>
          <div style={{ height: 4, borderRadius: 4, background: 'rgba(255,255,255,0.07)', overflow: 'hidden' }}>
            <motion.span initial={{ width: '20%' }} animate={{ width: '100%' }} transition={{ delay: 1.2, duration: 1.8, ease }}
              style={{ display: 'block', height: '100%', background: 'linear-gradient(90deg, #CE307D, #ff6eb4)' }} />
          </div>
        </motion.div>
      </Frame>
      <Chip icon={BadgeCheck} label="Accurate info" style={{ right: '-0.5rem', top: '0.25rem' }} />
      <Chip icon={ImageIcon} label="Photos organized" style={{ left: '-0.5rem', top: '32%' }} delay={0.3} />
    </>
  )
}

function AppVisual() {
  return (
    <>
      <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
        <div style={{ position: 'absolute', inset: '10% 5%', borderRadius: '50%', background: 'radial-gradient(circle, rgba(206,48,125,0.25) 0%, transparent 65%)' }} />
        <Frame style={{ width: 'min(260px, 70vw)', aspectRatio: '9 / 18.5', borderRadius: '38px', padding: '10px', background: '#151515', border: '1px solid rgba(255,255,255,0.12)' }}>
          <div style={{ position: 'relative', height: '100%', borderRadius: '30px', background: '#0b0b0b', overflow: 'hidden', display: 'flex', flexDirection: 'column', padding: '0.9rem 0.85rem 0' }}>
            <span style={{ position: 'absolute', top: 8, left: '50%', width: 70, height: 18, marginLeft: -35, borderRadius: 12, background: '#000' }} />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1.9rem', marginBottom: '1rem', gap: 10 }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6, flex: 1 }}>
                <Bar w="40%" h={4} />
                <Bar w="70%" h={9} color="rgba(240,237,232,0.6)" delay={0.1} />
              </div>
              <span style={{ width: 28, height: 28, borderRadius: '50%', background: 'linear-gradient(135deg, #CE307D, #ff6eb4)', flexShrink: 0 }} />
            </div>
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}
              style={{ borderRadius: 16, padding: '0.85rem', background: 'linear-gradient(135deg, rgba(206,48,125,0.6), rgba(255,110,180,0.15))', display: 'flex', flexDirection: 'column', gap: 6, marginBottom: '0.8rem' }}>
              <Bar w="45%" h={4} color="rgba(255,255,255,0.6)" delay={0.6} />
              <Bar w="65%" h={10} color="rgba(255,255,255,0.9)" delay={0.7} />
              <Bar w="100%" h={4} color="rgba(255,255,255,0.25)" delay={0.8} style={{ marginTop: 6 }} />
            </motion.div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, flex: 1 }}>
              {[0, 1, 2].map(i => (
                <motion.div key={i} initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.9 + i * 0.12 }}
                  style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '0.6rem', borderRadius: 12, border: '1px solid rgba(255,255,255,0.07)' }}>
                  <span style={{ width: 26, height: 26, borderRadius: 8, background: 'rgba(206,48,125,0.25)', flexShrink: 0 }} />
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 5 }}>
                    <Bar w="70%" h={5} color="rgba(240,237,232,0.4)" delay={0.9 + i * 0.1} />
                    <Bar w="45%" h={4} delay={1 + i * 0.1} />
                  </div>
                </motion.div>
              ))}
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-around', padding: '0.75rem 0 1rem', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
              {[0, 1, 2, 3].map(i => <span key={i} style={{ width: 16, height: 16, borderRadius: 5, background: i === 0 ? '#CE307D' : 'rgba(240,237,232,0.15)' }} />)}
            </div>
          </div>
        </Frame>
        {/* Notification drops in and out */}
        <motion.div
          initial={{ opacity: 0, y: -16 }} animate={{ opacity: [0, 1, 1, 0], y: [-16, 0, 0, -16] }}
          transition={{ duration: 4.5, times: [0, 0.12, 0.8, 1], repeat: Infinity, repeatDelay: 1, delay: 1.6 }}
          style={{ position: 'absolute', top: '16%', left: 0, right: 0, margin: '0 auto', zIndex: 3, display: 'flex', alignItems: 'center', gap: 8, width: 'min(230px, 62vw)', padding: '0.6rem 0.75rem', borderRadius: 14, background: 'rgba(30,30,30,0.95)', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 16px 40px rgba(0,0,0,0.5)' }}
        >
          <span style={{ width: 24, height: 24, borderRadius: 7, background: '#CE307D', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><Bell size={12} color="#fff" /></span>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 5 }}>
            <span style={{ display: 'block', width: '55%', height: 5, borderRadius: 5, background: 'rgba(240,237,232,0.6)' }} />
            <span style={{ display: 'block', width: '85%', height: 4, borderRadius: 4, background: 'rgba(240,237,232,0.2)' }} />
          </div>
        </motion.div>
      </div>
      <Chip icon={Smartphone} label="iOS & Android" style={{ left: 0, bottom: '14%' }} />
      <Chip icon={BadgeCheck} label="Store-ready" style={{ right: 0, top: '8%' }} delay={0.3} />
    </>
  )
}

function SoftwareVisual() {
  const bars = [45, 70, 55, 85, 60, 95, 75]
  return (
    <>
      <Frame>
        <div style={{ display: 'grid', gridTemplateColumns: '56px 1fr', minHeight: 'clamp(280px, 40vw, 360px)' }}>
          <div style={{ borderRight: '1px solid rgba(255,255,255,0.07)', background: '#272a30', padding: '1rem 0.6rem', display: 'flex', flexDirection: 'column', gap: 14, alignItems: 'center' }}>
            <span style={{ width: 22, height: 22, borderRadius: 7, background: 'linear-gradient(135deg, #CE307D, #ff6eb4)' }} />
            {[0, 1, 2, 3, 4].map(i => <span key={i} style={{ width: 22, height: 6, borderRadius: 6, background: i === 1 ? 'rgba(206,48,125,0.7)' : 'rgba(240,237,232,0.12)' }} />)}
          </div>
          <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.8rem', minWidth: 0 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Bar w="34%" h={8} color="rgba(240,237,232,0.5)" />
              <Bar w="18%" h={16} color="rgba(206,48,125,0.35)" style={{ borderRadius: 6 }} />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8 }}>
              {[0, 1, 2].map(i => (
                <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 + i * 0.1 }}
                  style={{ borderRadius: 10, border: '1px solid rgba(255,255,255,0.07)', padding: '0.6rem', display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <Bar w="50%" h={4} delay={0.6 + i * 0.1} />
                  <Bar w="75%" h={10} color={i === 0 ? '#CE307D' : 'rgba(240,237,232,0.45)'} delay={0.7 + i * 0.1} />
                </motion.div>
              ))}
            </div>
            <div style={{ flex: 1, minHeight: 90, borderRadius: 10, border: '1px solid rgba(255,255,255,0.07)', padding: '0.8rem', display: 'flex', alignItems: 'flex-end', gap: '6%' }}>
              {bars.map((h, i) => (
                <motion.span key={i} initial={{ height: '0%' }} animate={{ height: `${h}%` }} transition={{ delay: 0.9 + i * 0.07, duration: 0.8, ease }}
                  style={{ flex: 1, borderRadius: '4px 4px 0 0', background: i === 5 ? 'linear-gradient(180deg, #ff6eb4, #CE307D)' : 'rgba(240,237,232,0.14)' }} />
              ))}
            </div>
            <div style={{ borderRadius: 8, background: '#222429', border: '1px solid rgba(255,255,255,0.06)', padding: '0.55rem 0.7rem', display: 'flex', alignItems: 'center', gap: 8, fontFamily: 'monospace', fontSize: '0.62rem', color: 'rgba(240,237,232,0.6)', overflow: 'hidden', whiteSpace: 'nowrap' }}>
              <Terminal size={11} color="#CE307D" />
              <span>sync complete</span>
              <motion.span animate={{ opacity: [1, 0, 1] }} transition={{ duration: 1, repeat: Infinity }} style={{ width: 6, height: 11, background: '#CE307D' }} />
            </div>
          </div>
        </div>
      </Frame>
      <Chip icon={Workflow} label="Automated workflows" style={{ left: '-0.5rem', bottom: '0.25rem' }} />
      <Chip icon={Database} label="Integrations" style={{ right: '-0.5rem', top: '0.25rem' }} delay={0.3} />
    </>
  )
}

function GameVisual() {
  const platforms: React.CSSProperties[] = [
    { left: '6%', bottom: '14%', width: '34%' },
    { left: '46%', bottom: '32%', width: '22%' },
    { left: '74%', bottom: '50%', width: '20%' },
  ]
  const gems = [['55%', '42%'], ['81%', '60%'], ['30%', '34%']]
  return (
    <>
      <Frame style={{ aspectRatio: '16 / 11', background: 'linear-gradient(180deg, #1a0d14 0%, #272a30 70%)' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
        <span style={{ position: 'absolute', right: '12%', top: '16%', width: 54, height: 54, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,110,180,0.55), rgba(206,48,125,0.1) 70%)' }} />

        {/* HUD */}
        <div style={{ position: 'absolute', top: 12, left: 14, right: 14, display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 1 }}>
          <div style={{ display: 'flex', gap: 4 }}>
            {[0, 1, 2].map(i => <Heart key={i} size={13} fill={i < 2 ? '#CE307D' : 'transparent'} color="#CE307D" />)}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontFamily: 'monospace', fontSize: '0.7rem', color: '#f0ede8', letterSpacing: '0.1em' }}>
            <Trophy size={12} color="#CE307D" /> LEVEL 03
          </div>
        </div>

        {platforms.map((pl, i) => (
          <motion.span key={i} initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.4 + i * 0.15, duration: 0.6, ease }}
            style={{ position: 'absolute', height: 10, borderRadius: 3, background: 'rgba(240,237,232,0.18)', borderTop: '2px solid #CE307D', transformOrigin: 'left', ...pl }} />
        ))}
        {gems.map(([left, bottom], i) => (
          <motion.span key={i} animate={{ y: [0, -5, 0], opacity: [1, 0.6, 1] }} transition={{ duration: 1.4, repeat: Infinity, delay: i * 0.3 }}
            style={{ position: 'absolute', left, bottom, width: 10, height: 10, rotate: 45, background: '#ff6eb4', boxShadow: '0 0 12px rgba(255,110,180,0.7)' }} />
        ))}
        {/* Player hops onto the next platform and back */}
        <motion.span
          animate={{ x: [0, 0, 60, 60, 0], y: [0, -46, -46, 0, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', times: [0, 0.25, 0.5, 0.75, 1] }}
          style={{ position: 'absolute', left: '16%', bottom: 'calc(14% + 10px)', width: 22, height: 26, borderRadius: 6, background: 'linear-gradient(180deg, #ff6eb4, #CE307D)', boxShadow: '0 0 18px rgba(206,48,125,0.6)' }}
        />
        <div style={{ position: 'absolute', bottom: 12, right: 14, display: 'flex', gap: 6 }}>
          {['A', 'B'].map(k => (
            <span key={k} style={{ width: 22, height: 22, borderRadius: '50%', border: '1px solid rgba(240,237,232,0.3)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.6rem', color: 'rgba(240,237,232,0.7)', fontFamily: 'monospace' }}>{k}</span>
          ))}
        </div>
      </Frame>
      <Chip icon={Gamepad2} label="Playable prototypes" style={{ left: '-0.5rem', bottom: '0.25rem' }} />
      <Chip icon={Smartphone} label="Mobile & web" style={{ right: '-0.5rem', top: '0.25rem' }} delay={0.3} />
    </>
  )
}

function SeoVisual() {
  const results = [
    { w: ['46%', '82%', '64%'], highlight: false },
    { w: ['38%', '76%', '58%'], highlight: true },
    { w: ['52%', '70%', '48%'], highlight: false },
  ]
  return (
    <>
      <Frame style={{ padding: 'clamp(1rem, 3vw, 1.5rem)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '999px', padding: '0.6rem 1rem', marginBottom: '1.25rem', background: '#272a30' }}>
          <Search size={14} color="#CE307D" />
          <motion.span initial={{ width: 0 }} animate={{ width: 'auto' }} transition={{ delay: 0.5, duration: 1.2, ease: 'linear' }}
            style={{ overflow: 'hidden', whiteSpace: 'nowrap', fontSize: '0.72rem', color: 'rgba(240,237,232,0.75)', letterSpacing: '0.02em' }}>
            services near me
          </motion.span>
          <motion.span animate={{ opacity: [1, 0, 1] }} transition={{ duration: 1, repeat: Infinity }} style={{ width: 1.5, height: 12, background: '#CE307D' }} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {results.map((r, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + i * 0.15, duration: 0.6 }}
              style={{ borderRadius: 12, padding: '0.85rem 0.9rem', display: 'flex', flexDirection: 'column', gap: 7, border: `1px solid ${r.highlight ? 'rgba(206,48,125,0.55)' : 'rgba(255,255,255,0.07)'}`, background: r.highlight ? 'linear-gradient(135deg, rgba(206,48,125,0.16), rgba(255,255,255,0.01))' : 'transparent' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                <span style={{ width: 14, height: 14, borderRadius: '50%', background: r.highlight ? '#CE307D' : 'rgba(240,237,232,0.14)' }} />
                {r.highlight
                  ? <span style={{ fontSize: '0.62rem', color: 'rgba(240,237,232,0.75)', letterSpacing: '0.03em' }}>yourbusiness.com</span>
                  : <Bar w="28%" h={4} delay={0.8 + i * 0.1} />}
              </div>
              <Bar w={r.w[0]} h={8} color={r.highlight ? '#ff6eb4' : 'rgba(240,237,232,0.4)'} delay={0.9 + i * 0.1} />
              <Bar w={r.w[1]} h={4} delay={1 + i * 0.1} />
              <Bar w={r.w[2]} h={4} delay={1.05 + i * 0.1} />
            </motion.div>
          ))}
        </div>
      </Frame>
      <Chip icon={Gauge} label="Technical health" style={{ right: '-0.5rem', top: '0.25rem' }} />
      <Chip icon={LineChart} label="Visibility tracking" style={{ left: '-0.5rem', bottom: '0.25rem' }} delay={0.3} />
    </>
  )
}

function AdsVisual() {
  const bars = [30, 42, 38, 55, 50, 68, 74]
  return (
    <>
      <Frame style={{ padding: 'clamp(1rem, 3vw, 1.5rem)' }}>
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
          style={{ borderRadius: 12, border: '1px solid rgba(255,255,255,0.08)', background: '#272a30', padding: '0.9rem', display: 'flex', flexDirection: 'column', gap: 7, marginBottom: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
            <span style={{ fontSize: '0.58rem', fontWeight: 600, letterSpacing: '0.06em', color: '#f0ede8', border: '1px solid rgba(240,237,232,0.35)', borderRadius: 4, padding: '1px 5px' }}>Sponsored</span>
            <span style={{ fontSize: '0.62rem', color: 'rgba(240,237,232,0.6)' }}>yourbusiness.com</span>
          </div>
          <Bar w="72%" h={9} color="#ff6eb4" delay={0.6} />
          <Bar w="90%" h={4} delay={0.7} />
          <Bar w="62%" h={4} delay={0.75} />
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 4 }}>
            {['Call', 'Get a quote', 'Directions'].map(l => (
              <span key={l} style={{ fontSize: '0.58rem', color: '#CE307D', border: '1px solid rgba(206,48,125,0.4)', borderRadius: 999, padding: '2px 8px', whiteSpace: 'nowrap' }}>{l}</span>
            ))}
          </div>
        </motion.div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8, marginBottom: '1rem' }}>
          {['Clicks', 'CTR', 'Conv.'].map((l, i) => (
            <motion.div key={l} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 + i * 0.1 }}
              style={{ borderRadius: 10, border: '1px solid rgba(255,255,255,0.07)', padding: '0.6rem', display: 'flex', flexDirection: 'column', gap: 6, minWidth: 0 }}>
              <span style={{ fontSize: '0.55rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(240,237,232,0.5)' }}>{l}</span>
              <Bar w="70%" h={9} color={i === 2 ? '#CE307D' : 'rgba(240,237,232,0.45)'} delay={1 + i * 0.1} />
            </motion.div>
          ))}
        </div>
        <div style={{ height: 'clamp(80px, 12vw, 110px)', borderRadius: 10, border: '1px solid rgba(255,255,255,0.07)', padding: '0.7rem', display: 'flex', alignItems: 'flex-end', gap: '5%' }}>
          {bars.map((h, i) => (
            <motion.span key={i} initial={{ height: '0%' }} animate={{ height: `${h}%` }} transition={{ delay: 1.1 + i * 0.07, duration: 0.8, ease }}
              style={{ flex: 1, borderRadius: '4px 4px 0 0', background: i === bars.length - 1 ? 'linear-gradient(180deg, #ff6eb4, #CE307D)' : 'rgba(240,237,232,0.14)' }} />
          ))}
        </div>
      </Frame>
      <Chip icon={Target} label="Audience targeting" style={{ right: '-0.5rem', top: '0.25rem' }} />
      <Chip icon={BadgeCheck} label="Conversion tracking" style={{ left: '-0.5rem', bottom: '0.25rem' }} delay={0.3} />
    </>
  )
}

function DesignVisual() {
  const swatches = ['#CE307D', '#ff6eb4', '#f0ede8', '#2a2a2a']
  const handles: React.CSSProperties[] = [{ left: -3, top: -3 }, { right: -3, top: -3 }, { left: -3, bottom: -3 }, { right: -3, bottom: -3 }]
  return (
    <>
      <Frame>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 64px', minHeight: 'clamp(300px, 42vw, 380px)' }}>
          <div style={{ position: 'relative', background: '#272a30', backgroundImage: 'radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)', backgroundSize: '16px 16px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.25rem' }}>
            {/* Artboard */}
            <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5, duration: 0.8, ease }}
              style={{ position: 'relative', width: '78%', maxWidth: 260, aspectRatio: '4 / 5', borderRadius: 8, background: 'linear-gradient(160deg, #1f0f18 0%, #121212 70%)', border: '1px solid rgba(206,48,125,0.55)' }}>
              <div style={{ position: 'absolute', inset: 0, borderRadius: 8, overflow: 'hidden' }}>
                <motion.span animate={{ rotate: [0, 8, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                  style={{ position: 'absolute', right: '-18%', top: '-12%', width: '75%', aspectRatio: '1', borderRadius: '50%', background: 'radial-gradient(circle at 35% 35%, #ff6eb4, #CE307D 55%, transparent 72%)' }} />
                <span style={{ position: 'absolute', left: '10%', top: '38%', width: '30%', aspectRatio: '1', border: '1.5px solid rgba(240,237,232,0.5)', transform: 'rotate(12deg)' }} />
                <div style={{ position: 'absolute', left: '10%', right: '10%', bottom: '10%', display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <Bar w="80%" h={10} color="rgba(240,237,232,0.85)" delay={0.8} />
                  <Bar w="55%" h={10} color="rgba(240,237,232,0.85)" delay={0.9} />
                  <Bar w="35%" h={14} color="#CE307D" delay={1} style={{ marginTop: 6, borderRadius: 4 }} />
                </div>
              </div>
              {/* Selection handles */}
              {handles.map((p, i) => (
                <span key={i} style={{ position: 'absolute', width: 6, height: 6, background: '#f0ede8', border: '1px solid #CE307D', ...p }} />
              ))}
            </motion.div>
            <motion.span
              initial={{ x: 60, y: 60, opacity: 0 }} animate={{ x: [60, 0, 0, 60], y: [60, -10, -10, 60], opacity: [0, 1, 1, 0] }}
              transition={{ duration: 4, times: [0, 0.4, 0.75, 1], repeat: Infinity, delay: 1.3, ease: 'easeInOut' }}
              style={{ position: 'absolute', left: '55%', top: '55%', color: '#f0ede8' }}>
              <MousePointer2 size={18} fill="#f0ede8" strokeWidth={1} />
            </motion.span>
          </div>
          <div style={{ borderLeft: '1px solid rgba(255,255,255,0.07)', padding: '1rem 0.6rem', display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'center' }}>
            <Layers size={14} color="rgba(240,237,232,0.5)" />
            {[0, 1, 2].map(i => <Bar key={i} w="100%" h={5} color={i === 0 ? 'rgba(206,48,125,0.7)' : 'rgba(240,237,232,0.14)'} delay={0.6 + i * 0.08} />)}
            <span style={{ height: 1, width: '100%', background: 'rgba(255,255,255,0.07)', margin: '4px 0' }} />
            <Palette size={14} color="rgba(240,237,232,0.5)" />
            {swatches.map((c, i) => (
              <motion.span key={c} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.9 + i * 0.08 }}
                style={{ width: 22, height: 22, borderRadius: '50%', background: c, border: '1px solid rgba(255,255,255,0.15)' }} />
            ))}
          </div>
        </div>
      </Frame>
      <Chip icon={Sparkles} label="On-brand creatives" style={{ left: '-0.5rem', top: '0.25rem' }} />
      <Chip icon={ImageIcon} label="Print & digital" style={{ right: '-0.5rem', bottom: '0.25rem' }} delay={0.3} />
    </>
  )
}

function SocialVisual() {
  const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S']
  const scheduled = [0, 2, 4, 5]
  return (
    <>
      <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: 'minmax(0, 1.15fr) minmax(0, 0.85fr)', gap: 'clamp(0.6rem, 2vw, 1rem)', alignItems: 'center' }}>
        <Frame style={{ padding: '0.8rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: '0.7rem' }}>
            <span style={{ width: 26, height: 26, borderRadius: '50%', background: 'linear-gradient(135deg, #CE307D, #ff6eb4)', flexShrink: 0 }} />
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 5 }}>
              <Bar w="55%" h={5} color="rgba(240,237,232,0.5)" />
              <Bar w="30%" h={4} delay={0.1} />
            </div>
          </div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.8 }}
            style={{ aspectRatio: '1', borderRadius: 10, background: 'radial-gradient(circle at 70% 30%, rgba(255,110,180,0.55), transparent 55%), linear-gradient(160deg, rgba(206,48,125,0.45), #2c2f35 75%)', marginBottom: '0.7rem', display: 'flex', alignItems: 'flex-end', padding: '0.7rem' }}>
            <Bar w="60%" h={8} color="rgba(255,255,255,0.85)" delay={0.9} />
          </motion.div>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: '0.55rem' }}>
            <motion.span animate={{ scale: [1, 1.25, 1] }} transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 1.8, delay: 1.5 }} style={{ display: 'inline-flex' }}>
              <Heart size={15} fill="#CE307D" color="#CE307D" />
            </motion.span>
            <MessageCircle size={15} color="rgba(240,237,232,0.6)" />
            <Share2 size={15} color="rgba(240,237,232,0.6)" />
          </div>
          <Bar w="85%" h={4} delay={1} />
          <Bar w="60%" h={4} delay={1.05} style={{ marginTop: 5 }} />
        </Frame>
        <Frame style={{ padding: '0.8rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.6rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(240,237,232,0.6)', marginBottom: '0.7rem', whiteSpace: 'nowrap' }}>
            <CalendarDays size={12} color="#CE307D" /> This week
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            {days.map((d, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 + i * 0.07 }}
                style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                <span style={{ fontSize: '0.55rem', color: 'rgba(240,237,232,0.4)', width: 8 }}>{d}</span>
                <span style={{ flex: 1, height: 14, borderRadius: 4, background: scheduled.includes(i) ? 'rgba(206,48,125,0.35)' : 'rgba(255,255,255,0.04)', borderLeft: scheduled.includes(i) ? '2px solid #CE307D' : 'none' }} />
              </motion.div>
            ))}
          </div>
        </Frame>
      </div>
      <Chip icon={CalendarDays} label="Planned & scheduled" style={{ left: '-0.5rem', top: 0 }} />
      <Chip icon={Users} label="Community replies" style={{ right: '-0.5rem', bottom: 0 }} delay={0.3} />
    </>
  )
}

function LinksVisual() {
  const nodes = [
    { x: 16, y: 20 }, { x: 84, y: 16 }, { x: 90, y: 60 }, { x: 70, y: 86 }, { x: 24, y: 84 }, { x: 9, y: 52 },
  ]
  return (
    <>
      <Frame style={{ aspectRatio: '1 / 0.9', background: '#272a30' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
          {nodes.map((n, i) => (
            <motion.line key={i} x1={50} y1={50} x2={n.x} y2={n.y} stroke="#CE307D" strokeWidth={0.3}
              initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 0.7 }} transition={{ delay: 0.5 + i * 0.12, duration: 0.8 }} />
          ))}
        </svg>
        {nodes.map((n, i) => (
          <motion.span key={i} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.8 + i * 0.12, type: 'spring', stiffness: 260, damping: 16 }}
            style={{ position: 'absolute', left: `${n.x}%`, top: `${n.y}%`, width: 30, height: 30, marginLeft: -15, marginTop: -15, borderRadius: 9, background: '#2c2f35', border: '1px solid rgba(255,255,255,0.12)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
            {i % 2 === 0 ? <MapPin size={13} color="rgba(240,237,232,0.7)" /> : <Link2 size={13} color="rgba(240,237,232,0.7)" />}
          </motion.span>
        ))}
        <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}>
          <motion.span animate={{ scale: [1, 1.8], opacity: [0.5, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
            style={{ position: 'absolute', inset: 0, borderRadius: 16, border: '1px solid #CE307D' }} />
          <motion.div initial={{ scale: 0.6, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.3, duration: 0.6, ease }}
            style={{ position: 'relative', width: 'clamp(64px, 12vw, 80px)', aspectRatio: '1', borderRadius: 16, background: 'linear-gradient(135deg, #CE307D, #ff6eb4)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 40px rgba(206,48,125,0.45)' }}>
            <Globe size={28} color="#fff" strokeWidth={1.4} />
          </motion.div>
        </div>
      </Frame>
      <Chip icon={BadgeCheck} label="Consistent listings" style={{ right: '-0.5rem', top: '0.25rem' }} />
      <Chip icon={Link2} label="Relevant links" style={{ left: '-0.5rem', bottom: '0.25rem' }} delay={0.3} />
    </>
  )
}

function ContentVisual() {
  return (
    <>
      <Frame>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem', padding: '0.7rem 1rem', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
          {['H1', 'B', 'I', '“'].map(t => (
            <span key={t} style={{ fontSize: '0.66rem', fontFamily: "'Fraunces', serif", color: t === 'H1' ? '#CE307D' : 'rgba(240,237,232,0.5)' }}>{t}</span>
          ))}
          <span style={{ marginLeft: 'auto', display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: '0.6rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(240,237,232,0.5)' }}>
            <PenLine size={11} color="#CE307D" /> Draft
          </span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '0.8fr 2fr', minHeight: 'clamp(260px, 38vw, 330px)' }}>
          <div style={{ borderRight: '1px solid rgba(255,255,255,0.07)', background: '#272a30', padding: '1rem 0.8rem', display: 'flex', flexDirection: 'column', gap: 9 }}>
            <span style={{ fontSize: '0.55rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(240,237,232,0.4)', marginBottom: 2 }}>Outline</span>
            {['80%', '65%', '90%', '55%', '70%'].map((w, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <span style={{ width: 5, height: 5, borderRadius: '50%', background: i === 1 ? '#CE307D' : 'rgba(240,237,232,0.2)', flexShrink: 0 }} />
                <Bar w={w} h={4} color={i === 1 ? 'rgba(206,48,125,0.7)' : undefined} delay={0.5 + i * 0.07} />
              </div>
            ))}
          </div>
          <div style={{ padding: '1.1rem', display: 'flex', flexDirection: 'column', gap: 8 }}>
            <Bar w="72%" h={12} color="rgba(240,237,232,0.7)" delay={0.6} />
            <Bar w="48%" h={12} color="rgba(240,237,232,0.7)" delay={0.7} />
            <span style={{ height: 6 }} />
            {['96%', '92%', '88%', '60%'].map((w, i) => <Bar key={i} w={w} h={5} delay={0.8 + i * 0.06} />)}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
              style={{ borderLeft: '2px solid #CE307D', padding: '0.4rem 0 0.4rem 0.7rem', margin: '4px 0', display: 'flex', flexDirection: 'column', gap: 6 }}>
              <Bar w="80%" h={6} color="rgba(255,110,180,0.55)" delay={1.2} />
              <Bar w="50%" h={6} color="rgba(255,110,180,0.55)" delay={1.25} />
            </motion.div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <Bar w="54%" h={5} delay={1.35} />
              <motion.span animate={{ opacity: [1, 0, 1] }} transition={{ duration: 1, repeat: Infinity }} style={{ width: 1.5, height: 12, background: '#CE307D' }} />
            </div>
          </div>
        </div>
      </Frame>
      <Chip icon={Megaphone} label="Your brand voice" style={{ left: '-0.5rem', top: '0.25rem' }} />
      <Chip icon={Search} label="Search-aware" style={{ right: '-0.5rem', bottom: '0.25rem' }} delay={0.3} />
    </>
  )
}

function BrandVisual() {
  const palette = ['#CE307D', '#ff6eb4', '#f0ede8', '#1a1a1a']
  const tone = ['Confident', 'Warm', 'Clear']
  return (
    <>
      <Frame style={{ padding: 'clamp(0.9rem, 2.5vw, 1.25rem)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: 'clamp(0.6rem, 2vw, 0.9rem)' }}>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5, duration: 0.7, ease }}
            style={{ gridColumn: 'span 2', borderRadius: 12, padding: 'clamp(1.25rem, 4vw, 2rem)', background: 'radial-gradient(circle at 80% 20%, rgba(255,110,180,0.35), transparent 55%), linear-gradient(135deg, rgba(206,48,125,0.35), #121212 70%)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <motion.span animate={{ rotate: [0, 90, 90, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', times: [0, 0.3, 0.7, 1] }}
              style={{ width: 'clamp(40px, 8vw, 52px)', aspectRatio: '1', borderRadius: '30% 70% 30% 70%', background: 'linear-gradient(135deg, #CE307D, #ff6eb4)', flexShrink: 0 }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 7, flex: 1 }}>
              <Bar w="70%" h={10} color="rgba(255,255,255,0.85)" delay={0.7} />
              <Bar w="45%" h={5} color="rgba(255,255,255,0.4)" delay={0.8} />
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
            style={{ borderRadius: 12, border: '1px solid rgba(255,255,255,0.07)', background: '#272a30', padding: '0.9rem', display: 'flex', flexDirection: 'column', gap: 6 }}>
            <span style={{ fontSize: '0.55rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(240,237,232,0.45)' }}>Typeface</span>
            <span style={{ fontFamily: "'Fraunces', serif", fontWeight: 300, fontSize: 'clamp(1.9rem, 5vw, 2.6rem)', lineHeight: 1, color: '#f0ede8' }}>Aa</span>
            <Bar w="80%" h={4} delay={0.9} />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}
            style={{ borderRadius: 12, border: '1px solid rgba(255,255,255,0.07)', background: '#272a30', padding: '0.9rem', display: 'flex', flexDirection: 'column', gap: 8 }}>
            <span style={{ fontSize: '0.55rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(240,237,232,0.45)' }}>Palette</span>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 5 }}>
              {palette.map((c, i) => (
                <motion.span key={c} initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ delay: 1 + i * 0.08, duration: 0.5, ease }}
                  style={{ height: 'clamp(34px, 7vw, 46px)', borderRadius: 6, background: c, border: '1px solid rgba(255,255,255,0.1)', transformOrigin: 'bottom' }} />
              ))}
            </div>
          </motion.div>
          <div style={{ gridColumn: 'span 2', display: 'flex', flexWrap: 'wrap', gap: 6 }}>
            {tone.map((t, i) => (
              <motion.span key={t} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 + i * 0.1 }}
                style={{ fontSize: '0.65rem', letterSpacing: '0.06em', color: i === 0 ? '#CE307D' : 'rgba(240,237,232,0.7)', border: `1px solid ${i === 0 ? 'rgba(206,48,125,0.5)' : 'rgba(255,255,255,0.1)'}`, borderRadius: 999, padding: '0.3rem 0.8rem' }}>
                {t}
              </motion.span>
            ))}
          </div>
        </div>
      </Frame>
      <Chip icon={Compass} label="Clear positioning" style={{ right: '-0.5rem', top: '0.25rem' }} />
      <Chip icon={Fingerprint} label="Distinct identity" style={{ left: '-0.5rem', bottom: '0.25rem' }} delay={0.3} />
    </>
  )
}
