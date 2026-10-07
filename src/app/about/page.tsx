import { Navbar } from '@/components/layout/Navbar'
import { AboutHero } from '@/components/sections/about/AboutHero'
import { AboutIntro } from '@/components/sections/about/AboutIntro'
import { History } from '@/components/sections/History'
import { AboutStandOut } from '@/components/sections/about/AboutStandOut'
import { AboutStandOutFeatures } from '@/components/sections/about/AboutStandOutFeatures'
import { AboutValues } from '@/components/sections/about/AboutValues'
import { AboutExperts } from '@/components/sections/about/AboutExperts'
import { AboutCTA } from '@/components/sections/about/AboutCTA'
import { Contact } from '@/components/sections/Contact'
import { JsonLd } from '@/components/seo/JsonLd'
import { breadcrumbSchema, pageMetadata, webPageSchema } from '@/lib/seo'

const SEO = {
  title: 'About Our Digital Marketing Agency | Digi Era Pro',
  description: 'Meet Digi Era Pro, a New York digital marketing agency founded in 2018, helping small and local businesses grow with SEO, ads, social media, and web design.',
  path: '/about',
}

export const metadata = pageMetadata(SEO)

export default function AboutPage() {
  return (
    <div style={{ background: 'var(--bg)', color: 'var(--fg)', fontFamily: "var(--font-outfit), sans-serif", overflowX: 'hidden' }}>
      <JsonLd data={[
        webPageSchema({ name: SEO.title, description: SEO.description, path: SEO.path, type: 'AboutPage' }),
        breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'About Us', path: SEO.path }]),
      ]} />
      <Navbar />
      <AboutHero />
      <AboutIntro />
      <History />
      <AboutStandOut />
      <AboutStandOutFeatures />
      <AboutValues />
      <AboutExperts />
      <AboutCTA />
      <Contact />
    </div>
  )
}
