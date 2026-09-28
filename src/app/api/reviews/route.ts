import { NextResponse } from "next/server";

const PLACE_ID = "ChIJR554DQxlMIgRXZ4vHjbBSPU"; // Digi Era Pro LLC

export async function GET() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "API key not configured" }, { status: 500 });
  }

  try {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=name,rating,reviews,user_ratings_total&key=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();

    if (data.status !== "OK") {
      return NextResponse.json({ error: data.status, message: data.error_message }, { status: 400 });
    }

    const { name, rating, user_ratings_total, reviews } = data.result;
    return NextResponse.json({ name, rating, user_ratings_total, reviews: reviews || [] });
  } catch {
    return NextResponse.json({ error: "Failed to fetch reviews" }, { status: 500 });
  }
}
