"use client";

import { Dispatch, SetStateAction, useState } from "react";
import { usePathname } from "next/navigation";
import { MotionDiv } from "utils/FramerMotion";
import NavLink from "components/Nav/Link";
import NavCurve from "components/Nav/Curve";
import NavFooter from "components/Nav/Footer";

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Work",
    href: "/work",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

const menuSlide = {
  initial: { x: "calc(100% + 100px)" },
  enter: { x: "0", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
  exit: {
    x: "calc(100% + 100px)",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
  },
};

export default function Nav({
  setIsActive,
}: {
  setIsActive: Dispatch<SetStateAction<boolean>>;
}) {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <MotionDiv
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className="fixed right-0 top-0 z-[5] h-screen w-full bg-almost-black text-white sm:w-[550px]"
    >
      <div className="box-border flex h-full flex-col justify-between p-5 sm:p-[100px]">
        <div
          onMouseLeave={() => {
            setSelectedIndicator(pathname);
          }}
          className="mt-[100px] flex flex-col gap-[2.5px] text-[30px] xs:gap-[5px] xs:text-[36px] sm:mt-[80px] sm:text-[46px]"
        >
          <div className="second-gray mb-[40px] border-b-[1px] border-solid border-white/20 pb-5 text-[10px] font-medium uppercase text-second-gray xs:text-xs sm:pb-10">
            <p>Navigation</p>
          </div>
          {navItems.map((data, index) => {
            return (
              <NavLink
                key={`Nav_Link_${index}`}
                data={{ ...data, index }}
                isActive={selectedIndicator == data.href}
                setSelectedIndicator={setSelectedIndicator}
              ></NavLink>
            );
          })}
        </div>
        <NavFooter />
      </div>
      <NavCurve setIsActive={setIsActive} />
    </MotionDiv>
  );
}
