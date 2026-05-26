import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();
  if (!body.email) {
    return NextResponse.json({ error: 'Missing email address.' }, { status: 400 });
  }
  return NextResponse.json({ status: 'success', message: 'Subscription confirmed.' });
}
