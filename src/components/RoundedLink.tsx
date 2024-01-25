"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap/gsap-core";
import Magnetic from "components/Magnetic";
import React from "react";
import Link from "next/link";

export default function RoundedLink({
  disableHoverEffectOnMobile,
  children,
  href,
  className,
  ...attributes
}: {
  disableHoverEffectOnMobile?: boolean;
  children?: React.ReactNode;
  href: string;
  className: string;
}) {
  const circle = useRef(null);
  let timeline = useRef<any>(null);
  let timeoutId: any = null;

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 640) setIsMobile(true);
  }, []);

  useEffect(() => {
    timeline.current = gsap.timeline({ paused: true });
    timeline.current
      .to(
        circle.current,
        { top: "-25%", width: "150%", duration: 0.4, ease: "power3.in" },
        "enter",
      )
      .to(
        circle.current,
        { top: "-150%", width: "125%", duration: 0.25 },
        "exit",
      );
  }, []);

  const manageMouseEnter = () => {
    if (timeoutId) clearTimeout(timeoutId);
    timeline.current.tweenFromTo("enter", "exit");
  };

  const manageMouseLeave = () => {
    timeoutId = setTimeout(() => {
      timeline.current.play();
    }, 300);
  };

  if (disableHoverEffectOnMobile) {
    return (
      <Magnetic>
        <Link
          className={`${className} rounded-button relative flex cursor-pointer items-center justify-center rounded-full border-0 outline-none`}
          style={{ overflow: "hidden" }}
          href={href}
          onMouseEnter={() => {
            manageMouseEnter();
          }}
          onMouseLeave={() => {
            manageMouseLeave();
          }}
          {...attributes}
        >
          {children}
          {!isMobile && (
            <div
              ref={circle}
              className="absolute top-full h-[150%] w-full rounded-[50%] bg-hover-blue"
            />
          )}
        </Link>
      </Magnetic>
    );
  }

  return (
    <Magnetic>
      <Link
        className={`${className} rounded-button relative flex cursor-pointer items-center justify-center rounded-full`}
        style={{ overflow: "hidden" }}
        href={href}
        onMouseEnter={() => {
          manageMouseEnter();
        }}
        onMouseLeave={() => {
          manageMouseLeave();
        }}
        {...attributes}
      >
        {children}
        <div
          ref={circle}
          className="absolute top-full h-[150%] w-full rounded-[50%] bg-hover-blue"
        />
      </Link>
    </Magnetic>
  );
}
