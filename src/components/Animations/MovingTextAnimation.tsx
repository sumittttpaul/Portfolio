"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePreloaderState } from "utils/Zustand";
import { MotionDiv } from "utils/FramerMotion";
import { gsap } from "gsap/gsap-core";

export default function MovingTextAnimation() {
  const [MobileAnimation, setMobileAnimation] = useState("");
  const preloader = usePreloaderState();
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  const slideUp = {
    initial: {
      y: 300,
    },
    enter: {
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.33, 1, 0.68, 1],
        delay: preloader.Visible ? 2.7 : 0.6,
      },
    },
  };

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
    if (window.innerWidth > 640) {
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
    } else {
      setMobileAnimation("big-name-move-animation");
    }
  }, []);

  return (
    <MotionDiv
      variants={slideUp}
      initial="initial"
      animate="enter"
      className="z-[1] block sm:absolute sm:bottom-[calc(var(--big-name-bottom,1vh)*33)] sm:pb-[calc(var(--big-name-padding)*1.4)] md:bottom-[15vh] xl:bottom-[12vh]"
    >
      <div
        ref={slider}
        className={`${MobileAnimation} relative whitespace-nowrap`}
      >
        <h1
          ref={firstText}
          className="moving-text-font-size relative m-0 flex pr-[40px] font-neue font-[400] text-white sm:pr-[50px]"
        >
          Sumeet Kumar Paul —
        </h1>
        <h1
          className="moving-text-font-size absolute left-full top-0 m-0 flex pr-[40px] font-neue font-[400] text-white sm:pr-[50px]"
          ref={secondText}
        >
          Sumeet Kumar Paul —
        </h1>
      </div>
    </MotionDiv>
  );
}
