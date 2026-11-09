import CenterHead from "components/ui/CenterHead";
import { Reveal } from "components/ui/Reveal";

const cards = [
  { title: "Purpose before pixels", text: "Every page and component starts with what it needs to do. Layout and styling come after that is clear." },
  { title: "Real-world edge cases", text: "Race conditions, stale state and double submits are what I write about on Frontend Lab, and what I guard against in production code." },
  { title: "Motion with a reason", text: "Animation guides attention or explains a change. It stays smooth, and it switches off for people who prefer reduced motion." },
  { title: "Typed, reusable components", text: "TypeScript and small, composable components keep a codebase easy to extend as the product grows." },
  { title: "Responsive from the start", text: "Layouts are planned for phones, tablets and desktops together, not squeezed down at the end." },
  { title: "Collaboration throughout", text: "You see the work as it develops, so your feedback shapes the product while it is still easy to change." },
];

export default function Approach() {
  return (
    <section aria-label="My approach" className="py-16">
      <div className="container-site">
        <CenterHead
          eyebrow="My approach"
          title={"Engineering decisions\nusers can feel"}
          text="Every decision is judged by one thing: does it make the product clearer, faster or more reliable for the person using it?"
        />
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-[60px] lg:grid-cols-3">
          {cards.map((c, i) => (
            <Reveal as="li" key={c.title} delay={(i % 3) * 0.05}>
              <div className="h-full min-h-[220px] rounded-[18px] bg-ink-750 px-6 py-8 sm:min-h-[298px] sm:px-8 sm:py-10">
                <span className="text-[16px] leading-[22.4px] text-mute">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-10 sm:mt-14 text-[28px] font-medium leading-[30.8px] tracking-[-0.02em] text-bone">{c.title}</h3>
                <p className="mt-4 font-inter text-[16px] leading-[23.2px] text-mute">{c.text}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
