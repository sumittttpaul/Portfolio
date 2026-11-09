"use client";

import { AnimatePresence, m } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import CenterHead from "components/ui/CenterHead";

const types = [
  {
    label: "Marketing and brand websites",
    title: "Say what you do in seconds",
    text: "Sites with a clear structure and strong visuals that explain your brand quickly and give visitors an obvious next step.",
    link: { label: "Let's build your site", href: "/contact" },
  },
  {
    label: "Landing pages for launches",
    title: "One page, one clear action",
    text: "Focused pages for a launch or campaign, built around the single thing you want a visitor to do.",
    link: { label: "Start a landing page", href: "/contact" },
  },
  {
    label: "E-commerce storefronts",
    title: "From browsing to buying",
    text: "Product catalogues and seasonal collections that make discovery easy, with payments handled through Stripe.",
    link: { label: "Let's build your store", href: "/contact" },
  },
  {
    label: "Web applications",
    title: "Interfaces for real products",
    text: "Account flows, dashboards and complex state, built with Next.js, React and TypeScript so they stay reliable as they grow.",
    link: { label: "Let's build your app", href: "/contact" },
  },
  {
    label: "Animated, interactive websites",
    title: "Motion that earns its place",
    text: "Scroll-driven reveals, page transitions and micro-interactions that stay smooth and respect reduced-motion settings.",
    link: { label: "Let's make it move", href: "/contact" },
  },
];

export default function WebsiteTypes() {
  const [active, setActive] = useState(0);
  const t = types[active];
  return (
    <section aria-label="Types of websites I build" className="py-16">
      <div className="container-site">
        <CenterHead
          eyebrow="What I build"
          title={"The websites I\nbuild most often"}
          text="Whether it is a brand launch, a site upgrade or an e-commerce venture, these are the kinds of projects I take on most."
        />
        <div className="mt-12 grid gap-8 lg:mx-4 lg:mt-[60px] lg:grid-cols-2 lg:items-start lg:gap-6">
          <ul className="flex flex-col">
            {types.map((item, i) => (
              <li key={item.label}>
                <button
                  type="button"
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  aria-pressed={active === i}
                  className={`flex w-full items-center justify-between gap-4 py-3 text-left text-[clamp(1.375rem,2.4vw,2rem)] font-medium leading-[1.1] tracking-[-0.02em] transition-colors duration-300 lg:py-7 ${
                    active === i ? "text-bone" : "text-[#B9B9B9] hover:text-bone"
                  }`}
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className={`text-[22px] transition-all duration-500 ease-expo ${active === i ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0"}`}
                  >
                    →
                  </span>
                </button>
              </li>
            ))}
          </ul>

          <div className="rounded-[24px] bg-black p-6 sm:p-12 lg:min-h-[461px]">
            <AnimatePresence mode="wait" initial={false}>
              <m.div
                key={t.label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                <svg width="120" height="84" viewBox="0 0 120 84" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white/70" aria-hidden="true">
                  <rect x="1" y="12" width="56" height="70" rx="4" />
                  <path d="M12 26h30M12 36h18" />
                  <rect x="76" y="2" width="40" height="80" rx="6" className="text-white" stroke="white" />
                  <path d="M86 16h20M86 26h12" />
                  <path d="M63 46h7" stroke="#F3350C" />
                </svg>
                <h3 className="mt-14 text-[28px] font-medium leading-[32.2px] tracking-[-0.02em] text-white">{t.title}</h3>
                <p className="mt-4 max-w-[520px] font-inter text-[18px] leading-[26.1px] text-mute">{t.text}</p>
                <Link href={t.link.href} className="mt-8 inline-flex items-center gap-2 text-[14px] font-medium text-bone">
                  {t.link.label} <span aria-hidden="true">→</span>
                </Link>
              </m.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
