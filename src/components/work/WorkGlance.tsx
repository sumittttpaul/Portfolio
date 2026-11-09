"use client";

import { m, useReducedMotion } from "framer-motion";
import { projects } from "content/projects";
import { tools } from "content/site";

const years = projects.map((p) => Number(p.year));
const signIn = projects.find((p) => p.slug === "authentication")?.gallery.length ?? 0;

const stats = [
  { value: String(projects.length), label: "Selected projects, each designed and built end to end" },
  { value: String(signIn), label: "Screens mapped out for a single sign-in journey" },
  { value: String(tools.length), label: "Tools and technologies used across the work" },
  { value: String(Math.max(...years) - Math.min(...years) + 1), label: `Years of selected work, from ${Math.min(...years)} to ${Math.max(...years)}` },
];

/** Digits roll up one after another when the number scrolls into view. */
function Digits({ value }: { value: string }) {
  const reduce = useReducedMotion();
  return (
    // The trigger sits on the parent: digits start clipped, so they never "intersect" themselves
    <m.span
      className="flex overflow-hidden"
      aria-label={value}
      initial={reduce ? false : "hidden"}
      whileInView="show"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.12 }}
    >
      {Array.from(value).map((d, i) => (
        <m.span
          key={i}
          aria-hidden="true"
          className="inline-block"
          variants={{ hidden: { y: "105%" }, show: { y: "0%", transition: { duration: 1, ease: [0.2, 0.7, 0.2, 1] } } }}
        >
          {d}
        </m.span>
      ))}
    </m.span>
  );
}

export default function WorkGlance() {
  return (
    <section aria-label="Work at a glance" className="container-site pb-20 pt-4 sm:pb-24">
      <p className="text-[12px] uppercase leading-[15.6px] text-pale">Work at a glance</p>
      <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
        {stats.map((s) => (
          <li key={s.label}>
            <div className="text-[clamp(4rem,8vw,7rem)] font-medium leading-none tracking-[-0.03em] text-white">
              <Digits value={s.value} />
            </div>
            <p className="mt-3 max-w-[260px] text-[16px] font-medium leading-[19.2px] text-soft">{s.label}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
