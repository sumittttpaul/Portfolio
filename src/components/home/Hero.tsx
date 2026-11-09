"use client";

import { m, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { useRoutePhase } from "components/ui/RouteTransition";
import Wordmark from "components/site/Wordmark";

/** `start`: where the clip begins and loops back to, skipping any intro frames. */
type Slide = { label: string; src: string; alt: string; start: number };

const slides: Slide[] = [
  { label: "Frontend Engineering", src: "/media/showreel.mp4", alt: "Floating code editor panels", start: 0 },
  // The first 3.5s of this clip are letterboxed
  { label: "E-commerce", src: "/media/reel-ecommerce.mp4", alt: "Browsing a ceramics store on a tablet", start: 4 },
  { label: "Brand Websites", src: "/media/reel-brand.mp4", alt: "One brand website on a laptop, tablet and phone", start: 0 },
  { label: "Product UI", src: "/media/reel-product.mp4", alt: "Signing in on a phone", start: 0 },
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
  // How long each slide stays up: its clip's playable length, never more than DURATION
  const [lengths, setLengths] = useState<number[]>(() => slides.map(() => DURATION));
  // A clip fades in once its first frame is ready, instead of popping in mid-load
  const [loaded, setLoaded] = useState<boolean[]>(() => slides.map(() => false));
  // A cached clip can finish loading before React attaches its listener
  useEffect(() => {
    const ready = videos.current.map((v) => !!v && v.readyState >= 2);
    if (ready.some(Boolean)) setLoaded((l) => l.map((v, k) => v || ready[k]));
  }, []);
  const length = lengths[active];
  const [cycle, setCycle] = useState(0);
  // The loader covers the page first: start the showreel from slide one once it is gone
  const phase = useRoutePhase();
  const ready = phase === "settled";
  const entering = phase !== "covered";
  const running = ready && !paused && !reduce;
  const videos = useRef<(HTMLVideoElement | null)[]>([]);

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

  // Back to the first slide and the start of the video whenever the loader clears
  useEffect(() => {
    if (!ready) return;
    setActive(0);
    setCycle((c) => c + 1);
    const first = videos.current[0];
    if (first) first.currentTime = slides[0].start;
  }, [ready]);

  useEffect(() => {
    if (!running) return;
    const id = setTimeout(() => go((active + 1) % slides.length), length * 1000);
    return () => clearTimeout(id);
  }, [active, running, go, cycle, length]);

  // Only the visible slide plays. A slide starts from its own start point each time it is shown.
  const shown = useRef(-1);
  useEffect(() => {
    videos.current.forEach((v, i) => {
      if (!v) return;
      if (i !== active) {
        v.pause();
        return;
      }
      if (shown.current !== active) {
        shown.current = active;
        v.currentTime = slides[i].start;
      }
      if (running) v.play().catch(() => undefined);
      else v.pause();
    });
  }, [active, running]);

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
              animate={entering || reduce ? { clipPath: "inset(-50% 0 0 0)", y: 0 } : undefined}
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
                      key={`${cycle}-${paused}-${ready}`}
                      className="absolute inset-0 origin-left bg-gradient-to-r from-white/30 to-bone"
                      style={{
                        animation: running ? `progress ${length}s linear forwards` : undefined,
                        transform: running ? undefined : ready || reduce ? "scaleX(1)" : "scaleX(0)",
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
          {/* Every clip stays mounted and crossfades in place; the zoom also crops the corner watermark */}
          {slides.map((s, i) => (
            <div
              key={s.src}
              className={`absolute inset-0 transition-opacity duration-1000 ${active === i ? "opacity-100" : "opacity-0"}`}
            >
              <video
                ref={(el) => {
                  videos.current[i] = el;
                }}
                className={`size-full origin-[20%_20%] scale-[1.2] object-cover transition-opacity duration-700 ease-out ${loaded[i] ? "opacity-100" : "opacity-0"}`}
                onLoadedData={() => setLoaded((l) => (l[i] ? l : l.map((v, k) => k === i || v)))}
                src={s.src}
                muted
                playsInline
                // The first clip loads straight away, the rest once the loader has cleared
                preload={i === 0 || ready ? "auto" : "none"}
                aria-label={s.alt}
                onLoadedMetadata={(e) => {
                  const playable = e.currentTarget.duration - s.start;
                  if (Number.isFinite(playable) && playable > 1) {
                    setLengths((l) => l.map((v, k) => (k === i ? Math.min(DURATION, playable) : v)));
                  }
                  if (s.start && e.currentTarget.currentTime < s.start) e.currentTarget.currentTime = s.start;
                }}
                // A clip never replays: when it ends the showreel moves on
                onEnded={(e) => {
                  e.currentTarget.currentTime = s.start;
                  if (active === i && running) go((i + 1) % slides.length);
                }}
              />
            </div>
          ))}
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
