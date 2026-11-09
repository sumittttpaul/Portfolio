import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "components/ui/Reveal";
import { GradientButton } from "components/ui/Button";
import ContactForm from "components/contact/ContactForm";
import WaysToWork from "components/contact/WaysToWork";
import RotatingWord from "components/contact/RotatingWord";
import { CopyEmail } from "components/site/FooterClient";
import { site, socials, whatsapp } from "content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Start a project with ${site.name}. Send a brief, email ${site.email} or message on WhatsApp.`,
  alternates: { canonical: "/contact" },
  openGraph: { url: "/contact", title: `Contact • ${site.name}`, images: ["/media/portfolio-cover.webp"] },
};

const steps = [
  "You send a short brief through the form, by email or on WhatsApp.",
  "I reply with questions about your goals, users, scope and timeline.",
  "We agree on a plan and I start designing and building.",
];

export default function ContactPage() {
  return (
    <>
      <section className="container-site pb-10 pt-[140px] sm:pt-[160px]">
        <Reveal y={10}>
          <p className="eyebrow">Contact</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="mt-5 max-w-[760px] text-display-lg font-medium text-bone">
            Let&apos;s talk about <RotatingWord prefix="your " words={["website", "web app", "online store", "product", "next idea"]} />
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-5 font-inter text-[16px] leading-[22.4px] text-bone">
            Tell me what you&apos;re building. Share where things stand today, and we&apos;ll work out the next step together.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-3 lg:grid-cols-[1.15fr_1fr_1fr]">
          <Reveal className="flex flex-col rounded-[14px] bg-black p-6 sm:p-7">
            <div className="flex items-center gap-3">
              <Image src={site.avatar} alt="" width={40} height={40} className="size-10 rounded-full object-cover" />
              <div>
                <p className="text-[14px] font-medium text-bone">{site.name}</p>
                <p className="text-[12px] text-mute">{site.role}</p>
              </div>
            </div>
            <p className="mt-8 text-heading-32 font-medium text-bone">Send me a brief</p>
            <p className="mt-3 max-w-[340px] text-[14px] leading-[22.4px] text-dim">
              A few lines about your goals, scope and timeline is plenty. You&apos;ll get a copy of your message too.
            </p>
            <div className="mt-auto pt-8">
              <GradientButton href="#brief" className="w-full sm:w-auto [&>span]:w-full">Write a brief</GradientButton>
            </div>
          </Reveal>

          <Reveal delay={0.05} className="flex flex-col rounded-[14px] bg-ink-800 p-6 sm:p-7">
            <span className="index-mono">01</span>
            <p className="mt-4 text-heading-32 font-medium text-bone">Write to me</p>
            <p className="mt-3 text-[14px] leading-[22.4px] text-dim">
              Send a brief, a question or a link to what you&apos;re working on.
            </p>
            <div className="mt-auto pt-10">
              <CopyEmail email={site.email} />
              <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block text-[14px] text-mute hover:text-bone">
                Or message on WhatsApp ↗
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col rounded-[14px] bg-ink-800 p-6 sm:p-7">
            <span className="index-mono">02</span>
            <p className="mt-4 text-heading-32 font-medium text-bone">Find me online</p>
            <p className="mt-3 text-[14px] leading-[22.4px] text-dim">See what I&apos;m building and writing about.</p>
            <ul className="mt-auto flex flex-wrap gap-2 pt-10">
              {socials.map((s) => (
                <li key={s.href}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block rounded-full bg-ink-700 px-3.5 py-2 text-[13px] text-bone/80 transition-colors hover:bg-bone hover:text-ink-900"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal className="mt-3">
          <div className="grid gap-6 rounded-[14px] bg-ink-800 p-6 sm:grid-cols-3 sm:p-7">
            <div>
              <p className="eyebrow">Based in</p>
              <p className="mt-2 text-[15px] text-bone">{site.location} (IST, UTC+5:30)</p>
            </div>
            <div>
              <p className="eyebrow">Works with</p>
              <p className="mt-2 text-[15px] text-bone">Companies from all over the world, remotely</p>
            </div>
            <div>
              <p className="eyebrow">Writing</p>
              <Link href="/blog" className="mt-2 inline-block text-[15px] text-bone underline decoration-white/30 underline-offset-4 hover:decoration-bone">
                Frontend Lab articles
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      <WaysToWork />

      <section id="brief" className="container-site scroll-mt-24 pb-16 pt-24 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
          <div>
            <Reveal y={10}>
              <p className="eyebrow">Project brief</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 text-display-md font-medium text-bone">Tell me about your project</h2>
            </Reveal>
            <div className="mt-10">
              <p className="text-[15px] font-medium text-bone">What helps in a brief</p>
              <ul className="mt-4 flex flex-col gap-3 font-inter text-[15px] leading-[21px] text-mute">
                <li>What you are building and who it is for</li>
                <li>A site or two whose look you admire</li>
                <li>Any launch date that really matters</li>
                <li>What you already have: designs, copy or brand assets</li>
              </ul>
            </div>
          </div>
          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      <section aria-label="What happens next" className="container-site pb-10 pt-6">
        <p className="eyebrow mb-6">What happens next</p>
        <ol className="grid gap-6 md:grid-cols-3 md:gap-3">
          {steps.map((s, i) => (
            <Reveal as="li" key={s} delay={i * 0.05} className="border-t border-white/20 pt-6">
              <div className="flex gap-3">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-ink-700 font-inter text-[11px] text-bone">
                  {i + 1}
                </span>
                <p className="font-inter text-[16px] leading-[22.4px] text-bone">{s}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </section>
    </>
  );
}
