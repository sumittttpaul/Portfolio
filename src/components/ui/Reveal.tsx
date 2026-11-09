"use client";

import { m, useReducedMotion } from "framer-motion";
import { createElement, type CSSProperties, type ElementType, type ReactNode } from "react";

/**
 * Layout wrapper for section content. Static by default: the reference only
 * fades up a few specific blocks, so pass `motion` for those (0.8s fade-up).
 */
export function Reveal({
  children,
  className,
  delay = 0,
  as = "div",
  style,
  motion = false,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: "div" | "section" | "li" | "article" | "span" | "p";
  style?: CSSProperties;
  motion?: boolean;
}) {
  const reduce = useReducedMotion();
  if (!motion) return createElement(as, { className, style }, children);
  const Comp = m[as] as typeof m.div;
  return (
    <Comp
      className={className}
      style={style}
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.8, delay, ease: [0.2, 0.7, 0.2, 1] }}
    >
      {children}
    </Comp>
  );
}

/** Heading text with forced line breaks on "\n". */
export function SplitText({ text, as = "h2", className }: { text: string; as?: ElementType; className?: string }) {
  return createElement(
    as,
    { className },
    text.split("\n").map((line) => (
      <span key={line} className="block">
        {line}
      </span>
    )),
  );
}
