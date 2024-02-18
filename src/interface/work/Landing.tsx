"use client";

import dynamic from "next/dynamic";

// Over all projects
import WorkImage01 from "../../../public/images/work/01.png";
import WorkImage02 from "../../../public/images/work/02.png";
import WorkImage03 from "../../../public/images/work/03.png";
import WorkImage04 from "../../../public/images/work/04.png";
import WorkImage05 from "../../../public/images/work/05.png";
import WorkImage06 from "../../../public/images/work/06.png";
import WorkImage07 from "../../../public/images/work/07.png";
import WorkImage08 from "../../../public/images/work/08.png";

const IdeasConnectThrough = dynamic(
  () => import("components/IdeasConnectThrough"),
);
const ZoomCard = dynamic(() => import("components/ParallaxScroll/ZoomCard"));

const projects = [
  {
    image: WorkImage01,
    title: "Sumeet Kumar Paul",
    description: "Portfolio",
    color: "#373737",
    date: "2024",
  },
  {
    image: WorkImage02,
    title: "Emotion",
    description: "E-commerce Store",
    color: "#344148",
    date: "2023",
  },
  {
    image: WorkImage03,
    title: "Agewear Lifestyle",
    description: "Clothing Brand",
    color: "#483C32",
    date: "2022",
  },
  {
    image: WorkImage04,
    title: "Agewear Lifestyle",
    description: "Clothing Brand",
    color: "#483C32",
    date: "2022",
  },
  {
    image: WorkImage05,
    title: "Authentication",
    description: "Brand Project",
    color: "#0F0F0F",
    date: "2021",
  },
  {
    image: WorkImage06,
    title: "Agewear Lifestyle",
    description: "Clothing Brand",
    color: "#483C32",
    date: "2022",
  },
  {
    image: WorkImage07,
    title: "Agewear Lifestyle",
    description: "Clothing Brand",
    color: "#483C32",
    date: "2022",
  },
  {
    image: WorkImage08,
    title: "Agewear Lifestyle",
    description: "Clothing Brand",
    color: "#474747",
    date: "2022",
  },
];

export default function Landing({ device }: DeviceType) {
  const { isMobile, isDesktop } = device;
  return (
    <section className="relative h-auto w-full pt-10 xs:pt-14 md:pt-[25vh] ">
      {isDesktop && (
        <h1 className="mx-auto mb-[3vw] hidden flex-col px-5 text-[calc(clamp(3.25em,7vw,8em)*.875)]  font-semibold leading-[1.065] text-almost-black sm:max-w-[80vw] sm:px-10 md:flex">
          <span>Developing better digital</span>
          <span>solutions</span>
        </h1>
      )}
      {isMobile && <IdeasConnectThrough mobileOnly />}
      {isDesktop && <ZoomCard projects={projects} />}
    </section>
  );
}
