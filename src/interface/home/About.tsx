import TypographyAnimation from "components/Animations/TypographyAnimation";
import TextInViewAnimation from "components/Animations/TextInViewAnimation";
import DivInViewAnimation from "components/Animations/DivInViewAnimation";
import RoundedMagneticLink from "components/Magnetic/RoundedMagneticLink";
import DancingTruck from "../../../public/dancing_truck.gif";
import PhotoButton from "components/Photo/Button";
import LabelTag from "components/LabelTag";
import Image from "next/image";

export default function About() {
  return (
    <section className="relative flex h-full w-full flex-col overflow-hidden bg-white">
      {/* <h2 className="-mt-[max(48px,5.2vw)] ml-[2rem] block whitespace-nowrap text-[max(5.3em,9vw)] font-[900] text-black 2xl:ml-[6rem]">
        about . about . about . about
      </h2> */}
      {/* Description, about me and myself */}
      <div className="relative mx-auto flex w-full max-w-screen-max-size flex-col items-center justify-center px-5 pb-[200px] pt-[60px] font-normal text-black sm:pt-[100px] md:flex-row md:space-x-[5em] md:py-[200px] max-size:mx-auto">
        <div className="flex w-full">
          <TextInViewAnimation
            Animation="Word"
            Text="Elevating brands in the digital age. Let's redefine the norm collaboratively. Uncompromising innovation, constantly pushing boundaries."
          />
        </div>
        <div className="mr-auto mt-[50px] flex w-full max-w-[240px] md:mr-0 md:w-auto">
          <TextInViewAnimation
            Animation="Opacity"
            Text="My dedication to design, code, and interactive experiences places me in a distinctive position within the realm of web design."
          />
        </div>
        <div
          data-scroll
          data-scroll-speed={0.1}
          className="absolute right-14 top-[70%] flex md:left-[calc(100%-340px)] md:top-[80%]"
        >
          <RoundedMagneticLink
            href="/about"
            disableHoverEffectOnMobile
            className="flex h-[12em] w-[12em] bg-almost-black text-[12px] text-white xs:text-[13px] sm:h-[clamp(9em,12vw,11em)] sm:w-[clamp(9em,12vw,11em)] sm:text-base"
          >
            <span>About me</span>
          </RoundedMagneticLink>
        </div>
      </div>
      {/* Ideas connect through text, only for desktop */}
      <div
        data-scroll
        data-scroll-speed={0.3}
        data-scroll-position="top"
        className="mx-auto hidden h-full w-full max-w-screen-max-size px-5 pb-[150px] sm:flex"
      >
        <div className="relative grid h-[750px] w-full place-content-start rounded-[40px] bg-black p-5 sm:h-[500px] sm:place-content-center sm:p-10 screen-1000:h-[800px]">
          <DivInViewAnimation
            Animation="Slide"
            className="box-border flex flex-col sm:relative sm:h-[288px] sm:w-[545px] sm:flex-row screen-1000:h-[501px] screen-1000:w-[950px] screen-1180:h-[570px] screen-1180:w-[1080px]"
          >
            {/* User photo */}
            <PhotoButton />
            {/* Text animation + label tags */}
            <div className="-mt-1 flex flex-col sm:ml-5 sm:mt-0 screen-1000:ml-8">
              <div className="flex w-full flex-col sm:flex-row sm:space-x-4 screen-1000:space-x-5 screen-1180:space-x-6">
                <TypographyAnimation label="ideas" />
                <TypographyAnimation label="connect" />
              </div>
              <div className="flex w-full flex-col">
                <TypographyAnimation label="through" />
                <div className="-mt-1 flex w-full flex-col -space-y-2 sm:-space-y-3 screen-1000:mt-3 screen-1000:space-y-4 screen-1180:mt-5 screen-1180:space-y-6">
                  <LabelTag
                    name="strategy"
                    ContainerClassName="-ml-[5em] sm:ml-[2.5em] screen-1000:ml-[15em] screen-1180:ml-[20em]"
                  />
                  <LabelTag
                    name="design"
                    ContainerClassName="-ml-[1em] sm:ml-[5em] screen-1000:ml-[20em] screen-1180:ml-[25em]"
                  />
                  <LabelTag
                    name="creativity"
                    ContainerClassName="ml-[2.5em] sm:ml-[7.5em] screen-1000:ml-[25em] screen-1180:ml-[30em]"
                  />
                </div>
              </div>
            </div>
            {/* Truck dancing animation */}
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
      </div>
    </section>
  );
}
