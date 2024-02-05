"use client";

import { useEffect } from "react";
import { MotionSection } from "utils/FramerMotion";
import { usePreloaderState } from "utils/Zustand";

export default function HomeLandingClient({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  const preloader = usePreloaderState();
  const slideUp = {
    initial: {
      y: 300,
    },
    enter: {
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.33, 1, 0.68, 1],
        delay: preloader.Visible ? 2.7 : 0.6,
      },
    },
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    if (window.innerWidth > 640) {
      document.documentElement.style.setProperty("--body-color", "#000000");
    } else {
      document.documentElement.style.setProperty("--body-color", "#ffffff");
    }
  }, []);

  return (
    <MotionSection
      variants={slideUp}
      initial="initial"
      animate="enter"
      className={className}
    >
      {children}
    </MotionSection>
  );
}
