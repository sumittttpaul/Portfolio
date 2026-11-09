import Image from "next/image";
import SectionHeading from "components/ui/SectionHeading";
import { Reveal } from "components/ui/Reveal";
import { tools } from "content/site";

const fade = "linear-gradient(90deg, transparent 0%, #000 12%, #000 88%, transparent 100%)";

export default function Toolbox() {
  const row = [...tools, ...tools];
  return (
    <section aria-label="Toolbox" className="pb-20 pt-6 sm:pb-24 sm:pt-0">
      <div className="container-site">
        <SectionHeading eyebrow="Toolbox" title="The tools I build with every day" size="md" />

        {/* Contained to the content width (aligned with the heading), edges fading out */}
        <Reveal className="mt-10 sm:mt-14">
          <div className="group relative overflow-hidden min-[1600px]:-mx-6" style={{ maskImage: fade, WebkitMaskImage: fade }}>
            <ul className="flex w-max animate-marquee gap-3 group-hover:[animation-play-state:paused] sm:gap-4">
              {row.map((t, i) => (
                <li
                  key={`${t.name}-${i}`}
                  aria-hidden={i >= tools.length}
                  className="flex w-[180px] shrink-0 flex-col items-center text-center sm:w-[240px] xl:w-[256px]"
                >
                  <div className="relative flex aspect-square w-full flex-col items-center rounded-2xl bg-ink-800 pt-6 transition-colors duration-500 hover:bg-ink-750 sm:rounded-[20px] sm:pt-8">
                    <span className="font-serif text-[12px] font-semibold leading-none text-mute">
                      ({String((i % tools.length) + 1).padStart(2, "0")})
                    </span>
                    <div className="flex flex-1 items-center justify-center pb-8">
                      <Image
                        src={t.logo}
                        alt=""
                        width={96}
                        height={96}
                        className="size-14 object-contain opacity-95 invert sm:size-[72px]"
                      />
                    </div>
                  </div>
                  <p className="mt-5 text-[16px] font-semibold leading-[22.4px] text-bone">{t.name}</p>
                  <p className="mt-1.5 text-[15px] leading-[21px] text-soft">{t.note}</p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal className="mt-10">
          <p className="font-inter text-[15px] leading-[21px] text-mute">{tools.map((t) => t.name).join(" · ")}</p>
        </Reveal>
      </div>
    </section>
  );
}
