import nodemailer from 'nodemailer';
import { render } from '@react-email/render';
import WelcomeEmail from '@/emails/WelcomeEmail';
import UnsubscribeEmail from '@/emails/UnsubscribeEmail';


const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST!,
  port: parseInt(process.env.SMTP_PORT!),
  secure: false,
  auth: {
    user: process.env.SMTP_USER!,
    pass: process.env.SMTP_PASS!,
  },
});

export async function sendWelcomeEmail(email: string, unsubscribeToken: string): Promise<void> {
    const unsubscribeUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/unsubscribe?token=${unsubscribeToken}`;
    
    const emailHtml = await render(WelcomeEmail({ 
      email, 
      unsubscribeUrl 
    }));
    
    const emailText = `Welcome to our newsletter! 
    
  Thank you for subscribing to our newsletter. You'll receive updates about our latest content, features, and news.
  
  To unsubscribe: ${unsubscribeUrl}`;
  
    await transporter.sendMail({
      from: process.env.FROM_EMAIL!,
      to: email,
      subject: 'Welcome to our Newsletter!',
      text: emailText,
      html: emailHtml,
    });
  }
  
  export async function sendUnsubscribeConfirmation(email: string): Promise<void> {
    const emailHtml = await render(UnsubscribeEmail({ email }));
    
    await transporter.sendMail({
      from: process.env.FROM_EMAIL!,
      to: email,
      subject: 'Unsubscribed Successfully',
      html: emailHtml,
    });
  }