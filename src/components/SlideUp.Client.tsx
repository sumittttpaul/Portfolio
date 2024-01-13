"use client";

import { useEffect } from "react";
import { MotionMain } from "utils/FramerMotion";

export default function SlideUpClient({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const slideUp = {
    initial: {
      y: 300,
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
