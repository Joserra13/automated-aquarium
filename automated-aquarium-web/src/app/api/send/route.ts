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
      return Response.json({ error: 'All fields are required' }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: 'AutomatedAquarium <onboarding@resend.dev>',
      to: ['joserra013@gmail.com'],
      subject: 'Hello world',
      react: EmailTemplate({ firstName, email, body }) as React.ReactElement,
    });

    if (error) {
      return NextResponse.redirect(new URL('/automated-aquarium/contact?sent='+error, request.url));
      Response.json({ error: 'Failed to send email\n' + error }, { status: 500 });
    }

    return NextResponse.redirect(new URL('/automated-aquarium/contact?sent=true', request.url));
  } catch (error) {
    return NextResponse.redirect(new URL('/automated-aquarium/contact?sent='+error, request.url));
  }
}