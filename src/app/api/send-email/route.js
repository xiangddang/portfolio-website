import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  const { email, subject, message } = await request.json();

  let transporter = nodemailer.createTransport({
    service: "QQ",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    const emailContent = `Email: ${email}\nSubject: ${subject}\nMessage: ${message}`;
    const emailHtml = `
    <h2>New Contact Form Submission</h2>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Subject:</strong> ${subject}</p>
    <p><strong>Message:</strong></p>
    <p>${message}</p>
    `;

    await transporter.sendMail({
      from: `Personal Website <${process.env.SMTP_USER}>`,
      to: `${process.env.EMAIL_RECIPIENT}`,
      subject: `New contact: ${subject}`,
      text: emailContent,
      html: emailHtml,
    });
    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Error sending email", error: error.message },
      { status: 500 }
    );
  }
}
