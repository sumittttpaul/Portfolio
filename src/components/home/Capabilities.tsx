import Image from "next/image";
import SectionHeading from "components/ui/SectionHeading";
import { Reveal } from "components/ui/Reveal";

const items = [
  {
    title: "Frontend Engineering",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "Responsive"],
    text: "Production interfaces in React and Next.js with TypeScript: component systems, predictable state and responsive layouts that hold up under real data.",
    image: "/images/work/04.png",
  },
  {
    title: "Web App Development",
    tags: ["Node.js", "GraphQL", "MongoDB", "Firebase", "StepZen"],
    text: "Web applications end to end: APIs with Node.js and GraphQL, data in MongoDB or Firebase, wired cleanly into the interface.",
    image: "/images/work/emotion/03.png",
  },
  {
    title: "E-commerce & Payments",
    tags: ["Stripe", "Sanity", "Clerk", "Catalogues", "Checkout"],
    text: "Storefronts and product catalogues with payments through Stripe, content managed in Sanity and authentication handled by Clerk.",
    image: "/images/work/emotion/02.png",
  },
  {
    title: "Motion & Interaction",
    tags: ["Framer Motion", "GSAP", "Smooth scroll", "Transitions"],
    text: "Interfaces that feel alive: scroll-driven reveals, page transitions and micro-interactions, tuned for performance and for reduced-motion users.",
    image: "/images/work/portfolio/01.png",
  },
  {
    title: "UI/UX Design",
    tags: ["User flows", "Wireframes", "Visual design", "Design to code"],
    text: "Design and code in one pair of hands: I plan the flows and screens, then build them myself, so nothing is lost in a handoff.",
    image: "/images/work/authentication/03.png",
  },
];

export default function Capabilities() {
  return (
    <section aria-label="Capabilities" className="mx-2 rounded-[16px] bg-black py-16 sm:mx-4 sm:rounded-[20px] sm:py-[100px]">
      <div className="mx-auto w-full max-w-[1052px] px-[14px] sm:px-9">
        <div aria-hidden="true" className="mb-14 flex justify-between text-bone/80">
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} className="text-[18px] font-light leading-none">
              +
            </span>
          ))}
        </div>
        <SectionHeading eyebrow="Capabilities" title={"What I build, from\ninterface to integration"} />

        <ol className="mt-14">
          {items.map((item, i) => (
            <li
              key={item.title}
              className="border-t border-dotted border-[#4D4D4D] bg-black pb-12 pt-8 md:sticky md:top-[110px]"
              style={{ zIndex: i + 1 }}
            >
              <Reveal className="grid gap-6 md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="flex items-center gap-3.5 text-heading-28 font-semibold !leading-[1.05] text-bone">
                    <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-[#FF4922] text-[12px] font-semibold leading-none text-ink-950">
                      {i + 1}
                    </span>
                    {item.title}
                  </h3>
                  <ul className="mt-8 flex flex-wrap gap-2">
                    {item.tags.map((t) => (
                      <li key={t} className="rounded-full bg-[#292929] px-3 py-1.5 text-[15px] leading-[21px] text-soft">
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-ink-800 md:aspect-[237/133] md:w-[237px]">
                    <Image src={item.image} alt="" fill sizes="(min-width: 768px) 237px, 100vw" className="object-cover" />
                  </div>
                  <p className="mt-6 font-inter text-[15px] font-normal leading-[21px] text-dim">{item.text}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
