import { NextResponse } from 'next/server';
import bookings from '@/data/bookings.json';

// TODO: connect real backend/DB here
export async function GET() {
  return NextResponse.json({ bookings });
}

// TODO: connect real backend/DB here
export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  return NextResponse.json({ message: 'Booking received (stub)', data: body });
}
