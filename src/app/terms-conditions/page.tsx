import { Navbar } from '@/components/layout/Navbar'
import { Contact } from '@/components/sections/Contact'
import { JsonLd } from '@/components/seo/JsonLd'
import { breadcrumbSchema, pageMetadata, webPageSchema } from '@/lib/seo'

const SEO = {
  title: 'Terms & Conditions | Digi Era Pro',
  description: 'Read the Digi Era Pro terms and conditions governing the use of our website and digital marketing services.',
  path: '/terms-conditions',
}

export const metadata = pageMetadata({ ...SEO, noindex: false })

const LAST_UPDATED = 'June 1, 2025'

export default function TermsConditionsPage() {
  return (
    <div style={{ background: 'var(--bg)', color: 'var(--fg)', fontFamily: 'var(--font-outfit), sans-serif', overflowX: 'hidden' }}>
      <JsonLd data={[
        webPageSchema({ name: SEO.title, description: SEO.description, path: SEO.path }),
        breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Terms & Conditions', path: SEO.path }]),
      ]} />
      <Navbar />
      <section style={{ padding: 'clamp(7rem, 12vw, 9rem) clamp(1.25rem, 6vw, 2.5rem) clamp(3rem, 6vw, 5rem)', maxWidth: '860px', margin: '0 auto' }}>
        <span style={{ fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#CE307D' }}>Legal</span>
        <h1 style={{ fontFamily: 'var(--font-fraunces), serif', fontWeight: 300, fontSize: 'clamp(2.5rem, 6vw, 4rem)', letterSpacing: '-0.03em', lineHeight: 1, margin: '1rem 0 0.5rem' }}>
          Terms &amp; <em style={{ color: '#CE307D', fontStyle: 'italic' }}>Conditions</em>
        </h1>
        <p style={{ color: 'rgba(var(--fg-rgb),0.55)', fontSize: '0.85rem', marginBottom: '3rem' }}>Last updated: {LAST_UPDATED}</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', lineHeight: 1.8, color: 'rgba(var(--fg-rgb),0.85)' }}>
          <div>
            <h2 style={{ fontFamily: 'var(--font-fraunces), serif', fontWeight: 400, fontSize: '1.4rem', marginBottom: '0.75rem', color: 'var(--fg)' }}>1. Acceptance of Terms</h2>
            <p>By accessing or using the Digi Era Pro website (digierapro.com) or engaging our services, you agree to be bound by these Terms and Conditions. If you do not agree, please do not use our website or services.</p>
          </div>

          <div>
            <h2 style={{ fontFamily: 'var(--font-fraunces), serif', fontWeight: 400, fontSize: '1.4rem', marginBottom: '0.75rem', color: 'var(--fg)' }}>2. Services</h2>
            <p>Digi Era Pro LLC provides digital marketing services including SEO, Google Ads management, social media marketing, Google Business Profile optimization, branding, and web development. The specific scope, deliverables, and fees for each engagement are agreed upon in a separate service agreement or proposal.</p>
          </div>

          <div>
            <h2 style={{ fontFamily: 'var(--font-fraunces), serif', fontWeight: 400, fontSize: '1.4rem', marginBottom: '0.75rem', color: 'var(--fg)' }}>3. Payment</h2>
            <p>Payment terms are specified in your service agreement. All fees are due as outlined in the proposal or invoice. We reserve the right to pause or terminate services for accounts with outstanding balances.</p>
          </div>

          <div>
            <h2 style={{ fontFamily: 'var(--font-fraunces), serif', fontWeight: 400, fontSize: '1.4rem', marginBottom: '0.75rem', color: 'var(--fg)' }}>4. Intellectual Property</h2>
            <p>Upon full payment, clients own the deliverables created specifically for them (website designs, copy, graphics). Digi Era Pro retains ownership of any proprietary tools, templates, or processes used in delivering services.</p>
          </div>

          <div>
            <h2 style={{ fontFamily: 'var(--font-fraunces), serif', fontWeight: 400, fontSize: '1.4rem', marginBottom: '0.75rem', color: 'var(--fg)' }}>5. No Guarantee of Results</h2>
            <p>Digital marketing results depend on many factors outside our control, including search engine algorithm changes, market conditions, and competition. We do not guarantee specific rankings, traffic levels, or revenue outcomes.</p>
          </div>

          <div>
            <h2 style={{ fontFamily: 'var(--font-fraunces), serif', fontWeight: 400, fontSize: '1.4rem', marginBottom: '0.75rem', color: 'var(--fg)' }}>6. Limitation of Liability</h2>
            <p>To the maximum extent permitted by law, Digi Era Pro LLC shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services or website.</p>
          </div>

          <div>
            <h2 style={{ fontFamily: 'var(--font-fraunces), serif', fontWeight: 400, fontSize: '1.4rem', marginBottom: '0.75rem', color: 'var(--fg)' }}>7. Governing Law</h2>
            <p>These terms are governed by the laws of the State of New York, United States. Any disputes shall be resolved in the courts of New York.</p>
          </div>

          <div>
            <h2 style={{ fontFamily: 'var(--font-fraunces), serif', fontWeight: 400, fontSize: '1.4rem', marginBottom: '0.75rem', color: 'var(--fg)' }}>8. Contact</h2>
            <p>Digi Era Pro LLC<br />Email: <a href="mailto:info@digierapro.com" style={{ color: '#CE307D' }}>info@digierapro.com</a><br />Phone: <a href="tel:+17866001595" style={{ color: '#CE307D' }}>(786) 600-1595</a></p>
          </div>
        </div>
      </section>
      <Contact />
    </div>
  )
}
