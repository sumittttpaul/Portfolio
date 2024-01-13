"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useHeaderColorState } from "utils/Zustand";
import { AnimatePresence } from "framer-motion";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";
import { gsap } from "gsap/gsap-core";
import RoundedButton from "components/RoundedButton";
import Magnetic from "components/Magnetic";
import dynamic from "next/dynamic";
import Link from "next/link";

const Nav = dynamic(() => import("components/Nav/Nav"), { ssr: false });
const NavBackground = dynamic(() => import("components/Nav/Nav.Background"), {
  ssr: false,
});

export default function Header() {
  const header = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const HeaderColor = useHeaderColorState();
  const pathname = usePathname();
  const button = useRef(null);

  const ChangeColor = (color: "Black" | "White") => {
    setTimeout(() => {
      HeaderColor.toggleColor(color);
    }, 1000);
  };

  useEffect(() => {
    if (isActive) setIsActive(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useEffect(() => {
    if (pathname === "/") ChangeColor("White");
    if (pathname === "/work") ChangeColor("Black");
    if (pathname === "/about") ChangeColor("Black");
    if (pathname === "/contact") ChangeColor("Black");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(button.current, {
      scrollTrigger: {
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
          gsap.to(
            button.current,
            // @ts-ignore: Unreachable code error
            { scale: 0, duration: 0.25, ease: `power1.out` },
            setIsActive(false),
          );
        },
      },
    });
  }, []);

  return (
    <>
      <div
        ref={header}
        style={{ color: HeaderColor.Color }}
        className="absolute top-0 z-[1] box-border flex w-full items-center justify-between px-2 py-[25px] sm:px-[35px]"
      >
        <Magnetic>
          <Link
            href="/"
            scroll={false}
            className="header-logo group flex h-[50px] cursor-pointer items-center justify-center px-2.5"
          >
            <p className="header-logo-copyright header-logo-transition relative text-[20px] text-base font-[300]">
              ©
            </p>
            <div className=" relative ml-[5px] flex h-[28px] items-end overflow-hidden whitespace-nowrap group-hover:pr-[30px]">
              <p className="header-logo-transition header-logo-transition-width relative w-[134px] text-[17px] font-[500] group-hover:w-[157px] group-hover:-translate-x-[72px]">
                Code by Sumeet Kumar Paul
              </p>
            </div>
          </Link>
        </Magnetic>
        <div className="header-logo-transition hidden h-[50px] items-center sm:flex">
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
              className="relative z-[1] flex cursor-pointer items-center space-x-2 p-[15px] text-[17px] font-[500]"
            >
              <div
                style={{ backgroundColor: HeaderColor.Color }}
                className="header-logo-transition h-[6px] w-[6px] scale-100 rounded-[50%]"
              />
              <p className="cursor-pointer">Menu</p>
            </button>
          </Magnetic>
        </div>
      </div>
      <div ref={button} className="fixed right-0 z-[4] scale-0">
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
      <AnimatePresence mode="wait">
        {isActive && (
          <>
            <NavBackground setIsActive={setIsActive} />
            <Nav isActive={isActive} setIsActive={setIsActive} />
          </>
        )}
      </AnimatePresence>
    </>
  );
}

function HorizontalNav({
  children,
  href,
  pathname,
  color,
}: {
  children: React.ReactNode;
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
            pathname == href ? "scale-100" : "group-hover:scale-100"
          } header-logo-transition absolute left-[50%] top-[45px] h-[6px] w-[6px] -translate-x-[50%] scale-0 rounded-[50%]`}
        />
      </div>
    </Magnetic>
  );
}
