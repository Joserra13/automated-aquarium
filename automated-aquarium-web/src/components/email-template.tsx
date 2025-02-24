import * as React from 'react';

interface EmailTemplateProps {
  firstName: string;
  email: string;
  body: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  email,
  body,
}) => (
  <div>
    <h1>Email sent from {firstName}!</h1>
    <h2>With email: {email}</h2>
    <p>{body}</p>
  </div>
);