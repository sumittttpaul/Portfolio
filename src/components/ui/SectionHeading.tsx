import { Reveal, SplitText } from "./Reveal";

/**
 * Eyebrow + split-reveal heading. Centred headings stay left-aligned on
 * phones, matching the reference's mobile layout.
 */
export default function SectionHeading({
  eyebrow,
  title,
  align = "left",
  size = "lg",
  as = "h2",
  className = "",
}: {
  eyebrow: string;
  title: string;
  align?: "left" | "center";
  size?: "xl" | "lg" | "md";
  as?: "h1" | "h2";
  className?: string;
}) {
  const sizes = { xl: "text-display-xl", lg: "text-display-lg", md: "text-display-md" };
  const alignCls = align === "center" ? "items-start text-left sm:items-center sm:text-center" : "";
  return (
    <div className={`flex flex-col gap-4 sm:gap-5 ${alignCls} ${className}`}>
      <Reveal y={10}>
        <p className="eyebrow">{eyebrow}</p>
      </Reveal>
      <SplitText as={as} text={title} className={`${sizes[size]} font-medium text-bone`} />
    </div>
  );
}
