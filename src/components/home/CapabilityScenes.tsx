"use client";

import type { CSSProperties } from "react";
import { Stage } from "./OfferScenes";

/**
 * Live scenes for the Capabilities list, on a 760 x 428 (16:9) stage.
 * Keyframes live in globals.css with the `cs-` prefix.
 */
const W = 760;
const H = 428;
const anim = (value: string): CSSProperties => ({ animation: value });

/* 1. Frontend Engineering: code and its rendered component, in sync */
export function FrontendScene() {
  return (
    <Stage width={W} height={H} boxClassName="" glow="radial-gradient(60% 80% at 30% 30%, rgba(108,140,255,0.22), transparent 70%), radial-gradient(45% 60% at 90% 90%, rgba(167,139,250,0.2), transparent 70%)">
      <div className="absolute left-[30px] top-[34px] h-[360px] w-[400px] overflow-hidden rounded-[18px] border border-white/10 bg-[#0D0E11]/95 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.75)]">
        <div className="flex items-center gap-2 border-b border-white/[0.08] px-4 py-3">
          <span className="size-2.5 rounded-full bg-white/20" />
          <span className="size-2.5 rounded-full bg-white/20" />
          <span className="size-2.5 rounded-full bg-white/20" />
          <span className="ml-3 rounded-md bg-white/[0.06] px-2.5 py-1 font-mono text-[11px] text-white/60">Hero.tsx</span>
        </div>
        <pre className="px-5 pt-5 font-mono text-[15px] leading-[30px] text-white/80">
          <span className="block">
            <span className="text-[#8FA6FF]">&lt;Button</span>
          </span>
          <span className="flex">
            {"  "}
            <span className="text-[#F5A3D0]">variant</span>=<span className="text-[#9BE3D6]">&quot;</span>
            <span className="inline-block h-[30px] overflow-hidden align-top text-[#9BE3D6]">
              <span className="block" style={anim("cs-variant 9s steps(1) infinite")}>
                <span className="block">primary&quot;</span>
                <span className="block">outline&quot;</span>
                <span className="block">ghost&quot;</span>
              </span>
            </span>
          </span>
          <span className="block">
            {"  "}
            <span className="text-[#F5A3D0]">size</span>=<span className="text-[#9BE3D6]">&quot;lg&quot;</span>
          </span>
          <span className="block text-[#8FA6FF]">&gt;</span>
          <span className="block">{"  "}Get started</span>
          <span className="block text-[#8FA6FF]">&lt;/Button&gt;</span>
        </pre>
        <span className="absolute bottom-4 left-5 flex items-center gap-2 rounded-full bg-[#34D399]/15 px-3 py-1 text-[11px] text-[#7EE7BC]">
          <span className="size-1.5 rounded-full bg-[#34D399]" style={anim("cs-blink 1.8s ease-in-out infinite")} />
          TypeScript · 0 errors
        </span>
      </div>
      <div className="absolute left-[460px] top-[84px] h-[260px] w-[270px] rounded-[18px] border border-white/10 bg-[#141518]/95 p-5 shadow-[0_30px_60px_-16px_rgba(0,0,0,0.75)]" style={anim("cs-float 6s ease-in-out infinite")}>
        <p className="text-[11px] uppercase tracking-[0.1em] text-white/45">Preview</p>
        <div className="relative mt-16 flex h-14 items-center justify-center">
          <span className="absolute rounded-full bg-[#E5E3DC] px-7 py-3.5 text-[15px] font-medium text-[#111]" style={anim("cs-show-1 9s steps(1) infinite")}>
            Get started
          </span>
          <span className="absolute rounded-full border border-[#E5E3DC] px-7 py-3.5 text-[15px] font-medium text-[#E5E3DC]" style={anim("cs-show-2 9s steps(1) infinite")}>
            Get started
          </span>
          <span className="absolute px-7 py-3.5 text-[15px] font-medium text-[#E5E3DC] underline underline-offset-4" style={anim("cs-show-3 9s steps(1) infinite")}>
            Get started
          </span>
        </div>
        <div className="absolute inset-x-5 bottom-5 flex gap-2">
          {["sm", "md", "lg"].map((s) => (
            <span key={s} className={`flex-1 rounded-md py-1.5 text-center text-[11px] ${s === "lg" ? "bg-white/15 text-white" : "bg-white/[0.05] text-white/45"}`}>
              {s}
            </span>
          ))}
        </div>
      </div>
    </Stage>
  );
}

/* 2. Web App Development: requests travelling from the interface to the data and back */
function Node({ x, label, children }: { x: number; label: string; children: React.ReactNode }) {
  return (
    <div className="absolute top-[70px] flex w-[150px] flex-col items-center" style={{ left: x }}>
      <span className="flex size-[86px] items-center justify-center rounded-[22px] border border-white/10 bg-[#141518] text-white shadow-[0_20px_40px_-12px_rgba(0,0,0,0.7)]">
        {children}
      </span>
      <span className="mt-3 text-[13px] font-medium text-white/80">{label}</span>
    </div>
  );
}

export function WebAppScene() {
  return (
    <Stage width={W} height={H} boxClassName="" glow="radial-gradient(60% 70% at 50% 30%, rgba(52,211,153,0.2), transparent 70%), radial-gradient(40% 60% at 10% 90%, rgba(96,165,250,0.18), transparent 70%)">
      {[0, 1].map((seg) => (
        <div key={seg} className="absolute top-[112px] h-px bg-white/15" style={{ left: 175 + seg * 220, width: 190 }}>
          <span className="absolute -top-[4px] size-[9px] rounded-full bg-[#34D399] shadow-[0_0_12px_#34D399]" style={anim(`cs-packet 3s ease-in-out ${seg * 0.75}s infinite`)} />
          <span className="absolute -top-[4px] size-[9px] rounded-full bg-[#60A5FA] shadow-[0_0_12px_#60A5FA]" style={anim(`cs-packet-back 3s ease-in-out ${1.5 - seg * 0.75}s infinite`)} />
        </div>
      ))}
      <Node x={100} label="Interface">
        <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="4" width="18" height="14" rx="2" />
          <path d="M3 8h18M8 21h8" />
        </svg>
      </Node>
      <Node x={320} label="API">
        <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      </Node>
      <Node x={540} label="Database">
        <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <ellipse cx="12" cy="5.5" rx="7" ry="2.5" />
          <path d="M5 5.5v13c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-13M5 12c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5" />
        </svg>
      </Node>
      <div className="absolute left-[150px] top-[232px] w-[460px] rounded-[16px] border border-white/10 bg-[#0F1013]/95 p-4 font-mono text-[13px] leading-[22px] shadow-[0_30px_60px_-16px_rgba(0,0,0,0.75)]">
        <div className="mb-2 flex items-center justify-between font-sans text-[11px]">
          <span className="text-white/50">query MyOrders</span>
          <span className="rounded-full bg-[#34D399]/15 px-2 py-0.5 text-[#7EE7BC]" style={anim("cs-blink 3s ease-in-out infinite")}>
            200 OK
          </span>
        </div>
        {[
          ['"user"', '"Asha"'],
          ['"orders"', "12"],
          ['"status"', '"shipped"'],
        ].map(([k, v], i) => (
          <span key={k} className="block" style={anim(`cs-line 6s ease-out ${i * 0.25}s infinite`)}>
            <span className="text-[#F5A3D0]">{k}</span>
            <span className="text-white/50">: </span>
            <span className="text-[#9BE3D6]">{v}</span>
          </span>
        ))}
      </div>
    </Stage>
  );
}

/* 3. E-commerce & Payments: a card checkout that processes and confirms */
export function PaymentsScene() {
  return (
    <Stage width={W} height={H} boxClassName="" glow="radial-gradient(60% 70% at 25% 40%, rgba(236,72,153,0.22), transparent 70%), radial-gradient(45% 60% at 90% 80%, rgba(250,204,21,0.14), transparent 70%)">
      <div
        className="absolute left-[50px] top-[90px] h-[200px] w-[320px] rounded-[22px] bg-gradient-to-br from-[#EC4899] via-[#8B5CF6] to-[#3B82F6] p-6 text-white shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)]"
        style={anim("cs-card 7s ease-in-out infinite")}
      >
        <div className="flex items-center justify-between">
          <span className="h-8 w-11 rounded-md bg-gradient-to-br from-[#FDE68A] to-[#D4A72C]" />
          <svg width="30" height="20" viewBox="0 0 30 20" aria-hidden="true">
            <circle cx="11" cy="10" r="9" fill="#fff" fillOpacity="0.55" />
            <circle cx="19" cy="10" r="9" fill="#fff" fillOpacity="0.35" />
          </svg>
        </div>
        <p className="mt-10 font-mono text-[19px] tracking-[0.12em]">•••• •••• •••• 4242</p>
        <div className="mt-4 flex justify-between text-[11px] uppercase tracking-[0.1em] text-white/80">
          <span>A. Sharma</span>
          <span>08 / 29</span>
        </div>
      </div>
      <div className="absolute left-[400px] top-[60px] w-[310px] rounded-[20px] border border-white/10 bg-[#111214]/95 p-6 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)]">
        <p className="text-[11px] uppercase tracking-[0.1em] text-white/45">Checkout</p>
        {[
          ["Linen Shirt", "₹1,890"],
          ["Canvas Tote", "₹990"],
        ].map(([n, p]) => (
          <div key={n} className="mt-3 flex justify-between text-[14px]">
            <span className="text-white/75">{n}</span>
            <span className="text-white">{p}</span>
          </div>
        ))}
        <div className="mt-4 flex justify-between border-t border-white/10 pt-4 text-[15px] font-medium">
          <span className="text-white/70">Total</span>
          <span className="text-white">₹2,880</span>
        </div>
        <div className="relative mt-5 h-12 overflow-hidden rounded-full bg-white text-[14px] font-medium text-[#111]">
          <span className="absolute inset-0 flex items-center justify-center" style={anim("cs-pay-1 7s ease-in-out infinite")}>
            Pay ₹2,880
          </span>
          <span className="absolute inset-0 flex items-center justify-center gap-2" style={anim("cs-pay-2 7s ease-in-out infinite")}>
            <span className="size-4 rounded-full border-2 border-[#111]/20 border-t-[#111]" style={anim("cs-spin 0.8s linear infinite")} />
            Processing
          </span>
          <span className="absolute inset-0 flex items-center justify-center gap-2 bg-[#34D399]" style={anim("cs-pay-3 7s ease-in-out infinite")}>
            ✓ Payment confirmed
          </span>
        </div>
        <p className="mt-3 flex items-center justify-center gap-1.5 text-[11px] text-white/45">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="5" y="11" width="14" height="10" rx="2" />
            <path d="M8 11V8a4 4 0 0 1 8 0v3" />
          </svg>
          Secure checkout
        </p>
      </div>
    </Stage>
  );
}

/* 4. Motion & Interaction: an easing curve with a ball following it, and a timeline */
export function EasingScene() {
  return (
    <Stage width={W} height={H} boxClassName="" glow="radial-gradient(60% 70% at 50% 35%, rgba(244,114,182,0.2), transparent 70%), radial-gradient(45% 60% at 95% 95%, rgba(251,146,60,0.16), transparent 70%)">
      <div className="absolute left-[60px] top-[30px] h-[370px] w-[640px] rounded-[20px] border border-white/10 bg-[#0F1013]/95 p-6 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.75)]">
        <div className="flex items-center justify-between">
          <p className="text-[13px] text-white/60">Ease in out</p>
          <span className="rounded-md bg-white/[0.06] px-2.5 py-1 font-mono text-[11px] text-white/60">cubic-bezier(.76, 0, .24, 1)</span>
        </div>
        <div className="relative mt-5 h-[200px]">
          <svg className="absolute inset-0 size-full" viewBox="0 0 590 200" preserveAspectRatio="none" fill="none">
            {[50, 100, 150].map((y) => (
              <line key={y} x1="0" x2="590" y1={y} y2={y} stroke="rgba(255,255,255,0.06)" />
            ))}
            <path d="M0 200 C 448 200, 142 0, 590 0" stroke="url(#cs-grad)" strokeWidth="3" />
            <line x1="0" y1="200" x2="448" y2="200" stroke="rgba(255,255,255,0.25)" strokeDasharray="4 4" />
            <line x1="590" y1="0" x2="142" y2="0" stroke="rgba(255,255,255,0.25)" strokeDasharray="4 4" />
            <defs>
              <linearGradient id="cs-grad" x1="0" x2="1">
                <stop offset="0" stopColor="#F472B6" />
                <stop offset="1" stopColor="#FB923C" />
              </linearGradient>
            </defs>
          </svg>
          <span className="absolute left-[442px] top-[194px] size-3 rounded-full border-2 border-white bg-[#0F1013]" />
          <span className="absolute left-[136px] -top-[6px] size-3 rounded-full border-2 border-white bg-[#0F1013]" />
          {/* The ball moves across at a steady pace and up with the curve's easing */}
          <span className="absolute inset-0" style={anim("cs-ease-x 3s linear infinite")}>
            <span className="absolute -left-[9px] bottom-[-9px] size-[18px] rounded-full bg-white shadow-[0_0_20px_rgba(255,255,255,0.7)]" style={anim("cs-ease-y 3s cubic-bezier(0.76,0,0.24,1) infinite")} />
          </span>
        </div>
        <div className="relative mt-8 h-9 rounded-xl bg-white/[0.04]">
          {[0.08, 0.35, 0.62, 0.9].map((p) => (
            <span key={p} className="absolute top-1/2 size-2.5 -translate-y-1/2 rotate-45 bg-white/50" style={{ left: `${p * 100}%` }} />
          ))}
          <span className="absolute inset-y-0 w-0.5 bg-[#FB923C]" style={anim("cs-playhead 3s linear infinite")} />
        </div>
      </div>
    </Stage>
  );
}

/* 5. UI/UX Design: a wireframe that takes on colour while a selection moves through it */
export function DesignScene() {
  const blocks = [
    { x: 24, y: 64, w: 232, h: 26 },
    { x: 24, y: 104, w: 180, h: 14 },
    { x: 24, y: 140, w: 110, h: 34 },
    { x: 24, y: 196, w: 232, h: 110 },
  ];
  const fills = ["bg-[#E5E3DC]", "bg-white/40", "bg-[#8B7BFF]", "bg-gradient-to-br from-[#8B7BFF] to-[#F472B6]"];
  return (
    <Stage width={W} height={H} boxClassName="" glow="radial-gradient(60% 70% at 40% 35%, rgba(139,123,255,0.24), transparent 70%), radial-gradient(45% 60% at 95% 90%, rgba(244,114,182,0.16), transparent 70%)">
      <div className="absolute inset-x-[30px] top-[24px] h-[380px] rounded-[20px] border border-white/10 bg-[#0D0E11]/95 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.75)]">
        <div className="absolute inset-y-0 left-0 w-[150px] border-r border-white/[0.08] p-4">
          <p className="text-[11px] uppercase tracking-[0.1em] text-white/40">Layers</p>
          {["Heading", "Subtitle", "Button", "Image"].map((l, i) => (
            <p key={l} className="mt-3 rounded-md px-2 py-1 text-[12px] text-white/70" style={anim(`cs-layer 8s steps(1) ${-((4 - i) % 4) * 2}s infinite`)}>
              {l}
            </p>
          ))}
        </div>
        <div className="absolute left-[205px] top-[34px] h-[312px] w-[280px] rounded-[16px] border border-white/10 bg-[#16171A]">
          <span className="absolute left-4 top-3 text-[10px] uppercase tracking-[0.1em] text-white/35">Home · Mobile</span>
          {blocks.map((b, i) => (
            <span key={i} className="absolute overflow-hidden rounded-[8px] border border-dashed border-white/25" style={{ left: b.x, top: b.y, width: b.w, height: b.h }}>
              <span className={`absolute inset-0 ${fills[i]}`} style={anim(`cs-fill 8s ease-in-out ${i * 0.2}s infinite`)} />
            </span>
          ))}
          {/* Selection box that hops between layers */}
          <span className="absolute rounded-[8px] border-2 border-[#8FA6FF]" style={anim("cs-select 8s cubic-bezier(0.65,0,0.35,1) infinite")}>
            {["-left-1 -top-1", "-right-1 -top-1", "-left-1 -bottom-1", "-right-1 -bottom-1"].map((p) => (
              <span key={p} className={`absolute size-2 border border-[#8FA6FF] bg-white ${p}`} />
            ))}
          </span>
        </div>
        <div className="absolute right-0 top-0 h-full w-[180px] border-l border-white/[0.08] p-4">
          <p className="text-[11px] uppercase tracking-[0.1em] text-white/40">Inspect</p>
          {[
            ["W", "232"],
            ["H", "auto"],
            ["Radius", "8"],
          ].map(([k, v]) => (
            <div key={k} className="mt-3 flex justify-between rounded-md bg-white/[0.04] px-2.5 py-1.5 text-[12px]">
              <span className="text-white/45">{k}</span>
              <span className="text-white/85">{v}</span>
            </div>
          ))}
          <p className="mt-5 text-[11px] uppercase tracking-[0.1em] text-white/40">Fill</p>
          <div className="mt-2 flex gap-2">
            {["#E5E3DC", "#8B7BFF", "#F472B6"].map((c) => (
              <span key={c} className="size-6 rounded-md border border-white/15" style={{ background: c }} />
            ))}
          </div>
        </div>
      </div>
    </Stage>
  );
}
