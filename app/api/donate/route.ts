import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();
  if (!body.amount || !body.category) {
    return NextResponse.json({ error: 'Missing donation details.' }, { status: 400 });
  }
  return NextResponse.json({ status: 'success', message: 'Donation request received.' });
}
