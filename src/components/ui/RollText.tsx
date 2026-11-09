type Props = {
  text: string;
  /** Label revealed on hover; defaults to the same text. */
  hoverText?: string;
  className?: string;
  stagger?: number;
};

/**
 * Splits a label into letters that roll upward on hover, revealing a
 * second copy from below. Hover is driven by the nearest `.group`.
 */
export default function RollText({ text, hoverText, className, stagger = 0.012 }: Props) {
  const render = (value: string) =>
    Array.from(value).map((ch, i) => (
      <i key={i} style={{ transitionDelay: `${i * stagger}s` }}>
        {ch}
      </i>
    ));
  return (
    <span className={`roll ${className ?? ""}`}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true" className="roll-a">
        {render(text)}
      </span>
      <span aria-hidden="true" className="roll-b">
        {render(hoverText ?? text)}
      </span>
    </span>
  );
}
