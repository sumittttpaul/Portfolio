import { Reveal } from "components/ui/Reveal";

const ways = [
  {
    title: "Design and build",
    text: "You have an idea or an outdated site. I take it from first sketches to a finished, launched website.",
  },
  {
    title: "Frontend for your design",
    text: "You already have designs. I turn them into fast, responsive, production-ready code that stays true to every detail.",
  },
  {
    title: "Improve what you have",
    text: "Your site works but feels slow or dated. I find what is holding it back and rebuild those parts properly.",
  },
];

export default function WaysToWork() {
  return (
    <section aria-label="Ways we can work together" className="container-site pt-16 sm:pt-24">
      <Reveal as="p" className="text-[12px] uppercase leading-[15.6px] text-pale">
        Ways we can work together
      </Reveal>
      <ul className="mt-6 grid gap-3 md:grid-cols-3">
        {ways.map((w, i) => (
          <Reveal as="li" key={w.title} delay={i * 0.06} className="flex min-h-[240px] flex-col rounded-[18px] border border-white/[0.07] bg-[#141517] px-6 py-7">
            <span className="text-[13px] leading-[13px] text-[#8A8A8A]">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="mt-auto pt-12 text-[24px] font-medium leading-[26.4px] tracking-[-0.48px] text-white">{w.title}</h3>
            <p className="mt-3 font-inter text-[15px] leading-[21.75px] text-[#A8A8A8]">{w.text}</p>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
