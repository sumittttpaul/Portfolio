"use client";

import { useEffect, useRef, useState } from "react";
import { scrollToElement } from "components/ui/SmoothScroll";

/** Distance from the top of the viewport at which a section counts as current. */
const ACTIVE_LINE = 170;

/**
 * Article outline. Highlights the section being read and smooth-scrolls to a
 * section on click. `inline` is the compact row used when there is no side rail.
 */
export default function Toc({ items, inline = false }: { items: { id: string; label: string }[]; inline?: boolean }) {
  const [active, setActive] = useState(items[0]?.id);
  const clickLock = useRef(0);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      if (performance.now() < clickLock.current) return;
      let current = items[0]?.id;
      for (const item of items) {
        const el = document.getElementById(item.id);
        if (el && el.getBoundingClientRect().top <= ACTIVE_LINE) current = item.id;
      }
      setActive(current);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [items]);

  const go = (e: React.MouseEvent, id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    e.preventDefault();
    clickLock.current = performance.now() + 1200;
    setActive(id);
    window.history.replaceState(window.history.state, "", `#${id}`);
    scrollToElement(el);
  };

  if (!items.length) return null;

  if (inline) {
    return (
      <nav aria-label="On this page" className="mb-10">
        <ul className="flex flex-wrap gap-2">
          {items.map((i) => (
            <li key={i.id}>
              <a
                href={`#${i.id}`}
                onClick={(e) => go(e, i.id)}
                className="block rounded-full bg-ink-800 px-3.5 py-2 text-[13px] leading-[18px] text-pale transition-colors hover:text-bone"
              >
                {i.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }

  return (
    <nav aria-label="On this page">
      <p className="mb-3 text-[12px] font-medium uppercase leading-[16.8px] text-dim">On this page</p>
      <ul className="flex flex-col gap-3 border-l border-white/10">
        {items.map((i) => (
          <li key={i.id}>
            <a
              href={`#${i.id}`}
              onClick={(e) => go(e, i.id)}
              aria-current={active === i.id ? "location" : undefined}
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
