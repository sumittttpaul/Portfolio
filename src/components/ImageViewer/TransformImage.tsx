"use client";

import { MotionButton, MotionDiv } from "utils/FramerMotion";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Image, { StaticImageData } from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Dispatch, SetStateAction } from "react";
import { Zoom } from "swiper/modules";
import "swiper/css/zoom";
import "swiper/css";

const AnimationProps = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export default function TransformImage({
  index,
  onBack,
  images,
  childHeight,
  setImageIndex,
}: {
  index: number;
  onBack: () => void;
  childHeight: number;
  images: StaticImageData[];
  setImageIndex: Dispatch<SetStateAction<number>>;
}) {
  return (
    <MotionDiv
      {...AnimationProps}
      className="relative flex h-full w-full flex-col"
    >
      <div className="absolute z-[2] mt-11 flex w-full items-center justify-start space-x-2">
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
      <Swiper
        zoom={true}
        modules={[Zoom]}
        spaceBetween={50}
        slidesPerView={1}
        initialSlide={index}
        className="h-auto w-full"
        style={{ height: childHeight - 256 }}
      >
        {images.map((image, index) => {
          return (
            <SwiperSlide key={index}>
              {({ isActive }) => {
                isActive && setImageIndex(index);
                return (
                  <div className="swiper-zoom-container">
                    <Image
                      width={1333}
                      height={750}
                      draggable={false}
                      alt="work image"
                      placeholder="blur"
                      sizes="(min-width: 0px) 1333px"
                      blurDataURL={image.blurDataURL}
                      src={image}
                    />
                  </div>
                );
              }}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </MotionDiv>
  );
}
