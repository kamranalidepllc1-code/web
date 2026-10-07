import { Navbar } from '@/components/layout/Navbar'
import { ContactHero } from '@/components/sections/contact/ContactHero'
import { ContactInfo } from '@/components/sections/contact/ContactInfo'
import { ContactForm } from '@/components/sections/contact/ContactForm'
import { ContactVisual } from '@/components/sections/contact/ContactVisual'
import { ContactOffices } from '@/components/sections/contact/ContactOffices'
import { ContactFinalCTA } from '@/components/sections/contact/ContactFinalCTA'
import { Contact } from '@/components/sections/Contact'
import { JsonLd } from '@/components/seo/JsonLd'
import { breadcrumbSchema, pageMetadata, webPageSchema } from '@/lib/seo'

const SEO = {
  title: 'Contact Our Marketing Team | Digi Era Pro',
  description: 'Contact Digi Era Pro to discuss SEO, Google Ads, social media, or a new website. Call (786) 600-1595, email info@digierapro.com, or send us your project details.',
  path: '/contact',
}

export const metadata = pageMetadata(SEO)

export default function ContactPage() {
  return (
    <div style={{ background: 'var(--bg)', color: 'var(--fg)', fontFamily: "var(--font-outfit), sans-serif", overflowX: 'hidden' }}>
      <JsonLd data={[
        webPageSchema({ name: SEO.title, description: SEO.description, path: SEO.path, type: 'ContactPage' }),
        breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Contact', path: SEO.path }]),
      ]} />
      <Navbar />
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <ContactVisual />
      <ContactOffices />
      <ContactFinalCTA />
      <Contact />
    </div>
  )
}
