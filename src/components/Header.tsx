"use client";

import RoundedMagneticButton from "components/Magnetic/RoundedMagneticButton";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useHeaderColorState } from "utils/Zustand";
import { AnimatePresence, useScroll } from "framer-motion";
import { usePathname } from "next/navigation";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Magnetic from "components/Magnetic";
import dynamic from "next/dynamic";
import Link from "next/link";
import { gsap } from "gsap";

// gsap.config({ nullTargetWarn: false });

const Nav = dynamic(() => import("components/Nav"), { ssr: false });
const NavBackground = dynamic(() => import("components/Nav/Background"), {
  ssr: false,
});

export default function Header() {
  const [isActive, setIsActive] = useState(false);
  const header = useRef<HTMLDivElement>(null);
  const button = useRef<HTMLDivElement>(null);
  const HeaderColor = useHeaderColorState();
  const pathname = usePathname();

  const ChangeColor = (color: "Black" | "White") => {
    setTimeout(() => {
      HeaderColor.toggleColor(color);
    }, 1000);
  };

  useEffect(() => {
    if (isActive) setIsActive(false);
    if (pathname === "/" && window.innerWidth > 640) ChangeColor("White");
    else if (pathname === "/") ChangeColor("Black");
    if (pathname === "/work") ChangeColor("Black");
    if (pathname === "/about") ChangeColor("Black");
    if (pathname === "/contact") ChangeColor("Black");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useEffect(() => {
    if (isActive) {
      ScrollTrigger.disable();
      if (document.documentElement.scrollTop < 300) {
        gsap.to(button.current, {
          scale: 1,
          duration: 0.25,
          ease: "power1.out",
        });
      }
    } else {
      ScrollTrigger.enable();
      if (document.documentElement.scrollTop < 300) {
        gsap.to(button.current, {
          scale: 0,
          duration: 0.25,
          ease: "power1.out",
        });
      }
    }
  }, [isActive]);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(button.current, {
      scrollTrigger: {
        id: "nav-button-scroll-trigger",
        trigger: document.documentElement,
        start: 0,
        end: 300,
        onLeave: () => {
          gsap.to(button.current, {
            scale: 1,
            duration: 0.25,
            ease: "power1.out",
          });
        },
        onEnterBack: () => {
          gsap.to(button.current, {
            scale: 0,
            duration: 0.25,
            ease: "power1.out",
          });
          window.innerWidth > 640 && setIsActive(false);
        },
      },
    });
  }, []);

  return (
    <header>
      <div
        ref={header}
        style={{ color: HeaderColor.Color }}
        className="absolute top-0 z-[2] box-border flex w-full items-center justify-between px-2 py-[17px] transition-transform duration-300 ease-[cubic-bezier(0.7,0,0.2,1)] xs:py-[25px] sm:px-[35px]"
      >
        <Magnetic>
          <Link
            href="/"
            scroll={false}
            className="header-logo group flex h-[50px] cursor-pointer items-center justify-center px-2.5"
          >
            <p className="header-logo-copyright header-logo-transition-all relative text-sm font-bold xs:text-base sm:font-[300]">
              ©
            </p>
            <div className="header-logo-transition-all relative ml-[4px] flex h-[28px] items-center overflow-hidden whitespace-nowrap xs:ml-[5px] sm:items-end sm:pr-0 sm:group-hover:pr-[30px]">
              <p className="header-logo-transition-transform relative text-[13px] font-bold xs:text-[15px] sm:text-[17px] sm:font-[500] sm:group-hover:-translate-x-[72px]">
                <span>Code by Sumeet</span>
                <span className="absolute left-[139px]"> Kumar Paul</span>
              </p>
            </div>
          </Link>
        </Magnetic>
        <div className="header-logo-transition-all hidden h-[50px] items-center sm:flex">
          <HorizontalNav
            color={HeaderColor.Color}
            pathname={pathname}
            href="/work"
          >
            Work
          </HorizontalNav>
          <HorizontalNav
            color={HeaderColor.Color}
            pathname={pathname}
            href="/about"
          >
            About
          </HorizontalNav>
          <HorizontalNav
            color={HeaderColor.Color}
            pathname={pathname}
            href="/contact"
          >
            Contact
          </HorizontalNav>
        </div>
        <div className="flex h-[50px] items-center sm:hidden">
          <Magnetic>
            <button
              onClick={() => setIsActive(true)}
              className="relative z-[1] flex cursor-pointer items-center space-x-1.5 p-[15px] text-[13px] font-bold xs:space-x-2 xs:text-[15px] sm:text-[17px] sm:font-[500]"
            >
              <div
                style={{ backgroundColor: HeaderColor.Color }}
                className="header-logo-transition-all h-[5px] w-[5px] scale-100 rounded-[50%] xs:h-[6px] xs:w-[6px]"
              />
              <p className="cursor-pointer">Menu</p>
            </button>
          </Magnetic>
        </div>
      </div>
      <div ref={button} className="fixed right-0 z-[6] scale-0">
        <RoundedMagneticButton
          disableHoverEffectOnMobile
          onClick={() => setIsActive(!isActive)}
          className={`menu-button-border relative m-[14px] flex h-[62px] w-[62px] cursor-pointer items-center justify-center rounded-[50%] outline-none xs:m-[20px] xs:h-[65px] xs:w-[65px] sm:h-[80px] sm:w-[80px] ${
            isActive ? "bg-hover-blue" : "bg-almost-black"
          } transition-colors duration-300`}
        >
          <span
            className={`relative w-full ${
              isActive ? "header-burger-active" : ""
            } header-burger`}
          />
        </RoundedMagneticButton>
      </div>
      <AnimatePresence mode="wait">
        {isActive && (
          <>
            <NavBackground setIsActive={setIsActive} />
            <Nav setIsActive={setIsActive} />
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

function HorizontalNav({
  children,
  href,
  pathname,
  color,
}: {
  children?: React.ReactNode;
  href: string;
  pathname: string;
  color: string;
}) {
  return (
    <Magnetic>
      <div className="group relative z-[1] flex cursor-pointer flex-col p-[15px] text-[17px] font-[500]">
        <Link href={href} className="cursor-pointer" scroll={false}>
          {children}
        </Link>
        <div
          style={{ backgroundColor: color }}
          className={`${
            pathname == href ? "scale-100" : "sm:group-hover:scale-100"
          } header-logo-transition-all absolute left-[50%] top-[45px] h-[6px] w-[6px] -translate-x-[50%] scale-0 rounded-[50%]`}
        />
      </div>
    </Magnetic>
  );
}
