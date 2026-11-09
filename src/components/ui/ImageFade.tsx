"use client";

import { useEffect } from "react";

/** Fades images in over 0.45s as they finish loading. Images already loaded are left alone. */
export default function ImageFade() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const prepare = (img: HTMLImageElement) => {
      if (img.dataset.fade || img.complete) return;
      img.dataset.fade = "1";
      img.style.opacity = "0";
      img.style.transition = "opacity 0.45s ease";
      const show = () => {
        img.style.opacity = "";
        // Hand transitions back to the image's own classes (hover zooms) once the fade is over
        setTimeout(() => {
          img.style.transition = "";
        }, 500);
      };
      img.addEventListener("load", show, { once: true });
      img.addEventListener("error", show, { once: true });
    };
    document.querySelectorAll("img").forEach(prepare);
    const mo = new MutationObserver((records) => {
      for (const r of records)
        r.addedNodes.forEach((n) => {
          if (!(n instanceof HTMLElement)) return;
          if (n instanceof HTMLImageElement) prepare(n);
          n.querySelectorAll("img").forEach(prepare);
        });
    });
    mo.observe(document.body, { childList: true, subtree: true });
    return () => mo.disconnect();
  }, []);
  return null;
}
