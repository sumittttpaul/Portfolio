"use client";

import Image, { StaticImageData } from "next/image";
import DivInViewAnimation from "./Animations/DivInViewAnimation";

export default function ProjectCard({
  projects,
  handleImages,
}: {
  handleImages: (value: WorkImagesType) => void;
  projects: {
    image: StaticImageData;
    title: string;
    description: string;
    color: string;
    date: string;
  }[];
}) {
  const handleImagesSelection = (title: string) => {
    const Type1 = "sumeet kumar paul";
    const Type2 = "emotion";
    const Type3 = "agewear lifestyle";
    const Type4 = "authentication";
    // check
    if (title.toLowerCase() === Type1) {
      handleImages("portfolio");
    }
    if (title.toLowerCase() === Type2) {
      handleImages("emotion");
    }
    if (title.toLowerCase() === Type3) {
      handleImages("clothing");
    }
    if (title.toLowerCase() === Type4) {
      handleImages("authentication");
    }
  };

  return (
    <div className="mb-14 mt-5 flex w-full flex-col space-y-14 px-5">
      {projects.map((project, index) => {
        const { title, description, date, image, color } = project;
        return (
          <DivInViewAnimation Animation="Slide" key={index}>
            <button
              onClick={() => handleImagesSelection(title)}
              className="flex w-full flex-col space-y-2"
            >
              <div
                className="flex w-full items-center justify-center px-5 py-20"
                style={{ backgroundColor: color }}
              >
                <Image
                  src={image}
                  draggable={false}
                  width={400}
                  height={267}
                  placeholder="blur"
                  blurDataURL={image.blurDataURL}
                  alt="projects"
                />
              </div>
              <h4 className="text-[1.75em] font-medium text-black">{title}</h4>
              <div className="h-[1px] w-full bg-light-gray" />
              <h6 className="flex w-full justify-between text-sm text-black">
                <span>{description}</span>
                <span>{date}</span>
              </h6>
            </button>
          </DivInViewAnimation>
        );
      })}
    </div>
  );
}
