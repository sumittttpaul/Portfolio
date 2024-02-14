"use client";

import { AnimatePresence, MotionConfig, Variants } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { useSwipeable } from "react-swipeable";
import { MotionDiv } from "utils/FramerMotion";

const ImageAnimate: Variants = {
  initial: (direction: number) => {
    return {
      x: direction > 0 ? 1333 : -1333,
      opacity: 0,
    };
  },
  open: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      x: direction < 0 ? 1333 : -1333,
      opacity: 0,
    };
  },
};

export default function BigImage({
  images,
  direction,
  handleNextImage,
  currentImageIndex,
  handlePreviousImage,
}: {
  direction: number;
  images: StaticImageData[];
  currentImageIndex: number;
  handlePreviousImage: () => void;
  handleNextImage: () => void;
}) {
  const handlers = useSwipeable({
    trackMouse: true,
    trackTouch: true,
    onSwipedLeft: handleNextImage,
    onSwipedRight: handlePreviousImage,
  });

  return (
    <MotionConfig
      transition={{
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      }}
    >
      <div
        className="relative mx-auto mt-5 flex aspect-video h-full max-h-[750px] w-full max-w-[1333px] overflow-hidden"
        {...handlers}
      >
        <div className="z-[1] w-full overflow-hidden">
          <div className="relative flex aspect-video items-center justify-center">
            <AnimatePresence initial={false} custom={direction}>
              <MotionDiv
                exit="exit"
                animate="open"
                initial="initial"
                custom={direction}
                variants={ImageAnimate}
                key={currentImageIndex}
                className="absolute"
              >
                <Image
                  width={1333}
                  height={750}
                  sizes="(min-width: 0px) 1333px"
                  draggable={false}
                  alt="work image"
                  placeholder="blur"
                  className="cursor-grab active:cursor-grabbing"
                  blurDataURL={images[currentImageIndex].blurDataURL}
                  src={images[currentImageIndex]}
                />
              </MotionDiv>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </MotionConfig>
  );
}
