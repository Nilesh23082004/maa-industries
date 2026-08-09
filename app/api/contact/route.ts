import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, phone, email, message } = body;

    // Server-side validation
    if (!name?.trim() || !phone?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields. Please fill all fields." },
        { status: 400 }
      );
    }

    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT) || 587;
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const toEmail = process.env.CONTACT_TO_EMAIL || "maaindustriesss@gmail.com";

    // If SMTP environment variables are configured, attempt transport
    if (host && user && pass) {
      const transporter = nodemailer.createTransport({
        host,
        port,
        secure: port === 465,
        auth: {
          user,
          pass,
        },
      });

      const mailOptions = {
        from: `"${name}" <${user}>`,
        replyTo: email,
        to: toEmail,
        subject: "New enquiry from Maa Industries website",
        text: `New Enquiry Details:

Name: ${name}
Phone: ${phone}
Email: ${email}

Message / Specs:
${message}
`,
      };

      await transporter.sendMail(mailOptions);
    } else {
      // Log for development if SMTP credentials are not yet configured
      console.log("SMTP environment variables not configured. Logged enquiry:", {
        name,
        phone,
        email,
        message,
      });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Error sending contact email:", error);
    return NextResponse.json(
      {
        ok: false,
        error:
          error instanceof Error
            ? error.message
            : "Failed to process enquiry email.",
      },
      { status: 500 }
    );
  }
}
