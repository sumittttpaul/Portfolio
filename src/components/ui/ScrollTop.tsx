"use client";

import { useEffect, useState } from "react";
import { scrollToTop } from "./SmoothScroll";

/** Round "back to top" button, shown once the page has been scrolled. */
export default function ScrollTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const update = () => setVisible(window.scrollY > 400);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      tabIndex={visible ? 0 : -1}
      className={`fixed bottom-4 right-4 z-40 flex size-10 items-center justify-center rounded-full border border-[#3A3C40] bg-ink-750 text-bone transition-all duration-500 ease-expo hover:bg-ink-700 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M12 20V4M5 11l7-7 7 7" />
      </svg>
    </button>
  );
}
