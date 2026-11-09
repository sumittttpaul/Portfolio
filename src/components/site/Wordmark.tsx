"use client";

import { m, useMotionValue, useTransform, type MotionValue } from "framer-motion";

const FULL = "SUMEET KUMAR PAUL";
const SHORT = "SUMEET KR. PAUL";

// Big Shoulders Display Black: cap height measured in the browser (canvas
// actualBoundingBoxAscent of "H") is 0.8125em
const CAP = 0.8125;
// How far each letter rises (as a share of the mark height) as the hero scrolls,
// so the word breaks into a staggered skyline like the reference.
const LIFT = [0.18, 0.62, 0.34, 0.85, 0.27, 0.7, 0, 0.45, 0.92, 0.3, 0.76, 0.52, 0, 0.66, 0.24, 0.88, 0.4];

function Letter({
  char,
  x,
  width,
  height,
  fontSize,
  lift,
  progress,
}: {
  char: string;
  x: number;
  width: number;
  height: number;
  fontSize: number;
  lift: number;
  progress?: MotionValue<number>;
}) {
  const zero = useMotionValue(0);
  const y = useTransform(progress ?? zero, (p: number) => -p * lift * height);
  return (
    <m.g style={progress ? { y } : undefined}>
      <text
        x={x}
        y={height}
        textLength={width}
        lengthAdjust="spacingAndGlyphs"
        fill="currentColor"
        style={{ fontFamily: "var(--font-wordmark)", fontWeight: 900, fontSize }}
      >
        {char}
      </text>
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
  const fontSize = height / CAP;
  const gap = 10;
  // spaces and dots take a narrower slot than letters
  const weight = (c: string) => (c === " " ? 0.45 : c === "." ? 0.4 : 1);
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
            fontSize={fontSize}
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
      <Mark text={FULL} className={`hidden sm:block ${className}`} ratio={0.205} progress={progress} />
    </>
  );
}
