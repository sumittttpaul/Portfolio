"use client";

import { MotionButton, MotionDiv, MotionSpan } from "utils/FramerMotion";
import Image, { StaticImageData } from "next/image";
import { useEffect, useRef, useState } from "react";

const AnimationProps = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const ScrollEndGradientProps = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { type: "tween", ease: "easeOut", duration: 0.2 },
};

export default function AllImage({
  images,
  onClose,
  setImage,
}: {
  images: StaticImageData[];
  onClose: () => void;
  setImage: (index: number) => void;
}) {
  const [scrollValue, setScrollValue] = useState({ current: 0, last: 0 });
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const _scroll = scrollRef.current;
    if (_scroll) {
      const handleScroll = () =>
        setScrollValue({
          current: _scroll.scrollTop,
          last: _scroll.scrollHeight - _scroll.clientHeight,
        });
      handleScroll();
      _scroll.addEventListener("scroll", handleScroll);
      return () => _scroll.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <MotionDiv
      {...AnimationProps}
      className="relative flex h-full w-full flex-col px-5 pb-5 sm:px-6 sm:pb-6"
    >
      <div className="mt-11 flex w-full flex-col items-start justify-center">
        <h3 className="relative whitespace-nowrap text-sm text-white xs:text-base">
          {images.length > 1 ? "Screenshots" : "Screenshot"}
        </h3>
        <p className="relative whitespace-nowrap text-xs text-gray-400 xs:text-sm">
          {images.length} {images.length > 1 ? "Items" : "Item"}
        </p>
      </div>
      <div className="relative h-full w-full overflow-hidden">
        {scrollValue.current > 0 && (
          <MotionSpan
            {...ScrollEndGradientProps}
            className="absolute left-0 top-0 z-[1] h-10 w-full bg-gradient-to-b from-svg-black from-[50%]"
          />
        )}
        <div
          ref={scrollRef}
          className="scrollbar-visible relative mt-5 flex h-full w-full flex-col space-y-2 overflow-y-scroll"
        >
          {images.map((data, index) => {
            return (
              <MotionButton
                key={index}
                onClick={() => setImage(index)}
                whileTap={{ scale: 0.9 }}
                className="flex h-auto w-full"
              >
                <Image
                  width={640}
                  height={360}
                  draggable={false}
                  alt="work image"
                  placeholder="blur"
                  sizes="(min-width: 0px) 640px"
                  blurDataURL={data.blurDataURL}
                  src={data}
                />
              </MotionButton>
            );
          })}
        </div>
        {scrollValue.current < scrollValue.last && (
          <MotionSpan
            {...ScrollEndGradientProps}
            className="absolute bottom-0 left-0 z-[1] h-5 w-full bg-gradient-to-t from-svg-black from-[50%]"
          />
        )}
      </div>
      <div className="w-full bg-svg-black pb-[300px] pt-2.5">
        <button
          type="button"
          onClick={onClose}
          name="image_viewer_exit_modal_button"
          aria-label="image_viewer_exit_modal_button"
          className="flex h-auto w-full cursor-default place-content-center rounded-full border border-solid border-white/20 p-3 text-[12px] xs:text-[13px] sm:text-base"
        >
          Close
        </button>
      </div>
    </MotionDiv>
  );
}
