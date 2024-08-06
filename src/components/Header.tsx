"use client";

import RoundedMagneticButton from "components/Magnetic/RoundedMagneticButton";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Magnetic from "components/Magnetic";
import dynamic from "next/dynamic";
import Link from "next/link";
import { gsap } from "gsap";

gsap.config({ nullTargetWarn: false });

const SMWidth = 640;

const Nav = dynamic(() => import("components/Nav"));
const NavBackground = dynamic(() => import("components/Nav/Background"));

export default function Header() {
  const [isActive, setIsActive] = useState(false);
  const [device, setDevice] = useState<{
    isMobile?: boolean;
    isDesktop?: boolean;
  }>({ isMobile: undefined, isDesktop: undefined });
  const header = useRef<HTMLDivElement>(null);
  const button = useRef<HTMLDivElement>(null);
  const { isMobile, isDesktop } = device;
  const pathname = usePathname();

  const valuePath = (route: string) => {
    if (route === "/") return true;
    if (route === "/work") return true;
    if (route === "/about") return true;
    if (route === "/contact") return true;
    else return false;
  };

  const ChangeColor = (color: "Black" | "White") => {
    const _document = document.documentElement;
    const property = "--header-color";
    const black = "#000000";
    const white = "#ffffff";
    setTimeout(() => {
      if (color === "Black") _document.style.setProperty(property, black);
      if (color === "White") _document.style.setProperty(property, white);
    }, 1000);
  };

  useEffect(() => {
    setDevice({
      isMobile: window.innerWidth < SMWidth,
      isDesktop: window.innerWidth > SMWidth,
    });
  }, []);

  useEffect(() => {
    if (isActive) setTimeout(() => setIsActive(false), 1000);
    if (pathname == "/" && window.innerWidth > SMWidth) ChangeColor("White");
    else if (pathname == "/" && window.innerWidth < SMWidth)
      ChangeColor("Black");
    else if (pathname == "/work") ChangeColor("Black");
    else if (pathname == "/about") ChangeColor("Black");
    else if (pathname == "/contact") ChangeColor("Black");
    else ChangeColor("Black");
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
          window.innerWidth > SMWidth && setIsActive(false);
        },
      },
    });
  }, []);

  if (valuePath(pathname)) {
    return (
      <header>
        <div
          ref={header}
          className="header-color absolute top-0 z-[2] box-border flex w-full items-center justify-between px-2 py-[17px] transition-transform duration-300 ease-[cubic-bezier(0.7,0,0.2,1)] xs:py-[25px] sm:px-[35px]"
        >
          <Magnetic device={device}>
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
          {isDesktop && (
            <div className="header-logo-transition-all hidden h-[50px] items-center sm:flex">
              <HorizontalNav device={device} pathname={pathname} href="/work">
                Work
              </HorizontalNav>
              <HorizontalNav device={device} pathname={pathname} href="/about">
                About
              </HorizontalNav>
              <HorizontalNav
                device={device}
                pathname={pathname}
                href="/contact"
              >
                Contact
              </HorizontalNav>
            </div>
          )}
          {isMobile && (
            <div className="flex h-[50px] items-center sm:hidden">
              <Magnetic device={device}>
                <button
                  name="menu_mobile_button"
                  onClick={() => setIsActive(true)}
                  className="relative z-[1] flex cursor-pointer items-center space-x-1.5 p-[15px] text-[13px] font-bold xs:space-x-2 xs:text-[15px] sm:text-[17px] sm:font-[500]"
                >
                  <div className="header-logo-transition-all header-bg-color h-[5px] w-[5px] scale-100 rounded-[50%] xs:h-[6px] xs:w-[6px]" />
                  <p className="cursor-pointer">Menu</p>
                </button>
              </Magnetic>
            </div>
          )}
        </div>
        <div ref={button} className="fixed right-0 z-[6] scale-0">
          <RoundedMagneticButton
            name="nav_menu_button"
            device={device}
            onClick={() => setIsActive(!isActive)}
            className={`menu-button-border relative m-[12px] xs:m-[14px] flex h-[62px] w-[62px] cursor-pointer items-center justify-center rounded-[50%] md:m-[25px] xs:h-[65px] xs:w-[65px] sm:h-[80px] sm:w-[80px] xl:h-[100px] xl:w-[100px] ${
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
              <Nav device={device} setIsActive={setIsActive} />
            </>
          )}
        </AnimatePresence>
      </header>
    );
  }
}

function HorizontalNav({
  children,
  href,
  pathname,
  device,
}: {
  children?: React.ReactNode;
  href: string;
  pathname: string;
} & DeviceType) {
  return (
    <Magnetic device={device}>
      <div className="group relative z-[1] flex cursor-pointer flex-col p-[15px] text-[17px] font-[500]">
        <Link href={href} className="cursor-pointer" scroll={false}>
          {children}
        </Link>
        <div
          className={`${
            pathname == href ? "scale-100" : "sm:group-hover:scale-100"
          } header-logo-transition-all header-bg-color absolute left-[50%] top-[45px] h-[6px] w-[6px] -translate-x-[50%] scale-0 rounded-[50%]`}
        />
      </div>
    </Magnetic>
  );
}
