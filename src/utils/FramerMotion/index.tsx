"use client";

import { LazyMotion, m } from "framer-motion";

export const MotionP = m.p;
export const MotionDiv = m.div;
export const MotionMain = m.main;
export const MotionSection = m.section;
export const MotionPath = m.path;
export const MotionSVG = m.svg;
export const MotionButton = m.button;
export const MotionSpan = m.span;

export function MotionOptimize({ children }: React.PropsWithChildren) {
  return (
    <LazyMotion
      strict
      features={async () => (await import("./Features")).default}
    >
      {children}
    </LazyMotion>
  );
}
