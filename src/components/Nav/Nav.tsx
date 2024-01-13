import {
  Dispatch,
  LegacyRef,
  RefObject,
  SetStateAction,
  useState,
} from "react";
import { usePathname } from "next/navigation";
import { MotionDiv } from "utils/FramerMotion";
import NavLink from "components/Nav/Nav.Link";
import NavCurve from "components/Nav/Nav.Curve";
import NavFooter from "components/Nav/Nav.Footer";
import RoundedButton from "components/RoundedButton";

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
  isActive,
  setIsActive,
}: {
  isActive: boolean;
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
      className="fixed right-0 top-0 z-[3] h-screen w-full bg-nav text-white sm:w-[500px]"
    >
      <div className="fixed right-0 z-[4] sm:hidden">
        <RoundedButton
          onClick={() => {
            setIsActive(!isActive);
          }}
          className={`relative m-[20px] flex h-[80px] w-[80px] cursor-pointer items-center justify-center rounded-[50%] ${
            isActive ? "bg-rounded-button-active" : ""
          } bg-nav-header-button-container transition-colors duration-300`}
        >
          <div
            className={`relative z-[1] w-full ${
              isActive ? "header-burger-active" : ""
            } header-burger`}
          ></div>
        </RoundedButton>
      </div>
      <div className="box-border flex h-full flex-col justify-between p-5 sm:p-[100px]">
        <div
          onMouseLeave={() => {
            setSelectedIndicator(pathname);
          }}
          className="mt-[100px] flex flex-col gap-[5px] text-[36px] sm:mt-[80px] sm:text-[46px]"
        >
          <div className="nav-header mb-[40px] border-b-[1px] border-solid border-white/20 pb-5 text-xs font-medium uppercase text-nav-header sm:pb-10">
            <p>Navigation</p>
          </div>
          {navItems.map((data, index) => {
            return (
              <NavLink
                key={index}
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
