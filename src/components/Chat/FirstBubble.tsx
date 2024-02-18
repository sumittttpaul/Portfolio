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
      className="flex w-full flex-col items-start lg:flex-row lg:items-end"
    >
      <Image
        width={38}
        height={18}
        alt="message_bubble"
        src={MessageBubbleTop}
        className="order-2 rotate-180 scale-x-[-1] lg:order-1 lg:-rotate-90 lg:scale-x-[1]"
      />
      <div className="order-1 rounded-r-[2em] rounded-tl-[2em] bg-almost-black px-5 py-4 sm:px-7 sm:py-6 lg:order-2 lg:-mb-2.5 lg:-ml-2.5 lg:rounded-r-[2.25em] lg:rounded-tl-[2.25em]">
        {children}
      </div>
    </MotionDiv>
  );
}
