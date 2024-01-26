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

export default function DivInViewAnimation({
  ContainerClassName,
  ChildClassName,
  children,
}: {
  ContainerClassName: string;
  ChildClassName: string;
  children: React.ReactNode;
}) {
  const ContainerRef = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ContainerRef);
  return (
    <div ref={ContainerRef} className={ContainerClassName}>
      <MotionDiv
        variants={opacity}
        animate={isInView ? "open" : "closed"}
        className={ChildClassName}
      >
        {children}
      </MotionDiv>
    </div>
  );
}
