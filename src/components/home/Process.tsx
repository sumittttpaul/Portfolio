import Image from "next/image";
import { GradientButton } from "components/ui/Button";
import { Reveal } from "components/ui/Reveal";
import SectionHeading from "components/ui/SectionHeading";
import { getArticles } from "lib/blog";
import { tools } from "content/site";
import Timeline from "./Timeline";

const principles = [
  {
    title: "Your goals lead",
    text: "Every decision starts with what you want the website to do for your business, not with what is fashionable.",
    icon: (
      <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12zm10 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
    ),
  },
  {
    title: "Made for your brand",
    text: "Layouts, content and interactions are shaped around your brand and audience rather than adapted from a template.",
    icon: <path d="M12 3l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.4 6.8 19.1l1-5.8L3.5 9.2l5.9-.9z" />,
  },
  {
    title: "Focused on outcomes",
    text: "Clear messages and obvious next steps make it easy for visitors to do what you want them to do.",
    icon: <path d="M4 19V9M10 19V5M16 19v-7M22 19H2" />,
  },
  {
    title: "Straight communication",
    text: "You get honest answers, early warnings and clear options whenever a decision needs your input.",
    icon: <path d="M8 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm8 2a3 3 0 1 0 0-6M2 21c0-3.3 2.7-6 6-6s6 2.7 6 6m2-6c2.8 0 5 2.2 5 5" />,
  },
];

export default function Process() {
  const article = getArticles()[0];
  const code = article.snippet.split("\n").slice(0, 6);
  return (
    <section aria-label="How I work" className="mx-2 rounded-[16px] bg-black px-2 py-16 sm:mx-4 sm:rounded-[20px] sm:px-9 sm:py-[100px]">
      <div className="mx-auto max-w-[1520px]">
        <div className="flex flex-col items-start gap-8 px-[10px] text-left sm:items-center sm:px-0 sm:text-center">
          <SectionHeading
            eyebrow="How I work"
            title={"From first idea to a shipped\nproduct, in one pair of hands"}
            align="center"
          />
          <Reveal delay={0.1} className="w-full sm:w-auto">
            <GradientButton href="/contact" size="md" hoverText="Let's talk" className="w-full sm:w-auto [&>span]:w-full">
              Start a project
            </GradientButton>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-3 lg:grid-cols-2">
          <Reveal className="relative min-h-[420px] overflow-hidden rounded-[20px] lg:row-span-2 lg:min-h-[640px]">
            <Image src="/media/detail-monitor.webp" alt="" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-7 sm:p-10">
              <p className="text-[clamp(1.25rem,1.8vw,1.5rem)] font-medium text-white">One person, start to finish</p>
              <p className="body-copy-sm mt-2 max-w-[380px]">
                The person you brief is the person who designs and writes the code, so decisions never get lost between
                teams.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.05} className="flex flex-col overflow-hidden rounded-[20px] bg-ink-850 p-6 sm:p-8">
            <p className="text-center text-[12px] font-semibold uppercase tracking-[0.04em] text-mute">From the lab</p>
            <div className="mt-6 overflow-hidden rounded-xl border border-white/10 bg-ink-950">
              <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-2.5">
                <span className="size-2.5 rounded-full bg-white/15" />
                <span className="size-2.5 rounded-full bg-white/15" />
                <span className="size-2.5 rounded-full bg-white/15" />
                <span className="ml-3 truncate font-mono text-[11px] text-mute">page.tsx</span>
              </div>
              <pre className="overflow-hidden p-4 font-mono text-[12px] leading-[1.7] text-bone/80">
                {code.map((line, i) => (
                  <span key={i} className="block">
                    <span className="mr-4 inline-block w-4 text-right text-white/25">{i + 1}</span>
                    {line}
                  </span>
                ))}
              </pre>
            </div>
            <p className="mt-6 text-[18px] font-medium leading-[21.6px] tracking-[-0.36px] text-bone">Edge cases, handled</p>
            <p className="body-copy-sm mt-1">
              I document real frontend bugs with the broken and fixed code. Latest: {article.title.toLowerCase()}.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="relative min-h-[300px] overflow-hidden rounded-[20px] bg-ink-950">
            <video
              className="absolute inset-0 size-full origin-[20%_20%] scale-[1.2] object-cover opacity-80"
              src="/media/showreel-alt.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent" />
            <div className="relative p-7 sm:p-8">
              <p className="max-w-[220px] text-[clamp(1.25rem,1.8vw,1.5rem)] font-medium leading-tight text-white">
                Interfaces that feel alive
              </p>
              <p className="body-copy-sm mt-2 max-w-[240px]">Motion, transitions and detail in every state.</p>
            </div>
          </Reveal>
        </div>

        <Timeline />

        {/* Feature cards: 385px tall, 28/24px padding, title at a fixed 161px from the top */}
        <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((p, i) => (
            <Reveal motion as="li" key={p.title} delay={i * 0.05}>
              <div className="relative flex h-full min-h-[300px] flex-col overflow-hidden rounded-[20px] border border-white/[0.07] bg-[#141517] px-6 py-7 lg:min-h-[385px]">
                {/* Glow drawn as plain gradients: blurred layers flicker out on mobile browsers */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(55% 45% at 100% 0%, rgba(139,123,255,0.16), transparent 70%), radial-gradient(35% 30% at 80% 0%, rgba(255,110,196,0.1), transparent 70%), radial-gradient(30% 30% at 100% 25%, rgba(122,216,255,0.08), transparent 70%)",
                  }}
                />
                <div className="relative flex h-[60px] items-start justify-between">
                  {i === 1 ? (
                    <span className="flex" aria-hidden="true">
                      {tools.slice(0, 5).map((t, n) => (
                        <span
                          key={t.name}
                          className="flex size-11 items-center justify-center rounded-full border-2 border-[#141517] bg-[#26282B]"
                          style={{ marginLeft: n ? -12 : 0, zIndex: n + 1 }}
                        >
                          <Image src={t.logo} alt="" width={20} height={20} className="size-5 object-contain invert" />
                        </span>
                      ))}
                      <span className="relative z-10 -ml-3 flex size-11 items-center justify-center rounded-full border-2 border-[#141517] bg-[#26282B] text-[13px] text-white">
                        +{tools.length - 5}
                      </span>
                    </span>
                  ) : (
                    <span
                    className="flex size-[60px] items-center justify-center rounded-full border border-white/[0.14] text-white"
                    style={{ background: "radial-gradient(circle at 30% 25%, rgba(255,255,255,0.14), rgba(255,255,255,0.03) 70%)" }}
                  >
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      {p.icon}
                    </svg>
                  </span>
                  )}
                  <span className="text-[13px] leading-[13px] text-[#8A8A8A]">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="relative mt-[72px] text-[24px] font-medium leading-[26.4px] tracking-[-0.48px] text-white">
                  {p.title}
                </h3>
                <p className="relative mt-3 font-inter text-[15px] font-normal leading-[21.75px] tracking-[-0.15px] text-[#A8A8A8]">
                  {p.text}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
