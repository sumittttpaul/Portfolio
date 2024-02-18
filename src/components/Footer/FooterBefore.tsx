"use client";

import { useScroll, useTransform } from "framer-motion";
import { MotionDiv } from "utils/FramerMotion";
import { useRef } from "react";

export default function FooterBefore() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);
  return (
    <div ref={container} className="relative z-[1] flex flex-col bg-white">
      <MotionDiv style={{ height }} className="relative bg-white">
        <div className="sm:footer-shadow absolute -left-[10%] -top-[200%] z-[1] h-[400%] w-[120%] rounded-b-[50%] bg-white sm:top-0 sm:h-[1550%]" />
      </MotionDiv>
    </div>
  );
}
