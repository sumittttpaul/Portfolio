/**
 * Fixed strip at the bottom of the viewport that blurs content progressively
 * as it scrolls out of view. Seven stacked backdrop-filter layers, each masked
 * to a band, halve their blur radius from the bottom edge upward.
 */
const layers = [
  { blur: 12, mask: "linear-gradient(to top, #000 0%, #000 10%, transparent 30%)" },
  { blur: 6, mask: "linear-gradient(to top, transparent 0%, #000 10%, #000 20%, transparent 40%)" },
  { blur: 3, mask: "linear-gradient(to top, transparent 0%, #000 20%, #000 30%, transparent 50%)" },
  { blur: 1.5, mask: "linear-gradient(to top, transparent 10%, #000 30%, #000 40%, transparent 60%)" },
  { blur: 0.75, mask: "linear-gradient(to top, transparent 20%, #000 40%, #000 50%, transparent 70%)" },
  { blur: 0.375, mask: "linear-gradient(to top, transparent 30%, #000 50%, #000 60%, transparent 80%)" },
  { blur: 0.1875, mask: "linear-gradient(to top, transparent 40%, #000 60%, #000 70%, transparent 90%)" },
];

export default function ProgressiveBlur() {
  return (
    <div aria-hidden="true" className="progressive-blur pointer-events-none fixed inset-x-0 bottom-0 z-30 h-24">
      {layers.map((l) => (
        <div
          key={l.blur}
          className="absolute inset-0"
          style={{
            backdropFilter: `blur(${l.blur}px)`,
            WebkitBackdropFilter: `blur(${l.blur}px)`,
            maskImage: l.mask,
            WebkitMaskImage: l.mask,
          }}
        />
      ))}
    </div>
  );
}
