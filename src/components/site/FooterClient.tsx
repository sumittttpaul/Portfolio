"use client";

import { useEffect, useState } from "react";

export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <div className="flex items-center gap-3">
      <a
        href={`mailto:${email}`}
        className="text-[clamp(1.25rem,2vw,1.625rem)] font-medium tracking-[-0.02em] text-bone transition-opacity hover:opacity-80"
      >
        {email}
      </a>
      <button
        type="button"
        onClick={async () => {
          try {
            await navigator.clipboard.writeText(email);
            setCopied(true);
            setTimeout(() => setCopied(false), 1800);
          } catch {
            window.location.href = `mailto:${email}`;
          }
        }}
        aria-label={copied ? "Email copied" : "Copy email address"}
        className="relative flex size-8 items-center justify-center rounded-full text-mute transition-colors hover:bg-white/5 hover:text-bone"
      >
        {copied ? (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12l5 5L20 7" />
          </svg>
        ) : (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <rect x="8" y="8" width="12" height="12" rx="2" />
            <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" />
          </svg>
        )}
        <span
          role="status"
          className={`pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-bone px-2 py-1 text-[11px] text-ink-900 transition-all duration-300 ${
            copied ? "opacity-100" : "translate-y-1 opacity-0"
          }`}
        >
          Copied
        </span>
      </button>
    </div>
  );
}

function useNow() {
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 1000 * 15);
    return () => clearInterval(id);
  }, []);
  return now;
}

function ClockTile({ label, timeZone, now }: { label: string; timeZone?: string; now: Date | null }) {
  const parts = now
    ? new Intl.DateTimeFormat("en-US", { hour: "2-digit", minute: "2-digit", hour12: true, timeZone }).formatToParts(now)
    : null;
  const hh = parts?.find((p) => p.type === "hour")?.value ?? "--";
  const mm = parts?.find((p) => p.type === "minute")?.value ?? "--";
  const ap = parts?.find((p) => p.type === "dayPeriod")?.value ?? "";
  const date = now
    ? new Intl.DateTimeFormat("en-US", { weekday: "long", month: "long", day: "numeric", timeZone }).format(now)
    : " ";
  return (
    <div className="flex flex-col items-center rounded-[14px] bg-ink-850 px-2 pb-4 pt-5 sm:px-4 sm:pb-5 sm:pt-7">
      <div className="flex items-end gap-1 font-mono text-[clamp(1.75rem,4vw,3.5rem)] font-light leading-none tracking-[-0.04em] text-bone tabular-nums">
        <span>{hh}</span>
        <span className="animate-pulse">:</span>
        <span>{mm}</span>
        <span className="mb-1 text-[0.32em] tracking-normal text-mute">{ap}</span>
      </div>
      <div className="mt-4 flex w-full items-center justify-center gap-4 border-t border-white/10 pt-3 text-[12px] text-mute sm:mt-5 sm:pt-4 sm:text-[13px]">
        <span className="hidden items-center gap-1.5 sm:flex">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <rect x="3" y="5" width="18" height="16" rx="2" />
            <path d="M3 10h18M8 3v4M16 3v4" />
          </svg>
          {date}
        </span>
        <span className="flex items-center gap-1.5">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M12 21s7-6.1 7-11.5A7 7 0 0 0 5 9.5C5 14.9 12 21 12 21z" />
            <circle cx="12" cy="9.5" r="2.5" />
          </svg>
          {label}
        </span>
      </div>
    </div>
  );
}

export function Clocks({ timeZone, location }: { timeZone: string; location: string }) {
  const now = useNow();
  return (
    <div className="grid grid-cols-2 gap-2 sm:gap-3">
      <ClockTile label={`${location} · my time`} timeZone={timeZone} now={now} />
      <ClockTile label="Your time" now={now} />
    </div>
  );
}
