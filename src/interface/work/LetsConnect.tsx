"use client";

import { MotionButton, MotionDiv } from "utils/FramerMotion";
import { Variants, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LetsConnect({ device }: DeviceType) {
  const { isMobile, isDesktop } = device;
  const ContainerRef = useRef<HTMLDivElement>(null);
  const ContainerView = useInView(ContainerRef, { amount: 0.25, once: true });

  const slideUp: Variants = {
    initial: {
      opacity: 0,
      scale: 0.8,
    },
    open: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 },
    },
    closed: {
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.3 },
    },
  };

  return (
    <>
      {isMobile && (
        <section className="relative h-auto w-full">
          <h1 className="mx-auto mb-[3vw] flex flex-col px-5 text-[calc(clamp(3.25em,7vw,8em)*.875)] font-semibold leading-[1.065] text-black sm:max-w-[80vw] sm:px-10">
            Creating next level digital products
          </h1>
        </section>
      )}
      <section className="mx-auto flex h-full w-full max-w-screen-max-size px-5 pb-20 pt-5">
        <MotionDiv
          ref={ContainerRef}
          variants={slideUp}
          animate={ContainerView ? "open" : "closed"}
          className="relative mx-auto flex h-auto w-[1100px] flex-col rounded-[20px] bg-black px-5 py-5 sm:rounded-[40px] sm:px-10 sm:py-10 max-size:w-full max-size:px-12"
        >
          <h1 className="mx-auto flex w-full max-w-6xl flex-col text-start text-[27px] font-semibold leading-[1.5] tracking-[-0.2px] text-white xs:text-[32px] sm:px-5 sm:text-[46px] sm:leading-[1.2] screen-1000:px-0 lg:px-0 lg:text-[56px] xl:text-[64px]">
            <span>Are you ready to take</span>
            <span className="heading-gradient mx-auto w-full max-w-5xl text-transparent">
              your website to new heights?
            </span>
          </h1>
          <p className="mx-auto mt-5 w-full max-w-4xl text-xs xs:text-base sm:mt-10 sm:pr-[20%]">
            Join us, and let&apos;s create something extraordinary. Together, we
            will design the future, one impactful website at a time.
          </p>
          <div className="mx-auto mt-5 w-full max-w-3xl sm:mt-10">
            {isDesktop && <SpotlightButton />}
            {isMobile && (
              <Link
                scroll={false}
                href="/contact"
                className="relative flex w-full items-center justify-center rounded-full bg-white py-[12px] text-xs font-bold text-black xs:text-sm"
              >
                Get in touch
              </Link>
            )}
          </div>
        </MotionDiv>
      </section>
    </>
  );
}

const SpotlightButton = () => {
  const btnRef = useRef<HTMLButtonElement>(null);
  const spanRef = useRef<HTMLSpanElement>(null);

  const router = useRouter();

  useEffect(() => {
    const _spanRef = spanRef.current;
    const _btnRef = btnRef.current;

    const handleMouseMove = (e: any) => {
      if (e.target) {
        const { width } = e.target.getBoundingClientRect();
        const offset = e.offsetX;
        const left = `${(offset / width) * 100}%`;
        if (_spanRef) {
          _spanRef.animate({ left }, { duration: 250, fill: "forwards" });
        }
      }
    };

    const handleMouseLeave = () => {
      if (_spanRef) {
        _spanRef.animate({ left: "50%" }, { duration: 100, fill: "forwards" });
      }
    };

    if (_btnRef) {
      _btnRef.addEventListener("mousemove", handleMouseMove);
      _btnRef.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        _btnRef.removeEventListener("mousemove", handleMouseMove);
        _btnRef.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, []);

  return (
    <MotionButton
      ref={btnRef}
      onClick={() => router.push("/contact", { scroll: false })}
      whileTap={{ scale: 0.95 }}
      className="relative w-full max-w-[275px] overflow-hidden rounded-full bg-white/10 px-4 py-3 text-base font-medium text-white"
    >
      <span className="pointer-events-none relative z-10 mix-blend-difference">
        Get in touch
      </span>
      <span
        ref={spanRef}
        className="pointer-events-none absolute left-[50%] top-[50%] h-32 w-32 -translate-x-[50%] -translate-y-[50%] rounded-full bg-white"
      />
    </MotionButton>
  );
};
