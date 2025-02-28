import { EmailTemplate } from '@/components/email-template';
import { Resend } from 'resend';
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {

    const formData = await request.formData();
    const firstName = formData.get('firstName') as string;
    const email = formData.get('email') as string;
    const body = formData.get('body') as string;

    if (!firstName || !email || !body) {
      return NextResponse.json({ success: false, error: 'All fields are required' }, { status: 400 });
    }

    const { /*data,*/ error } = await resend.emails.send({
      from: 'AutomatedAquarium <onboarding@resend.dev>',
      to: ['automatedaquariumiot@gmail.com'],
      subject: 'Hello world',
      react: EmailTemplate({ firstName, email, body }) as React.ReactElement,
    });

    if (error) {
      return NextResponse.json({ success: false, error: error.message || 'Failed to send email' }, { status: 500 });
    }

    return NextResponse.json({ success: true });

  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unexpected error occurred';
    return NextResponse.json({ success: false, error: errorMessage }, { status: 500 });
  }
}
