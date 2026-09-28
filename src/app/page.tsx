import { Navbar } from '@/components/layout/Navbar'
import { Hero } from '@/components/sections/Hero'
import { VideoStories } from '@/components/sections/VideoStories'
import { History } from '@/components/sections/History'
import { Services } from '@/components/sections/Services'
import { MarqueeBar } from '@/components/sections/MarqueeBar'
import { Partners } from '@/components/sections/Partners'
import { Values } from '@/components/sections/Values'
import { Process } from '@/components/sections/Process'
import { Testimonials } from '@/components/sections/Testimonials'
import { ClientLogos } from '@/components/sections/ClientLogos'
import { WhyChooseUs } from '@/components/sections/WhyChooseUs'
import { Studio } from '@/components/sections/Studio'
import { Journal } from '@/components/sections/Journal'
import { Contact } from '@/components/sections/Contact'

export default function Home() {
  return (
    <div style={{ background: '#0a0a0a', color: '#f0ede8', fontFamily: "'Outfit', sans-serif", overflowX: 'hidden' }}>
      <Navbar />
      <Hero />
      <VideoStories />
      <History />
      <Services />
      <MarqueeBar />
      <Partners />
      <Values />
      <Process />
      <Testimonials />
      <ClientLogos />
      <WhyChooseUs />
      <Studio />
      <Journal />
      <Contact />
    </div>
  )
}
