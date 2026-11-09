import Image from "next/image";
import SectionHeading from "components/ui/SectionHeading";

const items = [
  {
    title: "Frontend Engineering",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "Responsive"],
    text: "Interfaces built to last. I write clean React and TypeScript, with component systems your team can extend and state that stays predictable once real data arrives.",
    image: "/media/art/code.webp",
  },
  {
    title: "Web App Development",
    tags: ["Node.js", "GraphQL", "MongoDB", "Firebase", "StepZen"],
    text: "From the first login to the busiest dashboard, I build the whole experience and connect it to the APIs and data behind it, so the product works as well as it looks.",
    image: "/media/art/graph.webp",
  },
  {
    title: "E-commerce & Payments",
    tags: ["Stripe", "Sanity", "Clerk", "Catalogues", "Checkout"],
    text: "Storefronts people enjoy browsing, with a checkout that stays out of the way. Payments, product content and customer accounts all working together.",
    image: "/media/art/pay.webp",
  },
  {
    title: "Motion & Interaction",
    tags: ["Framer Motion", "GSAP", "Smooth scroll", "Transitions"],
    text: "The part people remember. Scroll-driven reveals, page transitions and micro-interactions that feel natural, stay smooth and respect reduced-motion settings.",
    image: "/media/art/motion.webp",
  },
  {
    title: "UI/UX Design",
    tags: ["User flows", "Wireframes", "Visual design", "Design to code"],
    text: "I plan the flows and draw the screens, then build them myself, so nothing gets lost between the idea and the launch.",
    image: "/media/art/wire.webp",
  },
];

export default function Capabilities() {
  return (
    <section aria-label="Capabilities" className="mx-2 rounded-[16px] bg-black py-16 sm:mx-4 sm:rounded-[20px] sm:py-[100px]">
      <div className="mx-auto w-full max-w-[1552px] px-[14px] sm:px-9 xl:px-4">
        <div aria-hidden="true" className="mb-14 flex justify-between text-bone/80">
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} className="text-[18px] font-light leading-none">
              +
            </span>
          ))}
        </div>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading eyebrow="Capabilities" title={"What I build, from\ninterface to integration"} />
          <p className="font-inter text-[17px] leading-[24.65px] text-[#9B9B9B] lg:w-[460px]">
            Everything a modern website needs, from how it looks to how it runs.
          </p>
        </div>

        <ol className="mt-14">
          {items.map((item, i) => (
            <li
              key={item.title}
              className="border-t border-dotted border-[#4D4D4D] bg-black pb-12 pt-8 lg:sticky lg:top-[100px]"
              style={{ zIndex: i + 1 }}
            >
              <div className="grid gap-6 md:grid-cols-2 md:gap-8 xl:grid-cols-[minmax(0,1.15fr)_420px_minmax(0,1fr)] xl:gap-12">
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
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-ink-800 md:order-3 md:col-span-2 xl:order-none xl:col-span-1">
                  <Image src={item.image} alt="" fill sizes="(min-width: 1280px) 420px, 100vw" className="origin-right scale-[1.3] object-cover" />
                </div>
                <p className="font-inter text-[16px] leading-[24px] text-mute">{item.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
