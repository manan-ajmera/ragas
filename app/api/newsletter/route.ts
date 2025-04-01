import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { email } = await request.json();

  // Here you would typically handle the subscription logic, e.g., saving the email to a database

  return NextResponse.json({ message: 'Subscription successful!', email });
}