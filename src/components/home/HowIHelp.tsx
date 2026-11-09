"use client";

import { AnimatePresence, m, useReducedMotion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Reveal, SplitText } from "components/ui/Reveal";
import { site } from "content/site";

const slides = [
  {
    title: "First impressions",
    meta: "Visual design · Motion",
    rows: [
      { label: "You get", value: "A website people remember" },
      { label: "Built with", value: "Next.js, React, Framer Motion" },
    ],
    headline: "Your website should look as good as what you do.",
    body: [
      "I'll give your site its own personality: confident typography, smooth page transitions and scroll effects that hold people's attention.",
      "No templates. Every section is designed around your brand, so visitors remember you after they close the tab.",
    ],
  },
  {
    title: "Speed and polish",
    meta: "Frontend engineering",
    rows: [
      { label: "You get", value: "A site that feels effortless" },
      { label: "Built with", value: "TypeScript, Tailwind CSS" },
    ],
    headline: "Beautiful only counts if it also feels fast.",
    body: [
      "I build every page to load quickly and move smoothly, on a phone as well as on a large desktop screen.",
      "The small details get the same care as the big ones: hover states, loading states and the way one page flows into the next.",
    ],
  },
  {
    title: "Online stores",
    meta: "E-commerce",
    rows: [
      { label: "You get", value: "A shop that's a joy to browse" },
      { label: "Built with", value: "Next.js, Stripe, Sanity" },
    ],
    headline: "Make browsing feel good and buying feel easy.",
    body: [
      "I'll present your products with large imagery, clear collections and quick ways to find what people came for.",
      "Then I keep the path to checkout short, so nothing gets between a customer and the thing they want.",
    ],
  },
  {
    title: "Complex products",
    meta: "Web applications",
    rows: [
      { label: "You get", value: "An interface people understand" },
      { label: "Built with", value: "React, GraphQL, Node.js" },
    ],
    headline: "Your product can be complex. Using it shouldn't be.",
    body: [
      "I turn complicated flows into screens that feel simple, from sign-in and forms to dashboards full of real data.",
      "Every state is thought through, including loading, errors and confirmation, so your users never feel lost.",
    ],
  },
];

function Arrow({ dir }: { dir: "left" | "right" }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <path d={dir === "left" ? "M21 12H3M9 6l-6 6 6 6" : "M3 12h18M15 6l6 6-6 6"} />
    </svg>
  );
}

export default function HowIHelp() {
  const [i, setI] = useState(0);
  const [dir, setDir] = useState(1);
  const reduce = useReducedMotion();
  const s = slides[i];
  const go = (d: number) => {
    setDir(d);
    setI((v) => (v + d + slides.length) % slides.length);
  };

  return (
    <section aria-label="How I can help" className="mx-2 overflow-hidden rounded-[16px] bg-ink-950 px-[10px] py-16 sm:mx-4 sm:rounded-[20px] sm:px-9 lg:py-[120px]">
      <div className="mx-auto grid max-w-[1520px] gap-12 xl:grid-cols-[400px_minmax(0,1010px)] xl:justify-between">
        <div className="flex flex-col">
          <Reveal y={10}>
            <p className="text-[13px] uppercase leading-[18.2px] tracking-[1.04px] text-soft">How I can help</p>
          </Reveal>
          <SplitText
            as="h2"
            text="Let's make your website look super cool"
            className="mt-6 text-[clamp(2.25rem,4vw,3rem)] font-medium leading-[1.05] tracking-[-0.02em] text-white"
          />
          <Reveal delay={0.1} className="mt-8 flex items-center gap-4">
            <span className="text-[52px] font-medium leading-none tracking-[-0.03em] text-white">1</span>
            <span className="max-w-[190px] text-[15px] leading-[18px] text-soft">person designing and building your site, start to finish</span>
          </Reveal>
          <div className="mt-10 flex items-center gap-3 xl:mt-auto">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous"
              className="flex size-14 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10"
            >
              <Arrow dir="left" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next"
              className="flex size-14 items-center justify-center rounded-full bg-white text-ink-900 transition-opacity hover:opacity-85"
            >
              <Arrow dir="right" />
            </button>
            <span className="ml-3 text-[15px] tabular-nums text-soft" aria-live="polite">
              {String(i + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
            </span>
          </div>
          <Link href="/contact" className="mt-8 self-start border-b border-white/40 pb-0.5 text-[15px] font-medium text-white">
            Tell me about your website ↗
          </Link>
        </div>

        <div className="group relative grid xl:h-[640px]">
          <div aria-hidden="true" className="absolute inset-0 hidden origin-top-left rotate-[2deg] rounded-[14px] bg-ink-800 transition-transform duration-500 ease-expo group-hover:translate-x-1.5 group-hover:translate-y-1 group-hover:rotate-[3.2deg] sm:block" />
          <div aria-hidden="true" className="absolute inset-0 hidden origin-top-left rotate-[1deg] rounded-[14px] bg-[#212226] transition-transform duration-500 ease-expo group-hover:translate-x-[3px] group-hover:translate-y-0.5 group-hover:rotate-[1.8deg] sm:block" />
          <div className="relative col-start-1 row-start-1 grid h-full transition-transform duration-500 ease-expo group-hover:-translate-y-1">
            <AnimatePresence initial={false} custom={dir}>
              <m.article
                key={s.title}
                custom={dir}
                variants={{
                  enter: (d: number) => ({ y: 28 * d, x: 18 * d, rotate: 2.4 * d, scale: 0.95, zIndex: 1 }),
                  center: { x: 0, y: 0, rotate: 0, scale: 1, zIndex: 2, opacity: 1 },
                  exit: (d: number) => ({ x: d > 0 ? "-112%" : "112%", y: -36, rotate: d > 0 ? -9 : 9, opacity: 0, zIndex: 3 }),
                }}
                initial={reduce ? false : "enter"}
                animate="center"
                exit={reduce ? undefined : "exit"}
                transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
                className="col-start-1 row-start-1 flex h-full origin-bottom flex-col rounded-[14px] bg-ink-750 p-6 shadow-[0_24px_48px_rgba(0,0,0,0.35)] sm:p-[52px]"
              >
                <header className="border-b border-black/60 pb-6">
                  <p className="text-[22px] font-semibold uppercase leading-[24.2px] tracking-[1.32px] text-bone">{s.title}</p>
                  <p className="mt-2 text-[14px] leading-[19.6px] text-mute">{s.meta}</p>
                </header>
                <dl className="mt-6 flex flex-col gap-1.5">
                  {s.rows.map((r) => (
                    <div key={r.label} className="flex text-[14px] leading-[19.6px]">
                      <dt className="w-24 shrink-0 text-mute">{r.label}</dt>
                      <dd className="text-bone">{r.value}</dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-5 font-inter text-[clamp(1.1875rem,1.6vw,1.375rem)] font-medium leading-[1.35] tracking-[-0.22px] text-bone">
                  {s.headline}
                </p>
                <div className="mt-3 flex flex-col gap-3">
                  {s.body.map((b) => (
                    <p key={b} className="font-inter text-[16px] font-medium leading-[24.8px] text-bone">
                      {b}
                    </p>
                  ))}
                </div>
                <footer className="mt-10 flex flex-wrap items-center justify-between gap-5 xl:mt-auto">
                  <div className="flex items-center gap-4">
                    <Image src={site.avatar} alt="" width={64} height={64} className="size-16 rounded-full object-cover" />
                    <div>
                      <p className="text-[clamp(1.375rem,2vw,1.75rem)] font-medium italic leading-[1.2] tracking-[-0.02em] text-bone">{site.name}</p>
                      <p className="mt-1 text-[14px] font-medium text-bone">{site.role}</p>
                    </div>
                  </div>
                  <Link href="/contact" className="rounded-full border border-white/50 px-5 py-2.5 text-[14px] font-medium text-bone transition-colors hover:bg-white hover:text-ink-900">
                    Start a project →
                  </Link>
                </footer>
              </m.article>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
