import TextInViewAnimation from "components/Animations/TextInViewAnimation";
import RoundedMagneticLink from "components/Magnetic/RoundedMagneticLink";
import DivInViewAnimation from "components/Animations/DivInViewAnimation";
import PointsBackground from "../../../public/images/points_background.png";
import WorkImage1 from "../../../public/images/work/01.png";
import WorkImage2 from "../../../public/images/work/02.png";
import WorkImage3 from "../../../public/images/work/03.png";
import ProjectLink from "components/ProjectLink";
import ProjectCard from "components/ProjectCard";
import Image from "next/image";

const projects = [
  {
    image: WorkImage1,
    title: "Sumeet Kumar Paul",
    description: "Portfolio",
    color: "#373737",
    date: "2024",
  },
  {
    image: WorkImage2,
    title: "Emotion",
    description: "E-commerce Store",
    color: "#344148",
    date: "2023",
  },
  {
    image: WorkImage3,
    title: "Agewear Lifestyle",
    description: "Clothing Brand",
    color: "#483C32",
    date: "2022",
  },
];

export default function Projects({ device }: DeviceType) {
  const { isMobile, isTablet, isDesktop } = device;
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
          <TextInViewAnimation Animation="Word" className="hidden sm:flex">
            Showcasing&nbsp;the
          </TextInViewAnimation>
          <TextInViewAnimation
            Animation="Word"
            className="ml-20 hidden sm:flex"
          >
            Art&nbsp;of&nbsp;Digital&nbsp;Creation
          </TextInViewAnimation>
          <TextInViewAnimation Animation="Word" className="flex sm:hidden">
            Showcasing&nbsp;the&nbsp;Art
          </TextInViewAnimation>
          <TextInViewAnimation Animation="Word" className="flex sm:hidden">
            of&nbsp;Digital&nbsp;Creation
          </TextInViewAnimation>
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
      {isMobile && <ProjectCard projects={projects} />}
      {(isDesktop || isTablet) && <ProjectLink projects={projects} />}
      <div className="flex w-full items-center justify-center px-5">
        <RoundedMagneticLink
          href="#"
          disableHoverEffectOnMobile
          className="sm:border-light-gray sm:group relative flex w-full items-center justify-center bg-almost-black py-[12px] sm:w-auto sm:border sm:border-solid sm:bg-transparent sm:px-[60px] sm:py-[30px]"
        >
          <span className="z-[1] flex text-[12px] text-white transition-colors duration-[400ms] group-hover:text-white xs:text-[13px] sm:text-base sm:text-black">
            More work
            <span className="-mt-1 ml-1 block text-[10px] sm:text-xs">5</span>
          </span>
        </RoundedMagneticLink>
      </div>
    </section>
  );
}
