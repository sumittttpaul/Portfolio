import EmailTemplate from "components/EmailTemplate";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(_request: NextRequest, _response: NextResponse) {
  const details = (await _request.json()) as DetailsType;
  const name = details.name;
  const email = details.email;
  const service = details.service;
  const company = details.company ?? "";
  const description = details.description ?? "";

  if (!name || !email || !service) {
    return NextResponse.json({
      name: "Something went wrong",
      message: "Details not filled properly",
    } as APIPostMessage);
  }

  try {
    await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["delivered@resend.dev"],
      subject: "Hello world",
      react: EmailTemplate({
        name: name,
        email: email,
        company: company,
        service: service,
        description: description,
      }),
    });
    return NextResponse.json(
      {
        name: "Email send successfully",
        message: "Your email has been received by sumeet.",
      } as APIPostMessage,
      { status: 200, statusText: "Email sent successfully to sumeet." },
    );
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        {
          name: "Something went wrong",
          message: error.message,
        } as APIPostMessage,
        { statusText: error.name },
      );
    }
  }
}
