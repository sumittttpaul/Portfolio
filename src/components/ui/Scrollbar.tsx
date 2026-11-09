"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Overlay scrollbar for fine-pointer devices.
 * - transparent track, thin thumb that thickens on hover or drag
 * - visible while scrolling or when the pointer nears the right edge,
 *   fades out after a short idle period
 * - draggable; works with the Lenis smooth scroll because Lenis keeps the
 *   native scroll position in sync
 */
export default function Scrollbar() {
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(false); // hovered or dragging
  const [thumb, setThumb] = useState({ top: 0, height: 0 });
  const hideTimer = useRef<ReturnType<typeof setTimeout>>();
  const drag = useRef<{ startY: number; startScroll: number } | null>(null);
  const nearEdge = useRef(false);

  const measure = useCallback(() => {
    const doc = document.documentElement;
    const view = window.innerHeight;
    const total = doc.scrollHeight;
    const pad = 6;
    const track = view - pad * 2;
    const height = Math.max(40, (view / total) * track);
    const max = total - view;
    const top = pad + (max > 0 ? (window.scrollY / max) * (track - height) : 0);
    setThumb({ top, height: total > view + 1 ? height : 0 });
  }, []);

  const show = useCallback(() => {
    setVisible(true);
    clearTimeout(hideTimer.current);
    hideTimer.current = setTimeout(() => {
      if (!drag.current && !nearEdge.current) setVisible(false);
    }, 1100);
  }, []);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)");
    const update = () => setEnabled(fine.matches);
    update();
    fine.addEventListener("change", update);
    return () => fine.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    document.documentElement.classList.add("custom-scrollbar");
    measure();
    const onScroll = () => {
      measure();
      show();
    };
    const onMove = (e: PointerEvent) => {
      const near = window.innerWidth - e.clientX < 24;
      if (near !== nearEdge.current) {
        nearEdge.current = near;
        if (near) setVisible(true);
        else show();
      }
    };
    const ro = new ResizeObserver(measure);
    ro.observe(document.body);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", measure);
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      document.documentElement.classList.remove("custom-scrollbar");
      ro.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", measure);
      window.removeEventListener("pointermove", onMove);
      clearTimeout(hideTimer.current);
    };
  }, [enabled, measure, show]);

  useEffect(() => {
    if (!enabled) return;
    const onMove = (e: PointerEvent) => {
      if (!drag.current) return;
      const doc = document.documentElement;
      const track = window.innerHeight - 12 - thumb.height;
      const max = doc.scrollHeight - window.innerHeight;
      const delta = ((e.clientY - drag.current.startY) / Math.max(1, track)) * max;
      window.scrollTo({ top: drag.current.startScroll + delta, behavior: "instant" as ScrollBehavior });
    };
    const onUp = () => {
      if (!drag.current) return;
      drag.current = null;
      document.documentElement.classList.remove("scrollbar-dragging");
      setActive(false);
      show();
    };
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
  }, [enabled, thumb.height, show]);

  if (!enabled || !thumb.height) return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed bottom-0 right-0 top-0 z-[60] w-4 transition-opacity duration-500 ${
        visible || active ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      onPointerEnter={() => setActive(true)}
      onPointerLeave={() => !drag.current && setActive(false)}
      onPointerDown={(e) => {
        // click on the track jumps there
        if (e.target !== e.currentTarget) return;
        const doc = document.documentElement;
        const ratio = (e.clientY - thumb.height / 2) / (window.innerHeight - thumb.height);
        window.scrollTo({ top: ratio * (doc.scrollHeight - window.innerHeight), behavior: "smooth" });
      }}
    >
      <div
        onPointerDown={(e) => {
          e.preventDefault();
          drag.current = { startY: e.clientY, startScroll: window.scrollY };
          document.documentElement.classList.add("scrollbar-dragging");
          setActive(true);
          setVisible(true);
        }}
        className={`absolute right-[3px] cursor-grab rounded-full bg-bone/45 backdrop-blur transition-[width,background-color] duration-300 ease-expo hover:bg-bone/70 active:cursor-grabbing ${
          active ? "w-[8px] bg-bone/60" : "w-[3px]"
        }`}
        style={{ top: thumb.top, height: thumb.height }}
      />
    </div>
  );
}
