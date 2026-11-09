"use client";

import { m, useReducedMotion } from "framer-motion";

/** Page enter transition: content fades and lifts in on every route change. */
export default function Template({ children }: React.PropsWithChildren) {
  const reduce = useReducedMotion();
  return (
    <m.div
      initial={reduce ? false : { opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </m.div>
  );
}
