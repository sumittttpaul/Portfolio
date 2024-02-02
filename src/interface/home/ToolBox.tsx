import LogoSlidingAnimation from "components/Animations/LogoSlidingAnimation";
import ArrowPoints from "components/ArrowPoints";
import PointsBackground from "../../../public/images/points_background.png";
import ToolImage0 from "../../../public/images/tools/clerk.png";
import ToolImage1 from "../../../public/images/tools/firebase.png";
import ToolImage2 from "../../../public/images/tools/mongodb.png";
import ToolImage3 from "../../../public/images/tools/mui.png";
import ToolImage4 from "../../../public/images/tools/nextjs.png";
import ToolImage5 from "../../../public/images/tools/nextui.png";
import ToolImage6 from "../../../public/images/tools/react.png";
import ToolImage7 from "../../../public/images/tools/redux.png";
import ToolImage8 from "../../../public/images/tools/sanity.png";
import ToolImage9 from "../../../public/images/tools/stepzen.png";
import ToolImage10 from "../../../public/images/tools/stripe.png";
import ToolImage11 from "../../../public/images/tools/tailwindcss.png";
import ToolImage12 from "../../../public/images/tools/tremor.png";
import ToolImage13 from "../../../public/images/tools/typescript.png";
import ToolImage14 from "../../../public/images/tools/gsap.png";
import ToolImage15 from "../../../public/images/tools/framer.png";
import ToolImage16 from "../../../public/images/tools/swiperjs.png";
import ToolImage17 from "../../../public/images/tools/material.png";
import TextInViewAnimation from "components/Animations/TextInViewAnimation";
import DivInViewAnimation from "components/Animations/DivInViewAnimation";
import ParallaxScrollCard from "components/ParallaxScrollCard";
import MaterialCarousel from "components/MaterialCarousel";
import Image from "next/image";

const MaterialCarouselImages = [
  ToolImage14,
  ToolImage17,
  ToolImage15,
  ToolImage3,
  ToolImage4,
  ToolImage5,
  ToolImage6,
  ToolImage2,
  ToolImage8,
  ToolImage9,
  ToolImage10,
  ToolImage11,
  ToolImage12,
  ToolImage13,
  ToolImage1,
  ToolImage16,
  ToolImage7,
];

const ParallaxScrollCardImages = [
  ToolImage0,
  ToolImage1,
  ToolImage2,
  ToolImage3,
  ToolImage4,
  ToolImage5,
  ToolImage6,
  ToolImage7,
  ToolImage8,
  ToolImage9,
  ToolImage10,
  ToolImage11,
  ToolImage12,
  ToolImage13,
  ToolImage14,
  ToolImage15,
  ToolImage16,
  ToolImage17,
];

export default function ToolBox({ device }: DeviceType) {
  const { isMobile, isTablet, isDesktop } = device;
  return (
    <section className="relative flex h-full w-full flex-col bg-white">
      <div className="mx-auto w-full max-w-screen-screen-1000 overflow-hidden">
        <h1 className="flex w-full flex-col px-5 text-start text-[32px] font-semibold leading-[1.5] tracking-[-0.2px] text-almost-black xs:text-[36px] sm:text-[46px] sm:leading-[1.2] screen-1000:px-0 lg:px-0 lg:text-[56px] xl:text-[64px]">
          <TextInViewAnimation Animation="Word">
            Designing&nbsp;Impact,
          </TextInViewAnimation>
          <TextInViewAnimation Animation="Word" className="ml-10 sm:ml-20">
            Driving&nbsp;Change
          </TextInViewAnimation>
        </h1>
        <DivInViewAnimation
          Animation="Slide"
          animationConfig={{ start: "50px", end: "0px" }}
        >
          <p className="mx-auto my-10 w-full max-w-screen-sm whitespace-normal text-pretty px-5 text-[1em] leading-normal text-black md:text-[1.3em] screen-1000:px-0">
            Curious about the magic behind your website? Delve into the tools
            and technologies I employ to bring your vision to life. Here&apos;s
            a glimpse into my web development toolkit, carefully curated to
            craft seamless and innovative online experiences for you. Let&apos;s
            explore how I can transform your ideas into a stunning website,
            utilizing a blend of cutting-edge technologies and meticulous
            craftsmanship.
          </p>
        </DivInViewAnimation>
        <DivInViewAnimation
          Animation="Slide"
          animationConfig={{ start: "50px", end: "0px" }}
        >
          <LogoSlidingAnimation />
        </DivInViewAnimation>
        <div className="absolute -left-[475px] hidden md:flex">
          <Image
            src={PointsBackground}
            width={1000}
            height={554}
            alt="points background"
          />
        </div>
        <div className="absolute -right-[475px] hidden md:flex">
          <Image
            src={PointsBackground}
            width={1000}
            height={554}
            alt="points background"
          />
        </div>
        <div className="relative mx-auto mb-10 w-full max-w-screen-sm space-y-5 px-5 sm:mb-[100px]">
          <DivInViewAnimation
            Animation="Slide"
            animationConfig={{ start: "50px", end: "0px" }}
          >
            <ArrowPoints title="Understanding Your Vision">
              I collaborate with you, diving into your goals, and meticulously
              craft strategies that align seamlessly with your unique mission.
            </ArrowPoints>
          </DivInViewAnimation>
          <DivInViewAnimation
            Animation="Slide"
            animationConfig={{ start: "50px", end: "0px" }}
          >
            <ArrowPoints title="Tailoring Excellence">
              I design with intention, ensuring that every element serves a
              specific purpose, enhancing functionality, and elevating the user
              experience
            </ArrowPoints>
          </DivInViewAnimation>
          <DivInViewAnimation
            Animation="Slide"
            animationConfig={{ start: "50px", end: "0px" }}
          >
            <ArrowPoints title="Driving Results">
              I prioritize outcomes, delivering websites that not only attract
              and engage but also convert and retain users effectively.
            </ArrowPoints>
          </DivInViewAnimation>
          <DivInViewAnimation
            Animation="Slide"
            animationConfig={{ start: "50px", end: "0px" }}
          >
            <ArrowPoints title="Fostering Collaboration">
              I strongly believe in the synergy of ideas, working
              collaboratively to create solutions that authentically reflect
              your brand and resonate with your audience.
            </ArrowPoints>
          </DivInViewAnimation>
        </div>
      </div>
      {isMobile && <MaterialCarousel images={MaterialCarouselImages} />}
      {(isDesktop || isTablet) && (
        <ParallaxScrollCard images={ParallaxScrollCardImages} />
      )}
    </section>
  );
}
