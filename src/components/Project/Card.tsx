import Image, { StaticImageData } from "next/image";
import DivInViewAnimation from "../Animations/DivInViewAnimation";

export default function ProjectCard({
  projects,
}: {
  projects: {
    image: StaticImageData;
    title: string;
    description: string;
    color: string;
    date: string;
  }[];
}) {
  return (
    <div className="mb-14 mt-5 flex w-full flex-col space-y-14 px-5 sm:hidden">
      {projects.map((project, index) => {
        const { title, description, date, image, color } = project;
        return (
          <DivInViewAnimation
            Animation="Slide"
            key={`Project_Modal_${index}`}
            className="space-y-2"
          >
            <div
              className="flex w-full items-center justify-center px-5 py-20"
              style={{ backgroundColor: color }}
            >
              <Image
                src={image}
                width={400}
                height={267}
                placeholder="blur"
                blurDataURL={image.blurDataURL}
                draggable={false}
                alt="projects"
              />
            </div>
            <h4 className="text-[1.75em] font-medium text-black">{title}</h4>
            <div className="h-[1px] w-full bg-light-gray" />
            <h6 className="flex w-full justify-between text-sm text-black">
              <span>{description}</span>
              <span>{date}</span>
            </h6>
          </DivInViewAnimation>
        );
      })}
    </div>
  );
}
