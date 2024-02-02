"use client";

import { cloneElement, useEffect, useRef } from "react";
import { gsap } from "gsap/gsap-core";

export function Desktop({ children }: { children: React.ReactElement }) {
  const magnetic = useRef<any>(null);

  useEffect(() => {
    const xTo = gsap.quickTo(magnetic.current, "x", {
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });
    const yTo = gsap.quickTo(magnetic.current, "y", {
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });

    magnetic.current.addEventListener(
      "mousemove",
      (e: React.MouseEvent<HTMLElement>) => {
        const { clientX, clientY } = e;
        const { height, width, left, top } =
          magnetic.current.getBoundingClientRect();
        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);
        xTo(x * 0.35);
        yTo(y * 0.35);
      },
    );

    magnetic.current.addEventListener("mouseleave", () => {
      xTo(0);
      yTo(0);
    });
  }, []);

  return cloneElement(children, { ref: magnetic });
}
