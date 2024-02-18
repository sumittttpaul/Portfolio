"use client";

import Sumit_Photo from "../../../public/images/sumit_photo.png";
import { MotionButton } from "utils/FramerMotion";
import {
  AnimatePresence,
  Transition,
  Variants,
  useMotionValue,
} from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useModalState } from "utils/Zustand";

const LGWidth = 1024;
const MaxWidth = 1410;

type AnimationType = "moveLeft" | "opacity";

export default function PhotoMotionButton({
  device,
  onAnimationComplete,
}: { onAnimationComplete: () => void } & DeviceType) {
  const [viewport, setViewport] = useState({ width: 0, height: 0 });
  const [Animation, setAnimation] = useState<AnimationType>();
  const [Delay, setDelay] = useState<boolean>(false);
  const { setPhotoShow } = useModalState();
  const { isMobile } = device;
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleClick = () => setPhotoShow(true);

  const onAnimationCompleted = () => {
    if (Animation === "moveLeft") {
      setDelay(false);
      onAnimationComplete();
    }
    if (Animation === "opacity") {
      setDelay(true);
      setAnimation("moveLeft");
    }
  };

  const Transition: Transition = {
    type: "tween",
    easings: ["easeIn", "easeOut"],
    duration: 0.35,
    delay: Delay ? 0.5 : 0,
  };

  const Variant: Variants = {
    initial: {
      opacity: 0,
      marginTop: 0,
      marginLeft: 0,
      height: isMobile ? 130 : 195,
      width: isMobile ? 130 : 195,
    },
    opacity: {
      opacity: 1,
    },
    moveLeft: {
      opacity: 1,
      marginTop: viewport.width > LGWidth ? -40 : -6,
      marginLeft: viewport.width > MaxWidth ? -44 : 0,
      height: isMobile ? 40 : 50,
      width: isMobile ? 40 : 50,
      x: 0,
      y: 0,
    },
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      x.set(window.innerWidth / 3);
      y.set(isMobile ? -window.innerHeight / 3 : -window.innerHeight / 3.5);
      setViewport({
        width: window.innerWidth,
        height: window.innerHeight,
      });
      setAnimation("opacity");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AnimatePresence mode="wait">
      <MotionButton
        type="button"
        style={{ x, y }}
        initial="initial"
        variants={Variant}
        animate={Animation}
        onClick={handleClick}
        transition={Transition}
        whileTap={{ scale: 0.9 }}
        name="about_photo_motion_button"
        aria-label="about_photo_motion_button"
        onAnimationComplete={onAnimationCompleted}
        className="relative z-[1] -mt-1.5 flex cursor-pointer rounded-full opacity-0 lg:-mt-10 screen-1410:-ml-11"
      >
        <Image
          priority
          src={Sumit_Photo}
          alt="Sumeet Kumar Paul"
          className="rounded-full"
          width={isMobile ? 130 : 195}
          height={isMobile ? 130 : 195}
        />
      </MotionButton>
    </AnimatePresence>
  );
}
