"use client";

import { Variants, useInView } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { MotionButton } from "utils/FramerMotion";
import { MouseEvent, useRef } from "react";
import { useImageViewerState, useStopScrollingState } from "utils/Zustand";

// Authentication
import AuthenticationImage01 from "../../public/images/work/authentication/01.png";
import AuthenticationImage02 from "../../public/images/work/authentication/02.png";
import AuthenticationImage03 from "../../public/images/work/authentication/03.png";
import AuthenticationImage04 from "../../public/images/work/authentication/04.png";
import AuthenticationImage05 from "../../public/images/work/authentication/05.png";
import AuthenticationImage06 from "../../public/images/work/authentication/06.png";
import AuthenticationImage07 from "../../public/images/work/authentication/07.png";
import AuthenticationImage08 from "../../public/images/work/authentication/08.png";
import AuthenticationImage09 from "../../public/images/work/authentication/09.png";
import AuthenticationImage10 from "../../public/images/work/authentication/10.png";
import AuthenticationImage11 from "../../public/images/work/authentication/11.png";
import AuthenticationImage12 from "../../public/images/work/authentication/12.png";
import AuthenticationImage13 from "../../public/images/work/authentication/13.png";
import AuthenticationImage14 from "../../public/images/work/authentication/14.png";
import AuthenticationImage15 from "../../public/images/work/authentication/15.png";
import AuthenticationImage16 from "../../public/images/work/authentication/16.png";
import AuthenticationImage17 from "../../public/images/work/authentication/17.png";
import AuthenticationImage18 from "../../public/images/work/authentication/18.png";
import AuthenticationImage19 from "../../public/images/work/authentication/19.png";
import AuthenticationImage20 from "../../public/images/work/authentication/20.png";
import AuthenticationImage21 from "../../public/images/work/authentication/21.png";
import AuthenticationImage22 from "../../public/images/work/authentication/22.png";
import AuthenticationImage23 from "../../public/images/work/authentication/23.png";
import AuthenticationImage24 from "../../public/images/work/authentication/24.png";
import AuthenticationImage25 from "../../public/images/work/authentication/25.png";
// Clothing
import ClothingImage01 from "../../public/images/work/clothing/01.png";
// Emotion
import EmotionImage01 from "../../public/images/work/emotion/01.png";
import EmotionImage02 from "../../public/images/work/emotion/02.png";
import EmotionImage03 from "../../public/images/work/emotion/03.png";
import EmotionImage04 from "../../public/images/work/emotion/04.png";
import EmotionImage05 from "../../public/images/work/emotion/05.png";
// Portfolio
import PortfolioImage01 from "../../public/images/work/portfolio/01.png";

const ClothingImages = [ClothingImage01];
const PortfolioImages = [PortfolioImage01];
const EmotionImages = [
  EmotionImage01,
  EmotionImage02,
  EmotionImage03,
  EmotionImage04,
  EmotionImage05,
];
const AuthenticationImages = [
  AuthenticationImage01,
  AuthenticationImage02,
  AuthenticationImage03,
  AuthenticationImage04,
  AuthenticationImage05,
  AuthenticationImage06,
  AuthenticationImage07,
  AuthenticationImage08,
  AuthenticationImage09,
  AuthenticationImage10,
  AuthenticationImage11,
  AuthenticationImage12,
  AuthenticationImage13,
  AuthenticationImage14,
  AuthenticationImage15,
  AuthenticationImage16,
  AuthenticationImage17,
  AuthenticationImage18,
  AuthenticationImage19,
  AuthenticationImage20,
  AuthenticationImage21,
  AuthenticationImage22,
  AuthenticationImage23,
  AuthenticationImage24,
  AuthenticationImage25,
];
const images = {
  clothing: ClothingImages,
  portfolio: PortfolioImages,
  emotion: EmotionImages,
  authentication: AuthenticationImages,
};

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

  const { ImageViewerData, setImageViewerData } = useImageViewerState();
  const { toggleIsScrolling } = useStopScrollingState();

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

  const handleImages = (image: WorkImagesType) => {
    if (!ImageViewerData.show) {
      if (image === "portfolio") {
        toggleIsScrolling();
        setImageViewerData({ images: images.portfolio, show: true });
      }
      if (image === "emotion") {
        toggleIsScrolling();
        setImageViewerData({ images: images.emotion, show: true });
      }
      if (image === "authentication") {
        toggleIsScrolling();
        setImageViewerData({ images: images.authentication, show: true });
      }
      if (image === "clothing") {
        toggleIsScrolling();
        setImageViewerData({ images: images.clothing, show: true });
      }
    }
  };

  const handleImagesSelection = (title: string) => {
    const Type1 = "sumeet kumar paul";
    const Type2 = "emotion";
    const Type3 = "agewear lifestyle";
    const Type4 = "authentication";
    // check
    if (title.toLowerCase() === Type1) {
      handleImages("portfolio");
    }
    if (title.toLowerCase() === Type2) {
      handleImages("emotion");
    }
    if (title.toLowerCase() === Type3) {
      handleImages("clothing");
    }
    if (title.toLowerCase() === Type4) {
      handleImages("authentication");
    }
  };

  return (
    <section
      onMouseMove={manageMouseMove}
      className="work-image-zoom flex h-[60vw] items-start max-size:h-[45vw]"
    >
      <MotionButton
        ref={FirstImage}
        name="work_zoom_card_button"
        whileTap={{ scale: 0.95 }}
        variants={FirstImageSlideUp}
        onClick={() => handleImagesSelection(projects[0].title)}
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
        onClick={() => handleImagesSelection(projects[1].title)}
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
