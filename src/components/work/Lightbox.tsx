"use client";

import { AnimatePresence, m } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";

export type LightboxImage = { src: string; alt: string };

const btn =
  "flex size-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-bone backdrop-blur-md transition-colors hover:bg-white/15 disabled:opacity-30";

/**
 * Full-screen image viewer: arrows / keyboard / swipe navigation, click (or Z)
 * to zoom and pan with the pointer, and a thumbnail strip.
 */
export default function Lightbox({
  images,
  index,
  title,
  onClose,
  onIndex,
}: {
  images: LightboxImage[];
  index: number | null;
  title: string;
  onClose: () => void;
  onIndex: (i: number) => void;
}) {
  const [zoom, setZoom] = useState(false);
  const [origin, setOrigin] = useState("50% 50%");
  const [mounted, setMounted] = useState(false);
  const swipe = useRef<number | null>(null);
  const thumbs = useRef<HTMLDivElement>(null);
  const open = index !== null;

  useEffect(() => setMounted(true), []);

  const go = useCallback(
    (dir: 1 | -1) => {
      if (index === null) return;
      setZoom(false);
      onIndex((index + dir + images.length) % images.length);
    },
    [index, images.length, onIndex],
  );

  useEffect(() => {
    if (!open) return;
    const html = document.documentElement;
    const prev = html.style.overflow;
    html.style.overflow = "hidden";
    html.classList.add("lenis-stopped");
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
      if (e.key.toLowerCase() === "z") setZoom((z) => !z);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      html.style.overflow = prev;
      html.classList.remove("lenis-stopped");
      window.removeEventListener("keydown", onKey);
    };
  }, [open, go, onClose]);

  // Keep the active thumbnail in view
  useEffect(() => {
    if (index === null) return;
    const el = thumbs.current?.children[index] as HTMLElement | undefined;
    el?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }, [index]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {open && index !== null && (
        <m.div
          role="dialog"
          aria-modal="true"
          aria-label={`${title} screens`}
          data-lenis-prevent
          className="fixed inset-0 z-[90] flex flex-col bg-ink-950/95 backdrop-blur-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
        >
          {/* Top bar */}
          <div className="flex items-center justify-between gap-4 p-3 sm:p-5">
            <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.06] py-2 pl-4 pr-4 backdrop-blur-md">
              <span className="text-[14px] font-medium text-bone">{title}</span>
              <span className="h-4 w-px bg-white/20" />
              <span className="font-mono text-[12px] tabular-nums text-mute">
                {String(index + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button type="button" className={`${btn} hidden sm:flex`} onClick={() => setZoom((z) => !z)} aria-label={zoom ? "Zoom out" : "Zoom in"}>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <circle cx="11" cy="11" r="7" />
                  <path d="M20 20l-3.5-3.5M8 11h6" />
                  {!zoom && <path d="M11 8v6" />}
                </svg>
              </button>
              <button type="button" className={btn} onClick={onClose} aria-label="Close viewer" autoFocus>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            </div>
          </div>

          {/* Stage */}
          <div
            className="relative flex min-h-0 flex-1 items-center justify-center px-3 sm:px-20"
            onPointerDown={(e) => (swipe.current = e.clientX)}
            onPointerUp={(e) => {
              if (swipe.current === null || zoom) return;
              const dx = e.clientX - swipe.current;
              swipe.current = null;
              if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
            }}
            onClick={(e) => e.target === e.currentTarget && onClose()}
          >
            <AnimatePresence mode="wait" initial={false}>
              <m.div
                key={images[index].src}
                className={`relative h-full max-h-[78vh] w-full max-w-[1400px] overflow-hidden rounded-[18px] bg-ink-900 ring-1 ring-white/10 ${
                  zoom ? "cursor-zoom-out" : "cursor-zoom-in"
                }`}
                initial={{ opacity: 0, scale: 0.97, filter: "blur(6px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.98, filter: "blur(6px)" }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setZoom((z) => !z)}
                onPointerMove={(e) => {
                  if (!zoom) return;
                  const r = e.currentTarget.getBoundingClientRect();
                  setOrigin(`${((e.clientX - r.left) / r.width) * 100}% ${((e.clientY - r.top) / r.height) * 100}%`);
                }}
              >
                <Image
                  src={images[index].src}
                  alt={images[index].alt}
                  fill
                  sizes="100vw"
                  priority
                  className="object-contain transition-transform duration-500 ease-expo"
                  style={{ transform: zoom ? "scale(2)" : "scale(1)", transformOrigin: origin }}
                  draggable={false}
                />
              </m.div>
            </AnimatePresence>

            {images.length > 1 && (
              <>
                <button type="button" className={`${btn} absolute left-3 top-1/2 hidden -translate-y-1/2 sm:flex sm:left-5`} onClick={() => go(-1)} aria-label="Previous image">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M15 6l-6 6 6 6" />
                  </svg>
                </button>
                <button type="button" className={`${btn} absolute right-3 top-1/2 hidden -translate-y-1/2 sm:flex sm:right-5`} onClick={() => go(1)} aria-label="Next image">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M9 6l6 6-6 6" />
                  </svg>
                </button>
              </>
            )}
          </div>

          {/* Thumbnails */}
          {images.length > 1 && (
            <div className="px-3 pb-4 pt-3 sm:pb-6">
              <div ref={thumbs} className="mx-auto flex max-w-[1100px] gap-2 overflow-x-auto px-1 py-1 [scrollbar-width:none]">
                {images.map((img, i) => (
                  <button
                    key={img.src}
                    type="button"
                    onClick={() => {
                      setZoom(false);
                      onIndex(i);
                    }}
                    aria-label={`Show image ${i + 1}`}
                    aria-current={i === index}
                    className={`relative aspect-[16/9] w-20 shrink-0 overflow-hidden rounded-xl transition-all duration-300 sm:w-24 ${
                      i === index ? "opacity-100 ring-2 ring-bone ring-offset-2 ring-offset-ink-950" : "opacity-45 hover:opacity-80"
                    }`}
                  >
                    <Image src={img.src} alt="" fill sizes="96px" className="object-cover" />
                  </button>
                ))}
              </div>
              <p className="mt-3 hidden text-center text-[12px] text-dim sm:block">
                ← → to navigate · Z or click to zoom · Esc to close
              </p>
            </div>
          )}
        </m.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
