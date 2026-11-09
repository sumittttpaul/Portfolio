"use client";

import { useEffect, useState } from "react";

/** Sticky outline that highlights the section currently in view. */
export default function Toc({ items }: { items: { id: string; label: string }[] }) {
  const [active, setActive] = useState(items[0]?.id);
  useEffect(() => {
    const els = items.map((i) => document.getElementById(i.id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -60% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [items]);

  if (!items.length) return null;
  return (
    <nav aria-label="On this page">
      <p className="mb-3 text-[12px] font-medium uppercase leading-[16.8px] text-dim">On this page</p>
      <ul className="flex flex-col gap-3 border-l border-white/10">
        {items.map((i) => (
          <li key={i.id}>
            <a
              href={`#${i.id}`}
              className={`-ml-px block border-l pl-4 text-[12px] font-medium uppercase leading-[16.8px] transition-colors ${
                active === i.id ? "border-bone text-bone" : "border-transparent text-mute hover:text-bone"
              }`}
            >
              {i.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
