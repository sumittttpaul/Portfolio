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
    y: "15%",
  },
  open: {
    y: "0%",
    transition: { duration: 0.5 },
  },
  closed: {
    y: "15%",
    transition: { duration: 0.5 },
  },
};

export default function DivInViewAnimation({
  Animation,
  className,
  children,
}: {
  Animation: "Opacity" | "Slide";
  className: string;
  children: React.ReactNode;
}) {
  const ContainerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ContainerRef);
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
