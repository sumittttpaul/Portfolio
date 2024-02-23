"use client";

import { Transition, Variants } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { MotionDiv } from "utils/FramerMotion";
import { useEffect, useRef, useState } from "react";

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

export default function ImageBubble({
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
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [Resize, setResize] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rY = mouseX / width - HALF_ROTATION_RANGE;
    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;

    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    setRotateX(0);
    setRotateY(0);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 640) setResize(false);
      else setResize(true);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <MotionDiv
      variants={variants}
      transition={transition}
      style={{ maxWidth: size.width }}
      className="mt-1 flex h-full w-full rounded-[1em] bg-almost-black/15 px-1.5 py-1 lg:mt-1.5"
    >
      <MotionDiv
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transformStyle: "preserve-3d",
          height: Resize ? size.height * 0.75 : size.height,
        }}
        animate={{
          rotateX,
          rotateY,
        }}
        className="relative z-[1] flex h-full w-full"
      >
        <div
          style={{
            transform: "translateZ(75px)",
            transformStyle: "preserve-3d",
          }}
          className="absolute inset-2 grid h-auto w-auto place-content-center overflow-hidden rounded-[0.5em] shadow-xl shadow-almost-black/30"
        >
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
      </MotionDiv>
    </MotionDiv>
  );
}
