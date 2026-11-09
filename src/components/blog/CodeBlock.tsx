"use client";

import { Fragment, useState } from "react";
import { PrismLight } from "react-syntax-highlighter";
import tsx from "react-syntax-highlighter/dist/esm/languages/prism/tsx";
import type { CSSProperties } from "react";

PrismLight.registerLanguage("tsx", tsx);

// Prism theme tuned to the site palette (bone text, warm accent, muted greys)
const theme: Record<string, CSSProperties> = {
  'code[class*="language-"]': { color: "#E5E3DC", background: "none", fontFamily: "var(--font-roboto-mono), ui-monospace, monospace", fontSize: "13px", lineHeight: "1.75", textShadow: "none" },
  'pre[class*="language-"]': { color: "#E5E3DC", background: "none", margin: 0, padding: 0, overflow: "visible" },
  comment: { color: "#6E6E73", fontStyle: "italic" },
  prolog: { color: "#6E6E73" },
  punctuation: { color: "#8A8A8F" },
  operator: { color: "#C9C9C9" },
  keyword: { color: "#FF8A65" },
  boolean: { color: "#F7C06C" },
  number: { color: "#F7C06C" },
  string: { color: "#B8DB8C" },
  "template-string": { color: "#B8DB8C" },
  function: { color: "#8FB8FF" },
  "class-name": { color: "#FFD27A" },
  property: { color: "#E5E3DC" },
  "property-access": { color: "#E5E3DC" },
  parameter: { color: "#E5E3DC" },
  builtin: { color: "#C3A6FF" },
  tag: { color: "#FF8A65" },
  "attr-name": { color: "#FFD27A" },
  "attr-value": { color: "#B8DB8C" },
};

const icon = { width: 14, height: 14, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, "aria-hidden": true } as const;

function ReactIcon({ size = 16 }: { size?: number }) {
  return (
    <svg {...icon} width={size} height={size}>
      <circle cx="12" cy="12" r="1.6" fill="currentColor" stroke="none" />
      <ellipse cx="12" cy="12" rx="10" ry="4" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
    </svg>
  );
}

/**
 * Code preview in the style of the original Frontend Lab component: an editor
 * window floating on a dotted backdrop, with a file tab, a path breadcrumb and
 * a copy button. Recoloured for the portfolio palette.
 */
export default function CodeBlock({ code, path }: { code: string; path?: string }) {
  const [copied, setCopied] = useState(false);
  const parts = (path ?? "snippet.tsx").split("/").filter(Boolean);
  const fileName = parts.pop();

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <figure className="relative mb-6 w-full overflow-hidden rounded-[14px] bg-ink-800 pl-4 pt-4 ring-1 ring-inset ring-white/10 sm:pl-8 sm:pt-8 [background-image:radial-gradient(rgba(229,227,220,0.09)_1px,transparent_0)] [background-size:10px_10px]">
      <div className="rounded-tl-xl bg-ink-950 pl-2 pt-1 outline outline-1 outline-white/10">
        <div className="flex gap-2 p-2" aria-hidden="true">
          <span className="size-3 rounded-full bg-white/15" />
          <span className="size-3 rounded-full bg-white/15" />
          <span className="size-3 rounded-full bg-white/15" />
        </div>
        <div className="flex flex-col overflow-hidden rounded-tl-lg bg-ink-900 outline outline-1 outline-white/10">
          {/* Tab bar */}
          <div className="flex items-center justify-between gap-2.5 overflow-x-auto [scrollbar-width:none]">
            <div className="flex items-center gap-2.5">
              <span className="flex items-center gap-2 border-r border-t border-r-white/10 border-t-bone px-2.5 py-2.5 text-[13px] text-bone max-sm:gap-1.5 max-sm:text-[12px]">
                <span className="text-[#8FB8FF]">
                  <ReactIcon />
                </span>
                {fileName}
                <svg {...icon} className="opacity-50">
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </span>
              <svg {...icon} width={16} height={16} className="text-bone opacity-50">
                <path d="M12 5v14M5 12h14" />
              </svg>
            </div>
            <div className="pr-1.5">
              <button
                type="button"
                onClick={copy}
                className="flex h-8 items-center gap-2 rounded-full bg-white/[0.07] px-3 text-[12px] font-medium text-bone transition-colors hover:bg-white/[0.12]"
              >
                {copied ? (
                  <svg {...icon} strokeWidth={2.2} className="text-emerald-400">
                    <path d="M5 12l5 5L20 7" />
                  </svg>
                ) : (
                  <svg {...icon}>
                    <rect x="8" y="8" width="12" height="12" rx="2" />
                    <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" />
                  </svg>
                )}
                <span className="whitespace-nowrap">{copied ? "Copied" : "Copy code"}</span>
              </button>
            </div>
          </div>

          {/* Path breadcrumb */}
          <div className="flex items-center gap-2 overflow-x-auto whitespace-nowrap border-y border-white/10 px-2.5 py-2.5 text-[12px] font-medium text-mute [scrollbar-width:none]">
            {parts.map((dir, i) => (
              <Fragment key={i}>
                <svg {...icon} className="shrink-0">
                  <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                </svg>
                <span>{dir}</span>
                <svg {...icon} className="shrink-0 opacity-60">
                  <path d="M9 6l6 6-6 6" />
                </svg>
              </Fragment>
            ))}
            <span className="shrink-0 text-[#8FB8FF]">
              <ReactIcon size={14} />
            </span>
            <span className="text-bone">{fileName}</span>
          </div>

          {/* Code */}
          <div className="overflow-x-auto p-5 max-sm:p-3" data-lenis-prevent>
            <PrismLight
              language="tsx"
              style={theme}
              showLineNumbers
              lineNumberStyle={{ color: "#4A4B50", paddingRight: 20, minWidth: "2.25em" }}
              customStyle={{ background: "transparent", padding: 0, margin: 0 }}
            >
              {code}
            </PrismLight>
          </div>
        </div>
      </div>
    </figure>
  );
}
