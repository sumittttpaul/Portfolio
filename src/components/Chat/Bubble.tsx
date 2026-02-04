"use client";

import { Variants, type Transition, AnimatePresence } from "framer-motion";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import SimpleImageBubble from "./SimpleImageBubble";
import { MotionDiv } from "utils/FramerMotion";
import PointsBubble from "./PointsBubble";
import SecondBubble from "./SecondBubble";
import FirstBubble from "./FirstBubble";
import TextMessage from "./TextMessage";
import ImageBubble from "./ImageBubble";
import Link from "next/link";
import Image from "next/image";

import InstagramPhoto from "../../../public/images/socials/instagram_round_small_white.png";
import FacebookPhoto from "../../../public/images/socials/facebook_round_small_white.png";
import LinkedinPhoto from "../../../public/images/socials/linkedin_round_small_white.png";
import TwitterPhoto from "../../../public/images/socials/twitter_round_small_white.png";
import ThreadPhoto from "../../../public/images/socials/thread_round_small_white.png";
import Kalinga_Photo from "../../../public/images/about/kalinga_photo.png";

const Transition: Transition = {
  type: "spring",
  duration: 0.3,
  damping: 10,
};

const ChildVariant: Variants = {
  nothing: {
    y: 30,
    opacity: 0,
  },
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 30,
    opacity: 0,
  },
};

export default function ChatBubble({
  device,
  content,
  animate,
  onAnimationComplete,
}: {
  content: string[];
  onAnimationComplete: () => void;
  animate: AboutBubbleAnimateType;
} & DeviceType) {
  const { isMobile, isDesktop } = device;

  const StaggerVariant: Variants = {
    open: {
      transition: {
        staggerChildren: 0.1,
        staggerDirection: 1,
      },
    },
    closed: {
      transition: { staggerChildren: 0.1 },
    },
    height: {
      transition: { type: "tween", duration: 0.2 },
    },
  };

  return (
    <AnimatePresence mode="wait">
      <MotionDiv
        initial="closed"
        animate={animate}
        variants={StaggerVariant}
        onAnimationComplete={onAnimationComplete}
        className="flex h-auto w-full flex-col items-start justify-center lg:mr-auto lg:max-w-[60%]"
      >
        {content.length > 3 && content[0].toLowerCase() !== "contact" && (
          <FirstBubble transition={Transition} variants={ChildVariant}>
            <TextMessage>{content[1]}</TextMessage>
          </FirstBubble>
        )}
        {content[0].toLowerCase() === "contact" && (
          <FirstBubble transition={Transition} variants={ChildVariant}>
            <TextMessage>{content[1]}</TextMessage>
            <div className="mt-4 flex w-full flex-col items-start justify-center space-y-4">
              <span className="flex items-center space-x-3">
                <EnvelopeIcon className="h-5 w-5 text-white" />
                <Link
                  href={`mailto:${content[2]}`}
                  className="text-pretty text-xs text-sky-400 transition-colors duration-200 ease-in hover:text-white/50 xs:text-sm sm:text-base"
                >
                  {content[2]}
                </Link>
              </span>
              <span className="flex items-center space-x-3">
                <PhoneIcon className="h-5 w-5 text-white" />
                <Link
                  href={`tel:${content[3]}`}
                  className="text-pretty text-xs text-sky-400 transition-colors duration-200 ease-in hover:text-white/50 xs:text-sm sm:text-base"
                >
                  {content[3]}
                </Link>
              </span>
            </div>
          </FirstBubble>
        )}
        {content[0].toLowerCase() !== "contact" && (
          <SecondBubble transition={Transition} variants={ChildVariant}>
            <TextMessage>{content[content.length > 3 ? 2 : 1]}</TextMessage>
          </SecondBubble>
        )}
        {content[0].toLowerCase() === "education" && (
          <>
            <PointsBubble transition={Transition} variants={ChildVariant}>
              <TextMessage>{content[3]}</TextMessage>
              <TextMessage>{content[4]}</TextMessage>
              <TextMessage>{content[5]}</TextMessage>
              <TextMessage>{content[6]}</TextMessage>
              <TextMessage>{content[7]}</TextMessage>
            </PointsBubble>
            <SecondBubble transition={Transition} variants={ChildVariant}>
              <TextMessage>{content[8]}</TextMessage>
            </SecondBubble>
          </>
        )}
        {content[0].toLowerCase() === "contact" && (
          <SecondBubble transition={Transition} variants={ChildVariant}>
            <TextMessage>{content[4]}</TextMessage>
            <div className="mt-4 flex w-full flex-col items-start justify-center space-y-4">
              <span className="flex items-center space-x-3">
                <Image
                  height={20}
                  width={20}
                  src={LinkedinPhoto}
                  alt="social_icon"
                />
                <Link
                  href="https://www.linkedin.com/in/sumitttpaul/"
                  className="z-[1] text-pretty text-xs text-sky-400 transition-colors duration-200 ease-in hover:text-white/50 xs:text-sm sm:text-base"
                >
                  {content[5]}
                </Link>
              </span>
              <span className="flex items-center space-x-3">
                <Image
                  height={20}
                  width={20}
                  src={InstagramPhoto}
                  alt="social_icon"
                />
                <Link
                  href="https://www.instagram.com/sumitttpaul_"
                  className="z-[1] text-pretty text-xs text-sky-400 transition-colors duration-200 ease-in hover:text-white/50 xs:text-sm sm:text-base"
                >
                  {content[6]}
                </Link>
              </span>
              <span className="flex items-center space-x-3">
                <Image
                  height={20}
                  width={20}
                  src={FacebookPhoto}
                  alt="social_icon"
                />
                <Link
                  href="https://www.facebook.com/sumitttpaul"
                  className="z-[1] text-pretty text-xs text-sky-400 transition-colors duration-200 ease-in hover:text-white/50 xs:text-sm sm:text-base"
                >
                  {content[7]}
                </Link>
              </span>
              <span className="flex items-center space-x-3">
                <Image
                  height={20}
                  width={20}
                  src={TwitterPhoto}
                  alt="social_icon"
                />
                <Link
                  href="https://x.com/sumitttpaul_"
                  className="z-[1] text-pretty text-xs text-sky-400 transition-colors duration-200 ease-in hover:text-white/50 xs:text-sm sm:text-base"
                >
                  {content[8]}
                </Link>
              </span>
              <span className="flex items-center space-x-3">
                <Image
                  height={20}
                  width={20}
                  src={ThreadPhoto}
                  alt="social_icon"
                />
                <Link
                  href="https://www.threads.net/@_sumitttpaul"
                  className="z-[1] text-pretty text-xs text-sky-400 transition-colors duration-200 ease-in hover:text-white/50 xs:text-sm sm:text-base"
                >
                  {content[9]}
                </Link>
              </span>
            </div>
          </SecondBubble>
        )}
        {content[0].toLowerCase() !== "education" &&
          content[0].toLowerCase() !== "contact" && (
            <SecondBubble transition={Transition} variants={ChildVariant}>
              <TextMessage>{content[content.length > 3 ? 3 : 2]}</TextMessage>
            </SecondBubble>
          )}
        {isMobile && content[0].toLowerCase() === "education" && (
          <SimpleImageBubble
            imgSrc={Kalinga_Photo}
            transition={Transition}
            variants={ChildVariant}
            size={{ height: 332, width: 700 }}
          />
        )}
        {isDesktop && content[0].toLowerCase() === "education" && (
          <ImageBubble
            imgSrc={Kalinga_Photo}
            transition={Transition}
            variants={ChildVariant}
            size={{ height: 332, width: 700 }}
          />
        )}
      </MotionDiv>
    </AnimatePresence>
  );
}
