"use client";

import { useTransform, useScroll, MotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { MotionDiv } from "utils/FramerMotion";

export default function ParallaxScrollStackCard({
  images,
}: {
  images: StaticImageData[];
}) {
  const gallery = useRef(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ["start end", "end start"],
  });
  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 4.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.5]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 4.5]);

  useEffect(() => {
    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };
    resize();
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section
      ref={gallery}
      className="relative box-border hidden h-[250vh] w-full gap-[2vw] overflow-hidden bg-second-black p-[2vw] sm:flex"
    >
      <Column
        y={y}
        className="hidden lg:flex"
        images={[images[9], images[11], images[17], images[2]]}
      />
      <Column
        y={y2}
        className="hidden xl:flex"
        images={[images[1], images[4], images[5], images[12]]}
      />
      <Column
        y={y3}
        className="hidden sm:flex"
        images={[images[16], images[15], images[8], images[14]]}
      />
      <Column
        y={y4}
        className="hidden sm:flex"
        images={[images[0], images[10], images[3], images[7]]}
      />
    </section>
  );
}

const Column = ({
  images,
  y,
  className,
}: {
  images: StaticImageData[];
  y: MotionValue<number>;
  className?: string;
}) => {
  return (
    <MotionDiv
      className={`${className} parallax-scroll-card-column relative h-full w-full flex-col gap-[2vw]`}
      style={{ y }}
    >
      {images.map((src, index) => {
        return (
          <div
            key={`parallax_scroll_${index}`}
            className="relative h-[35vh] w-full overflow-hidden rounded-[1vw] sm:h-full"
          >
            <Image
              fill
              src={src}
              draggable={false}
              alt="tool image"
              placeholder="blur"
              blurDataURL={src.blurDataURL}
              className="object-cover object-top"
              sizes="(min-width: 1920px) 432px, (min-width: 1500px) 338px, (min-width: 640px) 225px, (min-width: 401px) 194px, 188px"
            />
          </div>
        );
      })}
    </MotionDiv>
  );
};
