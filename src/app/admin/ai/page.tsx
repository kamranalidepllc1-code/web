import type { Metadata } from 'next'
import { getAdminUser, isAdminConfigured } from '@/lib/ai/admin-session'
import { isAiConfigured } from '@/lib/ai/config'
import { getPostTitles } from '@/lib/wordpress/api'
import { AdminAiLogin, AdminAiTools } from '@/components/ai/AdminAiTools'

export const dynamic = 'force-dynamic'
export const metadata: Metadata = { title: 'AI Content Tools | Digi Era Pro', robots: { index: false, follow: false } }

export default async function AdminAiPage() {
  const configured = isAdminConfigured() && isAiConfigured()
  const user = configured ? await getAdminUser() : null
  const posts = user ? await getPostTitles().catch(() => []) : []

  return (
    <main style={{ minHeight: '100vh', background: 'var(--bg)', color: 'var(--fg)', fontFamily: "var(--font-outfit), sans-serif", padding: 'clamp(1.5rem, 4vw, 3rem) clamp(1rem, 4vw, 2.5rem)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap', marginBottom: 'clamp(1.5rem, 4vw, 2.5rem)' }}>
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/Assets/logo/logo.png" alt="Digi Era Pro" style={{ height: 40, width: 'auto', display: 'block', marginBottom: '1rem' }} />
            <span style={{ fontSize: '0.7rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#CE307D' }}>Admin</span>
            <h1 style={{ fontFamily: "var(--font-fraunces), serif", fontWeight: 300, fontSize: 'clamp(1.9rem, 4vw, 2.8rem)', letterSpacing: '-0.02em', marginTop: '0.4rem' }}>AI content tools</h1>
            <p style={{ color: 'rgba(var(--fg-rgb),0.65)', marginTop: '0.4rem', fontSize: '0.92rem' }}>
              Suggestions for WordPress posts. Nothing is published automatically — edit, then copy into WordPress.
            </p>
          </div>
        </header>

        {!configured ? (
          <div style={{ padding: '1.25rem', borderRadius: 14, border: '1px solid rgba(240,182,74,0.35)', background: 'rgba(240,182,74,0.08)', color: '#f0d49a', lineHeight: 1.6 }}>
            Admin AI tools are not configured. Set <code>GROQ_API_KEY</code> and <code>AI_ADMIN_SESSION_SECRET</code> (32+ characters) in the environment.
          </div>
        ) : user ? (
          <AdminAiTools userName={user.name} posts={posts} />
        ) : (
          <AdminAiLogin />
        )}
      </div>
    </main>
  )
}
