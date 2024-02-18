"use server";

import EmailTemplate from "components/EmailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

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
    await resend.emails.send({
      from: "Sumeet Kumar Paul <onboarding@resend.dev>",
      to: ["sumitpaul.work@gmail.com", email],
      subject: "Confirmation Email",
      react: EmailTemplate({
        name: name,
        email: email,
        company: company,
        service: service,
        description: description,
      }),
    });
    return JSON.stringify({
      name: "Email send successfully",
      message: "Your email has been received by sumeet.",
      type: "Success",
    } as EmailResponseType);
  } catch (error) {
    return JSON.stringify({
      name: "Something went wrong",
      message: "We kindly request that you attempt to resend the email.",
      type: "Error",
    } as EmailResponseType);
  }
}
