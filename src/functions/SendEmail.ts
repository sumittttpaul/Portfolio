"use server";

import EmailTemplate from "components/EmailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export default async function SendEmail(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const company = (formData.get("company") as string) ?? ("" as string);
  const service = formData.get("service") as string;
  const description = (formData.get("description") as string) ?? ("" as string);

  if (name && email && service) {
    const { data, error } = await resend.emails.send({
      from: "Test <onboarding@resend.dev>",
      to: ["sumitpaul.work@gmail.com"],
      subject: "Request from sumitttpaul",
      react: EmailTemplate({
        name: name,
        email: email,
        company: company,
        service: service,
        description: description,
      }),
    });

    // Error
    if (error) {
      return JSON.stringify(error);
    }
    // Success
    return JSON.stringify(data);
  }
}
