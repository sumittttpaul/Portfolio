"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useHeaderColorState } from "utils/Zustand";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import RoundedButton from "components/RoundedButton";
import Magnetic from "components/Magnetic";
import dynamic from "next/dynamic";
import Link from "next/link";
import { gsap } from "gsap";

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
    if (pathname === "/") ChangeColor("White");
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

  useEffect(() => {
    if (window.innerWidth > 640) {
      (async () => {
        const LocomotiveScroll = (await import("locomotive-scroll")).default;
        const locomotiveScroll = new LocomotiveScroll();
      })();
    }
  }, []);

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
        className="absolute top-0 z-[2] box-border flex w-full items-center justify-between px-2 py-[25px] transition-transform duration-300 ease-[cubic-bezier(0.7,0,0.2,1)] sm:px-[35px]"
      >
        <Magnetic>
          <Link
            href="/"
            scroll={false}
            className="header-logo group flex h-[50px] cursor-pointer items-center justify-center px-2.5"
          >
            <p className="header-logo-copyright header-logo-transition-all relative text-[20px] text-base font-[300]">
              ©
            </p>
            <div className="header-logo-transition-all relative ml-[5px] flex h-[28px] items-center overflow-hidden whitespace-nowrap sm:items-end sm:pr-0 sm:group-hover:pr-[30px]">
              <p className="header-logo-transition-transform relative text-[15px] font-[500] sm:text-[17px] sm:group-hover:-translate-x-[72px]">
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
              className="relative z-[1] flex cursor-pointer items-center space-x-2 p-[15px] text-[15px] font-[500] sm:text-[17px]"
            >
              <div
                style={{ backgroundColor: HeaderColor.Color }}
                className="header-logo-transition-all h-[6px] w-[6px] scale-100 rounded-[50%]"
              />
              <p className="cursor-pointer">Menu</p>
            </button>
          </Magnetic>
        </div>
      </div>
      <div ref={button} className="fixed right-0 z-[4] scale-0">
        <RoundedButton
          disableHoverEffectOnMobile
          onClick={() => {
            setIsActive(!isActive);
          }}
          className={`relative m-[20px] flex h-[80px] w-[80px] cursor-pointer items-center justify-center rounded-[50%] ${
            isActive ? "bg-near-blue" : "bg-almost-black"
          } transition-colors duration-300`}
        >
          <div
            className={`relative z-[1] w-full ${
              isActive ? "header-burger-active" : ""
            } header-burger`}
          ></div>
        </RoundedButton>
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
