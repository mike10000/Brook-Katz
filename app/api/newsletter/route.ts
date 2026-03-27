import { NextRequest, NextResponse } from 'next/server';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const email = typeof body?.email === 'string' ? body.email.trim() : '';

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    // TODO: Add your email service integration here:
    // - Mailchimp: https://mailchimp.com/developer/
    // - ConvertKit: https://developers.convertkit.com/
    // - Resend: https://resend.com/docs
    // - Or store in a database
    console.log('Newsletter signup:', email);

    return NextResponse.json({
      success: true,
      message: "You're subscribed! Check your inbox for a welcome message.",
    });
  } catch {
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
