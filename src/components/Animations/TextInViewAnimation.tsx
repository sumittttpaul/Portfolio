"use client";

import { Variants, useInView, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";
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
  const ContainerView = useInView(ContainerRef, { amount: 0.5 });
  const [isInView, setIsInView] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      const container = ContainerRef.current;
      const previous = scrollY.getPrevious() ?? 0;
      if (container) {
        if (latest < 0) return;
        if (previous - latest < 0 && ContainerView) setIsInView(true);
        if (latest < container.offsetTop && !ContainerView) setIsInView(false);
      }
    });
  }, [scrollY, ContainerView]);

  return (
    <span ref={ContainerRef} className="relative flex w-full">
      {Animation === "Word" && (
        <span className={className}>
          {children
            .toString()
            .split(" ")
            .map((word, index) => {
              return (
                <span
                  key={`TextInView_Letters_${index}`}
                  className="relative inline-flex overflow-hidden"
                >
                  <MotionSpan
                    variants={slideUp}
                    custom={index}
                    animate={isInView ? "open" : "closed"}
                  >
                    {word}
                  </MotionSpan>
                </span>
              );
            })}
        </span>
      )}
      {Animation === "Opacity" && (
        <span className={className}>
          <span className="relative inline-flex overflow-hidden">
            <MotionSpan
              variants={opacity}
              animate={isInView ? "open" : "closed"}
            >
              {children}
            </MotionSpan>
          </span>
        </span>
      )}
    </span>
  );
}
