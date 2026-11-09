import Link from "next/link";
import CenterHead from "components/ui/CenterHead";
import { Reveal } from "components/ui/Reveal";
import { BrandScene, FlowScene, PersonalityScene, StoreScene } from "./OfferScenes";

const offers = [
  {
    Scene: PersonalityScene,
    audience: "For people and brands that want to stand out",
    title: "A site with its own personality",
    tags: ["Visual design", "Motion", "Next.js"],
    text: "Bold type, smooth transitions and the kind of details visitors notice, all designed around your brand.",
  },
  {
    Scene: StoreScene,
    audience: "For shops that want more than a template",
    title: "A store that looks as good as it sells",
    tags: ["E-commerce", "Stripe", "Responsive"],
    text: "Product pages, collections and checkout designed together, so your store feels as good as what you sell.",
  },
  {
    Scene: BrandScene,
    audience: "For brands launching or refreshing",
    title: "A brand that looks right everywhere",
    tags: ["Brand websites", "UI/UX design", "Tailwind CSS"],
    text: "One confident visual language from the first screen to the last, so every page clearly belongs to you.",
  },
  {
    Scene: FlowScene,
    audience: "For products with real complexity",
    title: "Complex flows, clearly laid out",
    tags: ["Web apps", "React", "TypeScript"],
    text: "Multi-step journeys and data-heavy screens, planned so people always know where they are and what comes next.",
  },
];

export default function WhatYouGet() {
  return (
    <section aria-label="What you get" className="py-16">
      <div className="container-site">
        <CenterHead
          eyebrow="What you get"
          title={"A website that makes\npeople stop scrolling"}
          text="Tell me what you're building, and I'll design and code something that looks great, feels fast and works on every screen."
        />
        <ul className="mt-12 flex flex-col gap-4 lg:mt-[60px]">
          {offers.map((o) => (
            <Reveal as="li" key={o.title} y={40}>
              <div className="relative flex flex-col overflow-hidden rounded-[20px] bg-black lg:min-h-[640px] lg:flex-row lg:items-center lg:rounded-[24px]">
                <div className="relative aspect-[4/3] w-full lg:absolute lg:inset-0 lg:aspect-auto">
                  <o.Scene />
                </div>
                <div className="relative flex flex-col p-6 sm:p-10 lg:w-[640px] lg:max-w-[50%] lg:p-14">
                  <p className="text-[14px] italic leading-[19.6px] text-[#A6A6A6]">{o.audience}</p>
                  <h3 className="mt-4 text-[clamp(1.75rem,3vw,2.5rem)] font-medium leading-[1.05] tracking-[-0.02em] text-white">{o.title}</h3>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {o.tags.map((t) => (
                      <li key={t} className="rounded-full border border-white/[0.18] bg-white/[0.04] px-3 py-2 text-[13px] leading-[13px] text-[#E6E6E6]">
                        {t}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 font-inter text-[16px] leading-[23.2px] text-[#BDBDBD]">{o.text}</p>
                  <Link href="/contact" className="mt-6 self-start rounded-full bg-ink-900 px-5 py-3 text-[13px] font-medium text-white transition-colors hover:bg-ink-700">
                    Let&apos;s build yours
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
