import { GradientButton } from "components/ui/Button";
import { Reveal, SplitText } from "components/ui/Reveal";

const reasons = [
  "You want one senior engineer to own the frontend, from the first design to the code that ships.",
  "You are launching a brand, upgrading a site or starting an e-commerce venture and want it to feel polished.",
  "Your product needs careful frontend work: complex states, real data and smooth interaction.",
];

export default function Fit() {
  return (
    <section aria-label="Is this the right fit" className="pb-8 pt-16">
      <div className="container-site">
        <div className="mx-auto flex max-w-[980px] flex-col sm:items-center sm:text-center">
          <Reveal y={10}>
            <p className="text-[12px] uppercase leading-[15.6px] text-pale">Before you reach out</p>
          </Reveal>
          <SplitText
            as="h2"
            text={"Am I the right engineer\nfor your project?"}
            className="mt-6 text-[clamp(2.5rem,6.35vw,4rem)] font-medium leading-none tracking-[-0.01em] text-bone"
          />
        </div>

        <div className="mt-12 grid gap-4 lg:mt-[72px] lg:grid-cols-[859fr_613fr]">
          <Reveal className="flex flex-col rounded-[24px] bg-ink-950 p-6 sm:p-12 lg:min-h-[550px]">
            <span className="flex items-center gap-2 self-start rounded-full border border-white/[0.14] bg-white/[0.08] px-3 py-[7px] text-[12px] uppercase leading-[16.8px] tracking-[0.04em] text-pale">
              <span className="size-1.5 rounded-full bg-emerald-400" />
              Strong fit
            </span>
            <h3 className="mt-6 text-[clamp(1.625rem,2.4vw,2rem)] font-medium leading-[1.1] tracking-[-0.02em] text-white">
              I&apos;m a strong fit if:
            </h3>
            <ol className="mt-8">
              {reasons.map((r, i) => (
                <li key={r} className="flex border-b border-white/10 py-6 first:pt-0">
                  <span className="w-10 shrink-0 pt-1 text-[13px] leading-[18.85px] text-[#7C7E83] sm:w-[60px]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[17px] leading-[24.65px] text-pale">{r}</span>
                </li>
              ))}
            </ol>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between lg:mt-auto lg:pt-6">
              <span className="font-inter text-[15px] leading-[21px] text-[#9B9B9B]">Sounds like your project?</span>
              <GradientButton href="/contact" size="md" hoverText="Say hello" className="w-full sm:w-auto [&>span]:w-full">
                Start a project
              </GradientButton>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="flex flex-col rounded-[24px] bg-ink-750 p-6 sm:p-12 lg:min-h-[550px]">
            <span className="flex items-center gap-2 self-start rounded-full bg-[#303135] px-3 py-[7px] text-[12px] uppercase leading-[16.8px] tracking-[0.04em] text-pale">
              <span className="size-1.5 rounded-full bg-mute" />
              Not a fit
            </span>
            <h3 className="mt-6 text-[clamp(1.625rem,2.4vw,2rem)] font-medium leading-[1.1] tracking-[-0.02em] text-bone">
              I&apos;m probably not the right choice if:
            </h3>
            <p className="mt-6 font-inter text-[17px] leading-[24.65px] text-pale">
              You need a ready-made template site with no custom design or code, or work that sits outside the web.
            </p>
            <div className="mt-10 rounded-2xl bg-ink-850 p-6 lg:mt-auto">
              <p className="text-[15px] font-medium leading-[21.75px] text-bone">I can still help</p>
              <p className="mt-1.5 text-[15px] leading-[21.75px] text-pale">
                Tell me what you have in mind. If I&apos;m not the right person, I&apos;ll say so and point you in a useful direction.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
