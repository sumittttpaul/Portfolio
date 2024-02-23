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

type AnimationType = "moveLeft" | "opacity";

export default function PhotoMotionButton({
  device,
  onAnimationComplete,
}: { onAnimationComplete: () => void } & DeviceType) {
  const [Animation, setAnimation] = useState<AnimationType>();
  const [Delay, setDelay] = useState<boolean>(false);
  const { setPhotoShow } = useModalState();
  const { isMobile } = device;
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mt = useMotionValue(0);
  const ml = useMotionValue(0);

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
      height: isMobile ? 130 : 195,
      width: isMobile ? 130 : 195,
    },
    opacity: {
      opacity: 1,
    },
    moveLeft: {
      opacity: 1,
      height: isMobile ? 40 : 50,
      width: isMobile ? 40 : 50,
      x: 0,
      y: 0,
    },
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      x.set(
        window.innerWidth > 1024
          ? window.innerWidth / 3
          : window.innerWidth > 400
            ? window.innerWidth / 3.5
            : window.innerWidth / 3.75,
      );
      y.set(
        isMobile
          ? window.innerWidth > 400
            ? -window.innerHeight / 4 + 200
            : -window.innerHeight / 4 + 150
          : -window.innerHeight / 3.5 + 150,
      );
      setAnimation("opacity");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AnimatePresence mode="wait">
      <MotionButton
        type="button"
        style={{ x, y, marginTop: mt, marginLeft: ml }}
        initial="initial"
        variants={Variant}
        animate={Animation}
        onClick={handleClick}
        transition={Transition}
        whileTap={{ scale: 0.9 }}
        name="about_photo_motion_button"
        aria-label="about_photo_motion_button"
        onAnimationComplete={onAnimationCompleted}
        className="relative z-[1] flex cursor-pointer rounded-full opacity-0"
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
