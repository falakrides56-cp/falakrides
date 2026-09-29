import { NextResponse } from 'next/server';
import reviews from '@/data/reviews.json';

// TODO: connect real backend/DB here
export async function GET() {
  return NextResponse.json({ reviews });
}

// TODO: connect real backend/DB here
export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  return NextResponse.json({ message: 'Review received (stub)', data: body });
}
