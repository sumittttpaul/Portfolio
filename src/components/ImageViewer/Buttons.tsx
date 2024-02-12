"use client";

import ArrowFill from "../../../public/icons/arrow-fill.svg";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { MotionButton } from "utils/FramerMotion";
import Image from "next/image";
import { AnimatePresence } from "framer-motion";

const LeftAnimate = {
  initial: {
    opacity: 0,
    x: -20,
  },
  open: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.2 },
  },
  exit: {
    opacity: 0,
    x: -20,
    transition: { duration: 0.2 },
  },
};

const RightAnimate = {
  initial: {
    opacity: 0,
    x: 20,
  },
  open: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.15 },
  },
  exit: {
    opacity: 0,
    x: 20,
    transition: { duration: 0.15 },
  },
};

export function MobileLeftArrowButton({
  IsPreviousImage,
  handlePreviousImage,
}: {
  IsPreviousImage: boolean;
  handlePreviousImage: () => void;
}) {
  return (
    <div
      className={`${IsPreviousImage ? "opacity-100" : "opacity-40"} relative left-5 block aspect-square h-[40px] w-[40px] transition-opacity duration-200 ease-in sm:h-[60px] sm:w-[60px] screen-1000:absolute screen-1000:top-[40%] max-size:left-0`}
    >
      <AnimatePresence>
        <MotionButton
          exit={LeftAnimate.exit}
          whileTap={{ scale: IsPreviousImage ? 0.9 : 1 }}
          animate={LeftAnimate.open}
          onClick={handlePreviousImage}
          initial={LeftAnimate.initial}
          className="relative z-[2] grid h-full w-full place-content-center rounded-full bg-white/10 screen-1000:transition-colors screen-1000:duration-200 screen-1000:ease-in screen-1000:hover:bg-white/20"
        >
          <Image
            width={10}
            height={13}
            src={ArrowFill}
            draggable={false}
            alt="left arrow"
            className="no-select block scale-75 sm:scale-100"
          />
        </MotionButton>
      </AnimatePresence>
    </div>
  );
}

export function MobileRightArrowButton({
  IsNextImage,
  handleNextImage,
}: {
  IsNextImage: boolean;
  handleNextImage: () => void;
}) {
  return (
    <div
      className={`${IsNextImage ? "opacity-100" : "opacity-40"} relative right-5 block aspect-square h-[40px] w-[40px] transition-opacity duration-200 ease-in sm:h-[60px] sm:w-[60px] screen-1000:absolute screen-1000:top-[40%] max-size:right-0`}
    >
      <AnimatePresence>
        <MotionButton
          exit={RightAnimate.exit}
          whileTap={{ scale: IsNextImage ? 0.9 : 1 }}
          onClick={handleNextImage}
          animate={RightAnimate.open}
          initial={RightAnimate.initial}
          className="relative z-[2] grid aspect-square h-full w-full place-content-center rounded-full bg-white/10 disabled:opacity-50 screen-1000:transition-colors screen-1000:duration-200 screen-1000:ease-in screen-1000:hover:bg-white/20"
        >
          <Image
            width={10}
            height={13}
            src={ArrowFill}
            draggable={false}
            alt="left arrow"
            className="no-select block rotate-180 scale-75 sm:scale-100"
          />
        </MotionButton>
      </AnimatePresence>
    </div>
  );
}

export function DesktopLeftArrowButton({
  IsPreviousImage,
  handlePreviousImage,
}: {
  IsPreviousImage: boolean;
  handlePreviousImage: () => void;
}) {
  return (
    <div className="relative left-5 block aspect-square h-[40px] w-[40px] sm:h-[60px] sm:w-[60px] screen-1000:absolute screen-1000:top-[40%] max-size:left-0">
      <AnimatePresence>
        {IsPreviousImage && (
          <MotionButton
            whileTap={{ scale: 0.9 }}
            exit={LeftAnimate.exit}
            animate={LeftAnimate.open}
            initial={LeftAnimate.initial}
            onClick={handlePreviousImage}
            className="relative z-[2] grid h-full w-full place-content-center rounded-full bg-white/10 screen-1000:transition-colors screen-1000:duration-200 screen-1000:ease-in screen-1000:hover:bg-white/20"
          >
            <Image
              width={10}
              height={13}
              src={ArrowFill}
              draggable={false}
              alt="left arrow"
              className="no-select block scale-75 sm:scale-100"
            />
          </MotionButton>
        )}
      </AnimatePresence>
    </div>
  );
}

export function DesktopRightArrowButton({
  IsNextImage,
  handleNextImage,
}: {
  IsNextImage: boolean;
  handleNextImage: () => void;
}) {
  return (
    <div className="relative right-5 block aspect-square h-[40px] w-[40px] sm:h-[60px] sm:w-[60px] screen-1000:absolute screen-1000:top-[40%] max-size:right-0">
      <AnimatePresence>
        {IsNextImage && (
          <MotionButton
            whileTap={{ scale: 0.9 }}
            exit={RightAnimate.exit}
            animate={RightAnimate.open}
            initial={RightAnimate.initial}
            onClick={handleNextImage}
            className="relative z-[2] grid aspect-square h-full w-full place-content-center rounded-full bg-white/10 screen-1000:transition-colors screen-1000:duration-200 screen-1000:ease-in screen-1000:hover:bg-white/20"
          >
            <Image
              width={10}
              height={13}
              src={ArrowFill}
              draggable={false}
              alt="left arrow"
              className="no-select block rotate-180 scale-75 sm:scale-100"
            />
          </MotionButton>
        )}
      </AnimatePresence>
    </div>
  );
}

export function ImagePagination({
  currentIndex,
  TotalIndex,
}: {
  currentIndex: number;
  TotalIndex: number;
}) {
  return (
    <div className="mt-11 flex flex-col items-center justify-center space-y-3 screen-1000:my-2.5 screen-1000:mb-6 screen-1000:mt-3 screen-1000:flex-row">
      <h3 className="relative whitespace-nowrap text-sm text-white xs:text-base screen-1000:absolute screen-1000:left-5 max-size:left-[7.4em]">
        Screenshot {currentIndex}
      </h3>
      <p className="whitespace-nowrap rounded-full bg-white/10 px-6 py-2 text-xs text-white xs:text-sm screen-1000:-ml-8">
        {currentIndex} <span className="opacity-50">/ {TotalIndex}</span>
      </p>
    </div>
  );
}

export function ExitButton({ onClick }: { onClick: () => void }) {
  return (
    <MotionButton
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      className="absolute right-5 top-5 z-[2] grid aspect-square h-[45px] w-[45px] place-content-center rounded-full bg-white/10 sm:h-[60px] sm:w-[60px] screen-1000:transition-colors screen-1000:duration-200 screen-1000:ease-in screen-1000:hover:bg-white/20 max-size:right-0"
    >
      <XMarkIcon className="h-5 w-5 stroke-[1.25px] text-white sm:h-7 sm:w-7" />
    </MotionButton>
  );
}
