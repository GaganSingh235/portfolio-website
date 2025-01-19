import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function POST(request: Request) {
  try {
    const { name, email, company, message } = await request.json();

    const signature = `
      <br>Best regards,<br>
      <strong>Gagan Singh</strong><br>
      Supreme Overlord of Emails<br>
      Chief Everything Officer (CEO)<br>
      <a href="https://gagansingh.co.uk">gagansingh.co.uk</a><br><br>
      <img src="http://localhost:3000/full-logo.png" alt="logo" style="width: 100px;">
    `;

    const msgToAdmin = {
      to: 'info@gagansingh.co.uk',
      from: 'info@gagansingh.co.uk',
      subject: `New Contact Form Submission from ${name}`,
      text: `You have a new message from ${name} (${email}, ${company}):\n\n${message}`,
    };

    const msgToUser = {
      to: email,
      from: 'info@gagansingh.co.uk',
      subject: `Thank you for reaching out, ${name}!`,
      text: `Hi ${name},\n\nThank you for contacting me! Your message has been safely delivered and is currently being reviewed by my highly trained (and very enthusiastic) team of one — me. I'll get back to you faster than the heat death of the Universe.\n\nBest regards,\nGagan Singh - Supreme Overlord of Emails, Chief Everything Officer (CEO)`,
      html: `<p>Hi ${name},</p><p>Thank you for contacting me! Your message has been safely delivered and is currently being reviewed by my highly trained (and very enthusiastic) team of one — me. I'll get back to you faster than the heat death of the Universe.</p>${signature}`
    };

    await sgMail.send(msgToAdmin);
    await sgMail.send(msgToUser);

    return NextResponse.json({ message: 'Message sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Failed to send message.' }, { status: 500 });
  }
}