import { MotionDiv, MotionSpan } from "utils/FramerMotion";
import { Variants } from "framer-motion";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
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
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  const { title, href, index } = data;

  const onMouseEnterMobile = () => {
    if (isMobile) setSelectedIndicator(href);
  };

  const onMouseEnterDesktop = () => {
    if (!isMobile) setSelectedIndicator(href);
  };

  useEffect(() => {
    if (window.innerWidth < 640) setIsMobile(true);
    else setIsMobile(false);
  }, []);

  return (
    <MotionDiv
      className="relative flex w-full items-center"
      onMouseEnter={onMouseEnterMobile}
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <ResponsiveLink
        href={href}
        isActive={isActive}
        title={title}
        isMobile={isMobile}
        onMouseEnterDesktop={onMouseEnterDesktop}
      />
    </MotionDiv>
  );
}

const ResponsiveLink = ({
  href,
  title,
  isActive,
  isMobile,
  onMouseEnterDesktop,
}: {
  href: string;
  title: string;
  isActive: boolean;
  isMobile: boolean | null;
  onMouseEnterDesktop: () => void;
}) => {
  if (isMobile === true) {
    return (
      <Magnetic>
        <Link
          href={href}
          scroll={false}
          className="flex w-full items-center justify-between sm:w-auto sm:justify-start"
        >
          <MotionSpan
            variants={scale}
            animate={isActive ? "open" : "closed"}
            className="order-2 mr-5 block h-[8px] w-[8px] rounded-[50%] bg-white xs:h-[10px] xs:w-[10px] sm:absolute sm:-left-[30px] sm:order-1 sm:mr-0"
          />
          <span className=" order-1 sm:order-2">{title}</span>
        </Link>
      </Magnetic>
    );
  }
  if (isMobile === false) {
    return (
      <Magnetic>
        <div
          onMouseEnter={onMouseEnterDesktop}
          className="flex w-full items-center justify-between sm:w-auto sm:justify-start"
        >
          <MotionSpan
            variants={scale}
            animate={isActive ? "open" : "closed"}
            className="order-2 mr-5 block h-[8px] w-[8px] rounded-[50%] bg-white xs:h-[10px] xs:w-[10px] sm:absolute sm:-left-[30px] sm:order-1 sm:mr-0"
          />
          <Link href={href} scroll={false} className=" order-1 sm:order-2">
            {title}
          </Link>
        </div>
      </Magnetic>
    );
  }
};
