import Image from "next/image";
import { GradientButton } from "components/ui/Button";
import { Reveal, SplitText } from "components/ui/Reveal";
import { site, socials } from "content/site";
import { SocialIcon } from "components/ui/SocialIcon";

const featured = socials.filter((s) => ["LinkedIn", "GitHub", "Instagram"].includes(s.label));

export default function Note() {
  return (
    <section aria-label="A note from Sumeet" className="mx-auto w-full max-w-site px-[18px] pb-12 sm:px-9 sm:pb-[110px] xl:px-4">
      <Reveal motion className="relative grid gap-8 overflow-hidden rounded-[20px] bg-ink-750 p-2 sm:p-4 lg:grid-cols-[minmax(0,40%)_1fr] lg:gap-12 lg:rounded-[32px] xl:grid-cols-[600px_1fr] xl:gap-16">
        {/* Glow drawn as plain gradients: blurred layers flicker out on mobile browsers */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(40% 45% at 100% 0%, rgba(139,123,255,0.2), transparent 70%), radial-gradient(30% 35% at 85% 10%, rgba(255,110,196,0.14), transparent 70%), radial-gradient(30% 35% at 100% 40%, rgba(122,216,255,0.1), transparent 70%), radial-gradient(25% 30% at 70% 0%, rgba(255,179,92,0.1), transparent 70%)",
          }}
        />
        <Reveal className="relative aspect-[4/5] overflow-hidden rounded-[16px] bg-ink-700 sm:aspect-[4/3] sm:rounded-[24px] lg:aspect-[600/703]">
          <Image src={site.photo} alt={`Portrait of ${site.name}`} fill sizes="(min-width: 1280px) 600px, (min-width: 1024px) 40vw, 100vw" className="object-cover object-[50%_30%]" />
          <div className="absolute inset-x-2 bottom-2 flex items-center justify-between rounded-2xl bg-[rgba(15,16,17,0.55)] px-4 py-3.5 backdrop-blur-[14px] sm:inset-x-4 sm:bottom-4">
            <div>
              <p className="text-[15px] font-medium leading-[21px] text-white">{site.name}</p>
              <p className="mt-0.5 text-[13px] leading-[18.2px] text-[#CFCFCF]">{site.role}</p>
            </div>
            <ul className="flex gap-2">
              {featured.map((s) => (
                <li key={s.href}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex size-9 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white hover:text-black"
                  >
                    <SocialIcon name={s.label} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <div className="relative flex flex-col px-3 pb-8 sm:px-6 lg:px-0 lg:pb-0 lg:pr-10 lg:pt-14 xl:pr-[72px]">
          <Reveal y={10}>
            <p className="text-[12px] uppercase leading-[15.6px] text-pale">A note from me</p>
          </Reveal>
          <SplitText as="h2" text={"Quality first,\non every project"} className="mt-6 text-display-note font-medium text-bone" />
          <Reveal delay={0.1}>
            <blockquote className="mt-5 max-w-[640px] text-[clamp(1.0625rem,1.4vw,1.25rem)] font-medium leading-[1.5] text-bone">
              &ldquo;I treat every project as if my name is on it, because it is. If something isn&apos;t right yet, it doesn&apos;t ship.&rdquo;
            </blockquote>
          </Reveal>
          <Reveal delay={0.15} className="mt-9">
            <GradientButton href="/contact" size="md" hoverText="Say hello" className="w-full sm:w-auto [&>span]:w-full">
              Start a project
            </GradientButton>
          </Reveal>
          <Reveal delay={0.2} className="mt-10 grid gap-5 sm:grid-cols-2 sm:gap-6 lg:mt-auto lg:pb-14">
            <div>
              <p className="text-[16px] font-medium leading-[22.4px] text-bone">Design + development</p>
              <p className="mt-1.5 text-[15px] leading-[21px] text-mute">Interfaces designed with the build in mind</p>
            </div>
            <div>
              <p className="text-[16px] font-medium leading-[22.4px] text-bone">Writing in public</p>
              <p className="mt-1.5 text-[15px] leading-[21px] text-mute">Frontend edge cases on Frontend Lab</p>
            </div>
          </Reveal>
        </div>
      </Reveal>
    </section>
  );
}
