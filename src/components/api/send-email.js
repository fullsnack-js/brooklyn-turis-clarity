import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, phone, service, message } = req.body;

  // Validate required fields (adjust if some are optional)
  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  // Configure SMTP transporter
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST, // e.g. smtp.gmail.com
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Contact Form" <${process.env.SMTP_USER}>`,
      to: process.env.RECEIVER_EMAIL, // Your receiving email address
      subject: "New Contact Form Submission",
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone || "N/A"}
Service Interested In: ${service || "N/A"}
Message:
${message}
      `,
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Email sending error:", err);
    return res.status(500).json({ error: "Email failed to send" });
  }
}
