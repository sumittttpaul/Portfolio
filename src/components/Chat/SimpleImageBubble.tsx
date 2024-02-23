"use client";

import Sumit_Photo from "../../../public/images/sumit_photo.png";
import { Transition, Variants } from "framer-motion";
import { MotionDiv } from "utils/FramerMotion";
import Image, { StaticImageData } from "next/image";

export default function SimpleImageBubble({
  variants,
  transition,
  imgSrc,
  size,
}: {
  variants: Variants;
  transition: Transition;
  imgSrc: StaticImageData;
  size: {
    width: number;
    height: number;
  };
}) {
  return (
    <MotionDiv
      variants={variants}
      transition={transition}
      style={{ maxWidth: size.width }}
      className="mb-1 h-full w-full rounded-[1em] bg-almost-black/15 sm:px-0.5 sm:py-0.5"
    >
      <div
        style={{
          height: size.height * 0.75,
        }}
        className="relative z-[1] flex h-full w-full"
      >
        <div className="absolute inset-2 grid h-auto w-auto place-content-center overflow-hidden rounded-[0.5em] shadow-xl shadow-almost-black/30">
          <Image
            fill
            src={imgSrc}
            draggable={false}
            placeholder="blur"
            alt="about_image_bubble"
            blurDataURL={imgSrc.blurDataURL}
            className="object-cover object-center"
            sizes={`(min-width: 0px) ${size.width}px`}
          />
        </div>
      </div>
    </MotionDiv>
  );
}
