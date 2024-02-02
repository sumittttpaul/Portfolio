"use client";

import LargeTripleTextAnimation from "components/Animations/LargeTripleTextAnimation";
import Magnetic from "components/Magnetic";
import { useState, useEffect } from "react";
import Link from "next/link";
import moment from "moment";

export default function Error({ device }: DeviceType) {
  const { isMobile, isTablet, isDesktop } = device;
  const [time, setTime] = useState("");

  useEffect(() => {
    let interval = setInterval(
      () => setTime(`${moment().format("LT")} GMT +05:30`),
      1000,
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed flex h-full w-full items-center bg-white">
      <LargeTripleTextAnimation />
      <h6 className="absolute left-[50%] top-[40%] z-[1] flex -translate-x-[50%] -translate-y-[40%] whitespace-nowrap font-grtsk text-[10dvh] font-normal text-black sm:text-[20dvh]">
        404
      </h6>
      <Link
        href="/"
        scroll={false}
        className="group absolute left-[50%] top-[67%] z-[5] flex -translate-x-[50%] -translate-y-[67%] whitespace-nowrap text-sm font-semibold text-black transition-all duration-300 ease-out hover:text-black/70 xs:text-base"
      >
        <span className="mr-1 transition-all duration-300 ease-out group-hover:-translate-x-1">
          {"<"}-
        </span>
        <span>Back to Home</span>
      </Link>
      <div className="absolute bottom-0 z-[1] flex w-full flex-col justify-between px-5 pb-5 sm:flex-row sm:px-10 sm:pb-10">
        <div className="order-3 flex items-center justify-between space-x-10 sm:order-1 sm:justify-start">
          <div className="flex flex-col space-y-3">
            <h3 className="text-[10px] font-black uppercase tracking-wide text-black/50 xs:text-xs">
              Version
            </h3>
            <h4 className="text-sm font-medium text-black xs:text-base">
              2024 © Edition
            </h4>
          </div>
          <div className="flex flex-col space-y-3 text-end sm:text-start">
            <h3 className="text-[10px] font-black uppercase tracking-wide text-black/50 xs:text-xs">
              Local Time
            </h3>
            <h4 className="text-sm font-medium text-black xs:text-base">
              {time}
            </h4>
          </div>
        </div>
        <div className="order-2 my-5 flex h-[1px] w-full bg-black/20 sm:hidden" />
        <div className="order-1 flex flex-col space-y-3 sm:order-2">
          <h3 className="text-[10px] font-black uppercase tracking-wide text-black/50 xs:text-xs">
            Socials
          </h3>
          {isMobile && <Mobile />}
          {(isTablet || isDesktop) && <Desktop />}
        </div>
      </div>
    </div>
  );
}

const Mobile = () => {
  return (
    <div className="flex w-full justify-between sm:w-auto sm:justify-end sm:space-x-5">
      <Link
        href="#"
        scroll={false}
        className="text-underline-black cursor-pointer text-sm font-medium text-black xs:text-base"
      >
        Linkedin
      </Link>
      <Link
        href="#"
        scroll={false}
        className="text-underline-black cursor-pointer text-sm font-medium text-black xs:text-base"
      >
        Instagram
      </Link>
      <Link
        href="#"
        scroll={false}
        className="text-underline-black cursor-pointer text-sm font-medium text-black xs:text-base"
      >
        Facebook
      </Link>
      <Link
        href="#"
        scroll={false}
        className="text-underline-black cursor-pointer text-sm font-medium text-black xs:text-base"
      >
        Twitter
      </Link>
    </div>
  );
};

const Desktop = () => {
  return (
    <div className="flex w-full justify-between sm:w-auto sm:justify-end sm:space-x-5">
      <Magnetic>
        <Link
          href="#"
          scroll={false}
          className="text-underline-black cursor-pointer text-sm font-medium text-black xs:text-base"
        >
          Linkedin
        </Link>
      </Magnetic>
      <Magnetic>
        <Link
          href="#"
          scroll={false}
          className="text-underline-black cursor-pointer text-sm font-medium text-black xs:text-base"
        >
          Instagram
        </Link>
      </Magnetic>
      <Magnetic>
        <Link
          href="#"
          scroll={false}
          className="text-underline-black cursor-pointer text-sm font-medium text-black xs:text-base"
        >
          Facebook
        </Link>
      </Magnetic>
      <Magnetic>
        <Link
          href="#"
          scroll={false}
          className="text-underline-black cursor-pointer text-sm font-medium text-black xs:text-base"
        >
          Twitter
        </Link>
      </Magnetic>
    </div>
  );
};
