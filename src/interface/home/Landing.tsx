import LocationContainer from "../../../public/icons/location-container.svg";
import MovingTextAnimation from "components/Animations/MovingTextAnimation";
import TypographyAnimation from "components/Animations/TypographyAnimation";
import RotateIconAnimation from "components/Animations/RotateIconAnimation";
import GlobeAnimation from "components/Animations/GlobeAnimation";
import { ArrowDownRightIcon } from "@heroicons/react/24/outline";
import DancingTruck from "../../../public/dancing_truck.gif";
import LandingClient from "components/Clients/LandingClient";
import BGImage from "../../../public/bg_character.png";
import PhotoButton from "components/Photo/Button";
import LabelTag from "components/LabelTag";
import Image from "next/image";

export default function Landing() {
  return (
    <LandingClient className="relative flex h-auto w-auto flex-col overflow-hidden bg-white px-2.5 sm:bg-black sm:p-0">
      <div className="relative mt-20 flex h-auto w-auto flex-col rounded-b-3xl rounded-t-[50px] bg-black px-2.5 pb-6 pt-2.5 xs:mt-24 xs:rounded-t-[60px] sm:mt-0 sm:rounded-none sm:px-0 sm:pb-0 sm:pt-0">
        {/* User photo and rotate icon animation, only for mobile */}
        <div className="flex sm:hidden">
          <PhotoButton />
        </div>
        {/* Background Image or character image, only for desktop */}
        <div className="hidden w-full items-end justify-center pt-10 sm:flex md:items-start">
          <div
            data-scroll
            data-scroll-speed={-0.3}
            data-scroll-position="top"
            className="relative -ml-[200px] h-[1000px] min-h-[1000px] w-[664px] min-w-[664px] md:h-[1100px] md:min-h-[1100px] md:w-[730px] md:min-w-[730px]"
          >
            <Image
              style={{ objectFit: "cover" }}
              sizes="(min-width: 768px) 730px, 664px"
              src={BGImage}
              alt="background image"
              draggable="false"
              priority
              fill
            />
          </div>
        </div>
        {/* Left side location container, only for desktop */}
        <div
          data-scroll
          data-scroll-speed={0.1}
          data-scroll-position="top"
          className="absolute -left-4 top-[35%] z-[1] hidden md:flex"
        >
          <div className="relative flex h-[114px] w-[283px] scale-[0.9] items-center justify-between rounded-r-full transition-all duration-300 ease-in xl:left-0 xl:scale-100">
            <Image
              src={LocationContainer}
              height={114}
              width={283}
              alt="location container"
            />
            <div className="absolute left-0 top-[50%] flex w-full -translate-y-[50%] items-center justify-start pl-14">
              <p className="flex flex-col text-[17px] font-medium leading-5 tracking-tight text-white">
                <span>Located</span>
                <span>in the</span>
                <span className="mt-1 text-[20px]">Bharat</span>
              </p>
            </div>
            <div className="absolute right-0 top-0 flex aspect-square h-full w-auto items-center justify-center rounded-[50%]">
              <GlobeAnimation />
            </div>
          </div>
        </div>
        {/* Right side "freelance web developer" text, only for desktop */}
        <div
          data-scroll
          data-scroll-speed={0.1}
          data-scroll-position="top"
          className="absolute right-[15%] top-[28%] z-[1] hidden md:flex"
        >
          <div className="flex flex-col transition-all duration-300 ease-in">
            <ArrowDownRightIcon className="w-[clamp(1.3em,2.3vw,2em)] text-white" />
            <p className="mt-[75px] flex flex-col text-[clamp(1.55em,2.3vw,2.5em)] leading-[1.4]">
              <span>Freelance</span>
              <span>Web Developer</span>
            </p>
          </div>
        </div>
        {/* Text animation + label tags, only for mobile */}
        <div className="flex flex-col sm:hidden">
          <div className="flex w-full flex-col">
            <TypographyAnimation label="ideas" />
            <TypographyAnimation label="connect" />
          </div>
          <div className="flex w-full flex-col">
            <TypographyAnimation label="through" />
            <div className="-mt-2 flex w-full flex-col -space-y-5 xs:-mt-1 xs:-space-y-2">
              <LabelTag
                name="strategy"
                ContainerClassName="-ml-[5em] xs:-ml-[4em]"
              />
              <LabelTag
                name="design"
                ContainerClassName="-ml-[1.4em] xs:-ml-[0.5em]"
              />
              <LabelTag
                name="creativity"
                ContainerClassName="ml-[2em] xs:ml-[3em]"
              />
            </div>
          </div>
          <div className="relative ml-4 mt-6">
            <RotateIconAnimation />
          </div>
        </div>
        {/* Moving big name text something like "sumeet kumar paul" */}
        <div className="mb-6 mt-2 flex xs:mb-0">
          <MovingTextAnimation />
        </div>
        {/* Truck dancing animation */}
        <div className="flex w-full justify-center sm:hidden">
          <Image
            priority
            height={229}
            width={350}
            src={DancingTruck}
            alt="dancing truck"
          />
        </div>
        {/* Down arrow, only for mobile */}
        <div className="left-5 mb-10 block sm:absolute sm:bottom-[290px] sm:mb-0 md:hidden">
          <ArrowDownRightIcon className="w-5 text-white xs:w-6" />
        </div>
        {/* Right side "freelance web developer" text and rotating globe, only for mobile */}
        <div className="left-0 right-0 flex w-full justify-between sm:absolute sm:bottom-[18vh] sm:mb-0 sm:px-5 md:hidden">
          <p className="flex flex-col text-[20px] leading-[1.4] xs:text-[25px]">
            <span>Freelance</span>
            <span>Web Developer</span>
          </p>
          <div className="relative mr-10">
            <GlobeAnimation />
          </div>
        </div>
      </div>
    </LandingClient>
  );
}
