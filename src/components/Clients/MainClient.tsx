"use client";

import { useEffect } from "react";
import { MotionMain } from "utils/FramerMotion";

export default function MainClient({
  children,
  className,
  device,
}: {
  children?: React.ReactNode;
  className?: string;
} & DeviceType) {
  const { isMobile } = device;
  const slideUp = {
    initial: {
      y: isMobile ? 125 : 300,
    },
    enter: {
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.33, 1, 0.68, 1],
        delay: 0.6,
      },
    },
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.style.setProperty("--body-color", "#ffffff");
  }, []);

  return (
    <MotionMain
      variants={slideUp}
      initial="initial"
      animate="enter"
      className={className}
    >
      {children}
    </MotionMain>
  );
}
