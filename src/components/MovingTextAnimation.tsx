"use client";

import { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/all";
import { gsap } from "gsap/gsap-core";

export default function MovingTextAnimation() {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    requestAnimationFrame(animate);
    xPercent += 0.01 * direction;
  };

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        // eslint-disable-next-line react-hooks/exhaustive-deps
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: "-500px",
    });
    requestAnimationFrame(animate);
  }, []);

  return (
    <div className="absolute bottom-[calc(var(--big-name-bottom,1vh)*33)] z-[1] pb-[calc(var(--big-name-padding)*0.3)] sm:bottom-[15vh] xl:bottom-[12vh]">
      <div ref={slider} className="relative whitespace-nowrap">
        <h1
          ref={firstText}
          className="moving-text-font-size font-neue relative m-0 flex pr-[50px] font-[400] text-white"
        >
          Sumeet Kumar Paul —
        </h1>
        <h1
          className="moving-text-font-size font-neue absolute left-full top-0 m-0 flex pr-[50px] font-[400] text-white"
          ref={secondText}
        >
          Sumeet Kumar Paul —
        </h1>
      </div>
    </div>
  );
}
