"use client";

import { useState } from "react";
import { SocialIcon } from "components/ui/SocialIcon";

export default function Share({ url, title }: { url: string; title: string }) {
  const [copied, setCopied] = useState(false);
  const enc = encodeURIComponent;
  const links = [
    { label: "LinkedIn", href: `https://www.linkedin.com/sharing/share-offsite/?url=${enc(url)}` },
    { label: "X / Twitter", href: `https://x.com/intent/post?url=${enc(url)}&text=${enc(title)}` },
  ];
  const btn =
    "flex size-10 items-center justify-center rounded-full border border-white/15 text-bone transition-colors hover:bg-bone hover:text-ink-900";
  return (
    <div>
      <p className="mb-3 text-[13px] text-mute">Share article:</p>
      <div className="flex gap-2">
        {links.map((l) => (
          <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" aria-label={`Share on ${l.label}`} className={btn}>
            <SocialIcon name={l.label} size={15} />
          </a>
        ))}
        <button
          type="button"
          aria-label={copied ? "Link copied" : "Copy link"}
          onClick={async () => {
            try {
              await navigator.clipboard.writeText(url);
              setCopied(true);
              setTimeout(() => setCopied(false), 1600);
            } catch {
              /* clipboard unavailable */
            }
          }}
          className={btn}
        >
          {copied ? (
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12l5 5L20 7" />
            </svg>
          ) : (
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}
