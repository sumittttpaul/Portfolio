import type { Metadata } from "next";
import WorksBrowser from "components/work/WorksBrowser";
import WorkGlance from "components/work/WorkGlance";
import { Reveal, SplitText } from "components/ui/Reveal";
import WorkContact from "components/work/WorkContact";
import { projects } from "content/projects";

export const metadata: Metadata = {
  title: "Works",
  description:
    "Selected projects by Sumeet Kumar Paul: a personal portfolio, the Emotion e-commerce store, the Agewear Lifestyle clothing brand and a complete sign-in experience.",
  alternates: { canonical: "/work" },
  openGraph: { url: "/work", title: "Works • Sumeet Kumar Paul", images: ["/media/emotion-cover.webp"] },
};

export default function WorkPage() {
  return (
    <>
      <section className="container-site flex flex-col items-center pb-16 pt-[150px] text-center sm:pb-24 sm:pt-[170px]">
        <Reveal y={10}>
          <p className="eyebrow">My work</p>
        </Reveal>
        <SplitText as="h1" text="Selected works" className="mt-5 text-display-xl font-medium text-bone" />
        <Reveal delay={0.3}>
          <p className="body-copy mt-6 max-w-[720px]">
            Every project starts with understanding the people who will use it and the goal behind it. From there I
            design the flows and screens and build them myself, turning complex requirements into interfaces that feel
            simple and natural to use.
          </p>
        </Reveal>
      </section>
      <section aria-label="Projects" className="pb-24">
        <WorksBrowser projects={projects} />
      </section>
      <WorkGlance />
      <WorkContact />
    </>
  );
}
