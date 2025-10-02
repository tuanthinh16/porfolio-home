import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
    try {
        const { firstName, lastName, email, subject, message } = await request.json();

        // Validate required fields
        if (!firstName || !lastName || !email || !subject || !message) {
            return NextResponse.json(
                { error: 'All fields are required' },
                { status: 400 }
            );
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Invalid email format' },
                { status: 400 }
            );
        }

        // Create transporter with Gmail SMTP
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_USER, // Your Gmail address
                pass: process.env.GMAIL_APP_PASSWORD, // Your Gmail App Password
            },
        });

        // Email content for you (the recipient)
        const mailOptions = {
            from: process.env.GMAIL_USER,
            to: process.env.PERSONAL_EMAIL || process.env.GMAIL_USER,
            subject: `Portfolio Contact: ${subject}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
                    <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 10px 10px 0 0; text-align: center;">
                        <h1 style="margin: 0; font-size: 24px;">New Portfolio Contact</h1>
                        <p style="margin: 10px 0 0 0; opacity: 0.9;">Someone reached out through your portfolio website</p>
                    </div>
                    
                    <div style="padding: 30px; background-color: #f9f9f9;">
                        <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                            <h2 style="color: #333; margin-top: 0; border-bottom: 2px solid #667eea; padding-bottom: 10px;">Contact Information</h2>
                            <table style="width: 100%; border-collapse: collapse;">
                                <tr>
                                    <td style="padding: 10px 0; border-bottom: 1px solid #eee;"><strong>Name:</strong></td>
                                    <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${firstName} ${lastName}</td>
                                </tr>
                                <tr>
                                    <td style="padding: 10px 0; border-bottom: 1px solid #eee;"><strong>Email:</strong></td>
                                    <td style="padding: 10px 0; border-bottom: 1px solid #eee;"><a href="mailto:${email}" style="color: #667eea; text-decoration: none;">${email}</a></td>
                                </tr>
                                <tr>
                                    <td style="padding: 10px 0;"><strong>Subject:</strong></td>
                                    <td style="padding: 10px 0;">${subject}</td>
                                </tr>
                            </table>
                        </div>
                        
                        <div style="background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                            <h2 style="color: #333; margin-top: 0; border-bottom: 2px solid #764ba2; padding-bottom: 10px;">Message</h2>
                            <div style="background: #f8f9fa; padding: 15px; border-radius: 5px; border-left: 4px solid #667eea; line-height: 1.6; color: #333;">
                                ${message.replace(/\n/g, '<br>')}
                            </div>
                        </div>
                    </div>
                    
                    <div style="background: #333; color: white; padding: 15px; border-radius: 0 0 10px 10px; text-align: center; font-size: 12px;">
                        <p style="margin: 0;">This email was sent from your portfolio contact form</p>
                        <p style="margin: 5px 0 0 0; opacity: 0.7;">Sent on ${new Date().toLocaleString()}</p>
                    </div>
                </div>
            `,
        };

        // Auto-reply email for the sender
        const autoReplyOptions = {
            from: process.env.GMAIL_USER,
            to: email,
            subject: 'Thank you for contacting me!',
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
                    <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 10px 10px 0 0; text-align: center;">
                        <h1 style="margin: 0; font-size: 24px;">Thank You for Reaching Out!</h1>
                        <p style="margin: 10px 0 0 0; opacity: 0.9;">I've received your message and will get back to you soon</p>
                    </div>
                    
                    <div style="padding: 30px; background-color: #f9f9f9;">
                        <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                            <h2 style="color: #333; margin-top: 0;">Hi ${firstName}!</h2>
                            <p style="color: #666; line-height: 1.6;">
                                Thank you for taking the time to contact me through my portfolio website. 
                                I appreciate your interest and will review your message carefully.
                            </p>
                            <p style="color: #666; line-height: 1.6;">
                                I typically respond to all inquiries within 24-48 hours. If your request is urgent, 
                                please feel free to reach out to me directly at 
                                <a href="mailto:${process.env.PERSONAL_EMAIL || process.env.GMAIL_USER}" style="color: #667eea; text-decoration: none;">
                                    ${process.env.PERSONAL_EMAIL || process.env.GMAIL_USER}
                                </a>.
                            </p>
                        </div>
                        
                        <div style="background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                            <h3 style="color: #333; margin-top: 0;">Your Message Summary:</h3>
                            <div style="background: #f8f9fa; padding: 15px; border-radius: 5px; border-left: 4px solid #667eea;">
                                <p style="margin: 0 0 10px 0; color: #333;"><strong>Subject:</strong> ${subject}</p>
                                <p style="margin: 0; color: #666; font-style: italic;">Message sent on ${new Date().toLocaleString()}</p>
                            </div>
                        </div>
                    </div>
                    
                    <div style="background: #333; color: white; padding: 20px; border-radius: 0 0 10px 10px; text-align: center;">
                        <p style="margin: 0 0 10px 0; font-size: 16px; font-weight: bold;">Let's build something amazing together!</p>
                        <p style="margin: 0; opacity: 0.8; font-size: 14px;">
                            Best regards,<br>
                            <strong>Tuan Thinh Do</strong><br>
                            Fullstack Developer
                        </p>
                    </div>
                </div>
            `,
        };

        // Send both emails
        await Promise.all([
            transporter.sendMail(mailOptions),
            transporter.sendMail(autoReplyOptions)
        ]);

        return NextResponse.json(
            {
                message: 'Email sent successfully!',
                success: true
            },
            { status: 200 }
        );

    } catch (error) {
        console.error('Email sending error:', error);

        return NextResponse.json(
            {
                error: 'Failed to send email. Please try again later.',
                success: false
            },
            { status: 500 }
        );
    }
}