"use client";

import { useScroll, useTransform } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { MotionDiv } from "utils/FramerMotion";
import { useRef } from "react";

import WorkHeading from "../../../public/images/work/work_heading.png";

export default function ZoomCard({
  projects,
}: {
  projects: {
    image: StaticImageData;
    title: string;
    description: string;
    color: string;
    date: string;
  }[];
}) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const pictures = [
    {
      src: WorkHeading,
      scale: scale4,
    },
    {
      src: projects[0].image,
      scale: scale5,
    },
    {
      src: projects[1].image,
      scale: scale6,
    },
    {
      src: projects[2].image,
      scale: scale5,
    },
    {
      src: projects[5].image,
      scale: scale6,
    },
    {
      src: projects[4].image,
      scale: scale8,
    },
    {
      src: projects[3].image,
      scale: scale9,
    },
  ];

  return (
    <div ref={container} className="relative h-[300vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        {pictures.map(({ src, scale }, index) => {
          return (
            <MotionDiv
              key={index}
              style={{ scale }}
              className="work-image-nth absolute top-0 flex h-full w-full items-center justify-center"
            >
              <div className="work-image-container">
                <Image
                  fill
                  src={src}
                  alt="work image"
                  placeholder="blur"
                  draggable={false}
                  blurDataURL={src.blurDataURL}
                  sizes="(min-width: 0px) 1900px"
                  className={`${index === 0 ? "object-contain" : "object-cover"} work-image-position`}
                />
              </div>
            </MotionDiv>
          );
        })}
      </div>
    </div>
  );
}
