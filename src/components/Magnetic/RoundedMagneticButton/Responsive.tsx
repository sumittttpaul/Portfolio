"use client";

import { useRef, useEffect, cloneElement } from "react";
import { gsap } from "gsap/gsap-core";

export function Mobile({
  type,
  onClick,
  children,
  className,
}: ButtonAttributesType) {
  return (
    <button
      onClick={onClick}
      style={{ overflow: "hidden" }}
      type={type}
      className={`${className} rounded-button relative flex cursor-pointer items-center justify-center rounded-full outline-none`}
    >
      {children}
    </button>
  );
}

export function Desktop({
  type,
  onClick,
  children,
  className,
}: ButtonAttributesType) {
  const circle = useRef(null);
  const magneticParent = useRef<HTMLButtonElement>(null);
  const magneticChild = useRef<HTMLElement>(null);
  let timeline = useRef<any>(null);
  let timeoutId: any = null;

  const manageMouseEnter = () => {
    if (timeoutId) clearTimeout(timeoutId);
    timeline.current.tweenFromTo("enter", "exit");
  };

  const manageMouseLeave = () => {
    timeoutId = setTimeout(() => {
      timeline.current.play();
    }, 300);
  };

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

    const ParentRef = magneticParent.current;
    const ChildRef = magneticChild.current;

    const ParentXTo = gsap.quickTo(ParentRef, "x", {
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });
    const ParentYTo = gsap.quickTo(ParentRef, "y", {
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });
    const ChildXTo = gsap.quickTo(ChildRef, "x", {
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });
    const ChildYTo = gsap.quickTo(ChildRef, "y", {
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });

    const manageMouseMove = (e: MouseEvent) => {
      if (ParentRef) {
        const { clientX, clientY } = e;
        const { height, width, left, top } = ParentRef.getBoundingClientRect();
        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);
        ParentXTo(x * 0.35);
        ParentYTo(y * 0.35);
        ChildXTo(x * 0.35);
        ChildYTo(y * 0.35);
      }
    };
    const manageMouseLeave = () => {
      ParentXTo(0);
      ParentYTo(0);
      ChildXTo(0);
      ChildYTo(0);
    };

    ParentRef?.addEventListener("mousemove", (e) => manageMouseMove(e));
    ParentRef?.addEventListener("mouseleave", manageMouseLeave);
    return () => {
      ParentRef?.removeEventListener("mousemove", (e) => manageMouseMove(e));
      ParentRef?.removeEventListener("mouseleave", manageMouseLeave);
    };
  }, []);

  return (
    <button
      type={type}
      onClick={onClick}
      ref={magneticParent}
      style={{ overflow: "hidden" }}
      onMouseEnter={manageMouseEnter}
      onMouseLeave={manageMouseLeave}
      className={`${className} rounded-button relative flex cursor-pointer items-center justify-center rounded-full outline-none`}
    >
      {cloneElement(children, { ref: magneticChild })}
      <div
        ref={circle}
        className="absolute top-full h-[150%] w-full rounded-[50%] bg-hover-blue"
      />
    </button>
  );
}
