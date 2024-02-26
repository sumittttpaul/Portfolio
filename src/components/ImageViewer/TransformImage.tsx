"use client";

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import Image, { StaticImageData } from "next/image";
import { MotionButton, MotionDiv } from "utils/FramerMotion";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

const AnimationProps = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export default function TransformImage({
  index,
  childHeight,
  images,
  onBack,
}: {
  index: number;
  childHeight: number;
  images: StaticImageData;
  onBack: () => void;
}) {
  return (
    <MotionDiv
      {...AnimationProps}
      className="relative flex h-full w-full flex-col"
    >
      <div className="absolute z-[1] mt-11 flex w-full items-center justify-start space-x-2">
        <MotionButton
          onClick={onBack}
          whileTap={{ scale: 0.9 }}
          name="transform_image_exit_button"
          className="relative ml-3 grid aspect-square h-[45px] w-[45px] place-content-center rounded-full sm:h-[60px] sm:w-[60px]"
        >
          <ArrowLeftIcon className="h-5 w-5 stroke-[1.25px] text-white sm:h-7 sm:w-7" />
        </MotionButton>
        <h3 className="relative whitespace-nowrap text-sm text-white xs:text-base">
          Screenshot {index + 1}
        </h3>
      </div>
      <TransformWrapper
        initialScale={1}
        pinch={{ step: 1 }}
        doubleClick={{ step: 2 }}
        initialPositionY={(childHeight - 256) / 2.8}
      >
        <TransformComponent
          contentClass="cursor-grab active:cursor-grabbing"
          wrapperStyle={{
            height: childHeight - 256,
            width: "100%",
          }}
        >
          <Image
            width={1333}
            height={750}
            draggable={false}
            alt="work image"
            placeholder="blur"
            sizes="(min-width: 0px) 1333px"
            blurDataURL={images.blurDataURL}
            src={images}
          />
        </TransformComponent>
      </TransformWrapper>
    </MotionDiv>
  );
}
