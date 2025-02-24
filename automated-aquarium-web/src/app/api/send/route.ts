import { EmailTemplate } from '@/components/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {

    const formData = await request.formData();
    const firstName = formData.get('firstName') as string;
    const email = formData.get('email') as string;
    const body = formData.get('body') as string;

    const { data, error } = await resend.emails.send({
      from: 'AutomatedAquarium <onboarding@resend.dev>',
      to: ['joserra013@gmail.com'],
      subject: 'Hello world',
      react: EmailTemplate({ firstName, email, body }) as React.ReactElement,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}