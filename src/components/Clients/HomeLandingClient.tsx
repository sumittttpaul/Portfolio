"use client";

import { useEffect } from "react";
import { MotionSection } from "utils/FramerMotion";
import { usePreloaderState } from "utils/Zustand";

export default function HomeLandingClient({
  children,
  className,
  device,
}: {
  children?: React.ReactNode;
  className?: string;
} & DeviceType) {
  const { Visible, Start } = usePreloaderState();
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
        delay: Visible ? 0 : 0.6,
      },
    },
  };

  useEffect(() => {
    if (window.innerWidth > 640) {
      document.documentElement.style.setProperty("--body-color", "#000000");
    } else {
      document.documentElement.style.setProperty("--body-color", "#ffffff");
    }
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    console.log(Start);
  }, [Start]);

  return (
    <MotionSection
      variants={slideUp}
      initial="initial"
      animate={Start ? "enter" : ""}
      className={className}
    >
      {children}
    </MotionSection>
  );
}
