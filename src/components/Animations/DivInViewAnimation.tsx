"use client";

import { Variants, useInView, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";
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
  const ContainerView = useInView(ContainerRef, { amount: 0.5 });
  const [isInView, setIsInView] = useState(false);
  const { scrollY } = useScroll();

  const slideUp: Variants = {
    initial: {
      opacity: 0,
      y: animationConfig?.start ?? "15%",
    },
    open: {
      opacity: 1,
      y: animationConfig?.end ?? "0%",
      transition: { duration: animationConfig?.duration ?? 0.5 },
    },
    closed: {
      opacity: 0,
      y: animationConfig?.start ?? "15%",
      transition: { duration: animationConfig?.duration ?? 0.5 },
    },
  };

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      const container = ContainerRef.current;
      const previous = scrollY.getPrevious();
      if (container) {
        if (latest < 0) return;
        if (previous - latest < 0 && ContainerView) setIsInView(true);
        if (latest < container.offsetTop && !ContainerView) setIsInView(false);
      }
    });
  }, [scrollY, ContainerView]);

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
