import Link from "next/link";
import { Reveal, SplitText } from "components/ui/Reveal";
import { site } from "content/site";

export default function Intro() {
  return (
    <section id="about" className="container-site pb-20 pt-14 sm:pb-24 sm:pt-[120px]">
      <div className="flex max-w-[974px] flex-col">
        <Reveal y={10}>
          <p className="eyebrow">Hello, I&apos;m Sumeet</p>
        </Reveal>
        <SplitText
          as="h2"
          className="mt-5 text-display-xl font-medium text-bone"
          text="Senior frontend engineer building modern web apps and complex products"
        />
        <div className="body-copy mt-10 flex flex-col gap-5">
          <Reveal delay={0.05}>
            <p>
              I&apos;m {site.name}, a senior frontend engineer from {site.location}. I help companies from all over the
              world with tailor-made solutions, and with each project I push my work to new horizons, always putting
              quality first.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p>
              Working across both design and development lets me conceive, plan and execute complete websites and
              applications, blending creativity with technical depth. I also write about real-world frontend edge
              cases on{" "}
              <Link href="/blog" className="text-bone underline decoration-white/30 underline-offset-4 hover:decoration-bone">
                Frontend Lab
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
