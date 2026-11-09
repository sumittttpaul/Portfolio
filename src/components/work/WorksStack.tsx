"use client";

import { m, useReducedMotion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { createRef, useMemo, useRef, type RefObject } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "content/projects";

/**
 * Stacked project cards. Each card pins below the header while the next one
 * slides up over it; while entering, the card and its image settle from a
 * slight zoom (1.1 / 1.2) to rest.
 *
 * Pinned (sticky) elements report no scroll progress while stuck, so progress
 * is measured on zero-height sentinels that sit in normal flow at the natural
 * start of each card.
 */
export default function WorksStack({ projects }: { projects: Project[] }) {
  const sentinels = useMemo(
    () => Array.from({ length: projects.length + 1 }, () => createRef<HTMLLIElement>()),
    [projects.length],
  );
  return (
    // overflow-x: clip (not hidden) trims the entry zoom without breaking position: sticky
    <ol className="relative overflow-x-clip">
      {projects.map((p, i) => (
        <Item key={p.slug} project={p} index={i} self={sentinels[i]} next={sentinels[i + 1]} isLast={i === projects.length - 1} />
      ))}
      <li ref={sentinels[projects.length]} aria-hidden="true" className="h-0" />
    </ol>
  );
}

function Item({
  project,
  index,
  self,
  next,
  isLast,
}: {
  project: Project;
  index: number;
  self: RefObject<HTMLLIElement>;
  next: RefObject<HTMLLIElement>;
  isLast: boolean;
}) {
  const { scrollYProgress: enter } = useScroll({ target: self, offset: ["start end", "start 120px"] });
  // 0 when the next card starts entering at the bottom, 1 once it has pinned
  const { scrollYProgress: covered } = useScroll({ target: next, offset: ["start end", "start 120px"] });
  return (
    <>
      <li ref={self} aria-hidden="true" className="h-0" />
      <WorkCard project={project} index={index} enter={enter} covered={covered} isLast={isLast} />
    </>
  );
}

function WorkCard({
  project,
  index,
  enter,
  covered,
  isLast,
}: {
  project: Project;
  index: number;
  enter: MotionValue<number>;
  covered: MotionValue<number>;
  isLast: boolean;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLLIElement>(null);
  const wrapScale = useTransform(enter, [0, 1], [1.1, 1]);
  const imgScale = useTransform(enter, [0, 1], [1.2, 1]);
  const infoOpacity = useTransform(covered, [0.25, 0.6], [1, isLast ? 1 : 0]);
  const dim = useTransform(covered, [0.3, 1], [0, isLast ? 0 : 0.35]);

  return (
    <li ref={ref} className="sticky top-[76px] pb-[4vh] sm:top-[104px] md:pb-[6vh]" style={{ zIndex: index + 1 }}>
      <div className="relative flex w-full flex-col items-center px-2 sm:px-9">
        <m.div style={reduce ? undefined : { scale: wrapScale }} className="w-full sm:w-[80%] lg:w-[min(58vw,1110px)]">
          <Link
            href={`/work/${project.slug}`}
            className="group relative block aspect-[5/4] w-full overflow-hidden rounded-[16px] sm:aspect-[3/2] md:rounded-[20px]"
            style={{ backgroundColor: project.tint }}
          >
            <m.div className="absolute inset-0" style={reduce ? undefined : { scale: imgScale }}>
              <Image
                src={project.cover}
                alt={`${project.name}: ${project.type}`}
                fill
                priority={index === 0}
                sizes="(min-width: 768px) 58vw, 100vw"
                className="object-cover transition-transform duration-[1.2s] ease-expo group-hover:scale-[1.04]"
              />
            </m.div>
            <m.span aria-hidden="true" className="pointer-events-none absolute inset-0 bg-black" style={{ opacity: dim }} />
            <span className="absolute left-1/2 top-4 z-[5] flex -translate-x-1/2 items-center gap-3 whitespace-nowrap rounded-full bg-white/30 p-1 pr-4 backdrop-blur-[7px] sm:top-6">
              <span className="relative size-10 overflow-hidden rounded-full">
                <Image src={project.gallery[0].src} alt="" fill sizes="40px" className="object-cover" />
              </span>
              <span className="text-[14px] font-medium leading-[16.8px] tracking-[-0.28px] text-white">{project.name}</span>
              <span className="h-4 w-px bg-white/60" />
              <span className="text-[12px] font-medium text-white">
                <span className="inline-block transition-transform duration-500 ease-expo group-hover:translate-x-0.5">
                  See work
                </span>
              </span>
            </span>
          </Link>
        </m.div>

        <m.div
          style={reduce ? undefined : { opacity: infoOpacity }}
          className="pointer-events-none fixed-labels absolute top-1/2 hidden -translate-y-1/2 justify-between lg:flex"
        >
          <div className="flex flex-col">
            <span className="eyebrow">Year</span>
            <span className="mt-1 text-[15px] leading-[21px] text-bone">{project.year}</span>
          </div>
          <div className="flex flex-col items-end text-right">
            <span className="eyebrow">Type</span>
            <span className="mt-1 text-[15px] leading-[21px] text-bone">{project.type}</span>
          </div>
        </m.div>
      </div>
    </li>
  );
}
