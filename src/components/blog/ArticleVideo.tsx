"use client";

import dynamic from "next/dynamic";

// The player is built on custom elements, so it only runs in the browser
const MediaControls = dynamic(() => import("./MediaControls").then((m) => m.MediaControls), { ssr: false });

export default function ArticleVideo({ src, poster }: { src: string; poster?: string }) {
  return (
    <figure
      className="mb-6 aspect-video w-full overflow-hidden rounded-[14px] bg-ink-950 bg-cover bg-center"
      style={poster ? { backgroundImage: `url("${poster}")` } : undefined}
    >
      <MediaControls src={src} poster={poster} />
    </figure>
  );
}
