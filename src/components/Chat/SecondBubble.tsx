import { Transition, Variants } from "framer-motion";
import { MotionDiv } from "utils/FramerMotion";

export default function SecondBubble({
  children,
  variants,
  transition,
}: {
  variants: Variants;
  transition: Transition;
  children: React.ReactNode;
}) {
  return (
    <MotionDiv
      variants={variants}
      transition={transition}
      className="mb-1 h-auto w-auto rounded-[2em] bg-almost-black px-5 py-4 sm:px-7 sm:py-6 lg:mb-1.5 lg:ml-[28px] lg:rounded-[2.25em]"
    >
      {children}
    </MotionDiv>
  );
}
