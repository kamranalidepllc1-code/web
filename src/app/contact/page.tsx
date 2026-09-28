import type { Metadata } from 'next'
import { Navbar } from '@/components/layout/Navbar'
import { ContactHero } from '@/components/sections/contact/ContactHero'
import { ContactInfo } from '@/components/sections/contact/ContactInfo'
import { ContactForm } from '@/components/sections/contact/ContactForm'
import { ContactVisual } from '@/components/sections/contact/ContactVisual'
import { ContactOffices } from '@/components/sections/contact/ContactOffices'
import { ContactFinalCTA } from '@/components/sections/contact/ContactFinalCTA'
import { Contact } from '@/components/sections/Contact'

export const metadata: Metadata = {
  title: 'Contact Us | Digi Era Pro',
  description:
    'Get in touch with Digi Era Pro. Tell us about your project and our team will help you build the strategy, design, and campaigns to grow your business.',
}

export default function ContactPage() {
  return (
    <div style={{ background: '#0a0a0a', color: '#f0ede8', fontFamily: "'Outfit', sans-serif", overflowX: 'hidden' }}>
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
