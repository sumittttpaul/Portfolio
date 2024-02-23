import MessageBubbleTop from "../../../public/icons/message-bubble-top.svg";
import { Transition, Variants } from "framer-motion";
import { MotionDiv } from "utils/FramerMotion";
import Image from "next/image";

export default function FirstBubble({
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
      className="mb-1 flex w-full flex-col items-start lg:mb-1.5"
    >
      <Image
        width={38}
        height={18}
        alt="message_bubble"
        src={MessageBubbleTop}
        className="rotate-180 -scale-x-[1] -scale-y-[1] opacity-[.89]"
      />
      <div className="rounded-r-[1.5em] rounded-bl-[1.5em] sm:rounded-r-[2em] sm:rounded-bl-[2em] bg-almost-black px-5 py-4 sm:px-7 sm:py-6">
        {children}
      </div>
    </MotionDiv>
  );
}
