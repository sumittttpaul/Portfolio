"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowShrinkIcon,
  FullScreenIcon,
  PauseIcon,
  PlayIcon,
  VolumeHighIcon,
  VolumeLowIcon,
  VolumeMute01Icon,
  VolumeOffIcon,
} from "@hugeicons/core-free-icons";
import {
  MediaControlBar,
  MediaController,
  MediaFullscreenButton,
  MediaMuteButton,
  MediaPlayButton,
  MediaPlaybackRateButton,
  MediaPreviewTimeDisplay,
  MediaTimeDisplay,
  MediaTimeRange,
  MediaVolumeRange,
} from "media-chrome/dist/react";
import { useState } from "react";

const variables = {
  "--media-control-background": "transparent",
  "--media-control-hover-background": "transparent",
  "--media-icon-color": "white",
  "--media-font-family": "inherit",
  "--media-range-bar-color": "#E5E3DC",
  "--media-range-thumb-background": "#E5E3DC",
  "--media-range-thumb-height": "0rem",
  "--media-range-thumb-width": "0rem",
  "--media-range-track-background": "rgba(255, 255, 255, 0.3)",
  "--media-range-track-height": "0.375rem",
  "--media-preview-time-background": "rgba(0, 0, 0, 0.6)",
  "--media-preview-time-border-radius": "4px",
  "--media-preview-time-margin-bottom": "5px",
  "--media-preview-time-padding": "4px 8px",
  "--media-preview-time-text-shadow": "none",
} as React.CSSProperties;

/** Media Chrome places each icon through its slot attribute, which the icon's types leave out. */
const SlotIcon = HugeiconsIcon as React.ComponentType<React.ComponentProps<typeof HugeiconsIcon> & { slot: string }>;

const icon = { size: 24, strokeWidth: 2, className: "fill-transparent text-white" };

export function MediaControls({ src, poster }: { src: string; poster?: string }) {
  const [hasPlayed, setHasPlayed] = useState(false);

  return (
    <MediaController className="article-video block size-full" style={variables}>
      <video
        slot="media"
        src={src}
        poster={poster}
        crossOrigin="anonymous"
        preload="none"
        playsInline
        onPlay={() => setHasPlayed(true)}
        className="size-full object-cover"
      />
      <div className="article-video-center pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
        <div onClick={(e) => e.stopPropagation()} className="pointer-events-auto transition-transform duration-300 ease-expo hover:scale-110">
          <MediaPlayButton noTooltip className="flex size-[clamp(4rem,8vw,6rem)] items-center justify-center rounded-full bg-black/50 backdrop-blur-sm">
            <SlotIcon slot="play" icon={PlayIcon} strokeWidth={0} className="size-1/2 fill-white text-white" />
            <SlotIcon slot="pause" icon={PauseIcon} strokeWidth={0} className="size-1/2 fill-white text-white" />
          </MediaPlayButton>
        </div>
      </div>
      <MediaControlBar
        className={`flex w-full items-center gap-2 bg-gradient-to-t from-black/60 to-transparent px-4 py-1.5 pt-12 transition-all duration-500 ease-out ${
          hasPlayed ? "pointer-events-auto translate-y-0" : "pointer-events-none translate-y-[6.25rem]"
        }`}
      >
        <div className="group/volume flex items-center">
          <MediaMuteButton className="size-5 p-0">
            <SlotIcon slot="high" icon={VolumeHighIcon} {...icon} />
            <SlotIcon slot="medium" icon={VolumeLowIcon} {...icon} />
            <SlotIcon slot="low" icon={VolumeMute01Icon} {...icon} />
            <SlotIcon slot="off" icon={VolumeOffIcon} {...icon} />
          </MediaMuteButton>
          <MediaVolumeRange className="w-0 origin-left overflow-hidden transition-all duration-300 ease-out group-hover/volume:w-20" />
        </div>
        <MediaTimeRange className="flex-1">
          <MediaPreviewTimeDisplay slot="preview" className="mb-0 rounded-sm border border-white/20 bg-black/60 px-2.5 py-[5px] text-xs font-bold text-white" />
        </MediaTimeRange>
        <span className="flex text-center">
          <MediaTimeDisplay showDuration className="text-xs font-medium text-white" />
        </span>
        <MediaPlaybackRateButton className="text-[0.8rem] font-medium text-white" />
        <MediaFullscreenButton className="size-5 p-0">
          <SlotIcon slot="enter" icon={FullScreenIcon} {...icon} />
          <SlotIcon slot="exit" icon={ArrowShrinkIcon} {...icon} />
        </MediaFullscreenButton>
      </MediaControlBar>
    </MediaController>
  );
}
