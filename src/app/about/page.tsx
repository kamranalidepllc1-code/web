import type { Metadata } from 'next'
import { Navbar } from '@/components/layout/Navbar'
import { AboutHero } from '@/components/sections/about/AboutHero'
import { AboutIntro } from '@/components/sections/about/AboutIntro'
import { AboutTimeline } from '@/components/sections/about/AboutTimeline'
import { AboutStandOut } from '@/components/sections/about/AboutStandOut'
import { AboutStandOutFeatures } from '@/components/sections/about/AboutStandOutFeatures'
import { AboutValues } from '@/components/sections/about/AboutValues'
import { AboutExperts } from '@/components/sections/about/AboutExperts'
import { AboutCTA } from '@/components/sections/about/AboutCTA'
import { Contact } from '@/components/sections/Contact'

export const metadata: Metadata = {
  title: 'About Us | Digi Era Pro',
  description:
    'Digi Era Pro is a full-service digital marketing agency founded in 2018, helping ambitious businesses across the US and Malaysia grow through strategy, design, and performance marketing.',
}

export default function AboutPage() {
  return (
    <div style={{ background: '#0a0a0a', color: '#f0ede8', fontFamily: "'Outfit', sans-serif", overflowX: 'hidden' }}>
      <Navbar />
      <AboutHero />
      <AboutIntro />
      <AboutTimeline />
      <AboutStandOut />
      <AboutStandOutFeatures />
      <AboutValues />
      <AboutExperts />
      <AboutCTA />
      <Contact />
    </div>
  )
}
