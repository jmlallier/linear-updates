import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    message: 'Hello World',
  });
}

export async function POST(request: Request) {
  try {
    const payload = await request.json();

    // Process the webhook payload
    console.log('Webhook payload:', payload);

    // Perform any necessary actions with the payload data

    return NextResponse.json({
      message: 'Successfully received',
      payload,
      status: 200,
    });
  } catch (error) {
    console.error('Error processing webhook:', error);
    return new Response('Error processing webhook', { status: 500 });
  }
}
