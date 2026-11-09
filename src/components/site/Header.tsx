"use client";

import { AnimatePresence, m, useMotionValueEvent, useReducedMotion, useScroll } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { GradientButton } from "components/ui/Button";
import RollText from "components/ui/RollText";
import { nav, site, socials } from "content/site";
import Wordmark from "./Wordmark";

const phrases = ["Sumeet Kumar Paul", "Senior Frontend Engineer", "Based in India"];

const tickerRow = {
  hidden: {},
  show: { transition: { staggerChildren: 0.02 } },
  out: { transition: { staggerChildren: 0.02 } },
};
const tickerLetter = {
  hidden: { y: "110%" },
  show: { y: "0%", transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] } },
  out: { y: "-110%", transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] } },
};

/** Logo text that rolls between phrases one letter at a time, left to right. */
function LogoTicker() {
  const [i, setI] = useState(0);
  const reduce = useReducedMotion();
  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setI((v) => (v + 1) % phrases.length), 2750);
    return () => clearInterval(id);
  }, [reduce]);
  return (
    <span className="relative block h-[18px] overflow-hidden">
      <span className="invisible block whitespace-nowrap">
        {phrases.reduce((a, b) => (b.length > a.length ? b : a))}
      </span>
      <span className="sr-only">{phrases[i]}</span>
      <AnimatePresence initial={false}>
        <m.span
          key={i}
          aria-hidden="true"
          className="absolute inset-0 block whitespace-nowrap"
          variants={tickerRow}
          initial="hidden"
          animate="show"
          exit="out"
        >
          {Array.from(phrases[i]).map((ch, n) => (
            <m.span key={n} variants={tickerLetter} className="inline-block whitespace-pre">
              {ch}
            </m.span>
          ))}
        </m.span>
      </AnimatePresence>
    </span>
  );
}

export default function Header() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  // After the hero, the logo becomes a compact wordmark (as on the reference)
  const [past, setPast] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setPast(y > window.innerHeight * 0.55);
    if (open) return;
    setHidden(y > 120 && y > prev);
  });

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
  }, [open]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 p-2 transition-transform duration-500 ease-expo sm:p-4 ${
        hidden ? "-translate-y-[110%]" : "translate-y-0"
      }`}
    >
      <div className="relative rounded-[14px] bg-ink-750 backdrop-blur-[20px]">
        <div className="flex h-[56px] items-center justify-between py-2 pl-4 pr-2 sm:h-[69px] sm:py-3 sm:pl-5 sm:pr-3">
          <Link
            href="/"
            aria-label={`${site.name}, home`}
            className="text-[13px] font-semibold uppercase leading-[18px] tracking-[-0.01em] text-bone"
          >
            <AnimatePresence mode="wait" initial={false}>
              {past && pathname === "/" ? (
                <m.span
                  key="mark"
                  className="block w-[140px] text-bone sm:w-[200px]"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Wordmark />
                </m.span>
              ) : (
                <m.span
                  key="ticker"
                  className="block"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <LogoTicker />
                </m.span>
              )}
            </AnimatePresence>
          </Link>

          <nav aria-label="Primary" className="absolute left-1/2 hidden -translate-x-1/2 lg:block">
            <ul className="flex items-center gap-[22px]">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className="group relative inline-block py-2 text-[15px] leading-[21px] text-bone "
                  >
                    <RollText text={item.label} />
                    <span
                      aria-hidden="true"
                      className={`absolute -right-[7px] top-[9px] size-[4px] rounded-full bg-white transition-transform duration-300 ease-expo ${
                        isActive(item.href) ? "scale-100" : "scale-0 group-hover:scale-100"
                      }`}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2 sm:gap-4">
            <Link href="/contact" className="hidden items-center gap-3 xl:flex">
              <Image
                src={site.avatar}
                alt=""
                width={40}
                height={40}
                className="size-10 rounded-full object-cover"
              />
              <span className="flex flex-col">
                <span className="flex items-center gap-1 text-[13px] font-medium leading-4 text-bone">
                  {site.shortName}
                  <span className="relative -mt-2 flex size-[5px]">
                    <span className="status-halo absolute inline-flex size-full rounded-full bg-emerald-400" />
                    <span className="status-dot relative inline-flex size-[5px] rounded-full bg-emerald-400" />
                  </span>
                </span>
                <span className="text-[12px] leading-4 text-mute">{site.role}</span>
              </span>
            </Link>
            <GradientButton href="/contact" hoverText="Say hello" className="order-2 lg:order-none">
              Let&apos;s talk
            </GradientButton>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
              className="order-1 flex size-10 items-center justify-center rounded-full bg-ink-700 lg:hidden"
            >
              <span className="relative block h-[10px] w-[18px]">
                <span
                  className={`absolute left-0 h-[1.5px] w-full bg-bone transition-all duration-500 ease-expo ${
                    open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"
                  }`}
                />
                <span
                  className={`absolute left-0 h-[1.5px] w-full bg-bone transition-all duration-500 ease-expo ${
                    open ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0"
                  }`}
                />
              </span>
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <m.div
              id="mobile-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
              className="overflow-hidden lg:hidden"
            >
              <div className="flex max-h-[calc(100svh-90px)] flex-col gap-10 overflow-y-auto px-5 pb-6 pt-4">
                <ul className="flex flex-col gap-1">
                  {[{ label: "Home", href: "/" }, ...nav].map((item, i) => (
                    <m.li
                      key={item.href}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.12 + i * 0.05, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <Link
                        href={item.href}
                        className={`block py-1 text-[40px] font-medium leading-[1.1] tracking-[-0.03em] ${
                          pathname === item.href ? "text-bone" : "text-bone/60"
                        }`}
                      >
                        {item.label}
                      </Link>
                    </m.li>
                  ))}
                </ul>
                <div className="flex flex-col gap-4 border-t border-white/10 pt-6">
                  <a href={`mailto:${site.email}`} className="text-[18px] text-bone">
                    {site.email}
                  </a>
                  <ul className="flex flex-wrap gap-x-4 gap-y-2 text-[14px] text-mute">
                    {socials.map((s) => (
                      <li key={s.href}>
                        <a href={s.href} target="_blank" rel="noopener noreferrer">
                          {s.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                  <GradientButton href="/contact" size="md" className="mt-2 self-start">
                    Start a project
                  </GradientButton>
                </div>
              </div>
            </m.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
