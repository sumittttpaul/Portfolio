"use client";

import { Dispatch, SetStateAction } from "react";
import { MotionDiv } from "utils/FramerMotion";

const transition = { duration: 1, ease: [0.76, 0, 0.24, 1] };

const menuBG = {
  initial: {
    opacity: 0,
  },
  open: {
    opacity: 1,
    transition,
  },
  closed: {
    opacity: 0,
    transition,
  },
};

export default function NavBackground({
  setIsActive,
}: {
  setIsActive: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <MotionDiv
      variants={menuBG}
      initial="initial"
      animate="open"
      exit="closed"
      onClick={() => setIsActive(false)}
      className="fixed right-0 top-0 z-[2] h-[100dvh] w-full bg-black/50 sm:bg-transparent sm:bg-gradient-to-l sm:from-black/30"
    />
  );
}
