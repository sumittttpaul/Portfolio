"use client";

import type { CSSProperties } from "react";
import { Cursor, Stage, WindowBar } from "./OfferScenes";

/**
 * Live scenes for the "Project types" panels, on a 760 x 428 (16:9) stage.
 * Keyframes live in globals.css with the `wt-` prefix.
 */
const W = 760;
const H = 428;
const anim = (value: string): CSSProperties => ({ animation: value });
const box = "";

type Props = { active: boolean };

/* 1. Marketing and brand websites */
export function MarketingScene({ active }: Props) {
  return (
    <Stage active={active} width={W} height={H} boxClassName={box} glow="radial-gradient(60% 80% at 75% 30%, rgba(255,140,60,0.3), transparent 70%), radial-gradient(45% 60% at 10% 100%, rgba(255,90,90,0.18), transparent 70%)">
      <div className="absolute left-[40px] top-[16px] h-[396px] w-[680px] overflow-hidden rounded-[18px] border border-white/10 bg-[#0E0E10]/90 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.7)]">
        <WindowBar url="lumen.design" />
        <div className="flex items-center justify-between px-8 pt-4 text-[12px] text-white/60">
          <span className="text-[15px] font-semibold text-white">Lumen</span>
          <span className="flex gap-5">
            <span>Services</span>
            <span>Work</span>
            <span>About</span>
          </span>
          <span className="rounded-full bg-[#FF8C3C] px-3.5 py-1.5 font-medium text-[#1A0E05]">Book a call</span>
        </div>
        <div className="grid grid-cols-[1.25fr_1fr] gap-6 px-8 pt-5">
          <div>
            <span className="rounded-full border border-white/15 px-3 py-1 text-[11px] text-white/70">Brand &amp; web studio</span>
            <p className="mt-3 text-[30px] font-medium leading-[1.05] tracking-[-0.03em] text-white">
              We help brands say
              <span className="relative ml-2 inline-block">
                more
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 100 12" fill="none">
                  <path d="M2 8 C 25 2, 60 2, 98 6" stroke="#FF8C3C" strokeWidth="3.5" strokeLinecap="round" strokeDasharray="110" style={anim("wt-underline 6s ease-in-out infinite")} />
                </svg>
              </span>{" "}
              with less.
            </p>
            <p className="mt-3 max-w-[300px] font-inter text-[13px] leading-[1.5] text-white/55">Clear messaging, sharp visuals and one obvious next step.</p>
            <div className="mt-4 flex gap-2.5">
              <span className="rounded-full bg-white px-4 py-2 text-[12px] font-medium text-[#111]" style={anim("wt-pulse 6s ease-in-out infinite")}>
                Start a project
              </span>
              <span className="rounded-full border border-white/20 px-4 py-2 text-[12px] text-white/80">Our work</span>
            </div>
          </div>
          <div className="relative">
            {[
              { t: "Strategy", c: "from-[#FF8C3C] to-[#FF5A5A]", y: 0, d: "0s" },
              { t: "Identity", c: "from-[#FFC35C] to-[#FF8C3C]", y: 72, d: "-1.5s" },
              { t: "Website", c: "from-[#FF5A5A] to-[#C2417D]", y: 144, d: "-3s" },
            ].map((k) => (
              <div
                key={k.t}
                className="absolute left-0 right-0 flex items-center gap-3 rounded-2xl border border-white/10 bg-[#16171A] p-3"
                style={{ top: k.y, ...anim(`wt-float 6s ease-in-out ${k.d} infinite`) }}
              >
                <span className={`size-10 rounded-xl bg-gradient-to-br ${k.c}`} />
                <span>
                  <span className="block text-[13px] font-medium text-white">{k.t}</span>
                  <span className="mt-1 block h-1.5 w-24 rounded-full bg-white/15" />
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 overflow-hidden border-t border-white/[0.08] py-3">
          <div className="flex w-max gap-12 text-[14px] font-semibold tracking-[0.08em] text-white/30" style={anim("wt-marquee 18s linear infinite")}>
            {Array.from({ length: 2 }).flatMap((_, k) =>
              ["NORTHWIND", "ORBITAL", "HALCYON", "VERTEX", "MERIDIAN", "KESTREL"].map((n) => <span key={`${k}${n}`}>{n}</span>),
            )}
          </div>
        </div>
      </div>
    </Stage>
  );
}

/* 2. Landing pages for launches */
function Digit({ seconds, steps }: { seconds: number; steps: number }) {
  return (
    <span className="relative block h-[44px] overflow-hidden">
      <span className="block" style={anim(`wt-roll-${steps} ${seconds}s steps(${steps}) infinite`)}>
        {Array.from({ length: steps + 1 }, (_, i) => (
          <span key={i} className="block h-[44px] leading-[44px]">
            {(steps - (i % steps)) % steps}
          </span>
        ))}
      </span>
    </span>
  );
}

export function LaunchScene({ active }: Props) {
  return (
    <Stage active={active} width={W} height={H} boxClassName={box} glow="radial-gradient(60% 80% at 50% 20%, rgba(139,92,246,0.35), transparent 70%), radial-gradient(40% 60% at 90% 90%, rgba(236,72,153,0.25), transparent 70%)">
      <div className="absolute left-1/2 top-[34px] w-[470px] -translate-x-1/2 rounded-[24px] border border-white/10 bg-[#0F0F13]/90 p-8 text-center shadow-[0_40px_80px_-20px_rgba(0,0,0,0.75)] backdrop-blur-xl">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/[0.06] px-3 py-1.5 text-[11px] uppercase tracking-[0.1em] text-white/70">
          <span className="size-1.5 rounded-full bg-[#A78BFA]" style={anim("wt-blink 1.6s ease-in-out infinite")} />
          Launching soon
        </span>
        <p className="mt-4 bg-gradient-to-r from-white via-[#D8CCFF] to-[#F5A3D0] bg-clip-text text-[44px] font-medium leading-none tracking-[-0.03em] text-transparent">Orbit 2.0</p>
        <p className="mt-3 font-inter text-[13px] text-white/55">The calendar that plans your week for you.</p>
        <div className="mt-6 flex justify-center gap-2.5">
          {[
            ["0", "3", "days"],
            ["1", "2", "hours"],
            ["4", "5", "mins"],
          ].map(([a, b, l]) => (
            <span key={l} className="w-[78px] rounded-xl border border-white/10 bg-white/[0.04] py-2">
              <span className="block text-[30px] font-medium leading-[44px] text-white">
                {a}
                {b}
              </span>
              <span className="text-[10px] uppercase tracking-[0.1em] text-white/45">{l}</span>
            </span>
          ))}
          <span className="w-[78px] rounded-xl border border-[#A78BFA]/40 bg-[#A78BFA]/10 py-2">
            <span className="flex justify-center text-[30px] font-medium text-white">
              <Digit seconds={60} steps={6} />
              <Digit seconds={10} steps={10} />
            </span>
            <span className="text-[10px] uppercase tracking-[0.1em] text-white/45">secs</span>
          </span>
        </div>
        <div className="mt-6 flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] p-1.5 pl-5">
          <span className="flex flex-1 items-center text-left text-[13px] text-white/85">
            <span className="overflow-hidden whitespace-nowrap font-mono" style={anim("wt-type 8s steps(14) infinite")}>
              you@studio.com
            </span>
            <span className="ml-0.5 h-4 w-px bg-white" style={anim("wt-caret 1s steps(1) infinite")} />
          </span>
          <span className="relative h-9 w-[132px] overflow-hidden rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] text-[12px] font-medium text-white">
            <span className="absolute inset-0 flex items-center justify-center" style={anim("wt-swap-out 8s ease-in-out infinite")}>
              Join waitlist
            </span>
            <span className="absolute inset-0 flex items-center justify-center" style={anim("wt-swap-in 8s ease-in-out infinite")}>
              You&apos;re in ✓
            </span>
          </span>
        </div>
      </div>
      <Cursor style={{ left: 640, top: 400, ...anim("wt-cursor-launch 8s cubic-bezier(0.65,0,0.35,1) infinite") }} />
    </Stage>
  );
}

/* 3. E-commerce storefronts */
export function ShopScene({ active }: Props) {
  const products = [
    { n: "Linen Shirt", p: "₹1,890", c: "from-[#D9C6A5] to-[#9C8462]" },
    { n: "Canvas Tote", p: "₹990", c: "from-[#8FB8A8] to-[#4C7A6A]" },
    { n: "Wool Beanie", p: "₹690", c: "from-[#C98B7A] to-[#8A4E40]" },
  ];
  return (
    <Stage active={active} width={W} height={H} boxClassName={box} glow="radial-gradient(60% 80% at 60% 30%, rgba(52,211,153,0.22), transparent 70%), radial-gradient(40% 60% at 95% 95%, rgba(250,204,21,0.15), transparent 70%)">
      <div className="absolute left-[30px] top-[30px] h-[370px] w-[560px] overflow-hidden rounded-[18px] border border-white/10 bg-[#0E0F10]/95 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.7)]">
        <div className="flex items-center justify-between border-b border-white/[0.08] px-6 py-4">
          <span className="text-[15px] font-semibold tracking-[0.06em] text-white">FIELD</span>
          <span className="rounded-full bg-white/[0.06] px-3 py-1.5 text-[11px] text-white/50">Search the shop</span>
        </div>
        <div className="relative flex gap-2 px-6 pt-4 text-[11px]">
          <span className="absolute left-6 top-4 h-[26px] w-[54px] rounded-full bg-white" style={anim("wt-chip 9s cubic-bezier(0.65,0,0.35,1) infinite")} />
          {["All", "Tops", "Bags", "Hats"].map((c) => (
            <span key={c} className="relative w-[54px] rounded-full border border-white/10 py-1.5 text-center text-white/70 mix-blend-difference">
              {c}
            </span>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-3 px-6 pt-4">
          {products.map((p, i) => (
            <div key={p.n} className="rounded-2xl border border-white/[0.08] bg-[#151618] p-2" style={anim(`wt-lift 9s ease-in-out ${-i * 3}s infinite`)}>
              <div className={`flex h-[150px] items-center justify-center rounded-xl bg-gradient-to-br ${p.c}`}>
                <span className="h-16 w-14 rounded-[14px] bg-white/25 shadow-[inset_-6px_-6px_14px_rgba(0,0,0,0.2)]" />
              </div>
              <div className="flex items-center justify-between px-1 pt-2.5">
                <span className="text-[12px] text-white">{p.n}</span>
                <span className="text-[12px] text-white/60">{p.p}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute right-[30px] top-[60px] w-[220px] rounded-[18px] border border-white/10 bg-[#121315]/95 p-4 shadow-[0_30px_60px_-16px_rgba(0,0,0,0.75)]" style={anim("wt-drawer 9s cubic-bezier(0.65,0,0.35,1) infinite")}>
        <p className="text-[13px] font-medium text-white">Your bag</p>
        {[products[0], products[1]].map((p) => (
          <div key={p.n} className="mt-3 flex items-center gap-3">
            <span className={`size-10 rounded-lg bg-gradient-to-br ${p.c}`} />
            <span className="flex-1 text-[12px] text-white/80">{p.n}</span>
            <span className="text-[12px] text-white/60">{p.p}</span>
          </div>
        ))}
        <div className="mt-4 flex justify-between border-t border-white/10 pt-3 text-[12px]">
          <span className="text-white/60">Total</span>
          <span className="text-white">₹2,880</span>
        </div>
        <span className="mt-3 block rounded-full bg-[#34D399] py-2 text-center text-[12px] font-medium text-[#05241A]">Checkout</span>
      </div>
    </Stage>
  );
}

/* 4. Web applications */
export function AppScene({ active }: Props) {
  const card = (t: string, c: string) => (
    <div className="rounded-xl border border-white/[0.08] bg-[#17181C] p-3">
      <span className={`inline-block h-1.5 w-10 rounded-full ${c}`} />
      <p className="mt-2 text-[12px] text-white/85">{t}</p>
      <div className="mt-2.5 flex items-center justify-between">
        <span className="h-1.5 w-12 rounded-full bg-white/10" />
        <span className="size-5 rounded-full bg-gradient-to-br from-[#6C8CFF] to-[#A78BFA]" />
      </div>
    </div>
  );
  return (
    <Stage active={active} width={W} height={H} boxClassName={box} glow="radial-gradient(60% 80% at 60% 25%, rgba(96,165,250,0.28), transparent 70%), radial-gradient(40% 60% at 5% 95%, rgba(129,140,248,0.2), transparent 70%)">
      <div className="absolute left-[30px] top-[24px] flex h-[380px] w-[700px] overflow-hidden rounded-[18px] border border-white/10 bg-[#0D0E11]/95 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.75)]">
        <div className="flex w-[56px] flex-col items-center gap-4 border-r border-white/[0.08] py-5">
          <span className="size-7 rounded-lg bg-gradient-to-br from-[#6C8CFF] to-[#A78BFA]" />
          {[0, 1, 2, 3].map((i) => (
            <span key={i} className={`size-6 rounded-md ${i === 1 ? "bg-white/20" : "bg-white/[0.07]"}`} />
          ))}
        </div>
        <div className="flex-1 p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[11px] uppercase tracking-[0.1em] text-white/40">Product · Sprint 14</p>
              <p className="mt-1 text-[18px] font-medium text-white">Release board</p>
            </div>
            <span className="flex -space-x-2">
              {["from-[#F59E0B] to-[#EF4444]", "from-[#34D399] to-[#3B82F6]", "from-[#A78BFA] to-[#EC4899]"].map((c) => (
                <span key={c} className={`size-7 rounded-full border-2 border-[#0D0E11] bg-gradient-to-br ${c}`} />
              ))}
            </span>
          </div>
          <div className="relative mt-4 grid grid-cols-3 gap-3">
            {[
              ["To do", "3", [card("Billing settings", "bg-[#F59E0B]")]],
              ["In progress", "2", [card("Search filters", "bg-[#60A5FA]")]],
              ["Done", "5", [card("Dark mode", "bg-[#34D399]")]],
            ].map(([title, n, cards]) => (
              <div key={title as string} className="rounded-2xl bg-white/[0.03] p-2.5">
                <p className="mb-2.5 flex justify-between px-1 text-[11px] text-white/55">
                  {title as string}
                  <span className="text-white/35">{n as string}</span>
                </p>
                <div className="flex flex-col gap-2.5">{cards as JSX.Element[]}</div>
              </div>
            ))}
            {/* The card that travels across the board */}
            <div className="absolute left-[10px] top-[157px] w-[173px] shadow-[0_20px_40px_-10px_rgba(0,0,0,0.7)]" style={anim("wt-kanban 9s cubic-bezier(0.65,0,0.35,1) infinite")}>
              {card("Onboarding emails", "bg-[#A78BFA]")}
            </div>
          </div>
        </div>
      </div>
    </Stage>
  );
}

/* 5. Animated, interactive websites */
export function MotionScene({ active }: Props) {
  const layers = [
    { c: "from-[#7C3AED] to-[#DB2777]", r: -14, x: -150, d: "0s" },
    { c: "from-[#2563EB] to-[#7C3AED]", r: 0, x: 0, d: "-0.15s" },
    { c: "from-[#DB2777] to-[#F59E0B]", r: 14, x: 150, d: "-0.3s" },
  ];
  return (
    <Stage active={active} width={W} height={H} boxClassName={box} glow="radial-gradient(60% 80% at 50% 50%, rgba(168,85,247,0.3), transparent 70%), radial-gradient(40% 60% at 95% 10%, rgba(236,72,153,0.2), transparent 70%)">
      {[
        { s: 90, l: 70, t: 60, c: "bg-[#A855F7]/40", d: "0s" },
        { s: 50, l: 640, t: 70, c: "bg-[#EC4899]/40", d: "-2s" },
        { s: 70, l: 610, t: 300, c: "bg-[#3B82F6]/35", d: "-4s" },
      ].map((o, i) => (
        <span key={i} className={`absolute rounded-full blur-[2px] ${o.c}`} style={{ width: o.s, height: o.s, left: o.l, top: o.t, ...anim(`wt-orb 7s ease-in-out ${o.d} infinite`) }} />
      ))}
      {layers.map((l, i) => (
        <div
          key={i}
          className="absolute left-1/2 top-[64px] h-[290px] w-[210px] rounded-[26px] border border-white/15 bg-[#121216] p-3 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)]"
          style={{ ["--r" as string]: `${l.r}deg`, ["--x" as string]: `${l.x}px`, marginLeft: -105, zIndex: i === 1 ? 2 : 1, ...anim(`wt-fan 6s cubic-bezier(0.65,0,0.35,1) ${l.d} infinite`) }}
        >
          <div className={`h-[150px] rounded-[18px] bg-gradient-to-br ${l.c}`} />
          <span className="mt-4 block h-2.5 w-28 rounded-full bg-white/70" />
          <span className="mt-2.5 block h-2 w-36 rounded-full bg-white/20" />
          <span className="mt-2 block h-2 w-24 rounded-full bg-white/20" />
        </div>
      ))}
      <div className="absolute right-[36px] top-[60px] h-[300px] w-1.5 overflow-hidden rounded-full bg-white/10">
        <span className="block w-full rounded-full bg-gradient-to-b from-[#A855F7] to-[#EC4899]" style={anim("wt-scroll 6s cubic-bezier(0.65,0,0.35,1) infinite")} />
      </div>
      <div className="absolute bottom-[22px] left-1/2 flex -translate-x-1/2 items-center gap-2.5 text-[11px] uppercase tracking-[0.12em] text-white/50">
        <span className="flex h-7 w-[18px] justify-center rounded-full border border-white/40 pt-1.5">
          <span className="h-1.5 w-0.5 rounded-full bg-white" style={anim("wt-wheel 1.6s ease-in-out infinite")} />
        </span>
        Scroll
      </div>
    </Stage>
  );
}
