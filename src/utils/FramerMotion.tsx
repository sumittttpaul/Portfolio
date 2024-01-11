"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";

export const MotionDiv = m.div;
export const MotionP = m.p;
export const MotionPath = m.path;

export function MotionOptimize({ children }: { children: React.ReactNode }) {
  return <LazyMotion features={domAnimation}>{children}</LazyMotion>;
}
