"use client";

export const MAX_HEIGHT = "calc(100% - env(safe-area-inset-top) - 34px)";

export const IS_SSR = typeof window === "undefined";

export const DEFAULT_TWEEN_CONFIG = {
  // ease: "[0.76, 0, 0.24, 1]",
  duration: 0.8,
};

export const REDUCED_MOTION_TWEEN_CONFIG = {
  ease: "linear",
  duration: 0.01,
};

export const DRAG_CLOSE_THRESHOLD = 0.6;

export const DRAG_VELOCITY_THRESHOLD = 500;
