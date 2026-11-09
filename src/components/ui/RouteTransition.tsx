"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { getProject } from "content/projects";
import { pauseSmoothScroll, resumeSmoothScroll } from "components/ui/SmoothScroll";
import { site } from "content/site";

const EASE = "cubic-bezier(0.76, 0, 0.24, 1)";
const TEXT_EASE = "cubic-bezier(0.33, 1, 0.68, 1)";
/** Panel rising over the current page. */
const COVER_MS = 900;
/** Panel lifting off the new page. */
const REVEAL_MS = 1100;
/** Short beat on the covered screen once the next page has painted. */
const HOLD_MS = 250;
/** If a page never arrives (offline, failed chunk) the site must not stay covered. */
const NAVIGATION_TIMEOUT_MS = 10000;

/** Greeting played whenever the home page is opened by a full page load. */
const GREETINGS = ["Hello", "Bonjour", "Ciao", "Olá", "やあ", "Hallå", "Guten Tag", "Hallo", "स्वागत है"];
const GREETING_FIRST_MS = 1000;
/** Long enough to read each word. */
const GREETING_NEXT_MS = 400;
const GREETING_LAST_MS = 650;

/** Runs before first paint: a full load or reload of the home page greets; in-app navigation never runs this. */
export const greetingScript = `try{if(location.pathname==="/"&&!matchMedia("(prefers-reduced-motion: reduce)").matches)document.documentElement.setAttribute("data-greeting","")}catch(e){}`;

/**
 * Where the cover is in its cycle, so pages can hold their own entrance until
 * it is out of the way: "covered" while it hides the page, "revealing" while
 * it lifts, "settled" once it is gone.
 */
export type RoutePhase = "covered" | "revealing" | "settled";
let phase: RoutePhase = "covered";
const phaseListeners = new Set<(p: RoutePhase) => void>();
function setPhase(next: RoutePhase) {
  phase = next;
  phaseListeners.forEach((fn) => fn(next));
}

export function useRoutePhase() {
  const [current, setCurrent] = useState<RoutePhase>(phase);
  useEffect(() => {
    phaseListeners.add(setCurrent);
    setCurrent(phase);
    return () => {
      phaseListeners.delete(setCurrent);
    };
  }, []);
  return current;
}

type Label = { title: string; text: string };

/** Blog slugs are generated from the article title, so the title can be restored without loading the articles. */
const fromSlug = (slug: string) => {
  const words = slug.replace(/-/g, " ");
  return words.charAt(0).toUpperCase() + words.slice(1);
};

function labelFor(pathname: string): Label {
  if (pathname === "/") return { title: "Home", text: "Websites and web apps, designed and built with care" };
  if (pathname === "/work") return { title: "Works", text: "Selected projects, from first idea to launch" };
  if (pathname === "/blog") return { title: "Blog", text: "Notes on real-world frontend engineering" };
  if (pathname === "/contact") return { title: "Contact", text: "Let's talk about what you're building" };
  const [, section, slug] = pathname.split("/");
  if (section === "work" && slug) {
    const project = getProject(slug);
    if (project) return { title: project.name, text: `Case study · ${project.type}` };
  }
  if (section === "blog" && slug) return { title: fromSlug(slug), text: "Article from Frontend Lab" };
  return { title: "Page not found", text: "Let's get you back on track" };
}

/**
 * Full-screen curved panel played between routes: it rises over the current
 * page, the next page mounts behind it, then it carries on upwards. Internal
 * links are picked up centrally, so every link on the site gets it.
 */
export default function RouteTransition() {
  const pathname = usePathname();
  const router = useRouter();
  const [label, setLabel] = useState(() => labelFor(pathname));

  const root = useRef<HTMLDivElement>(null);
  const panel = useRef<HTMLDivElement>(null);
  const bottomCurve = useRef<HTMLDivElement>(null);
  const content = useRef<HTMLDivElement>(null);
  const greeting = useRef<HTMLSpanElement>(null);
  const busy = useRef(true);
  const started = useRef(false);
  const currentPath = useRef(pathname);
  const arrived = useRef<(() => void) | null>(null);

  useEffect(() => {
    currentPath.current = pathname;
    arrived.current?.();
  }, [pathname]);

  useEffect(() => {
    if (started.current) return;
    started.current = true;

    const el = root.current;
    const panelEl = panel.current;
    const curveEl = bottomCurve.current;
    const contentEl = content.current;
    if (!el || !panelEl || !curveEl || !contentEl) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      busy.current = false;
      setPhase("settled");
      return;
    }

    const clear = () => el.getAnimations({ subtree: true }).forEach((a) => a.cancel());
    const travel = () => panelEl.offsetHeight + curveEl.offsetHeight / 2;
    const finished = (list: Animation[]) => Promise.all(list.map((a) => a.finished)).catch(() => undefined);

    const waitForArrival = () =>
      new Promise<void>((resolve) => {
        const done = () => {
          clearTimeout(timer);
          arrived.current = null;
          resolve();
        };
        const timer = setTimeout(done, NAVIGATION_TIMEOUT_MS);
        arrived.current = done;
      });

    // The panel stays painted off-screen between routes, so the first frame of a
    // transition doesn't have to rasterise it
    const rest = () => {
      panelEl.style.transform = `translateY(${travel()}px)`;
      contentEl.style.opacity = "0";
      el.style.pointerEvents = "none";
      document.documentElement.removeAttribute("data-route-moving");
      document.documentElement.removeAttribute("data-greeting");
      resumeSmoothScroll();
      setPhase("settled");
    };

    const lock = () => {
      el.style.pointerEvents = "auto";
      document.documentElement.setAttribute("data-route-moving", "");
      pauseSmoothScroll();
    };

    // Wait until the new page is on screen, with a limit for throttled tabs
    const painted = () =>
      new Promise<void>((resolve) => {
        const timer = setTimeout(resolve, 200);
        requestAnimationFrame(() =>
          requestAnimationFrame(() => {
            clearTimeout(timer);
            resolve();
          }),
        );
      });

    const reveal = async () => {
      lock();
      await painted();
      clear();
      const timing = { duration: REVEAL_MS, delay: HOLD_MS, easing: EASE, fill: "both" as const };
      setTimeout(() => setPhase("revealing"), HOLD_MS);
      // The page rises into place as the panel lifts, like the original site
      const main = document.getElementById("main");
      const rise = window.matchMedia("(min-width: 640px)").matches ? 300 : 125;
      main?.animate([{ transform: `translateY(${rise}px)` }, { transform: "translateY(0)" }], {
        duration: 1200,
        delay: HOLD_MS + 150,
        easing: TEXT_EASE,
        fill: "backwards",
      });
      await finished([
        panelEl.animate([{ transform: "translateY(0)" }, { transform: `translateY(${-travel()}px)` }], timing),
        curveEl.animate([{ transform: "scaleY(1)" }, { transform: "scaleY(0)" }], timing),
        contentEl.animate(
          [
            { opacity: 1, transform: "translateY(0)" },
            { opacity: 0, transform: "translateY(-100px)" },
          ],
          timing,
        ),
      ]);
      rest();
      clear();
      busy.current = false;
    };

    const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

    const greet = async () => {
      lock();
      // "Hello" is already on screen from the server render, so it simply holds; later words fade in
      await wait(GREETING_FIRST_MS);
      for (const word of GREETINGS.slice(1)) {
        if (greeting.current) {
          greeting.current.textContent = word;
          greeting.current.animate(
            [
              { opacity: 0, transform: "translateY(10px)" },
              { opacity: 1, transform: "translateY(0)" },
            ],
            { duration: 220, easing: TEXT_EASE },
          );
        }
        await wait(word === GREETINGS[GREETINGS.length - 1] ? GREETING_LAST_MS : GREETING_NEXT_MS);
      }
    };

    const cover = async () => {
      clear();
      const animations = [
        panelEl.animate([{ transform: `translateY(${travel()}px)` }, { transform: "translateY(0)" }], {
          duration: COVER_MS,
          easing: EASE,
          fill: "both",
        }),
        contentEl.animate(
          [
            { opacity: 0, transform: "translateY(48px)" },
            { opacity: 1, transform: "translateY(0)" },
          ],
          { duration: 500, delay: 380, easing: TEXT_EASE, fill: "both" },
        ),
      ];
      lock();
      await finished(animations);
    };

    const navigate = async (href: string, target: string) => {
      busy.current = true;
      setPhase("covered");
      setLabel(labelFor(target));
      router.prefetch(href);
      await cover();
      const arrival = waitForArrival();
      router.push(href);
      await arrival;
      await reveal();
    };

    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const link = (e.target as Element | null)?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!link || (link.target && link.target !== "_self") || link.hasAttribute("download")) return;
      const url = new URL(link.href, window.location.href);
      // Other sites, mailto links, same-page anchors and files keep their normal behaviour
      if (url.origin !== window.location.origin || url.pathname === window.location.pathname) return;
      if (/\.[a-z0-9]+$/i.test(url.pathname)) return;
      e.preventDefault();
      e.stopImmediatePropagation();
      if (!busy.current) void navigate(url.pathname + url.search + url.hash, url.pathname);
    };

    // Back and forward have already left the page, so start fully covered
    const onPopState = () => {
      const target = window.location.pathname;
      if (busy.current || target === currentPath.current) return;
      busy.current = true;
      setPhase("covered");
      setLabel(labelFor(target));
      clear();
      panelEl.style.transform = "translateY(0)";
      contentEl.style.opacity = "1";
      lock();
      void waitForArrival().then(reveal);
    };

    document.addEventListener("click", onClick, true);
    window.addEventListener("popstate", onPopState);
    void (async () => {
      if (document.documentElement.hasAttribute("data-greeting")) await greet();
      await reveal();
    })();
    // Listeners live for the whole session: this component sits in the root layout
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      ref={root}
      aria-hidden="true"
      className="route-cover fixed inset-0 z-[200] overflow-hidden motion-reduce:hidden"
      style={{ ["--curve" as string]: "clamp(48px, 9vw, 150px)" }}
    >
      <div ref={panel} className="absolute inset-x-0 top-0 h-[100lvh] bg-ink-850 will-change-transform">
        <div className="absolute left-[-10%] top-[calc(var(--curve)*-1)] h-[calc(var(--curve)*2)] w-[120%] rounded-[50%] bg-ink-850" />
        <div
          ref={bottomCurve}
          className="absolute bottom-[calc(var(--curve)*-1)] left-[-10%] h-[calc(var(--curve)*2)] w-[120%] rounded-[50%] bg-ink-850"
        />
      </div>
      <div ref={content} className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center will-change-transform">
        <p className="route-greeting absolute inset-x-6 top-1/2 hidden -translate-y-1/2 justify-center text-[clamp(2.25rem,5vw,4.5rem)] font-medium leading-[1.05] tracking-[-0.02em] text-bone">
          <span className="mr-[0.25em] inline-block scale-[.8]">•</span>
          <span ref={greeting} className="inline-block">
            {GREETINGS[0]}
          </span>
        </p>
        <p suppressHydrationWarning className="route-label max-w-[1000px] text-balance text-[clamp(2.25rem,5vw,4.5rem)] font-medium leading-[1.05] tracking-[-0.02em] text-bone">
          <span className="mr-[0.25em] inline-block scale-[.8]">•</span>
          {label.title}
        </p>
        <p suppressHydrationWarning className="route-label mt-4 font-inter text-[clamp(1rem,1.3vw,1.25rem)] leading-[1.4] text-mute">
          {label.text}
        </p>
        <div className="route-label absolute inset-x-[18px] bottom-6 flex justify-between gap-4 text-[12px] uppercase leading-[15.6px] text-pale sm:inset-x-9 sm:bottom-8">
          <span>{site.name}</span>
          <span>{site.role}</span>
        </div>
      </div>
    </div>
  );
}
