"use client";

import Image, { StaticImageData } from "next/image";
import { MotionDiv } from "utils/FramerMotion";
import { useMotionValue, useSpring, useTransform } from "framer-motion";

interface Props {
  Size: {
    Height: number;
    Width: number;
  };
  ImageSrc: StaticImageData;
  BGColor: string;
  className?: string;
}

export default function ThreeDCard({
  Size,
  className,
  ImageSrc,
  BGColor,
}: Props) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["17.5deg", "-17.5deg"],
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-17.5deg", "17.5deg"],
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className={`${className} absolute`}>
      <MotionDiv
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateY,
          rotateX,
          transformStyle: "preserve-3d",
          height: Size.Height,
          width: Size.Width,
        }}
        className={`relative flex ${BGColor}`}
      >
        <div
          style={{
            transform: "translateZ(100px)",
            transformStyle: "preserve-3d",
          }}
          className="absolute inset-2 overflow-hidden shadow-xl"
        >
          <div className="relative flex h-full w-full">
            <Image
              width={Size.Width - 16}
              height={Size.Height - 16}
              src={ImageSrc}
              alt="work experience"
              placeholder="blur"
              className="object-cover object-center"
              draggable={false}
              blurDataURL={ImageSrc.blurDataURL}
            />
          </div>
        </div>
      </MotionDiv>
    </div>
  );
}
