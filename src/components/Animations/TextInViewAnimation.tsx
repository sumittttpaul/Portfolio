"use client";

import { Variants, useInView } from "framer-motion";
import { useRef } from "react";
import { MotionSpan } from "utils/FramerMotion";

const slideUp: Variants = {
  initial: {
    y: "100%",
  },
  open: (i) => ({
    y: "0%",
    transition: { duration: 0.5, delay: 0.01 * i },
  }),
  closed: {
    y: "100%",
    transition: { duration: 0.5 },
  },
};

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

export default function TextInViewAnimation({
  children,
  Animation,
  className,
}: {
  children: string;
  Animation: "Opacity" | "Word";
  className?: string;
}) {
  const ContainerRef = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ContainerRef);
  return (
    <div ref={ContainerRef} className="flex w-full">
      {Animation === "Word" && (
        <p className="text-in-view">
          {children
            .toString()
            .split(" ")
            .map((word, index) => {
              return (
                <span
                  key={index}
                  className="relative inline-flex overflow-hidden"
                >
                  <MotionSpan
                    variants={slideUp}
                    custom={index}
                    animate={isInView ? "open" : "closed"}
                    key={index}
                  >
                    {word}
                  </MotionSpan>
                </span>
              );
            })}
        </p>
      )}
      {Animation === "Opacity" && (
        <p className="text-[1em] md:text-[1.3em]">
          <span className="relative inline-flex overflow-hidden">
            <MotionSpan
              variants={opacity}
              animate={isInView ? "open" : "closed"}
              className={className}
            >
              {children}
            </MotionSpan>
          </span>
        </p>
      )}
    </div>
  );
}
