"use client";

import { AnimatePresence, m, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import Wordmark from "components/site/Wordmark";

type Slide = { label: string; kind: "video" | "image"; src: string; alt: string };

const slides: Slide[] = [
  { label: "Frontend Engineering", kind: "video", src: "/media/showreel.mp4", alt: "Floating code editor panels" },
  { label: "E-commerce", kind: "image", src: "/media/emotion-cover.webp", alt: "Emotion e-commerce store on a tablet" },
  { label: "Brand Websites", kind: "image", src: "/media/agewear-cover.webp", alt: "Agewear Lifestyle storefront on a phone" },
  { label: "Product UI", kind: "image", src: "/media/authentication-cover.webp", alt: "Sign-in screen on a phone" },
];

const DURATION = 7;
/** Extra scroll distance (px) during which the hero stays pinned on desktop. */
const PIN = 620;
/** Showreel grows until it is this share of the viewport height. */
const MAX_REEL = 0.72;
const useIsoLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;

export default function Hero() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [cycle, setCycle] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Scroll-linked layout (desktop only): the wordmark + tabs slide up while the
  // showreel's top edge rises and its bottom stays anchored, so it grows.
  const wrapRef = useRef<HTMLDivElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const [geo, setGeo] = useState<{ desktop: boolean; top: number; shift: number }>({ desktop: false, top: 0, shift: 0 });
  const { scrollYProgress } = useScroll({ target: wrapRef, offset: ["start start", "end end"] });
  // Content rises at 0.7x the scroll speed until the reel reaches full height,
  // then holds for the rest of the pin (as measured on the reference).
  const RATE = 0.7;
  const moved = useTransform(scrollYProgress, (p) => Math.min(p * PIN * RATE, geo.shift));
  const headY = useTransform(moved, (v) => -v);
  const reelTop = useTransform(moved, (v) => geo.top - v);
  const letterProgress = useTransform(moved, (v) => (geo.shift ? v / geo.shift : 0));

  useIsoLayoutEffect(() => {
    const measure = () => {
      const desktop = window.matchMedia("(min-width: 1024px)").matches;
      const head = headRef.current;
      if (!desktop || !head) return setGeo({ desktop: false, top: 0, shift: 0 });
      const vh = window.innerHeight;
      const top = head.offsetTop + head.offsetHeight + 8;
      const finalTop = Math.min(top, vh - 12 - vh * MAX_REEL);
      setGeo({ desktop: true, top, shift: Math.max(0, top - finalTop) });
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (headRef.current) ro.observe(headRef.current);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  const go = useCallback((i: number) => {
    setActive(i);
    setCycle((c) => c + 1);
  }, []);

  useEffect(() => {
    if (paused || reduce) return;
    const id = setTimeout(() => go((active + 1) % slides.length), DURATION * 1000);
    return () => clearTimeout(id);
  }, [active, paused, reduce, go, cycle]);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (paused || reduce) v.pause();
    else v.play().catch(() => undefined);
  }, [paused, reduce]);

  const animated = geo.desktop && !reduce;

  return (
    <div ref={wrapRef} className="relative" style={{ height: geo.desktop ? `calc(100svh + ${PIN}px)` : undefined }}>
      <section
        aria-label="Introduction"
        className="relative flex flex-col px-2 pb-2 pt-[72px] sm:px-4 sm:pb-4 sm:pt-[101px] lg:pt-[128px] lg:sticky lg:top-0 lg:h-[100svh] lg:min-h-[620px] lg:overflow-hidden"
      >
        <h1 className="sr-only">Sumeet Kumar Paul, Senior Frontend Engineer</h1>

        <m.div ref={headRef} style={animated ? { y: headY } : undefined}>
          <div className="px-1 text-bone">
            <m.div
              initial={reduce ? false : { clipPath: "inset(100% 0 0 0)", y: 60 }}
              animate={{ clipPath: "inset(-50% 0 0 0)", y: 0 }}
              transition={{ duration: 1.3, ease: [0.76, 0, 0.24, 1], delay: 0.15 }}
            >
              <Wordmark progress={animated ? letterProgress : undefined} />
            </m.div>
          </div>

          <div role="tablist" aria-label="Showreel" className="mt-14 hidden grid-cols-4 gap-x-4 lg:grid">
            {slides.map((s, i) => (
              <button
                key={s.label}
                role="tab"
                aria-selected={active === i}
                aria-controls="showreel"
                onClick={() => go(i)}
                className={`group pb-0 pt-2 text-[16px] font-semibold leading-[22.4px] transition-colors duration-500 ${
                  active === i ? "text-bone" : "text-bone/80 hover:text-bone"
                }`}
              >
                {s.label}
                <span className="relative mt-4 block h-px w-full overflow-hidden bg-white/15">
                  {active === i && (
                    <span
                      key={`${cycle}-${paused}`}
                      className="absolute inset-0 origin-left bg-gradient-to-r from-white/30 to-bone"
                      style={{
                        animation: paused || reduce ? undefined : `progress ${DURATION}s linear forwards`,
                        transform: paused || reduce ? "scaleX(1)" : undefined,
                      }}
                    />
                  )}
                </span>
              </button>
            ))}
          </div>
        </m.div>

        <m.div
          id="showreel"
          role="tabpanel"
          initial={reduce ? false : { opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.45 }}
          style={geo.desktop ? { top: reelTop } : undefined}
          className="relative mt-4 aspect-[16/9] overflow-hidden rounded-[16px] bg-ink-950 sm:aspect-[3/2] sm:rounded-[20px] lg:absolute lg:inset-x-3 lg:bottom-3 lg:mt-0 lg:aspect-auto lg:rounded-[32px]"
        >
          {/* Video stays mounted so it keeps its playback position between tabs */}
          <div className={`absolute inset-0 transition-opacity duration-1000 ${active === 0 ? "opacity-100" : "opacity-0"}`}>
            <video
              ref={videoRef}
              className="size-full origin-[20%_20%] scale-[1.2] object-cover"
              src={slides[0].src}
              autoPlay={!reduce}
              muted
              loop
              playsInline
              preload="auto"
              aria-label={slides[0].alt}
            />
          </div>
          <AnimatePresence>
            {slides[active].kind === "image" && (
              <m.div
                key={slides[active].src}
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
              >
                <m.div
                  className="absolute inset-0"
                  initial={{ scale: reduce ? 1 : 1.12 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: DURATION + 1, ease: "linear" }}
                >
                  <Image src={slides[active].src} alt={slides[active].alt} fill sizes="100vw" className="object-cover" />
                </m.div>
              </m.div>
            )}
          </AnimatePresence>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          <button
            type="button"
            onClick={() => setPaused((p) => !p)}
            aria-label={paused ? "Play showreel" : "Pause showreel"}
            className="absolute bottom-3 right-3 flex size-9 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-[5px] transition-colors hover:bg-white/25 lg:bottom-4 lg:right-4"
          >
            {paused ? (
              <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                <path d="M3 1.5v9l7.5-4.5z" />
              </svg>
            ) : (
              <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                <rect x="2.5" y="1.5" width="2.5" height="9" rx="0.6" />
                <rect x="7" y="1.5" width="2.5" height="9" rx="0.6" />
              </svg>
            )}
          </button>
        </m.div>
      </section>
    </div>
  );
}
