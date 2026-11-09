"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

/**
 * Live UI scenes for the "What you get" cards. Each scene is drawn on a fixed
 * 760 x 560 stage and scaled to fit its card, so it looks identical at every
 * size. Animations are pure CSS (keyframes in globals.css, prefixed `wyg-`),
 * pause while the card is off screen and switch off for reduced motion.
 */
const W = 760;
const H = 560;

export function Stage({
  children,
  glow,
  width = W,
  height = H,
  boxClassName = "lg:left-[31%]",
  active = true,
}: {
  children: ReactNode;
  glow: string;
  width?: number;
  height?: number;
  /** Where the scene sits inside its card. */
  boxClassName?: string;
  /** Scenes in hidden panels stay paused. */
  active?: boolean;
}) {
  const box = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0);
  const [paused, setPaused] = useState(true);

  useEffect(() => {
    const el = box.current;
    if (!el) return;
    const ro = new ResizeObserver(([e]) => {
      setScale(Math.min(e.contentRect.width / width, e.contentRect.height / height));
    });
    const io = new IntersectionObserver(([e]) => setPaused(!e.isIntersecting), { rootMargin: "100px" });
    ro.observe(el);
    io.observe(el);
    return () => {
      ro.disconnect();
      io.disconnect();
    };
  }, [width, height]);

  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0" style={{ background: glow }} />
      <div ref={box} className={`absolute inset-0 flex items-center justify-center ${boxClassName}`}>
        <div
          className="wyg relative flex-none"
          data-paused={paused || !active ? "" : undefined}
          style={{ width, height, transform: `scale(${scale})`, opacity: scale ? 1 : 0 }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

const anim = (value: string): CSSProperties => ({ animation: value });

export function Cursor({ style }: { style: CSSProperties }) {
  return (
    <svg className="absolute z-20 drop-shadow-[0_6px_14px_rgba(0,0,0,0.5)]" style={style} width="26" height="26" viewBox="0 0 24 24">
      <path d="M4 2.5l15.5 9.2-6.9 1.5-3.4 6.3L4 2.5z" fill="#fff" stroke="#111" strokeWidth="1.2" strokeLinejoin="round" />
    </svg>
  );
}

export function WindowBar({ url }: { url: string }) {
  return (
    <div className="flex items-center gap-1.5 border-b border-white/[0.08] px-4 py-3">
      <span className="size-2.5 rounded-full bg-white/20" />
      <span className="size-2.5 rounded-full bg-white/20" />
      <span className="size-2.5 rounded-full bg-white/20" />
      <span className="ml-4 rounded-full bg-white/[0.06] px-3 py-1 font-mono text-[11px] text-white/50">{url}</span>
    </div>
  );
}

/* 1. A site with its own personality */
export function PersonalityScene() {
  const words = ["bold.", "playful.", "yours.", "bold."];
  return (
    <Stage glow="radial-gradient(55% 70% at 70% 35%, rgba(255,122,61,0.35), transparent 70%), radial-gradient(45% 60% at 85% 85%, rgba(214,51,132,0.35), transparent 70%)">
      <div
        className="absolute left-[330px] top-[30px] size-[360px] bg-gradient-to-br from-[#FFB36B] via-[#FF6A3D] to-[#D63384] opacity-90"
        style={anim("wyg-blob 12s ease-in-out infinite")}
      />
      <div className="absolute left-[50px] top-[55px] h-[450px] w-[590px] overflow-hidden rounded-[18px] border border-white/10 bg-[#0D0D10]/80 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.7)] backdrop-blur-xl">
        <WindowBar url="nova.studio" />
        <div className="flex items-center justify-between px-7 pt-5 text-[12px] text-white/60">
          <span className="text-[15px] font-semibold tracking-[0.08em] text-white">NOVA</span>
          <span className="flex gap-5">
            <span>Work</span>
            <span>Studio</span>
            <span>Journal</span>
          </span>
          <span className="rounded-full border border-white/15 px-3 py-1 text-white/80">Say hi</span>
        </div>
        <div className="px-7 pt-9">
          <p className="text-[54px] font-medium leading-[1] tracking-[-0.03em] text-white">Make it</p>
          <div className="mt-1 h-[58px] overflow-hidden">
            <div style={anim("wyg-words 7.5s cubic-bezier(0.76,0,0.24,1) infinite")}>
              {words.map((w, i) => (
                <p
                  key={i}
                  className="h-[58px] bg-gradient-to-r from-[#FFB36B] via-[#FF6A3D] to-[#E0559A] bg-clip-text text-[54px] font-medium leading-[1.05] tracking-[-0.03em] text-transparent"
                >
                  {w}
                </p>
              ))}
            </div>
          </div>
          <p className="mt-4 max-w-[330px] font-inter text-[14px] leading-[1.5] text-white/55">
            Brand-led websites with motion and detail people remember.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <span
              className="rounded-full bg-white px-5 py-2.5 text-[13px] font-medium text-[#111]"
              style={anim("wyg-press 7.5s ease-in-out infinite")}
            >
              Start a project
            </span>
            <span className="rounded-full border border-white/20 px-5 py-2.5 text-[13px] text-white/80">See work</span>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 overflow-hidden border-t border-white/[0.08] py-3">
          <div className="flex w-max gap-8 whitespace-nowrap text-[12px] uppercase tracking-[0.12em] text-white/45" style={anim("wyg-marquee 14s linear infinite")}>
            {Array.from({ length: 2 }).flatMap((_, k) =>
              ["Typography", "Motion", "Interaction", "Art direction", "Brand", "Scroll stories"].map((t) => (
                <span key={`${k}-${t}`}>{t} ✦</span>
              )),
            )}
          </div>
        </div>
      </div>
      <div
        className="absolute left-[560px] top-[440px] rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[12px] text-white backdrop-blur-md"
        style={anim("wyg-float 5s ease-in-out infinite")}
      >
        Scroll-driven motion ✦
      </div>
      <Cursor style={{ left: 330, top: 495, ...anim("wyg-cursor-a 7.5s cubic-bezier(0.65,0,0.35,1) infinite") }} />
    </Stage>
  );
}

/* 2. A store that looks as good as it sells */
export function StoreScene() {
  return (
    <Stage glow="radial-gradient(55% 70% at 65% 40%, rgba(32,178,170,0.32), transparent 70%), radial-gradient(40% 50% at 90% 90%, rgba(70,130,220,0.25), transparent 70%)">
      <div className="absolute left-[95px] top-[120px] h-[340px] w-[250px] -rotate-[8deg] rounded-[22px] border border-white/10 bg-[#121315] p-3 opacity-60">
        <div className="h-[200px] rounded-[14px] bg-gradient-to-br from-[#2D4F5C] to-[#16262C]" />
        <div className="mt-4 h-3 w-32 rounded-full bg-white/20" />
        <div className="mt-2 h-3 w-16 rounded-full bg-white/10" />
      </div>
      <div className="absolute left-[250px] top-[60px] w-[310px] rounded-[24px] border border-white/10 bg-[#111214]/95 p-3 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.75)]">
        <div className="relative flex h-[250px] items-end justify-center overflow-hidden rounded-[16px] bg-gradient-to-b from-[#1F3A3F] to-[#0F1B1E]">
          <div className="absolute inset-x-10 bottom-6 h-6 rounded-[50%] bg-black/40 blur-md" />
          <div className="relative mb-8 flex flex-col items-center" style={anim("wyg-hue 9s steps(1) infinite")}>
            <div className="h-5 w-12 rounded-t-[6px] bg-gradient-to-b from-[#9BE3D6] to-[#4FB3A3]" />
            <div className="h-[150px] w-[110px] rounded-[40%_40%_30%_30%/30%_30%_20%_20%] bg-gradient-to-br from-[#A6F0E2] via-[#3FB5A2] to-[#1E6E66] shadow-[inset_-14px_-10px_30px_rgba(0,0,0,0.35)]" />
          </div>
          <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-semibold text-[#111]">New</span>
        </div>
        <div className="px-2 pb-2 pt-4">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-[16px] font-medium text-white">Ceramic Vase, Dune</p>
              <p className="mt-0.5 text-[12px] text-white/50">Handmade · 32 cm</p>
            </div>
            <p className="text-[16px] font-medium text-white">₹2,499</p>
          </div>
          <div className="relative mt-4 flex items-center gap-2.5">
            {["#3FB5A2", "#C9874E", "#7C6BD6"].map((c) => (
              <span key={c} className="size-5 rounded-full border border-white/20" style={{ background: c }} />
            ))}
            <span className="absolute -left-1 -top-1 size-7 rounded-full border-2 border-white" style={anim("wyg-swatch 9s steps(1) infinite")} />
          </div>
          <span
            className="mt-4 block rounded-full bg-white py-2.5 text-center text-[13px] font-medium text-[#111]"
            style={anim("wyg-press-late 9s ease-in-out infinite")}
          >
            Add to bag
          </span>
        </div>
      </div>
      <div className="absolute right-[90px] top-[70px] flex items-center gap-2 rounded-full border border-white/10 bg-[#111214]/90 py-2 pl-3 pr-2 text-[13px] text-white backdrop-blur-md">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M5 8h14l-1.2 12H6.2L5 8zM9 8V6a3 3 0 0 1 6 0v2" />
        </svg>
        Bag
        <span className="flex h-6 w-6 overflow-hidden rounded-full bg-[#3FB5A2] text-[12px] font-semibold text-[#06201C]">
          <span className="flex flex-col" style={anim("wyg-count 9s cubic-bezier(0.76,0,0.24,1) infinite")}>
            <span className="flex h-6 w-6 items-center justify-center">2</span>
            <span className="flex h-6 w-6 items-center justify-center">3</span>
          </span>
        </span>
      </div>
      <div
        className="absolute bottom-[60px] right-[70px] flex items-center gap-3 rounded-2xl border border-white/10 bg-[#111214]/95 px-4 py-3 text-[13px] text-white shadow-[0_20px_40px_-12px_rgba(0,0,0,0.6)]"
        style={anim("wyg-toast 9s ease-out infinite")}
      >
        <span className="flex size-6 items-center justify-center rounded-full bg-[#3FB5A2] text-[#06201C]">✓</span>
        <span>
          Added to bag
          <span className="block text-[11px] text-white/50">Free delivery over ₹1,999</span>
        </span>
      </div>
      <Cursor style={{ left: 600, top: 470, ...anim("wyg-cursor-b 9s cubic-bezier(0.65,0,0.35,1) infinite") }} />
    </Stage>
  );
}

/* 3. A brand that looks right everywhere */
function BrandPage({ size }: { size: "lg" | "md" | "sm" }) {
  const big = size === "lg";
  const theme = anim("wyg-theme 9s steps(1) infinite");
  return (
    <div className="flex h-full flex-col">
      <div className={`flex items-center justify-between ${big ? "px-5 py-3" : "px-3 py-2"}`}>
        <span className={`rounded-[4px] ${big ? "size-4" : "size-2.5"}`} style={theme} />
        <span className="flex gap-1.5">
          <span className={`rounded-full bg-white/20 ${big ? "h-1.5 w-8" : "h-1 w-4"}`} />
          <span className={`rounded-full bg-white/20 ${big ? "h-1.5 w-8" : "h-1 w-4"}`} />
        </span>
      </div>
      <div className={big ? "px-5 pt-3" : "px-3 pt-2"}>
        <p className={`font-medium leading-[1] tracking-[-0.03em] text-white ${big ? "text-[34px]" : size === "md" ? "text-[18px]" : "text-[13px]"}`}>
          Aster &amp; Co.
        </p>
        <span className={`mt-2 block rounded-full bg-white/15 ${big ? "h-2 w-44" : "h-1 w-16"}`} />
        <span className={`mt-3 inline-block rounded-full ${big ? "h-7 w-24" : "h-3.5 w-12"}`} style={theme} />
      </div>
      <div className={`mt-auto grid grid-cols-2 ${big ? "gap-2 p-5" : "gap-1 p-2"}`}>
        <span className={`rounded-[8px] ${big ? "h-16" : "h-8"}`} style={theme} />
        <span className={`rounded-[8px] bg-white/10 ${big ? "h-16" : "h-8"}`} />
      </div>
    </div>
  );
}

export function BrandScene() {
  return (
    <Stage glow="radial-gradient(55% 70% at 65% 35%, rgba(247,197,72,0.25), transparent 70%), radial-gradient(45% 55% at 85% 85%, rgba(242,92,138,0.28), transparent 70%)">
      <div className="absolute left-[50px] top-[70px] h-[310px] w-[470px] overflow-hidden rounded-[16px] border border-white/10 bg-[#0E0E10]/95 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.7)]">
        <WindowBar url="asterandco.com" />
        <div className="h-[262px]">
          <BrandPage size="lg" />
        </div>
      </div>
      <div className="absolute left-[450px] top-[180px] h-[280px] w-[200px] overflow-hidden rounded-[20px] border-[6px] border-[#1E1F22] bg-[#0E0E10] shadow-[0_30px_60px_-16px_rgba(0,0,0,0.7)]" style={anim("wyg-float 6s ease-in-out infinite")}>
        <BrandPage size="md" />
      </div>
      <div className="absolute left-[620px] top-[250px] h-[230px] w-[115px] overflow-hidden rounded-[22px] border-[5px] border-[#1E1F22] bg-[#0E0E10] shadow-[0_30px_60px_-16px_rgba(0,0,0,0.7)]" style={anim("wyg-float 6s ease-in-out -2s infinite")}>
        <BrandPage size="sm" />
      </div>
      <div className="absolute left-[70px] top-[405px] flex w-[330px] items-center gap-5 rounded-[18px] border border-white/10 bg-[#111214]/95 p-4">
        <span className="text-[44px] font-medium leading-none tracking-[-0.04em] text-white">Aa</span>
        <div>
          <p className="text-[11px] uppercase tracking-[0.1em] text-white/45">Brand system</p>
          <div className="relative mt-2 flex gap-2">
            {["#F7C548", "#F25C8A", "#EDE6DA"].map((c) => (
              <span key={c} className="size-7 rounded-full border border-white/15" style={{ background: c }} />
            ))}
            <span className="absolute -left-1 -top-1 size-9 rounded-full border-2 border-white" style={anim("wyg-swatch-brand 9s steps(1) infinite")} />
          </div>
        </div>
      </div>
    </Stage>
  );
}

/* 4. Complex flows, clearly laid out */
export function FlowScene() {
  const steps = ["Account", "Details", "Review", "Done"];
  const dots = (lit: boolean) => (
    <div className="flex w-[340px] justify-between">
      {steps.map((s) => (
        <span key={s} className="flex w-14 flex-col items-center gap-2">
          <span className={`flex size-7 items-center justify-center rounded-full text-[11px] font-semibold ${lit ? "bg-[#6C8CFF] text-white" : "bg-white/10 text-white/40"}`}>
            {lit ? "✓" : ""}
          </span>
          <span className={`text-[11px] ${lit ? "text-white" : "text-white/40"}`}>{s}</span>
        </span>
      ))}
    </div>
  );
  return (
    <Stage glow="radial-gradient(55% 70% at 60% 35%, rgba(108,140,255,0.3), transparent 70%), radial-gradient(45% 55% at 90% 85%, rgba(150,90,230,0.28), transparent 70%)">
      <div className="absolute left-[50px] top-[50px] h-[450px] w-[430px] rounded-[22px] border border-white/10 bg-[#0F1013]/95 p-7 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.75)]">
        <p className="text-[11px] uppercase tracking-[0.1em] text-white/45">New workspace</p>
        <p className="mt-1 text-[22px] font-medium text-white">Tell us about your team</p>
        <div className="relative mt-6">
          <div className="absolute left-7 right-7 top-3.5 h-px bg-white/10" />
          <div className="absolute left-7 top-3.5 h-px bg-[#6C8CFF]" style={anim("wyg-progress-line 10s cubic-bezier(0.65,0,0.35,1) infinite")} />
          <div className="relative">{dots(false)}</div>
          <div className="absolute inset-y-0 left-0 overflow-hidden" style={anim("wyg-progress 10s cubic-bezier(0.65,0,0.35,1) infinite")}>
            {dots(true)}
          </div>
        </div>
        <p className="mt-7 text-[12px] text-white/55">Company name</p>
        <div className="mt-2 flex h-11 items-center rounded-xl border border-[#6C8CFF]/60 bg-white/[0.03] px-4 text-[14px] text-white shadow-[0_0_0_4px_rgba(108,140,255,0.12)]">
          <span className="overflow-hidden whitespace-nowrap font-mono text-[13px]" style={anim("wyg-type 10s steps(14) infinite")}>
            Northwind Labs
          </span>
          <span className="ml-0.5 h-5 w-px bg-white" style={anim("wyg-caret 1s steps(1) infinite")} />
        </div>
        <p className="mt-5 text-[12px] text-white/55">Team size</p>
        <div className="relative mt-2 grid grid-cols-3 rounded-xl bg-white/[0.05] p-1 text-center text-[13px] text-white/60">
          <span className="absolute inset-y-1 left-1 w-[calc((100%-8px)/3)] rounded-lg bg-white/15" style={anim("wyg-segment 10s cubic-bezier(0.65,0,0.35,1) infinite")} />
          <span className="relative py-2">1–10</span>
          <span className="relative py-2">11–50</span>
          <span className="relative py-2">50+</span>
        </div>
        <div className="mt-7 flex justify-between">
          <span className="rounded-full border border-white/15 px-5 py-2.5 text-[13px] text-white/70">Back</span>
          <span className="rounded-full bg-[#6C8CFF] px-6 py-2.5 text-[13px] font-medium text-white">Continue</span>
        </div>
      </div>
      <div className="absolute left-[420px] top-[150px] w-[300px] rounded-[20px] border border-white/10 bg-[#121317]/95 p-5 shadow-[0_30px_60px_-16px_rgba(0,0,0,0.75)]" style={anim("wyg-float 6s ease-in-out infinite")}>
        <div className="flex items-center justify-between">
          <p className="text-[13px] text-white/60">Weekly sign-ups</p>
          <span className="rounded-full bg-[#6C8CFF]/20 px-2 py-0.5 text-[11px] text-[#AFC0FF]">Live</span>
        </div>
        <p className="mt-1 text-[26px] font-medium text-white">1,284</p>
        <svg className="mt-3 w-full" viewBox="0 0 260 110" fill="none">
          <defs>
            <linearGradient id="wyg-area" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0" stopColor="#6C8CFF" stopOpacity="0.45" />
              <stop offset="1" stopColor="#6C8CFF" stopOpacity="0" />
            </linearGradient>
          </defs>
          {[25, 55, 85].map((y) => (
            <line key={y} x1="0" x2="260" y1={y} y2={y} stroke="rgba(255,255,255,0.06)" />
          ))}
          <path d="M0 90 C30 85 45 60 75 64 S120 80 145 52 S195 30 215 38 S245 18 260 12 V110 H0Z" fill="url(#wyg-area)" style={anim("wyg-area 10s ease-in-out infinite")} />
          <path
            d="M0 90 C30 85 45 60 75 64 S120 80 145 52 S195 30 215 38 S245 18 260 12"
            stroke="#8FA6FF"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray="420"
            style={anim("wyg-draw 10s ease-in-out infinite")}
          />
          <circle cx="215" cy="38" r="5" fill="#fff" style={anim("wyg-area 10s ease-in-out infinite")} />
        </svg>
      </div>
    </Stage>
  );
}
