import Image from "next/image";
import TypographyAnimation from "components/Animations/TypographyAnimation";
import LabelTag from "components/LabelTag";
import PhotoButton from "components/Photo/Button";
import ThreadIcon from "../../../public/icons/thread.svg";

export default function Test() {
  return (
    <div className="relative flex h-screen overflow-x-hidden bg-black">
      {/* Gradient Background */}
      {/* <div className="absolute left-32 top-[25%] block aspect-square h-[500px] min-h-[500px] w-[500px] min-w-[500px] bg-gradient-radial from-dark-pink-purple to-75%" /> */}
      {/* 3D Card */}
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

      <div className="ml-[20%] mt-[10%] flex w-full justify-start space-x-10">
        <PhotoButton />
        <div className="flex flex-col">
          <div className="flex w-full space-x-6">
            <TypographyAnimation label="ideas" />
            <TypographyAnimation label="connect" />
          </div>
          <div className="flex w-full flex-col">
            <TypographyAnimation label="through" />
            <div className="mt-1 flex w-full flex-col space-y-5">
              <LabelTag name="strategy" ContainerClassName="ml-[17em]" />
              <LabelTag name="design" ContainerClassName="ml-[22em]" />
              <LabelTag name="creativity" ContainerClassName="ml-[27em]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
