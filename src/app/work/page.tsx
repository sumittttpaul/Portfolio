// import DivInViewAnimation from "components/Animations/DivInViewAnimation";
// import TypographyAnimation from "components/Animations/TypographyAnimation";
// import DancingTruck from "../../../public/images/dancing_truck.gif";
import MainClient from "components/Clients/MainClient";
// import LabelTag from "components/LabelTag";
// import PhotoButton from "components/Photo/Button";
// import Image from "next/image";
// import PhotoModal from "components/Photo/Modal";

export default function Work() {
  return (
    <MainClient className="flex h-screen w-full flex-col items-center justify-center bg-white text-5xl text-black">
      {/* Desktop version */}
      {/* <div
        // data-scroll
        // data-scroll-speed={0.3}
        // data-scroll-position="top"
        className="mx-auto h-full w-full max-w-screen-max-size px-5 py-[150px] flex"
      >
        <div className="relative grid h-[750px] w-full place-content-start rounded-[40px] bg-black p-5 sm:h-[500px] sm:place-content-center sm:p-10 screen-1000:h-[800px]">
          <DivInViewAnimation
            Animation="Slide"
            className="box-border flex flex-col sm:relative sm:h-[288px] sm:w-[545px] sm:flex-row screen-1000:h-[501px] screen-1000:w-[950px] screen-1180:h-[570px] screen-1180:w-[1080px]"
          >
            <PhotoButton className="mb-2 h-[80px] w-[80px] min-w-[80px] rounded-full rounded-bl-[0px] xs:mb-2.5 xs:h-[110px] xs:w-[110px] sm:h-[90px] sm:w-[90px] sm:min-w-[90px] sm:rounded-bl-full sm:rounded-br-[0px] screen-1000:h-[150px] screen-1000:w-[150px] screen-1180:h-[175px] screen-1180:w-[175px]" sizes="(min-width: 1180px) 175px, (min-width: 1000px) 150px,(min-width: 640px) 90px, 110px" />
            <div className="-mt-1 flex flex-col sm:ml-5 sm:mt-0 screen-1000:ml-8">
              <div className="flex w-full flex-col sm:flex-row sm:space-x-4 screen-1000:space-x-5 screen-1180:space-x-6">
                <TypographyAnimation label="ideas" />
                <TypographyAnimation label="connect" />
              </div>
              <div className="flex w-full flex-col">
                <TypographyAnimation label="through" />
                <div className="-mt-1 flex w-full flex-col -space-y-2 sm:-space-y-3 screen-1000:mt-3 screen-1000:space-y-4 screen-1180:mt-5 screen-1180:space-y-6">
                  <LabelTag name="strategy" ContainerClassName="ml-[6em]" />
                  <LabelTag name="design" ContainerClassName="ml-[8em]" />
                  <LabelTag name="creativity" ContainerClassName="ml-[10em]" />
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 flex w-full justify-center sm:-left-5 sm:top-24 sm:w-auto screen-1000:top-40 screen-1180:top-44">
              <div className="relative mb-5 h-[229px] w-[350px] sm:mb-0 sm:h-[190px] sm:w-[290px] screen-1000:h-[333px] screen-1000:w-[508px] screen-1180:h-[398px] screen-1180:w-[608px]">
                <Image
                  fill
                  sizes="(min-width: 1180px) 608px,(min-width: 1000px) 333px,(min-width: 640px) 290px,"
                  src={DancingTruck}
                  alt="dancing truck"
                />
              </div>
            </div>
          </DivInViewAnimation>
        </div>
      </div> */}
      {/* Mobile version */}
      {/* <div className="flex flex-col">
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
      </div> */}
      {/* <PhotoModal /> */}
      Work
    </MainClient>
  );
}
