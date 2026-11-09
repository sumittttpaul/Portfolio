import Image from "next/image";
import { Reveal, SplitText } from "components/ui/Reveal";
import { tools } from "content/site";

// Deterministic star field (no randomness, so server and client markup match)
const stars = Array.from({ length: 70 }, (_, i) => {
  const x = (i * 37.7) % 100;
  const y = (i * 61.3 + (i % 7) * 11) % 100;
  const size = i % 9 === 0 ? 2 : 1;
  return { x, y, size, delay: (i % 10) * 0.4 };
});

const inner = tools.slice(0, 5);
const outer = tools.slice(5, 12);

function Orbit({ items, radius, reverse }: { items: readonly (typeof tools)[number][]; radius: number; reverse?: boolean }) {
  return (
    <div
      className={`absolute left-1/2 top-1/2 rounded-full border border-white/10 ${reverse ? "animate-orbit-reverse-slow" : "animate-orbit-slow"}`}
      style={{ width: radius * 2, height: radius * 2, marginLeft: -radius, marginTop: -radius }}
    >
      {items.map((t, i) => {
        const a = (i / items.length) * Math.PI * 2;
        return (
          <span
            key={t.name}
            className="absolute flex size-11 items-center justify-center rounded-full border border-white/10 bg-ink-850 shadow-lg"
            style={{ left: radius + Math.cos(a) * radius - 22, top: radius + Math.sin(a) * radius - 22 }}
          >
            <span className={reverse ? "animate-orbit-slow" : "animate-orbit-reverse-slow"}>
              <Image src={t.logo} alt={t.name} width={22} height={22} className="size-[22px] object-contain invert" />
            </span>
          </span>
        );
      })}
    </div>
  );
}

export default function About() {
  return (
    <section aria-labelledby="about-heading" className="mx-auto w-full max-w-site px-2 py-20 sm:px-9 sm:py-[110px] xl:px-4">
      <div className="grid gap-1 lg:grid-cols-2 lg:gap-0">
        <div className="flex flex-col rounded-[16px] bg-ink-750 p-[18px] pb-8 sm:rounded-[18px] sm:p-12 lg:aspect-square lg:rounded-r-none lg:p-16">
          <Reveal y={10}>
            <p className="eyebrow">About me</p>
          </Reveal>
          <SplitText
            as="h2"
            text={"Designing impact,\ndriving change"}
            className="mt-5 text-display-md font-medium text-bone"
          />
          <Reveal delay={0.1}>
            <p className="body-copy mt-6 max-w-[528px]">
              I earned my college degree from Kalinga University and learned web development on my own, through
              open-source repositories, tutorials, Stack Overflow discussions and articles by experienced developers.
              I still learn the same way: by building, breaking and writing about it.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:mt-12 sm:grid-cols-2 lg:mt-auto lg:pt-24">
            <Reveal delay={0.1} className="flex gap-2.5">
              <svg className="mt-0.5 shrink-0 text-bone" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <circle cx="12" cy="12" r="9" />
                <path d="M3 12h18M12 3c2.5 2.7 3.8 5.7 3.8 9S14.5 18.3 12 21c-2.5-2.7-3.8-5.7-3.8-9S9.5 5.7 12 3z" />
              </svg>
              <div>
                <p className="text-[16px] font-semibold leading-[22.4px] text-bone">Based in India</p>
                <p className="text-[15px] leading-[21px] text-mute">Working with teams worldwide</p>
              </div>
            </Reveal>
            <Reveal delay={0.15} className="flex gap-2.5">
              <svg className="mt-0.5 shrink-0 text-bone" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeDasharray="2.5 3">
                <circle cx="12" cy="12" r="9" />
              </svg>
              <div>
                <p className="text-[16px] font-semibold leading-[22.4px] text-bone">Self-taught engineer</p>
                <p className="text-[15px] leading-[21px] text-mute">Always exploring</p>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="relative min-h-[420px] overflow-hidden rounded-[16px] bg-ink-950 sm:min-h-[600px] sm:rounded-[18px] lg:aspect-square lg:min-h-0 lg:rounded-l-none">
          {stars.map((s, i) => (
            <span
              key={i}
              aria-hidden="true"
              className="absolute animate-twinkle rounded-full bg-white"
              style={{ left: `${s.x}%`, top: `${s.y}%`, width: s.size, height: s.size, animationDelay: `${s.delay}s` }}
            />
          ))}
          <div aria-hidden="true" className="absolute inset-0 scale-[0.62] sm:scale-90 xl:scale-100">
            <Orbit items={inner} radius={150} />
            <Orbit items={outer} radius={265} reverse />
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <p className="text-[clamp(1.375rem,2.2vw,1.75rem)] font-medium leading-[1.1] tracking-[-0.02em] text-white">
              Design meets
              <br />
              engineering
            </p>
            <p className="mt-2 text-[11px] font-medium uppercase tracking-[0.02em] text-mute">Always exploring</p>
          </div>
        </div>
      </div>
    </section>
  );
}
