import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'

async function exitPreview(formData: FormData) {
  'use server'
  const draft = await draftMode()
  draft.disable()
  const slug = formData.get('slug')
  redirect(typeof slug === 'string' && /^[a-z0-9-]+$/.test(slug) ? `/blog/${slug}` : '/blog')
}

/** Fixed bar shown on preview pages so editors know they're looking at unpublished content. */
export async function PreviewBanner({ status, slug }: { status: string; slug: string }) {
  const { isEnabled } = await draftMode()
  if (!isEnabled) return null

  return (
    <aside role="status" style={{
      position: 'fixed', left: '50%', bottom: '1.25rem', transform: 'translateX(-50%)', zIndex: 200,
      display: 'flex', alignItems: 'center', gap: '1rem', padding: '0.6rem 0.6rem 0.6rem 1.1rem', borderRadius: '999px',
      background: 'rgba(17,17,17,0.95)', border: '1px solid rgba(206,48,125,0.5)', boxShadow: '0 12px 40px rgba(0,0,0,0.5)',
      fontSize: '0.78rem', letterSpacing: '0.04em', color: '#f0ede8', whiteSpace: 'nowrap', backdropFilter: 'blur(10px)',
    }}>
      <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#CE307D', boxShadow: '0 0 10px #CE307D' }} />
      <span>Preview mode · <strong style={{ fontWeight: 500, textTransform: 'capitalize' }}>{status === 'publish' ? 'published + unsaved changes' : status}</strong></span>
      <form action={exitPreview}>
        <input type="hidden" name="slug" value={status === 'publish' ? slug : ''} />
        <button type="submit" style={{
          border: 'none', borderRadius: '999px', background: '#CE307D', color: '#fff', font: 'inherit', fontSize: '0.72rem',
          letterSpacing: '0.08em', textTransform: 'uppercase', padding: '0.5rem 0.9rem', cursor: 'pointer',
        }}>
          Exit preview
        </button>
      </form>
    </aside>
  )
}
