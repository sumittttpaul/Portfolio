import { Transition, Variants } from "framer-motion";
import { MotionDiv } from "utils/FramerMotion";

export default function PointsBubble({
  children,
  variants,
  transition,
}: {
  children: React.ReactNode;
  variants: Variants;
  transition: Transition;
}) {
  return (
    <MotionDiv
      variants={variants}
      transition={transition}
      className="mb-1 h-auto w-auto rounded-[1.5em] bg-almost-black px-5 py-4 sm:rounded-[2em] sm:px-7 sm:py-6 lg:mb-1.5 lg:rounded-[2.25em]"
    >
      {children}
    </MotionDiv>
  );
}
