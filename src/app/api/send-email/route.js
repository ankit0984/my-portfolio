// import { NextResponse } from 'next/server';
// import { Resend } from 'resend';
//
// const resend = new Resend(process.env.RESEND_API_KEY);
//
// export async function POST(req) {
//   const { name, email, message } = await req.json();
//
//   try {
//     console.log('Attempting to send email...');
//     const data = await resend.emails.send({
//       from: 'Ankit kumar <ankitkumar@devstech.xyz>',
//       to: ['en.ankitkumarpandey@gmail.com'],
//       subject: 'New Contact Form Submission',
//       react: EmailTemplate({ name, email, message })
//     });
//     console.log('Email sent successfully:', data);
//     return NextResponse.json({ success: true, data });
//   } catch (error) {
//     console.error('Error sending email:', error);
//     return NextResponse.json({ error: error.message }, { status: 500 });
//   }
// }
//
// const EmailTemplate = ({ name, email, message }) => (
//   <div>
//     <h1>New Contact Form Submission</h1>
//     <p>You have received a new message from your website's contact form.</p>
//     <h2>Sender Details:</h2>
//     <p><strong>Name:</strong> {name}</p>
//     <p><strong>Email:</strong> {email}</p>
//     <h2>Message:</h2>
//     <p>{message}</p>
//   </div>
// );

import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req) {
  const { name, email, message } = await req.json()

  try {
    console.log('Attempting to send email...')
    const data = await resend.emails.send({
      from: 'Ankit kumar <ankitkumar@devstech.xyz>',
      to: ['en.ankitkumarpandey@gmail.com'],
      subject: `New Contact from ${name}`,
      react: EmailTemplate({ name, email, message }),
    })
    console.log('Email sent successfully:', data)
    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

const EmailTemplate = ({ name, email, message }) => (
  <html>
    <head>
      <title></title>
    </head>
    <body Style="font-family: 'Roboto', sans-serif; line-height: 1.6; background-color: #f4f4f4; margin: 0; padding: 0;">
      <div Style="max-width: 600px; margin: 20px auto; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
        <div Style="background-color: #0077B5; color: #ffffff; padding: 20px; text-align: center;">
          <h1 Style="margin: 0; font-size: 24px; font-weight: 700;">
            New Portfolio Contact
          </h1>
        </div>
        <div Style="padding: 20px;">
          <p Style="font-size: 16px; color: #333333;">
            You have received a new message from your portfolio website:
          </p>
          <div Style="background-color: #f8f8f8; border-left: 4px solid #0077B5; padding: 15px; margin-bottom: 20px;">
            <p Style="margin: 0 0 10px 0;">
              <strong Style="color: #0077B5;">Name:</strong> {name}
            </p>
            <p Style="margin: 0 0 10px 0;">
              <strong Style="color: #0077B5;">Email:</strong> {email}
            </p>
            <p Style="margin: 0;">
              <strong Style="color: #0077B5;">Message:</strong>
            </p>
            <p Style="margin: 10px 0 0 0; white-space: pre-wrap;">{message}</p>
          </div>
          <p Style="font-size: 14px; color: #666666; text-align: center; margin-top: 30px;">
            This email was sent from your portfolio contact form.
          </p>
        </div>
        <div Style="background-color: #f4f4f4; padding: 15px; text-align: center;">
          <p Style="font-size: 14px; color: #888888; margin: 0;">
            &copy; 2024 Your Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </body>
  </html>
)
