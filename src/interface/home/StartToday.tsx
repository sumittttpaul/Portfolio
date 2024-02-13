"use client";

import TextInViewAnimation from "components/Animations/TextInViewAnimation";
import PointsBackground from "../../../public/images/points_background.png";
import DivInViewAnimation from "components/Animations/DivInViewAnimation";
import Image from "next/image";

export default function StartToday({ device }: DeviceType) {
  const { isMobile, isDesktop } = device;
  return (
    <section className="relative flex w-full flex-col items-center bg-white">
      <div className="absolute -left-[475px] -top-[100px] hidden md:flex">
        <Image
          src={PointsBackground}
          width={1000}
          height={554}
          alt="points background"
        />
      </div>
      <div className="absolute -right-[475px] -top-[100px] hidden md:flex">
        <Image
          src={PointsBackground}
          width={1000}
          height={554}
          alt="points background"
        />
      </div>
      <div className="mx-auto w-full max-w-screen-screen-1000 overflow-hidden">
        <h1 className="flex w-full flex-col px-5 text-start text-[32px] font-semibold leading-[1.5] tracking-[-0.2px] text-almost-black xs:text-[36px] sm:text-[46px] sm:leading-[1.2] screen-1000:px-0 lg:px-0 lg:text-[56px] xl:text-[64px]">
          <TextInViewAnimation Animation="Word">
            Let&apos;s&nbsp;Build&nbsp;Your
          </TextInViewAnimation>
          {isDesktop && (
            <TextInViewAnimation Animation="Word">
              Digital&nbsp;Presence&nbsp;Together
            </TextInViewAnimation>
          )}
          {isMobile && (
            <TextInViewAnimation Animation="Word" className="ml-10 sm:ml-0">
              Digital&nbsp;Presence
            </TextInViewAnimation>
          )}
          {isMobile && (
            <TextInViewAnimation Animation="Word" className="ml-20 sm:ml-0">
              Together
            </TextInViewAnimation>
          )}
        </h1>
        <DivInViewAnimation
          Animation="Slide"
          animationConfig={{ start: "50px", end: "0px" }}
        >
          <p className="mx-auto my-10 w-full max-w-screen-sm whitespace-normal text-pretty px-5 text-[1em] leading-normal text-black md:text-[1.3em] screen-1000:px-0">
            Transform your online presence! Whether it&apos;s a brand launch,
            site upgrade, or e-commerce venture, let&apos;s work together. I
            specialize in bringing visions to life, ensuring your website
            exceeds objectives. Contact me today to kickstart the journey of
            crafting a bespoke digital experience for your brand
          </p>
        </DivInViewAnimation>
      </div>
    </section>
  );
}
