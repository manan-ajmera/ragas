import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const data = await request.json();

  // Here you would typically handle the data, e.g., save it to a database or send an email
  console.log('Contact Form Data:', data);

  return NextResponse.json({ message: 'Contact form submitted successfully!' }, { status: 200 });
}