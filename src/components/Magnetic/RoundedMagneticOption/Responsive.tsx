"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap/gsap-core";
import { MotionButton } from "utils/FramerMotion";

export function Mobile({
  name,
  label,
  onClick,
  className,
  active,
}: OptionAttributesType) {
  return (
    <MotionButton
      name={name}
      aria-label={name}
      onClick={onClick}
      type="button"
      whileTap={{ scale: active ? 1 : 0.9 }}
      style={{ overflow: "hidden" }}
      className={`${className} ${active ? "bg-almost-black" : "bg-transparent"} rounded-button relative flex cursor-pointer items-center justify-center rounded-full transition-colors duration-150 ease-in`}
    >
      <span>{label}</span>
    </MotionButton>
  );
}

export function Desktop({
  name,
  label,
  onClick,
  className,
  active,
}: OptionAttributesType) {
  const magneticParent = useRef<HTMLButtonElement>(null);
  const magneticChild = useRef<HTMLSpanElement>(null);
  let timeline = useRef<any>(null);
  const circle = useRef(null);
  let timeoutId: any = null;

  const manageMouseEnter = () => {
    if (!active) {
      if (timeoutId) clearTimeout(timeoutId);
      timeline.current.tweenFromTo("enter", "exit");
    }
  };

  const manageMouseLeave = () => {
    if (!active) {
      timeoutId = setTimeout(() => {
        timeline.current.play();
      }, 300);
    }
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
        ParentXTo(x * 0.15);
        ParentYTo(y * 0.15);
        ChildXTo(x * 0.15);
        ChildYTo(y * 0.15);
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

  useEffect(() => {
    const _timeline = timeline.current;
    if (_timeline) {
      if (!active) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        timeoutId = setTimeout(() => {
          _timeline.play();
        }, 300);
      }
    }
  }, [active]);

  useEffect(() => {
    const _timeline = timeline.current;
    if (_timeline) {
      if (active) {
        if (timeoutId) clearTimeout(timeoutId);
        _timeline.tweenFromTo("enter", "exit");
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <button
      name={name}
      type="button"
      aria-label={name}
      onClick={onClick}
      ref={magneticParent}
      onMouseEnter={manageMouseEnter}
      onMouseLeave={manageMouseLeave}
      style={{ overflow: "hidden" }}
      className={`${className} rounded-button relative flex cursor-pointer items-center justify-center rounded-full `}
    >
      <span ref={magneticChild}>{label}</span>
      <div
        ref={circle}
        className={`${active ? "bg-almost-black" : "bg-hover-blue"} absolute top-full h-[150%] w-full rounded-[50%] transition-colors duration-200 ease-in`}
      />
    </button>
  );
}
