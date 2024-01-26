import { MotionDiv } from "utils/FramerMotion";
import { Variants } from "framer-motion";
import { Dispatch, SetStateAction } from "react";
import Link from "next/link";
import Magnetic from "components/Magnetic";

export const slide: Variants = {
  initial: { x: 80 },
  enter: (i) => ({
    x: 0,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i },
  }),
  exit: (i) => ({
    x: 80,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i },
  }),
};

export const scale = {
  open: { scale: 1, transition: { duration: 0.3 } },
  closed: { scale: 0, transition: { duration: 0.4 } },
};

export default function NavLink({
  data,
  isActive,
  setSelectedIndicator,
}: {
  data: {
    title: string;
    href: string;
    index: number;
  };
  isActive: boolean;
  setSelectedIndicator: Dispatch<SetStateAction<string>>;
}) {
  const { title, href, index } = data;

  return (
    <MotionDiv
      className="relative flex w-full items-center"
      onMouseEnter={() => {
        setSelectedIndicator(href);
      }}
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <Magnetic>
        <div className="flex w-full items-center justify-between md:w-auto md:justify-start">
          <MotionDiv
            variants={scale}
            animate={isActive ? "open" : "closed"}
            className="order-2 mr-5 block h-[8px] w-[8px] rounded-[50%] bg-white xs:h-[10px] xs:w-[10px] md:absolute md:-left-[30px] md:order-1 md:mr-0"
          />
          <Link href={href} scroll={false} className=" order-1 md:order-2">
            {title}
          </Link>
        </div>
      </Magnetic>
    </MotionDiv>
  );
}
