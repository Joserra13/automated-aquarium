import type { NextApiRequest, NextApiResponse } from 'next';
import { EmailTemplate } from '@/components/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { data, error } = await resend.emails.send({
    from: 'automatedaquariumiot@gmail.com',
    to: ['automatedaquariumiot@gmail.com'],
    subject: 'Hello world',
    react: EmailTemplate({ firstName: 'John',  email:"inventedemail@gmail.com" , body: "This is from send"}) as React.ReactElement,
  });

  if (error) {
    return res.status(400).json(error);
  }

  res.status(200).json(data);
};

export default handler;