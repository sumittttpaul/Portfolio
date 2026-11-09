"use client";

import { AnimatePresence, m } from "framer-motion";
import { useId, useState } from "react";
import { GradientButton } from "components/ui/Button";
import { Reveal } from "components/ui/Reveal";
import { site } from "content/site";

const faqs = [
  {
    q: "What kind of projects do you take on?",
    a: "Marketing sites, landing pages, online stores and web applications. If it runs in a browser and should feel fast and polished, I'm interested.",
  },
  {
    q: "Do you design as well as develop?",
    a: "Yes. Design and development are both part of every project I take on, so the finished product matches what we agreed on.",
  },
  {
    q: "Which technologies do you use?",
    a: "Mainly Next.js, React and TypeScript with Tailwind CSS. On the backend I work with Node.js, GraphQL, MongoDB and Firebase, with Stripe for payments and Framer Motion or GSAP for animation.",
  },
  {
    q: "Where are you based, and do you work remotely?",
    a: `I'm based in ${site.location} and work remotely with companies from all over the world.`,
  },
  {
    q: "How do we start working together?",
    a: `Send a short brief through the contact form or email ${site.email}. Tell me what you're building and where you are with it, and I'll reply with questions and next steps.`,
  },
  {
    q: "Where can I read your technical writing?",
    a: "On the blog. It collects my Frontend Lab articles: real-world frontend edge cases such as async race conditions and optimistic UI rollbacks, each with the broken and the fixed code.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(null);
  const base = useId();
  return (
    <section aria-label="Frequently asked questions" className="py-16 sm:py-[110px]">
      <div className="mx-auto w-full max-w-[912px] px-[18px] sm:px-9 lg:px-4">
        <Reveal y={10} className="sm:text-center">
          <p className="eyebrow">FAQ</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-5 text-display-lg font-medium text-bone sm:text-center">Frequently asked questions</h2>
        </Reveal>
        <ul className="mt-16 flex flex-col gap-2">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal as="li" key={f.q} delay={i * 0.03}>
                <div className="rounded-lg bg-ink-750">
                  <h3>
                    <button
                      type="button"
                      id={`${base}-q-${i}`}
                      aria-expanded={isOpen}
                      aria-controls={`${base}-a-${i}`}
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="flex min-h-[88px] w-full items-center gap-3.5 p-6 text-left"
                    >
                      <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-accent text-[12px] leading-none text-white">
                        {i + 1}
                      </span>
                      <span className="flex-1 text-[18px] font-medium leading-[23.4px] text-bone">{f.q}</span>
                      <span aria-hidden="true" className="relative size-4 shrink-0 text-mute">
                        <span className="absolute left-0 top-1/2 h-px w-4 bg-current" />
                        <span
                          className={`absolute left-1/2 top-0 h-4 w-px bg-current transition-transform duration-500 ease-expo ${
                            isOpen ? "scale-y-0" : "scale-y-100"
                          }`}
                        />
                      </span>
                    </button>
                  </h3>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <m.div
                        id={`${base}-a-${i}`}
                        role="region"
                        aria-labelledby={`${base}-q-${i}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="body-copy px-6 pb-6">{f.a}</p>
                      </m.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </ul>
        <Reveal className="mt-2">
          <div className="flex flex-col gap-6 rounded-lg border border-[#3A3C40] bg-ink-750 py-6 pl-6 pr-10 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-heading-32 font-medium text-bone">Still got questions?</p>
              <p className="body-copy-sm mt-1">If yours isn&apos;t here, ask me directly.</p>
            </div>
            <GradientButton href="/contact" size="md" className="w-full sm:w-auto [&>span]:w-full">
              Ask me anything
            </GradientButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
