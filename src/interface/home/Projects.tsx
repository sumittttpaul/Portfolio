"use client";

import TextInViewAnimation from "components/Animations/TextInViewAnimation";
import PointsBackground from "../../../public/images/points_background.png";
import RoundedMagneticLink from "components/Magnetic/RoundedMagneticLink";
import DivInViewAnimation from "components/Animations/DivInViewAnimation";
import Image, { StaticImageData } from "next/image";
import ProjectLink from "components/ProjectLink";
import ProjectCard from "components/ProjectCard";
import ImageViewer from "components/ImageViewer";
import { useState } from "react";

type ModalState = {
  show: boolean;
  images: StaticImageData[] | null;
};

export default function Projects({
  device,
  images,
  projects,
}: {
  images: {
    clothing: StaticImageData[];
    portfolio: StaticImageData[];
    emotion: StaticImageData[];
    authentication: StaticImageData[];
  };
  projects: {
    title: string;
    description: string;
    date: string;
    image: StaticImageData;
    imageHeight: number;
    imageWidth: number;
    color: string;
  }[];
} & DeviceType) {
  const { isMobile, isDesktop } = device;
  const [ImageViewerData, setImageViewerData] = useState<ModalState>({
    show: false,
    images: null,
  });

  const handleClose = () => {
    setImageViewerData((prev) => {
      if (prev.show) {
        return { ...prev, show: false };
      } else {
        return { ...prev };
      }
    });
  };

  const handleImages = (image: WorkImagesType) => {
    setImageViewerData((prev) => {
      if (!prev.show) {
        if (image === "portfolio") {
          return { images: images.portfolio, show: true };
        }
        if (image === "emotion") {
          return { images: images.emotion, show: true };
        }
        if (image === "authentication") {
          return { images: images.authentication, show: true };
        }
        if (image === "clothing") {
          return { images: images.clothing, show: true };
        } else {
          return { ...prev, show: false };
        }
      } else {
        return { ...prev, show: false };
      }
    });
  };

  return (
    <section className="relative flex w-full flex-col items-center overflow-hidden bg-white py-[50px] sm:py-[100px]">
      <div className="absolute -right-[300px] -top-[240px] hidden md:flex lg:right-0">
        <Image
          src={PointsBackground}
          width={1000}
          height={554}
          alt="points background"
        />
      </div>
      <div className="mx-auto w-full max-w-screen-screen-1000 overflow-hidden">
        <h1 className="flex w-full flex-col px-5 text-start text-[32px] font-semibold leading-[1.5] tracking-[-0.2px] text-almost-black xs:text-[36px] sm:text-[46px] sm:leading-[1.2] screen-1000:px-0 lg:px-0 lg:text-[56px] xl:text-[64px]">
          {isDesktop && (
            <TextInViewAnimation Animation="Word" className="hidden sm:flex">
              Showcasing&nbsp;the
            </TextInViewAnimation>
          )}
          {isDesktop && (
            <TextInViewAnimation
              Animation="Word"
              className="ml-20 hidden sm:flex"
            >
              Art&nbsp;of&nbsp;Digital&nbsp;Creation
            </TextInViewAnimation>
          )}
          {isMobile && (
            <TextInViewAnimation Animation="Word" className="flex sm:hidden">
              Showcasing&nbsp;the&nbsp;Art
            </TextInViewAnimation>
          )}
          {isMobile && (
            <TextInViewAnimation Animation="Word" className="flex sm:hidden">
              of&nbsp;Digital&nbsp;Creation
            </TextInViewAnimation>
          )}
        </h1>
        <DivInViewAnimation
          Animation="Slide"
          animationConfig={{ start: "50px", end: "0px" }}
        >
          <p className="mx-auto my-10 w-full max-w-screen-sm whitespace-normal text-pretty px-5 text-[1em] leading-normal text-black md:text-[1.3em] screen-1000:px-0">
            Discover my e-commerce mastery: building a seamless online shopping
            experience using cutting-edge web technologies in my recent work.
          </p>
        </DivInViewAnimation>
      </div>
      {isMobile && (
        <ProjectCard handleImages={handleImages} projects={projects} />
      )}
      {isDesktop && <ProjectLink projects={projects} />}
      <div className="flex w-full items-center justify-center px-5">
        <RoundedMagneticLink
          href="/work"
          device={device}
          className="sm:group relative flex w-full items-center justify-center bg-almost-black py-[12px] sm:w-auto sm:border sm:border-solid sm:border-light-gray sm:bg-transparent sm:px-[60px] sm:py-[30px]"
        >
          <span className="z-[1] flex text-[12px] text-white transition-colors duration-[400ms] group-hover:text-white xs:text-[13px] sm:text-base sm:text-black">
            More work
            <span className="-mt-1 ml-1 block text-[10px] sm:text-xs">4</span>
          </span>
        </RoundedMagneticLink>
      </div>
      <ImageViewer
        device={device}
        onClose={handleClose}
        open={ImageViewerData.show}
        images={ImageViewerData.images}
      />
    </section>
  );
}
