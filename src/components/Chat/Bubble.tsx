"use client";

import {
  Variants,
  Transition,
  AnimatePresence,
  useMotionValue,
} from "framer-motion";
import { MotionDiv } from "utils/FramerMotion";
import SecondBubble from "./SecondBubble";
import FirstBubble from "./FirstBubble";
import TextMessage from "./TextMessage";
import { useEffect, useRef } from "react";

const Transition: Transition = {
  type: "spring",
  duration: 0.3,
  damping: 10,
};

const ChildVariant: Variants = {
  nothing: {
    y: 30,
    opacity: 0,
  },
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 30,
    opacity: 0,
  },
};

export default function ChatBubble({
  content,
  animate,
  onAnimationComplete,
}: {
  content: string[];
  animate: "open" | "closed" | "nothing";
  onAnimationComplete: () => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  const StaggerVariant: Variants = {
    open: {
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -3,
      },
    },
    closed: {
      transition: { staggerChildren: 0.1 },
    },
  };

  return (
    <AnimatePresence mode="wait">
      <MotionDiv
        initial="closed"
        animate={animate}
        ref={containerRef}
        variants={StaggerVariant}
        onAnimationComplete={onAnimationComplete}
        className="flex h-auto w-full flex-col items-start justify-start transition-all lg:ml-8 lg:mr-auto lg:max-w-[60%] screen-1410:-ml-2.5"
      >
        <SecondBubble transition={Transition} variants={ChildVariant}>
          <TextMessage>{content[0]}</TextMessage>
        </SecondBubble>
        <SecondBubble transition={Transition} variants={ChildVariant}>
          <TextMessage>{content[1]}</TextMessage>
        </SecondBubble>
        <FirstBubble transition={Transition} variants={ChildVariant}>
          <TextMessage>{content[2]}</TextMessage>
        </FirstBubble>
      </MotionDiv>
    </AnimatePresence>
  );
}
