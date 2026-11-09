import { Reveal, SplitText } from "./Reveal";

/** Centred section intro: eyebrow, 64px heading and a short supporting line. */
export default function CenterHead({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <div className="mx-auto flex max-w-[980px] flex-col sm:items-center sm:text-center">
      <Reveal y={10}>
        <p className="text-[12px] uppercase leading-[15.6px] text-pale">{eyebrow}</p>
      </Reveal>
      <SplitText
        as="h2"
        text={title}
        className="mt-6 text-[clamp(2.5rem,6.35vw,4rem)] font-medium leading-none tracking-[-0.01em] text-bone"
      />
      <Reveal delay={0.1}>
        <p className="mt-6 max-w-[720px] font-inter text-[18px] leading-[26.1px] text-mute">{text}</p>
      </Reveal>
    </div>
  );
}
