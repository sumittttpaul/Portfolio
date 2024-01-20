import Image from "next/image";
import BGImage from "../../../public/bg_character.png";
import LocationContainer from "../../../public/icons/location-container.svg";
import GlobeAnimation from "components/Animations/GlobeAnimation";
import { ArrowDownRightIcon } from "@heroicons/react/24/outline";
import MovingTextAnimation from "components/Animations/MovingTextAnimation";

export default function Test() {
  return (
    <div className="relative flex h-auto overflow-x-hidden bg-black">
      {/* Gradient Background */}
      {/* <div className="absolute left-32 top-[25%] block aspect-square h-[500px] min-h-[500px] w-[500px] min-w-[500px] bg-gradient-radial from-dark-pink-purple to-75%" /> */}
      {/* Main */}
      <div className="flex w-full items-end justify-center pt-10 md:items-start">
        <div className="relative -ml-[200px] h-[1000px] min-h-[1000px] w-[664px] min-w-[664px] md:h-[1100px] md:min-h-[1100px] md:w-[730px] md:min-w-[730px]">
          <Image
            style={{ objectFit: "cover" }}
            sizes="(min-width: 768px) 730px, 664px"
            src={BGImage}
            alt="background image"
            priority
            fill
          />
        </div>
      </div>
      <div className="absolute -left-4 top-[35%] z-[1] hidden h-[114px] w-[283px] scale-[0.9] items-center justify-between rounded-r-full transition-all duration-300 ease-in md:flex xl:left-0 xl:scale-100">
        <div className="relative h-[114px] w-[283px]">
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
      <div
        data-scroll
        data-scroll-speed={0.1}
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
      {/* <ThreeDCard
        Size={{ Height: 300, Width: 400 }}
        ImageSrc={Sumit_Paul}
        BGColor="bg-white"
        className="left-[510px] top-[150px] z-[0]"
      />
      <ThreeDCard
        Size={{ Height: 300, Width: 300 }}
        ImageSrc={Sumit_Paul}
        BGColor="bg-white"
        className="left-[300px] top-[350px] z-[0]"
      />
      <ThreeDCard
        Size={{ Height: 200, Width: 200 }}
        ImageSrc={Sumit_Paul}
        BGColor="bg-white"
        className="left-[550px] top-[540px] z-[2]"
      />
      <ThreeDCard
        Size={{ Height: 300, Width: 300 }}
        ImageSrc={Sumit_Paul}
        BGColor="bg-white"
        className="left-[1020px] top-[80px] z-[0]"
      />
      <ThreeDCard
        Size={{ Height: 350, Width: 350 }}
        ImageSrc={Sumit_Paul}
        BGColor="bg-white"
        className="left-[1200px] top-[390px] z-[2]"
      /> */}

      {/* <div className="relative mx-auto flex w-full max-w-screen-max-size flex-col justify-start items-center">
        <div className="ml-[120px] box-border flex items-end">
          <PhotoButton />
          <div className="z-[2] -ml-[13px] -mr-[13.5px] block h-[23px] w-[45px]">
            <Image height={23} width={45} src={ThreadIcon} alt="thread icon" />
          </div>
          <LabelTag name="strategy" />
        </div>
        <div className="ml-14 mt-4 flex">
          <div className="ml-[71px] flex">
            <TypographyAnimation label="ideas" />
            <TypographyAnimation label="connect" />
          </div>
        </div>
        <div className="z-[1] flex">
          <TypographyAnimation label="through" />
          <div className="z-[4] -mr-[95px] -mt-[14px] ml-[55px] block h-[23px] w-[45px] rotate-90 scale-110">
            <Image height={23} width={45} src={ThreadIcon} alt="thread icon" />
          </div>
          <LabelTag name="creativity" ContainerClassName="ml-14 -mt-[11px]" />
        </div>
        <div className="ml-[400px] flex">
          <div className="z-[4] -ml-[5px] -mr-[35px] -mt-[14px] block h-[23px] w-[45px] rotate-90 scale-110">
            <Image height={23} width={45} src={ThreadIcon} alt="thread icon" />
          </div>
          <LabelTag name="design" ContainerClassName="mt-2" />
        </div>
      </div> */}
      <MovingTextAnimation />
      <div className="absolute bottom-[290px] left-5 block md:hidden">
        <ArrowDownRightIcon className="w-6 text-white" />
      </div>
      <div className="absolute bottom-[18vh] left-0 right-0 flex w-full justify-between px-5 md:hidden">
        <p className="flex flex-col text-[25px] leading-[1.4]">
          <span>Freelance</span>
          <span>Web Developer</span>
        </p>
        <div className="relative mr-10">
          <GlobeAnimation />
        </div>
      </div>
    </div>
  );
}
