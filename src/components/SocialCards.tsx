"use client";

import { useTransform, useScroll, MotionValue } from "framer-motion";
import { MotionDiv } from "utils/FramerMotion";
import { useRef } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export default function SocialCards({
  i,
  src,
  href,
  range,
  progress,
  targetScale,
}: {
  i: number;
  href: string;
  range: number[];
  targetScale: number;
  src: StaticImageData;
  progress: MotionValue<number>;
}) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="sticky top-[35vh] flex h-[320px] items-center justify-center xs:top-[28.5vh] xs:h-[420px] sm:top-[35vh] lg:h-[600px]"
    >
      <MotionDiv
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className="lg relative flex h-[300px] w-[calc(100vw-40px)] max-w-[1000px] origin-top flex-col rounded-[25px] lg:h-[500px]"
      >
        <div className="relative h-full w-full overflow-hidden rounded-[25px]">
          <Link href={href}>
            <MotionDiv
              className="relative h-full w-full"
              style={{ scale: imageScale }}
            >
              <Image
                fill
                src={src}
                draggable={false}
                placeholder="blur"
                blurDataURL={src.blurDataURL}
                className="object-cover object-left-top"
                sizes="(min-width: 1024px) 1000px, 600px"
                alt="image"
              />
            </MotionDiv>
          </Link>
        </div>
      </MotionDiv>
    </div>
  );
}
