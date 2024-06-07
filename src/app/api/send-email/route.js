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

    await transporter.sendMail({
      from: `Frances Site <${process.env.SMTP_USER}>`,
      to: `${process.env.EMAIL_RECIPIENT}`,
      subject: `New contact`,
      text: emailContent,
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
