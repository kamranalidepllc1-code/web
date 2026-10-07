import { Navbar } from '@/components/layout/Navbar'
import { Contact } from '@/components/sections/Contact'
import { JsonLd } from '@/components/seo/JsonLd'
import { breadcrumbSchema, pageMetadata, webPageSchema } from '@/lib/seo'

const SEO = {
  title: 'Privacy Policy | Digi Era Pro',
  description: 'Read the Digi Era Pro privacy policy to understand how we collect, use, and protect your personal information.',
  path: '/privacy-policy',
}

export const metadata = pageMetadata({ ...SEO, noindex: false })

const LAST_UPDATED = 'June 1, 2025'

export default function PrivacyPolicyPage() {
  return (
    <div style={{ background: 'var(--bg)', color: 'var(--fg)', fontFamily: 'var(--font-outfit), sans-serif', overflowX: 'hidden' }}>
      <JsonLd data={[
        webPageSchema({ name: SEO.title, description: SEO.description, path: SEO.path }),
        breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Privacy Policy', path: SEO.path }]),
      ]} />
      <Navbar />
      <section style={{ padding: 'clamp(7rem, 12vw, 9rem) clamp(1.25rem, 6vw, 2.5rem) clamp(3rem, 6vw, 5rem)', maxWidth: '860px', margin: '0 auto' }}>
        <span style={{ fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#CE307D' }}>Legal</span>
        <h1 style={{ fontFamily: 'var(--font-fraunces), serif', fontWeight: 300, fontSize: 'clamp(2.5rem, 6vw, 4rem)', letterSpacing: '-0.03em', lineHeight: 1, margin: '1rem 0 0.5rem' }}>
          Privacy <em style={{ color: '#CE307D', fontStyle: 'italic' }}>Policy</em>
        </h1>
        <p style={{ color: 'rgba(var(--fg-rgb),0.55)', fontSize: '0.85rem', marginBottom: '3rem' }}>Last updated: {LAST_UPDATED}</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', lineHeight: 1.8, color: 'rgba(var(--fg-rgb),0.85)' }}>
          <div>
            <h2 style={{ fontFamily: 'var(--font-fraunces), serif', fontWeight: 400, fontSize: '1.4rem', marginBottom: '0.75rem', color: 'var(--fg)' }}>1. Information We Collect</h2>
            <p>When you contact us through our website forms, we collect your name, email address, phone number, and any details you provide about your business or project. We also collect standard server log data (IP address, browser type, pages visited) through our hosting provider.</p>
          </div>

          <div>
            <h2 style={{ fontFamily: 'var(--font-fraunces), serif', fontWeight: 400, fontSize: '1.4rem', marginBottom: '0.75rem', color: 'var(--fg)' }}>2. How We Use Your Information</h2>
            <p>We use the information you provide to respond to your inquiry, prepare proposals, and deliver the services you have engaged us for. We do not sell, rent, or share your personal information with third parties for their marketing purposes.</p>
          </div>

          <div>
            <h2 style={{ fontFamily: 'var(--font-fraunces), serif', fontWeight: 400, fontSize: '1.4rem', marginBottom: '0.75rem', color: 'var(--fg)' }}>3. Cookies</h2>
            <p>Our website uses essential cookies required for the site to function. We may also use analytics cookies (such as Google Analytics) to understand how visitors use the site. You can disable cookies in your browser settings, though some features may not work as intended.</p>
          </div>

          <div>
            <h2 style={{ fontFamily: 'var(--font-fraunces), serif', fontWeight: 400, fontSize: '1.4rem', marginBottom: '0.75rem', color: 'var(--fg)' }}>4. Third-Party Services</h2>
            <p>We use third-party tools including Google Analytics, Google Ads, and Meta Ads to measure website performance and run advertising campaigns. These services have their own privacy policies and may collect data independently.</p>
          </div>

          <div>
            <h2 style={{ fontFamily: 'var(--font-fraunces), serif', fontWeight: 400, fontSize: '1.4rem', marginBottom: '0.75rem', color: 'var(--fg)' }}>5. Data Retention</h2>
            <p>We retain contact form submissions and client records for as long as necessary to provide our services and comply with legal obligations. You may request deletion of your personal data at any time by contacting us at info@digierapro.com.</p>
          </div>

          <div>
            <h2 style={{ fontFamily: 'var(--font-fraunces), serif', fontWeight: 400, fontSize: '1.4rem', marginBottom: '0.75rem', color: 'var(--fg)' }}>6. Your Rights</h2>
            <p>You have the right to access, correct, or delete the personal information we hold about you. To exercise these rights, email us at <a href="mailto:info@digierapro.com" style={{ color: '#CE307D' }}>info@digierapro.com</a>.</p>
          </div>

          <div>
            <h2 style={{ fontFamily: 'var(--font-fraunces), serif', fontWeight: 400, fontSize: '1.4rem', marginBottom: '0.75rem', color: 'var(--fg)' }}>7. Contact</h2>
            <p>Digi Era Pro LLC<br />Email: <a href="mailto:info@digierapro.com" style={{ color: '#CE307D' }}>info@digierapro.com</a><br />Phone: <a href="tel:+17866001595" style={{ color: '#CE307D' }}>(786) 600-1595</a></p>
          </div>
        </div>
      </section>
      <Contact />
    </div>
  )
}
