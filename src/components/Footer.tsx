"use client";

import RoundedMagneticButton from "./Magnetic/RoundedMagneticButton";
import SumitPhoto from "../../public/images/sumit_photo.png";
import { MotionDiv, MotionSVG } from "utils/FramerMotion";
import { useScroll, useTransform } from "framer-motion";
import Magnetic from "./Magnetic";
import { useRef } from "react";
import Image from "next/image";

export default function Footer() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y = useTransform(scrollYProgress, [0, 1], [-500, 0]);
  const rotate = useTransform(scrollYProgress, [0, 1], [120, 90]);

  return (
    <MotionDiv
      style={{ y }}
      ref={container}
      className="flex h-screen w-full flex-col items-center justify-center bg-almost-black text-white"
    >
      <div className="top-[200px] w-full max-w-screen-max-size">
        <div className="border-light-gray relative mx-[200px] border-b border-solid pb-[100px]">
          <span className="flex items-center">
            <div className="relative h-[100px] w-[100px] overflow-hidden rounded-full">
              <Image
                fill
                sizes="100px"
                alt="profile photo"
                className="object-cover"
                src={SumitPhoto}
              />
            </div>
            <h2 className="ml-[0.3em] text-[5vw]">Let&apos;s work</h2>
          </span>
          <h2 className="m-0 text-[5vw] font-light">together</h2>
          <MotionDiv
            style={{ x }}
            className="absolute left-[calc(100%-400px)] top-[calc(100%-75px)]"
          >
            <RoundedMagneticButton
              className="absolute flex h-[10em] w-[10em] items-center justify-center bg-[#334BD3] text-white"
              onClick={() => {}}
            >
              <span className="relative z-[1] m-0 text-base font-light">
                Get in touch
              </span>
            </RoundedMagneticButton>
          </MotionDiv>
          <MotionSVG
            style={{ rotate, scale: 2 }}
            width="9"
            height="9"
            viewBox="0 0 9 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-[100%] top-[30%]"
          >
            <path
              d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z"
              fill="white"
            />
          </MotionSVG>
        </div>
        <div className="mx-[200px] mt-[100px] flex gap-[20px]">
          <RoundedMagneticButton onClick={() => {}} className="p-5">
            <span>info@dennissnellenberg.com</span>
          </RoundedMagneticButton>
          <RoundedMagneticButton onClick={() => {}} className="p-5">
            <span>+31 6 27 84 74 30</span>
          </RoundedMagneticButton>
        </div>
        <div className="mt-[200px] flex justify-between p-[20px]">
          <div className="flex items-center gap-[10px]">
            <span>
              <h3 className="m-0 cursor-pointer p-[2.5px]">Version</h3>
              <p className="m-0 cursor-pointer p-[2.5px]">2022 © Edition</p>
            </span>
            <span>
              <h3 className="m-0 cursor-pointer p-[2.5px]">Version</h3>
              <p className="m-0 cursor-pointer p-[2.5px]">11:49 PM GMT+2</p>
            </span>
          </div>
          <div>
            <span>
              <h3 className="m-0 cursor-pointer p-[2.5px]">socials</h3>
              <Magnetic>
                <span>Awards</span>
              </Magnetic>
            </span>
            <Magnetic>
              <span>Instagram</span>
            </Magnetic>
            <Magnetic>
              <span>Dribble</span>
            </Magnetic>
            <Magnetic>
              <span>Linkedin</span>
            </Magnetic>
          </div>
        </div>
      </div>
    </MotionDiv>
  );
}

export const FooterBefore = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);
  return (
    <div
      ref={container}
      className="relative z-[1] mt-[200px] flex flex-col gap-[3vw] bg-white"
    >
      <div className="h-[350px] w-full bg-white" />
      <MotionDiv style={{ height }} className="relative mt-[100px]">
        <div className="footer-shadow absolute -left-[10%] z-[1] h-[1550%] w-[120%] rounded-b-[50%] bg-white" />
      </MotionDiv>
    </div>
  );
};
