"use client";

import ImageViewer from "components/ImageViewer";
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

const MouseScaleCard = dynamic(() => import("components/MouseScaleCard"));
const ProjectCard = dynamic(() => import("components/ProjectCard"));

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

export default function Projects({ device }: DeviceType) {
  const { isMobile, isDesktop } = device;

  return (
    <section className="mx-auto w-full max-w-screen-max-size sm:pb-[5vw]">
      {isMobile && (
        <div className="mt-10 flex w-full flex-col">
          <ProjectCard
            projects={[projects[0], projects[1], projects[2], projects[4]]}
          />
        </div>
      )}
      {isDesktop && (
        <div className="space-y-[5em]">
          <MouseScaleCard projects={[projects[0], projects[1]]} />
          <MouseScaleCard projects={[projects[2], projects[4]]} />
        </div>
      )}
      <ImageViewer device={device} />
    </section>
  );
}
