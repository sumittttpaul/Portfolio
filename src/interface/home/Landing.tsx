import LocationContainer from "../../../public/icons/location-container.svg";
import MovingTextAnimation from "components/Animations/MovingTextAnimation";
import RotateIconAnimation from "components/Animations/RotateIconAnimation";
import QuotationMaker from "../../../public/icons/quotation-mark.svg";
import QuotesAnimation from "components/Animations/QuotesAnimation";
import GlobeAnimation from "components/Animations/GlobeAnimation";
import BGImage from "../../../public/images/bg_character.png";
import HomeLandingClient from "components/Clients/HomeLandingClient";
import Image from "next/image";
import {
  ArrowRightIcon,
  ArrowDownRightIcon,
} from "@heroicons/react/24/outline";

export default function index({ device }: DeviceType) {
  const { isMobile, isDesktop } = device;
  return (
    <HomeLandingClient
      device={device}
      className="relative flex h-auto w-auto flex-col overflow-hidden bg-white px-2.5 sm:bg-black sm:p-0"
    >
      <div className="relative mt-20 flex h-auto w-auto flex-col rounded-3xl bg-black px-2.5 pb-6 pt-2.5 xs:mt-24 sm:mt-0 sm:rounded-none sm:px-0 sm:pb-0 sm:pt-0">
        {/* Background Image or character image, only for desktop */}
        {isDesktop && (
          <div className="hidden w-full items-end justify-center pt-10 sm:flex md:items-start">
            <div
              data-scroll
              data-scroll-speed={-0.3}
              data-scroll-position="top"
              className="relative -ml-[200px] h-[1000px] min-h-[1000px] w-[664px] min-w-[664px] md:h-[1100px] md:min-h-[1100px] md:w-[730px] md:min-w-[730px]"
            >
              <Image
                fill
                priority
                src={BGImage}
                draggable={false}
                alt="background image"
                className="object-cover"
                sizes="(min-width: 768px) 730px, 664px"
              />
            </div>
          </div>
        )}
        {/* Quotes of the day, only for mobile */}
        {isMobile && (
          <div className="flex w-full flex-col px-5 pt-6 sm:hidden">
            <div className="flex w-full justify-start">
              <Image
                src={QuotationMaker}
                width={20}
                height={15}
                draggable={false}
                alt="quotation mark icon"
                className="block"
              />
            </div>
            <div className="flex h-[125px] w-full items-center justify-center px-5 xs:h-[160px]">
              <QuotesAnimation />
            </div>
            <div className="flex w-full justify-end">
              <Image
                src={QuotationMaker}
                width={20}
                height={15}
                draggable={false}
                alt="quotation mark icon"
                className="block rotate-180"
              />
            </div>
          </div>
        )}
        {/* Time video, only for mobile */}
        {isMobile && (
          <div className="mt-3 flex h-auto w-full justify-center sm:hidden">
            <video height={350} width={350} autoPlay loop muted>
              <source src="/videos/time.webm" type="video/webm" />
            </video>
          </div>
        )}
        {/* Left side location container, only for desktop */}
        {isDesktop && (
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
                draggable={false}
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
        )}
        {/* Right side "freelance web developer" text, only for desktop */}
        {isDesktop && (
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
        )}
        {/* Rotate icon animation, only for mobile */}
        {isMobile && (
          <div className="mt-10 flex sm:hidden">
            <h3 className="flex whitespace-nowrap text-sm xs:text-base">
              <ArrowRightIcon className="w-5 text-white xs:w-6" />
              <span className="ml-4 xs:ml-5">Hello, I am</span>
            </h3>
            <div className="relative ml-5 scale-75 xs:ml-6 xs:scale-100">
              <RotateIconAnimation />
            </div>
          </div>
        )}
        {/* Moving big name text something like "sumeet kumar paul" */}
        <div className="-mt-4 flex sm:mt-0">
          <MovingTextAnimation device={device} />
        </div>
        {/* Down arrow, only for mobile */}
        {isMobile && (
          <div className="left-5 mb-10 block sm:absolute sm:bottom-[290px] sm:mb-0 md:hidden">
            <ArrowDownRightIcon className="w-5 text-white xs:w-6" />
          </div>
        )}
        {/* Right side "freelance web developer" text and rotating globe, only for mobile */}
        {isMobile && (
          <div className="left-0 right-0 flex w-full justify-between sm:absolute sm:bottom-[18vh] sm:mb-0 sm:px-5 md:hidden">
            <p className="flex flex-col text-[18px] leading-[1.5] xs:text-[22px]">
              <span>Freelance</span>
              <span>Web Developer</span>
            </p>
            <div className="relative mr-10">
              <GlobeAnimation />
            </div>
          </div>
        )}
      </div>
    </HomeLandingClient>
  );
}
