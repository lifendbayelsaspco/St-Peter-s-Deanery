import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();
  if (!body.name || !body.request) {
    return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
  }
  return NextResponse.json({ status: 'success', message: 'Prayer request submitted.' });
}
