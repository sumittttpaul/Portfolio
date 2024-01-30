"use client";

import { Variants, useInView } from "framer-motion";
import { useRef } from "react";
import { MotionDiv } from "utils/FramerMotion";

const opacity: Variants = {
  initial: {
    opacity: 0,
  },
  open: {
    opacity: 1,
    transition: { duration: 0.5 },
  },
  closed: {
    opacity: 0,
    transition: { duration: 0.5 },
  },
};

const slideUp: Variants = {
  initial: {
    y: "15px",
  },
  open: {
    y: "0px",
    transition: { duration: 0.3 },
  },
  closed: {
    y: "15px",
    transition: { duration: 0.3 },
  },
};

export default function DivInViewAnimation({
  Animation,
  className,
  children,
  animationConfig,
}: {
  Animation: "Opacity" | "Slide";
  children: React.ReactNode;
  className?: string;
  duration?: number;
  animationConfig?: {
    start: string | number;
    end: string | number;
    duration?: number;
  };
}) {
  const ContainerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ContainerRef);

  const slideUp: Variants = {
    initial: {
      y: animationConfig?.start ?? "15%",
    },
    open: {
      y: animationConfig?.end ?? "0%",
      transition: { duration: animationConfig?.duration ?? 0.5 },
    },
    closed: {
      y: animationConfig?.start ?? "15%",
      transition: { duration: animationConfig?.duration ?? 0.5 },
    },
  };

  return (
    <>
      {Animation === "Opacity" && (
        <MotionDiv
          ref={ContainerRef}
          variants={opacity}
          animate={isInView ? "open" : "closed"}
          className={className}
        >
          {children}
        </MotionDiv>
      )}
      {Animation === "Slide" && (
        <MotionDiv
          ref={ContainerRef}
          variants={slideUp}
          animate={isInView ? "open" : "closed"}
          className={className}
        >
          {children}
        </MotionDiv>
      )}
    </>
  );
}
