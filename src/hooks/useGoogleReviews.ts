import { GOOGLE_REVIEWS } from '@/data/site'
import type { GooglePlaceData } from '@/types/site'

/**
 * Returns the Google Business Profile rating snapshot used across the
 * testimonials section. A live `/api/reviews` route handler exists
 * (see src/app/api/reviews/route.ts) but the UI intentionally ships
 * with this static snapshot, matching the original app's behavior.
 */
export function useGoogleReviews() {
  const data: GooglePlaceData = {
    name: 'Digi Era Pro LLC',
    rating: 4.9,
    user_ratings_total: GOOGLE_REVIEWS.length,
    reviews: GOOGLE_REVIEWS,
  }
  return { data, loading: false, error: null }
}
