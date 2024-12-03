// pages/api/sendEmails.js
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  const { recipients, subject, body } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  try {
    for (let recipient of recipients) {
      await transporter.sendMail({
        from: process.env.EMAIL,
        to: recipient.email,
        subject,
        text: body,
      });
    }
    res.status(200).json({ message: "Emails sent successfully!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
