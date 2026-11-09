import {
  Body,
  Column,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import { site } from "content/site";

/**
 * Confirmation email for the contact forms. Colours follow the site (ink
 * background, bone text). Images and links always use the public site URL:
 * per-deployment Vercel URLs are protected, so mail clients cannot load them.
 */
const SITE = site.url;
const HOST = SITE.replace(/^https?:\/\//, "");

const color = {
  page: "#1C1D20",
  card: "#232427",
  line: "#3A3B40",
  text: "#E5E3DC",
  mute: "#A3A3A3",
  dim: "#808080",
};

const font = "'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif";

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/sumitttpaul/", icon: "linkedin_round_small_white.png" },
  { label: "Instagram", href: "https://www.instagram.com/sumitttpaul_", icon: "instagram_round_small_white.png" },
  { label: "X", href: "https://x.com/sumitttpaul_", icon: "twitter_round_small_white.png" },
  { label: "Threads", href: "https://www.threads.net/@_sumitttpaul", icon: "thread_round_small_white.png" },
  { label: "Facebook", href: "https://www.facebook.com/sumitttpaul", icon: "facebook_round_small_white.png" },
];

export default async function EmailTemplate({ name, email, company, service, description }: DetailsType) {
  const fields = [
    { q: "Name", a: name },
    { q: "Email", a: email },
    { q: "Organisation", a: company },
    { q: "Services", a: service },
    { q: "Message", a: description },
  ];

  return (
    <Html lang="en">
      <Head />
      <Preview>Thanks for getting in touch. Here is a copy of your message.</Preview>
      <Body style={{ margin: 0, backgroundColor: color.page, fontFamily: font, color: color.text }}>
        <Container style={{ maxWidth: 600, margin: "0 auto", padding: "40px 16px" }}>
          {/* Header */}
          <Section style={{ textAlign: "center" }}>
            <Link href={SITE} style={{ textDecoration: "none" }}>
              <Img
                src={`${SITE}${site.avatar}`}
                alt={site.name}
                width={56}
                height={56}
                style={{ display: "inline-block", borderRadius: 999, border: `1px solid ${color.line}` }}
              />
              <Text style={{ margin: "14px 0 0", fontSize: 15, fontWeight: 600, letterSpacing: "0.04em", color: color.text, textTransform: "uppercase" }}>
                {site.name}
              </Text>
              <Text style={{ margin: "2px 0 0", fontSize: 13, color: color.mute }}>{site.role}</Text>
            </Link>
          </Section>

          {/* Message card */}
          <Section style={{ marginTop: 32, backgroundColor: color.card, borderRadius: 20, padding: "36px 28px", textAlign: "center" }}>
            <Heading as="h1" style={{ margin: 0, fontSize: 30, lineHeight: "36px", fontWeight: 500, letterSpacing: "-0.02em", color: color.text }}>
              Thanks for reaching out
            </Heading>
            <Text style={{ margin: "14px auto 0", maxWidth: 420, fontSize: 16, lineHeight: "24px", color: color.mute }}>
              Your message has arrived. I&apos;ll read it and get back to you soon with questions and next steps.
            </Text>
            <Link
              href={SITE}
              style={{
                display: "inline-block",
                marginTop: 24,
                padding: "12px 22px",
                borderRadius: 999,
                backgroundColor: color.text,
                color: color.page,
                fontSize: 14,
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Visit {HOST}
            </Link>
          </Section>

          {/* Copy of the submission */}
          <Section style={{ marginTop: 32 }}>
            <Text style={{ margin: "0 0 4px", fontSize: 12, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: color.dim, textAlign: "center" }}>
              Your message
            </Text>
            {fields.map((f, i) => (
              <Section key={f.q}>
                <Hr style={{ margin: "16px 0", borderColor: color.line }} />
                <Row>
                  <Column style={{ width: 40, verticalAlign: "top" }}>
                    <Text style={{ margin: 0, fontSize: 12, lineHeight: "20px", color: color.dim }}>{String(i + 1).padStart(2, "0")}</Text>
                  </Column>
                  <Column style={{ verticalAlign: "top" }}>
                    <Text style={{ margin: 0, fontSize: 13, lineHeight: "20px", color: color.mute }}>{f.q}</Text>
                    <Text style={{ margin: "4px 0 0", fontSize: 16, lineHeight: "24px", color: color.text, whiteSpace: "pre-line" }}>
                      {f.a?.trim() ? f.a : "-"}
                    </Text>
                  </Column>
                </Row>
              </Section>
            ))}
            <Hr style={{ margin: "16px 0 0", borderColor: color.line }} />
          </Section>

          {/* Socials */}
          <Section style={{ marginTop: 36, textAlign: "center" }}>
            <Text style={{ margin: "0 0 14px", fontSize: 12, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: color.dim }}>
              Find me online
            </Text>
            {socials.map((s) => (
              <Link key={s.label} href={s.href} style={{ display: "inline-block", margin: "0 6px", textDecoration: "none" }}>
                <Img src={`${SITE}/images/socials/${s.icon}`} alt={s.label} width={30} height={30} style={{ display: "block" }} />
              </Link>
            ))}
          </Section>

          {/* Footer */}
          <Section style={{ marginTop: 36, textAlign: "center" }}>
            <Text style={{ margin: 0, fontSize: 12, lineHeight: "18px", color: color.dim }}>
              This is a copy of the message you sent through{" "}
              <Link href={SITE} style={{ color: color.mute, textDecoration: "underline" }}>
                {HOST}
              </Link>
              .
            </Text>
            <Text style={{ margin: "6px 0 0", fontSize: 12, color: color.dim }}>
              &copy; {new Date().getFullYear()} {site.name}
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
