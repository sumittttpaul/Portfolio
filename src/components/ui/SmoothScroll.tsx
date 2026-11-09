"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

type Instance = {
  destroy: () => void;
  scrollTo: (target: number | string | HTMLElement, opts?: object) => void;
  start: () => void;
  stop: () => void;
};

let active: Instance | null = null;

/** Scrolls to the top through the smooth-scroll instance when there is one. */
export function scrollToTop() {
  if (active) active.scrollTo(0, { duration: 1.2 });
  else window.scrollTo({ top: 0, behavior: "smooth" });
}

/** Smooth-scrolls to an element, leaving room for the fixed header. */
export function scrollToElement(el: HTMLElement, offset = -120) {
  if (active) active.scrollTo(el, { offset, duration: 1.1 });
  else window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY + offset, behavior: "smooth" });
}

export const pauseSmoothScroll = () => active?.stop();
export const resumeSmoothScroll = () => active?.start();

/**
 * Lenis-style smooth scrolling through locomotive-scroll v5 (which wraps Lenis).
 * Native scroll position is kept, so CSS sticky and Framer Motion's useScroll
 * keep working. Disabled for touch devices and reduced-motion users.
 */
export default function SmoothScroll() {
  const ref = useRef<Instance | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    if (reduce || coarse) return;
    let cancelled = false;
    import("locomotive-scroll").then(({ default: LocomotiveScroll }) => {
      if (cancelled) return;
      ref.current = new LocomotiveScroll({
        lenisOptions: { lerp: 0.1, smoothWheel: true, wheelMultiplier: 1 },
      }) as unknown as Instance;
      active = ref.current;
    });
    return () => {
      cancelled = true;
      ref.current?.destroy();
      ref.current = null;
      active = null;
    };
  }, []);

  useEffect(() => {
    if (window.location.hash) return;
    ref.current?.scrollTo(0, { immediate: true, force: true });
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
