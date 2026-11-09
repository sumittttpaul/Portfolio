"use client";

import { useState } from "react";
import Image from "next/image";
import { Reveal } from "components/ui/Reveal";
import Lightbox, { type LightboxImage } from "./Lightbox";

function Shot({
  image,
  onOpen,
  sizes,
  frame,
  radius,
}: {
  image: LightboxImage;
  onOpen: () => void;
  sizes: string;
  frame: string;
  radius: string;
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`Open ${image.alt}`}
      className={`group relative block w-full overflow-hidden bg-ink-800 text-left ${frame}`}
    >
      {/* The frame and its shadow stay still; only the picture inside moves */}
      <span className={`block overflow-hidden shadow-[0_30px_80px_-30px_rgba(0,0,0,0.7)] ${radius}`}>
        <Image src={image.src} alt={image.alt} width={1920} height={1080} sizes={sizes} className="hover-zoom block h-auto w-full" />
      </span>
      <span className="pointer-events-none absolute bottom-4 right-4 flex translate-y-2 items-center gap-2 rounded-full bg-black/75 py-2 pl-3 pr-4 text-[12px] font-medium text-white opacity-0 transition-[opacity,transform] duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
          <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
        </svg>
        View
      </span>
    </button>
  );
}

/** Project screens laid out as showcase panels, each opening the viewer. */
export default function ProjectGallery({ title, images }: { title: string; images: LightboxImage[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const [lead, ...rest] = images;
  const feature = rest.slice(0, 2);
  const grid = rest.slice(2);

  return (
    <section aria-label="Project screens" className="container-site flex flex-col gap-2 pb-8 sm:gap-4">
      <div className="mb-6 flex items-end justify-between gap-6 sm:mb-8">
        <div>
          <p className="eyebrow">Screens</p>
          <h2 className="mt-4 text-heading-40 font-medium text-bone">A closer look</h2>
        </div>
        <p className="shrink-0 text-[15px] text-mute">{images.length === 1 ? "1 view" : `${images.length} views`}</p>
      </div>
      <Reveal y={40}>
        <Shot image={lead} onOpen={() => setOpen(0)} sizes="100vw" frame="rounded-[16px] p-3 sm:rounded-[20px] sm:p-6 lg:p-10" radius="rounded-[10px]" />
      </Reveal>

      {feature.length > 0 && (
        <div className={`grid gap-2 sm:gap-4 ${feature.length > 1 ? "md:grid-cols-2" : ""}`}>
          {feature.map((g, i) => (
            <Reveal key={g.src} y={40}>
              <Shot image={g} onOpen={() => setOpen(i + 1)} sizes="(min-width: 768px) 50vw, 100vw" frame="rounded-[16px] p-3 sm:rounded-[20px] sm:p-5" radius="rounded-[8px]" />
            </Reveal>
          ))}
        </div>
      )}

      {grid.length > 0 && (
        <div className="grid grid-cols-2 gap-2 sm:gap-4 lg:grid-cols-3">
          {grid.map((g, i) => (
            <Reveal key={g.src} delay={(i % 3) * 0.05}>
              <Shot image={g} onOpen={() => setOpen(i + 3)} sizes="(min-width: 1024px) 33vw, 50vw" frame="rounded-[14px] p-2 sm:rounded-[16px] sm:p-3" radius="rounded-[6px]" />
            </Reveal>
          ))}
        </div>
      )}

      <Lightbox images={images} index={open} title={title} onClose={() => setOpen(null)} onIndex={setOpen} />
    </section>
  );
}
