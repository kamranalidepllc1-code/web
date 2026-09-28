import { timingSafeEqual } from 'node:crypto'
import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'
import { NextResponse, type NextRequest } from 'next/server'
import { getPreviewPost, isPreviewConfigured } from '@/lib/wordpress/api'

function secretMatches(given: string | null) {
  const expected = process.env.WORDPRESS_PREVIEW_SECRET ?? ''
  if (!given || !expected) return false
  const a = Buffer.from(given)
  const b = Buffer.from(expected)
  return a.length === b.length && timingSafeEqual(a, b)
}

/**
 * Entry point for WordPress's "Preview" button (see wordpress/digi-nextjs-preview.php):
 *   /api/preview?secret=<WORDPRESS_PREVIEW_SECRET>&id=<post ID>
 * Enables Draft Mode for this browser only, then opens the post's preview page.
 */
export async function GET(request: NextRequest) {
  if (!isPreviewConfigured()) {
    return NextResponse.json({ error: 'Preview is not configured on this site.' }, { status: 503 })
  }

  const { searchParams } = request.nextUrl
  if (!secretMatches(searchParams.get('secret'))) {
    return NextResponse.json({ error: 'Invalid preview token.' }, { status: 401 })
  }

  const id = Number(searchParams.get('id'))
  let post
  try {
    post = await getPreviewPost(id)
  } catch (error) {
    console.error('Preview failed:', error)
    return NextResponse.json({ error: error instanceof Error ? error.message : 'Could not load the post from WordPress.' }, { status: 502 })
  }
  if (!post) return NextResponse.json({ error: 'Post not found in WordPress.' }, { status: 404 })

  const draft = await draftMode()
  draft.enable()
  // Built from the verified post ID, never from the query string, to avoid open redirects.
  redirect(`/blog/preview/${post.id}`)
}
