"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";

export const MotionP = m.p;
export const MotionDiv = m.div;
export const MotionMain = m.main;
export const MotionPath = m.path;
export const MotionSVG = m.svg;
export const MotionButton = m.button;

export function MotionOptimize({ children }: React.PropsWithChildren) {
  return <LazyMotion features={domAnimation}>{children}</LazyMotion>;
}
