import LabelTag from "components/LabelTag";
import PhotoButton from "components/PhotoButton";
import TypographyAnimation from "components/TypographyAnimation";
import Image from "next/image";
import ThreadIcon from "../../../public/icons/thread.svg";
import BGImage from "../../../public/bg_character.png";
import dynamic from "next/dynamic";
import Sumit_Paul from "../../../public/test.jpg";
import ThreeDCard from "components/ThreeDCard";

const MovingTextAnimation = dynamic(
  () => import("components/MovingTextAnimation"),
  { ssr: false },
);

export default function Test() {
  return (
    <div className="relative flex h-[115vh] bg-black">
      {/* Gradient Background */}
      {/* <div className="absolute left-32 top-[25%] block aspect-square h-[500px] min-h-[500px] w-[500px] min-w-[500px] bg-gradient-radial from-dark-pink-purple to-75%" /> */}
      {/* Main */}
      <div className="flex w-full items-end justify-center pt-4 sm:items-start">
        <div className="relative -ml-[200px] h-[1000px] min-h-[1000px] w-[664px] min-w-[664px] sm:sm:h-[1100px] sm:min-h-[1100px] sm:w-[730px] sm:min-w-[730px]">
          <Image
            style={{ objectFit: "contain" }}
            sizes="(min-width: 768px) 730px, 664px"
            src={BGImage}
            alt="background image"
            className="z-[1]"
            fill
            priority
          />
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
    </div>
  );
}
