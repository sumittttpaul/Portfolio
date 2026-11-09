import Image from "next/image";
import { Reveal } from "components/ui/Reveal";
import { site } from "content/site";

// Stages on a 12-column track: `start` is the first column, `span` its length
const stages = [
  { label: "Discovery", start: 1, span: 3 },
  { label: "UX Design", start: 4, span: 2 },
  { label: "UI Design", start: 5, span: 4 },
  { label: "Development", start: 9, span: 2 },
  { label: "Launch", start: 11, span: 2 },
];

export default function Timeline() {
  return (
    <Reveal className="mt-4 overflow-hidden rounded-[18px] bg-[#1C1D1F]">
      <div className="flex flex-col gap-4 bg-[#282829] px-[18px] pb-3 pt-8 sm:flex-row sm:items-end sm:justify-between sm:pt-12">
        <h3 className="pb-2 text-[18px] leading-[25px] text-white">Timeline &amp; Process</h3>
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-2.5 text-[14px] font-medium text-white">
            One engineer
            <Image src={site.avatar} alt="" width={32} height={32} className="size-8 rounded-full object-cover" />
          </span>
          <span className="flex h-[41px] items-center overflow-hidden rounded-full bg-[#353636] text-[13px] text-pale">
            <span className="flex h-full w-[45px] items-center justify-center border-r border-white/10 text-white">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <rect x="3" y="5" width="18" height="16" rx="2" />
                <path d="M3 10h18M8 3v4M16 3v4" />
              </svg>
            </span>
            <span className="whitespace-nowrap px-4">Design and code, end to end</span>
          </span>
        </div>
      </div>

      <div className="overflow-x-auto [scrollbar-width:none]">
        <ol className="relative grid min-w-[760px] grid-cols-12 gap-y-4 px-[18px] pb-7 pt-7">
          {/* Dashed column guides */}
          <li aria-hidden="true" className="pointer-events-none absolute inset-x-[18px] inset-y-5 grid grid-cols-12">
            {Array.from({ length: 12 }).map((_, i) => (
              <span key={i} className={`border-l border-dashed border-white/10 ${i === 11 ? "border-r" : ""}`} />
            ))}
          </li>
          {stages.map((s, i) => (
            <li key={s.label} className="relative col-span-12 grid grid-cols-12">
              <Reveal
                motion
                delay={0.1 + i * 0.12}
                y={8}
                className="relative flex h-[38px] items-center justify-center gap-2 rounded-[10px] border border-white/25 bg-[#1C1D1F] text-[15px] font-medium text-white"
                style={{ gridColumn: `${s.start} / span ${s.span}` }}
              >
                {s.label}
                <span aria-hidden="true">&rarr;</span>
                <span className="absolute right-2 top-1 text-[12px] font-normal text-mute">{String(i + 1).padStart(2, "0")}</span>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </Reveal>
  );
}
