"use client";

import { MotionButton } from "utils/FramerMotion";
import { useEffect, useRef } from "react";

export default function SpotlightButton() {
  const btnRef = useRef<HTMLButtonElement>(null);
  const spanRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { width } = (e.target as HTMLElement)?.getBoundingClientRect();
      const offset = e.offsetX;
      const left = `${(offset / width) * 100}%`;
      spanRef.current!.animate({ left }, { duration: 250, fill: "forwards" });
    };
    const handleMouseLeave = () => {
      spanRef.current!.animate(
        { left: "50%" },
        { duration: 100, fill: "forwards" },
      );
    };
    btnRef.current?.addEventListener("mousemove", handleMouseMove);
    btnRef.current?.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      btnRef.current?.removeEventListener("mousemove", handleMouseMove);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      btnRef.current?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <MotionButton
      ref={btnRef}
      whileTap={{ scale: 0.985 }}
      className="relative w-full sm:max-w-xs overflow-hidden rounded-full bg-black px-4 py-3 text-base font-medium text-white outline-none"
    >
      <span className="pointer-events-none relative z-10 ">
        Explore now
      </span>
      <span
        ref={spanRef}
        className="pointer-events-none absolute left-[50%] top-[50%] h-32 w-32 -translate-x-[50%] -translate-y-[50%] rounded-full bg-white/20"
      />
    </MotionButton>
  );
}
