"use client";

import { Variants, useInView } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { MotionButton, MotionDiv } from "utils/FramerMotion";
import { MouseEvent, useRef } from "react";

export default function MouseScaleCard({
  reversed,
  projects,
}: {
  reversed?: boolean;
  projects: {
    image: StaticImageData;
    title: string;
    description: string;
    color: string;
    date: string;
  }[];
}) {
  const FirstImage = useRef<HTMLButtonElement>(null);
  const SecondImage = useRef<HTMLButtonElement>(null);
  const FirstImageView = useInView(FirstImage, { amount: 0.5, once: true });
  const SecondImageView = useInView(SecondImage, { amount: 0.5, once: true });
  let requestAnimationFrameId: any = null;
  let xPercent = reversed ? 100 : 0;
  let currentXPercent = reversed ? 100 : 0;
  const speed = 0.15;

  const FirstImageSlideUp: Variants = {
    initial: {
      opacity: 0,
      y: 50,
    },
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
    closed: {
      opacity: 0,
      y: 50,
      transition: { duration: 0.5 },
    },
  };

  const SecondImageSlideUp: Variants = {
    initial: {
      opacity: 0,
      y: 50,
    },
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: 0.15 },
    },
    closed: {
      opacity: 0,
      y: 50,
      transition: { duration: 0.5 },
    },
  };

  const manageMouseMove = (e: MouseEvent) => {
    const { clientX } = e;
    xPercent = (clientX / window.innerWidth) * 100;
    if (!requestAnimationFrameId) {
      requestAnimationFrameId = window.requestAnimationFrame(animate);
    }
  };

  const animate = () => {
    //Add easing to the animation
    const xPercentDelta = xPercent - currentXPercent;
    currentXPercent = currentXPercent + xPercentDelta * speed;
    //Change width of images between 33.33% and 66.66% based on cursor
    const FirstImagePercent = 66.66 - currentXPercent * 0.33;
    const SecondImagePercent = 33.33 + currentXPercent * 0.33;
    if (FirstImage.current && SecondImage.current) {
      FirstImage.current.style.width = `${FirstImagePercent}%`;
      SecondImage.current.style.width = `${SecondImagePercent}%`;
    }
    if (Math.round(xPercent) == Math.round(currentXPercent)) {
      window.cancelAnimationFrame(requestAnimationFrameId);
      requestAnimationFrameId = null;
    } else {
      window.requestAnimationFrame(animate);
    }
  };

  return (
    <section
      onMouseMove={manageMouseMove}
      className="work-image-zoom flex h-[60vw] max-size:h-[45vw]"
    >
      <MotionButton
        ref={FirstImage}
        name="work_zoom_card_button"
        whileTap={{ scale: 0.95 }}
        variants={FirstImageSlideUp}
        onClick={() => {}}
        className="w-full cursor-pointer p-10"
        animate={FirstImageView ? "open" : "closed"}
      >
        <div
          style={{ backgroundColor: projects[0].color }}
          className="px-12 py-24"
        >
          <div className="relative w-full pb-[66%]">
            <Image
              fill
              priority
              alt="work image"
              placeholder="blur"
              draggable={false}
              src={projects[0].image}
              blurDataURL={projects[0].image.src}
              className="object-cover object-top"
              sizes="(min-width: 1024px) 1200px, 800px"
            />
          </div>
        </div>
        <div className="space-y-5 pt-5">
          <h4 className="text-[2.6vw] font-medium text-black">
            {projects[0].title}
          </h4>
          <div className="h-[2px] w-full bg-light-gray" />
          <h6 className="flex w-full justify-between text-lg text-black">
            <span>{projects[0].description}</span>
            <span>{projects[0].date}</span>
          </h6>
        </div>
      </MotionButton>

      <MotionButton
        ref={SecondImage}
        name="work_zoom_card_button"
        whileTap={{ scale: 0.95 }}
        variants={SecondImageSlideUp}
        onClick={() => {}}
        className="w-full cursor-pointer p-10"
        animate={SecondImageView ? "open" : "closed"}
      >
        <div
          style={{ backgroundColor: projects[1].color }}
          className="px-12 py-24"
        >
          <div className="relative w-full pb-[66%]">
            <Image
              fill
              alt="work image"
              placeholder="blur"
              draggable={false}
              src={projects[1].image}
              className="object-cover object-top"
              sizes="(min-width: 1024px) 1200px, 800px"
            />
          </div>
        </div>
        <div className="space-y-5 pt-5">
          <h4 className="text-[2.6vw] font-medium text-black">
            {projects[1].title}
          </h4>
          <div className="h-[2px] w-full bg-light-gray" />
          <h6 className="flex w-full justify-between text-lg text-black">
            <span>{projects[1].description}</span>
            <span>{projects[1].date}</span>
          </h6>
        </div>
      </MotionButton>
    </section>
  );
}
