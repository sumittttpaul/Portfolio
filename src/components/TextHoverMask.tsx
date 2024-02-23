"use client";

import { MotionDiv } from "utils/FramerMotion";
import { useState } from "react";

export default function TextHoverMask({ content }: { content: string }) {
  const [position, setPosition] = useState({ x: 80, y: 80 });
  const [isHovered, setIsHovered] = useState(false);
  const size = isHovered ? 400 : 40;

  const handlePosition = (x: number, y: number) => {
    setPosition({ x, y });
  };

  return (
    <div
      className="h-[min(calc(100vh-128px),100vh)] w-full"
      onMouseMove={(e) => handlePosition(e.clientX, e.clientY)}
    >
      <MotionDiv
        animate={{
          WebkitMaskPosition: `${position.x - size / 2}px ${position.y - size / 2}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
        className="text-hover-mask flex h-full w-full flex-col items-center justify-center"
      >
        <h1
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="mx-auto flex w-full max-w-screen-max-size px-5 text-start text-[32px] font-semibold leading-[1.5] -tracking-[0.2px] text-white xs:text-[36px] sm:text-[46px] sm:leading-[1.2] lg:text-[56px] xl:text-[64px]"
        >
          How will I help you&nbsp;
          <span className="animate-dot">.</span>
          <span className="animate-dot">.</span>
          <span className="animate-dot">.</span>
        </h1>
        <p
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="mx-auto w-full max-w-screen-max-size text-pretty px-5 pt-10 text-start text-[clamp(1.75rem,3vw,3rem)] leading-[1] text-white"
        >
          {content}
        </p>
      </MotionDiv>
      <div className="flex h-full w-full flex-col items-center justify-center">
        <h1 className="mx-auto flex w-full max-w-screen-max-size px-5 text-start text-[32px] font-semibold leading-[1.5] -tracking-[0.2px] text-almost-black xs:text-[36px] sm:text-[46px] sm:leading-[1.2] lg:text-[56px] xl:text-[64px]">
          How will I help you&nbsp;
          <span className="animate-dot -z-[1]">.</span>
          <span className="animate-dot -z-[1]">.</span>
          <span className="animate-dot -z-[1]">.</span>
        </h1>
        <p className="mx-auto w-full max-w-screen-max-size text-pretty px-5 pt-10 text-start text-[clamp(1.75rem,3vw,3rem)] leading-[1] text-almost-black">
          {content}
        </p>
      </div>
    </div>
  );
}
