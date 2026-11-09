"use client";

import { AnimatePresence, m } from "framer-motion";
import { useEffect, useId, useRef, useState } from "react";

export type SelectOption = { value: string; label: string };

/** Custom listbox: animated menu, click-outside to close, full keyboard support. */
export default function Select({
  value,
  options,
  onChange,
  label,
  className = "",
}: {
  value: string;
  options: SelectOption[];
  onChange: (value: string) => void;
  label: string;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const [cursor, setCursor] = useState(0);
  const root = useRef<HTMLDivElement>(null);
  const id = useId();
  const current = options.find((o) => o.value === value) ?? options[0];

  useEffect(() => {
    if (!open) return;
    const away = (e: PointerEvent) => {
      if (!root.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", away);
    return () => document.removeEventListener("pointerdown", away);
  }, [open]);

  const openMenu = () => {
    setCursor(Math.max(0, options.indexOf(current)));
    setOpen(true);
  };
  const choose = (i: number) => {
    onChange(options[i].value);
    setOpen(false);
  };

  const onKey = (e: React.KeyboardEvent) => {
    if (!open) {
      if (["ArrowDown", "ArrowUp", "Enter", " "].includes(e.key)) {
        e.preventDefault();
        openMenu();
      }
      return;
    }
    if (e.key === "Escape" || e.key === "Tab") setOpen(false);
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setCursor((c) => (c + 1) % options.length);
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      setCursor((c) => (c - 1 + options.length) % options.length);
    }
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      choose(cursor);
    }
  };

  return (
    <div ref={root} className={`relative ${className}`} onKeyDown={onKey}>
      <button
        type="button"
        role="combobox"
        aria-label={label}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={`${id}-list`}
        aria-activedescendant={open ? `${id}-${cursor}` : undefined}
        onClick={() => (open ? setOpen(false) : openMenu())}
        className="flex h-11 w-full items-center justify-between gap-3 rounded-full bg-ink-800 pl-5 pr-4 text-[14px] text-bone transition-colors hover:bg-ink-750"
      >
        <span className="truncate">{current.label}</span>
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
          className={`shrink-0 text-mute transition-transform duration-500 ease-expo ${open ? "rotate-180" : ""}`}
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <m.ul
            id={`${id}-list`}
            role="listbox"
            aria-label={label}
            data-lenis-prevent
            initial={{ opacity: 0, y: -8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1], staggerChildren: 0.03, delayChildren: 0.04 } }}
            exit={{ opacity: 0, y: -6, scale: 0.97, transition: { duration: 0.18 } }}
            className="absolute left-0 top-[calc(100%+8px)] z-20 w-full min-w-[220px] origin-top-left overflow-hidden rounded-2xl border border-white/10 bg-ink-750 p-1.5 shadow-[0_24px_60px_-16px_rgba(0,0,0,0.7)]"
          >
            {options.map((o, i) => {
              const selected = o.value === current.value;
              return (
                <m.li
                  key={o.value}
                  id={`${id}-${i}`}
                  role="option"
                  aria-selected={selected}
                  variants={{ hidden: { opacity: 0, y: 6 }, visible: { opacity: 1, y: 0 } }}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.3, delay: i * 0.03, ease: [0.16, 1, 0.3, 1] }}
                  onPointerEnter={() => setCursor(i)}
                  onClick={() => choose(i)}
                  className={`flex cursor-pointer items-center justify-between gap-3 rounded-xl px-3.5 py-2.5 text-[14px] transition-colors duration-200 ${
                    cursor === i ? "bg-white/[0.08] text-white" : "text-bone/75"
                  }`}
                >
                  {o.label}
                  {selected && (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
                      <path d="M5 12l5 5L20 7" />
                    </svg>
                  )}
                </m.li>
              );
            })}
          </m.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
