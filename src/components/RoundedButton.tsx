"use client";

import { useEffect, useRef } from "react";
import Magnetic from "components/Magnetic";
import React from "react";
import gsap from "gsap";

export default function RoundedButton({
  children,
  onClick,
  className,
  ...attributes
}: {
  children: React.ReactNode;
  onClick: () => void;
  className: string;
}) {
  const circle = useRef(null);
  let timeline = useRef<any>(null);
  let timeoutId: any = null;
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

  return (
    <Magnetic>
      <div
        className={`${className} rounded-button relative flex max-h-[64px] max-w-[64px] cursor-pointer items-center justify-center rounded-full`}
        style={{ overflow: "hidden" }}
        onClick={onClick}
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
          className="bg-rounded-button-active absolute top-full h-[150%] w-full rounded-[50%]"
        ></div>
      </div>
    </Magnetic>
  );
}
