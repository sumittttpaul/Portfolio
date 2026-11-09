"use client";

import { m, useMotionValue, useTransform, type MotionValue } from "framer-motion";

const FULL = "SUMEET KUMAR PAUL";
const SHORT = "SUMEET KR. PAUL";

// Original block lettering. Each glyph is a set of rectangles [x, y, w, h] as
// fractions of its slot, so stems and bars stay crisp at any size.
type Box = readonly [number, number, number, number];
const S = 0.33; // vertical stem, share of letter width
const B = 0.095; // horizontal bar, share of letter height
const R = 1 - S;
const left: Box = [0, 0, S, 1];
const right: Box = [R, 0, S, 1];
const top: Box = [0, 0, 1, B];
const bottom: Box = [0, 1 - B, 1, B];
const GLYPHS: Record<string, readonly Box[]> = {
  A: [left, right, top, [0, 0.6, 1, B]],
  E: [left, top, bottom, [0, 0.455, 1, B]],
  K: [left, [R, 0, S, 0.44], [S, 0.44, 0.47, 0.12], [R, 0.56, S, 0.44]],
  L: [left, bottom],
  M: [[0, 0, 0.24, 1], [0.38, 0, 0.24, 1], [0.76, 0, 0.24, 1], top],
  O: [left, right, top, bottom],
  P: [left, top, [R, 0, S, 0.56], [0, 0.465, 1, B]],
  R: [left, top, [R, 0, S, 0.47], [0, 0.47, 0.82, B], [R, 0.565, S, 0.435]],
  S: [top, bottom, [0, 0, S, 0.555], [0, 0.46, 1, B], [R, 0.46, S, 0.54], [R, 0, S, 0.3], [0, 0.7, S, 0.3]],
  T: [top, [S, 0, 1 - 2 * S, 1]],
  U: [left, right, bottom],
  "0": [left, right, top, bottom],
  "4": [[0, 0, S, 0.6], right, [0, 0.505, 1, B]],
  ".": [[0, 0.87, 1, 0.13]],
};

const r2 = (n: number) => Math.round(n * 100) / 100;
function glyphPath(char: string, x: number, width: number, height: number) {
  return (GLYPHS[char] ?? [])
    .map(([bx, by, bw, bh]) => `M${r2(x + bx * width)} ${r2(by * height)}h${r2(bw * width)}v${r2(bh * height)}h${r2(-bw * width)}z`)
    .join("");
}

// How far each letter rises (as a share of the mark height) as the hero scrolls,
// so the word breaks into a staggered skyline like the reference.
const LIFT = [0.18, 0.62, 0.34, 0.85, 0.27, 0.7, 0, 0.45, 0.92, 0.3, 0.76, 0.52, 0, 0.66, 0.24, 0.88, 0.4];

function Letter({
  char,
  x,
  width,
  height,
  lift,
  progress,
}: {
  char: string;
  x: number;
  width: number;
  height: number;
  lift: number;
  progress?: MotionValue<number>;
}) {
  const zero = useMotionValue(0);
  const y = useTransform(progress ?? zero, (p: number) => -p * lift * height);
  return (
    <m.g style={progress ? { y } : undefined}>
      <path d={glyphPath(char, x, width, height)} fill="currentColor" />
    </m.g>
  );
}

/**
 * The name set as a row of equal-width letter blocks that spans its container
 * exactly. With `progress` (0..1) each letter rises by its own amount.
 */
function Mark({
  text,
  className = "",
  ratio,
  progress,
}: {
  text: string;
  className?: string;
  ratio: number;
  progress?: MotionValue<number>;
}) {
  const height = Math.round(1000 * ratio);
  const gap = 10;
  // spaces and dots take a narrower slot than letters
  const weight = (c: string) => (c === " " ? 0.45 : c === "." ? 0.4 : c === "M" ? 1.35 : 1);
  const units = Array.from(text).reduce((s, c) => s + weight(c), 0);
  const slot = (1000 + gap) / units;
  let cursor = 0;
  const letters = Array.from(text).map((c, i) => {
    const w = slot * weight(c);
    const item = { c, x: cursor, w: w - gap, i };
    cursor += w;
    return item;
  });
  return (
    <svg
      viewBox={`0 0 1000 ${height}`}
      preserveAspectRatio="none"
      role="img"
      aria-label={text === FULL || text === SHORT ? "Sumeet Kumar Paul" : text}
      className={`block w-full overflow-visible ${className}`}
    >
      {letters.map((l) =>
        l.c === " " ? null : (
          <Letter
            key={l.i}
            char={l.c}
            x={l.x}
            width={l.w}
            height={height}
            lift={LIFT[l.i % LIFT.length]}
            progress={progress}
          />
        ),
      )}
    </svg>
  );
}

/**
 * Full name on tablet and desktop, "SUMEET KR. PAUL" on phones where the full
 * name would get too small. Pass `text` for a custom mark.
 */
export default function Wordmark({
  className = "",
  text,
  progress,
}: {
  className?: string;
  text?: string;
  progress?: MotionValue<number>;
}) {
  if (text) return <Mark text={text} className={className} ratio={0.42} />;
  return (
    <>
      <Mark text={SHORT} className={`sm:hidden ${className}`} ratio={0.2} progress={progress} />
      <Mark text={FULL} className={`hidden sm:block ${className}`} ratio={0.19} progress={progress} />
    </>
  );
}
