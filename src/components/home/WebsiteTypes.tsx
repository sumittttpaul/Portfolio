"use client";

import { useInView, useReducedMotion } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";
import CenterHead from "components/ui/CenterHead";
import { AppScene, LaunchScene, MarketingScene, MotionScene, ShopScene } from "./TypeScenes";
import { Reveal } from "components/ui/Reveal";

const CYCLE = 7;

const types = [
  {
    label: "Marketing and brand websites",
    title: "Say what you do in seconds",
    text: "Sites with a clear structure and strong visuals that explain your brand quickly and give visitors an obvious next step.",
    link: "Let's build your site",
    Scene: MarketingScene,
  },
  {
    label: "Landing pages for launches",
    title: "One page, one clear action",
    text: "Focused pages for a launch or campaign, built around the single thing you want a visitor to do.",
    link: "Plan your launch page",
    Scene: LaunchScene,
  },
  {
    label: "E-commerce storefronts",
    title: "From browsing to buying",
    text: "Collections that make discovery easy and product pages that feel good on a phone, right through to checkout.",
    link: "Let's build your store",
    Scene: ShopScene,
  },
  {
    label: "Web applications",
    title: "Interfaces for real products",
    text: "Account flows, boards and data-heavy screens, built with Next.js and TypeScript so they stay reliable as they grow.",
    link: "Let's build your app",
    Scene: AppScene,
  },
  {
    label: "Animated, interactive websites",
    title: "Motion that earns its place",
    text: "Layered transitions and scroll moments that make a site feel alive without ever slowing it down.",
    link: "Let's make it move",
    Scene: MotionScene,
  },
];

export default function WebsiteTypes() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const [hold, setHold] = useState(false);
  const list = useRef<HTMLUListElement>(null);
  const inView = useInView(list);
  const playing = inView && !hold;

  return (
    <section aria-label="Types of websites I build" className="py-16">
      <div className="container-site">
        <CenterHead
          eyebrow="Project types"
          title={"The websites I\nbuild most often"}
          text="These are the projects I take on most, and each one gets its own design and build."
        />
        <Reveal className="mt-12 grid gap-8 lg:mt-[60px] lg:grid-cols-2 lg:items-start lg:gap-6">
          <ul ref={list} className="flex flex-col" onMouseEnter={() => setHold(true)} onMouseLeave={() => setHold(false)}>
            {types.map((item, i) => {
              const on = active === i;
              return (
                <li key={item.label} className="relative">
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    aria-pressed={on}
                    className={`flex min-h-[64px] w-full items-center justify-between gap-4 py-3 text-left text-[clamp(1.375rem,2.4vw,2rem)] font-medium leading-[1.1] tracking-[-0.02em] transition-colors duration-300 lg:min-h-[92px] lg:py-7 ${
                      on ? "text-bone" : "text-[#B9B9B9] hover:text-bone"
                    }`}
                  >
                    {item.label}
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      aria-hidden="true"
                      className={`shrink-0 transition-all duration-300 ${on ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0"}`}
                    >
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </button>
                  {on && !reduce && (
                    // Key restarts the bar whenever the active item changes
                    <span
                      key={active}
                      aria-hidden="true"
                      onAnimationEnd={() => setActive((v) => (v + 1) % types.length)}
                      className="absolute bottom-0 left-0 h-0.5 bg-bone"
                      style={{ animation: `types-bar ${CYCLE}s linear forwards`, animationPlayState: playing ? "running" : "paused" }}
                    />
                  )}
                </li>
              );
            })}
          </ul>

          {/* Panels share one grid cell, so they crossfade without a height jump */}
          <div className="grid">
            {types.map((t, i) => {
              const on = active === i;
              return (
                <div
                  key={t.label}
                  aria-hidden={!on}
                  className={`col-start-1 row-start-1 overflow-hidden rounded-[24px] bg-black transition-[opacity,transform,visibility] duration-[450ms] ${
                    on ? "visible translate-y-0 opacity-100" : "invisible translate-y-3 opacity-0"
                  }`}
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    {/* Remounts on activation so each scene plays from its first frame */}
                    <t.Scene key={on ? "on" : "off"} active={on} />
                  </div>
                  <div className="p-6 sm:p-10">
                    <h3 className="text-[28px] font-medium leading-[32.2px] tracking-[-0.02em] text-white">{t.title}</h3>
                    <p className="mt-3 font-inter text-[18px] leading-[26.1px] text-mute">{t.text}</p>
                    <Link href="/contact" tabIndex={on ? 0 : -1} className="group mt-5 inline-flex items-center gap-2 text-[14px] font-medium text-bone">
                      {t.link}
                      <span aria-hidden="true" className="transition-transform duration-300 ease-expo group-hover:translate-x-1">→</span>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
