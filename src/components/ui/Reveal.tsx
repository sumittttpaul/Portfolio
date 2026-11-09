"use client";

import { m, useReducedMotion } from "framer-motion";
import { createElement, Fragment, type CSSProperties, type ElementType, type ReactNode } from "react";

/**
 * Scroll reveal used across the site: content fades up once as it enters the
 * viewport. Pass `motion={false}` to render a plain element instead.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  as = "div",
  style,
  motion = true,
  y = 24,
  id,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: "div" | "section" | "li" | "article" | "span" | "p" | "h2" | "h3" | "ul" | "ol" | "figure" | "aside";
  id?: string;
  style?: CSSProperties;
  motion?: boolean;
}) {
  const reduce = useReducedMotion();
  if (!motion) return createElement(as, { className, style, id }, children);
  const Comp = m[as] as typeof m.div;
  return (
    <Comp
      id={id}
      className={className}
      style={style}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.8, delay, ease: [0.2, 0.7, 0.2, 1] }}
    >
      {children}
    </Comp>
  );
}

/**
 * Heading that rises out of a mask as it scrolls into view. "\n" marks a line
 * break on tablet and desktop; on phones the text wraps naturally so no line is
 * left with a single word.
 */
export function SplitText({ text, as = "h2", className }: { text: string; as?: ElementType; className?: string }) {
  const reduce = useReducedMotion();
  const lines = text.split("\n");
  return createElement(
    as,
    { className },
    // The mask watches the viewport: the text starts clipped, so it can never be "in view" itself.
    // Bottom padding keeps descenders inside the mask.
    <m.span
      className="-mb-[0.12em] block overflow-hidden pb-[0.12em]"
      initial={reduce ? false : "hidden"}
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
    >
      <m.span
        className="block"
        variants={{
          hidden: { y: "105%" },
          show: { y: "0%", transition: { duration: 0.9, ease: [0.2, 0.7, 0.2, 1] } },
        }}
      >
        {lines.map((line, i) => (
          <Fragment key={i}>
            {i > 0 && <br className="hidden sm:inline" />}
            {i > 0 && " "}
            {line}
          </Fragment>
        ))}
      </m.span>
    </m.span>,
  );
}
