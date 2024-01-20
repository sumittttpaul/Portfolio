import LocationContainer from "../../public/icons/location-container.svg";
import BGImage from "../../public/bg_character.png";
import GlobeAnimation from "components/GlobeAnimation/GlobeAnimation";
import LandingClient from "components/Landing.Client";
import { ArrowDownRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import MovingTextAnimation from "components/MovingTextAnimation";

export default function Landing() {
  return (
    <LandingClient className="relative flex h-auto overflow-hidden bg-black">
      {/* Background Image or character image */}
      <div className="flex w-full items-end justify-center pt-10 md:items-start">
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
      {/* Moving big name text something like "sumeet kumar paul" */}
      <MovingTextAnimation />
      {/* Down arrow, only for mobile */}
      <div
        data-scroll-position="top"
        className="absolute bottom-[290px] left-5 block md:hidden"
      >
        <ArrowDownRightIcon className="w-6 text-white" />
      </div>
      {/* Bottom side "freelance web developer" text and rotating globe, only for mobile */}
      <div
        data-scroll-position="top"
        className="absolute bottom-[18vh] left-0 right-0 flex w-full justify-between px-5 md:hidden"
      >
        <p className="flex flex-col text-[25px] leading-[1.4]">
          <span>Freelance</span>
          <span>Web Developer</span>
        </p>
        <div className="relative mr-10">
          <GlobeAnimation />
        </div>
      </div>
    </LandingClient>
  );
}
