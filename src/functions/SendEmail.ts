"use server";

import EmailTemplate from "components/EmailTemplate";
import { renderAsync } from "@react-email/components";
import nodemailer from "nodemailer";

const SMTP_USER = process.env.SMTP_USER;
const OWNER_EMAIL = process.env.OWNER_EMAIL ?? "sumitpaul.work@gmail.com";

// Defaults target Gmail (smtp.gmail.com:465). Use an App Password for SMTP_PASS.
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST ?? "smtp.gmail.com",
  port: Number(process.env.SMTP_PORT ?? 465),
  secure: Number(process.env.SMTP_PORT ?? 465) === 465,
  auth: {
    user: SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export default async function SendEmail(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const company = (formData.get("company") as string) ?? ("" as string);
  const service = formData.get("service") as string;
  const description = (formData.get("description") as string) ?? ("" as string);

  if (!name || !email || !service) {
    return JSON.stringify({
      name: "Something went wrong",
      message: "Details not filled properly",
      type: "Error",
    } as EmailResponseType);
  }

  try {
    const html = await renderAsync(
      await EmailTemplate({
        name: name,
        email: email,
        company: company,
        service: service,
        description: description,
      }),
    );

    await transporter.sendMail({
      from: `"Sumeet Kumar Paul" <${process.env.SMTP_FROM ?? SMTP_USER}>`,
      to: [OWNER_EMAIL, email],
      subject: "Your enquiry to Sumeet Kumar Paul",
      html,
    });
    return JSON.stringify({
      name: "Message sent",
      message: "Thanks for reaching out. A copy of your message is on its way to your inbox.",
      type: "Success",
    } as EmailResponseType);
  } catch (error) {
    console.error("SendEmail failed:", error);
    return JSON.stringify({
      name: "Something went wrong",
      message: "Your message could not be sent. Please try again in a moment.",
      type: "Error",
    } as EmailResponseType);
  }
}
