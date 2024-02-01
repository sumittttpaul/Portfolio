"use client";

import Image, { StaticImageData } from "next/image";
import { useState, useRef, useEffect } from "react";
import { MotionDiv } from "utils/FramerMotion";
import { gsap } from "gsap/gsap-core";

const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  enter: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};

export default function ProjectLink({
  projects,
}: {
  projects: {
    title: string;
    description: string;
    date: string;
    image: StaticImageData;
    color: string;
  }[];
}) {
  const [modal, setModal] = useState({ active: false, index: 0 });
  const { active, index } = modal;
  const modalContainer = useRef(null);
  const cursor = useRef(null);
  const cursorLabel = useRef(null);

  let xMoveContainer = useRef<gsap.QuickToFunc | null>(null);
  let yMoveContainer = useRef<gsap.QuickToFunc | null>(null);
  let xMoveCursor = useRef<gsap.QuickToFunc | null>(null);
  let yMoveCursor = useRef<gsap.QuickToFunc | null>(null);
  let xMoveCursorLabel = useRef<gsap.QuickToFunc | null>(null);
  let yMoveCursorLabel = useRef<gsap.QuickToFunc | null>(null);

  useEffect(() => {
    //Move Container
    xMoveContainer.current = gsap.quickTo(modalContainer.current, "left", {
      duration: 0.8,
      ease: "power3",
    });
    yMoveContainer.current = gsap.quickTo(modalContainer.current, "top", {
      duration: 0.8,
      ease: "power3",
    });
    //Move cursor
    xMoveCursor.current = gsap.quickTo(cursor.current, "left", {
      duration: 0.5,
      ease: "power3",
    });
    yMoveCursor.current = gsap.quickTo(cursor.current, "top", {
      duration: 0.5,
      ease: "power3",
    });
    //Move cursor label
    xMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "left", {
      duration: 0.45,
      ease: "power3",
    });
    yMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "top", {
      duration: 0.45,
      ease: "power3",
    });
  }, []);

  const moveItems = (x: number, y: number) => {
    if (
      xMoveContainer.current &&
      yMoveContainer.current &&
      xMoveCursor.current &&
      yMoveCursor.current &&
      xMoveCursorLabel.current &&
      yMoveCursorLabel.current
    ) {
      xMoveContainer.current(x);
      yMoveContainer.current(y);
      xMoveCursor.current(x);
      yMoveCursor.current(y);
      xMoveCursorLabel.current(x);
      yMoveCursorLabel.current(y);
    }
  };
  const manageModal = (
    active: boolean,
    index: number,
    x: number,
    y: number,
  ) => {
    moveItems(x, y);
    setModal({ active, index });
  };

  return (
    <div
      onMouseMove={(e) => {
        moveItems(e.clientX, e.clientY);
      }}
      className="relative flex w-full flex-col items-center"
    >
      <div className="mx-auto my-[100px] hidden w-full max-w-screen-max-size flex-col items-center justify-center sm:flex">
        {projects.map((project, index) => {
          return (
            <Project
              index={index}
              title={project.title}
              description={project.description}
              manageModal={manageModal}
              key={`Project_Modal_${index}`}
            />
          );
        })}
      </div>
      <MotionDiv
        ref={modalContainer}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
        className="pointer-events-none fixed left-[50%] top-[50%] z-[1] h-[450px] w-[450px] overflow-hidden bg-white"
      >
        <div
          style={{ top: index * -100 + "%" }}
          className="relative h-full w-full transition-[top] duration-[500ms] ease-[cubic-bezier(0.76,0,0.24,1)]"
        >
          {projects.map((project, index) => {
            const { image, color } = project;
            return (
              <div
                className="flex h-full w-full items-center justify-center"
                style={{ backgroundColor: color }}
                key={`Project_Modal_${index}`}
              >
                <Image src={image} width={400} height={267} alt="projects" />
              </div>
            );
          })}
        </div>
      </MotionDiv>
      <MotionDiv
        ref={cursor}
        className="pointer-events-none fixed z-[1] flex h-[80px] w-[80px] items-center justify-center rounded-full bg-hover-blue text-sm text-white"
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
      />
      <MotionDiv
        ref={cursorLabel}
        className="pointer-events-none fixed z-[1] flex h-[80px] w-[80px] items-center justify-center rounded-full bg-transparent text-sm text-white"
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
      >
        View
      </MotionDiv>
    </div>
  );
}

const Project = ({
  index,
  title,
  description,
  manageModal,
}: {
  index: number;
  title: string;
  description: string;
  manageModal: (active: boolean, index: number, x: number, y: number) => void;
}) => {
  return (
    <div
      onMouseEnter={(e) => {
        manageModal(true, index, e.clientX, e.clientY);
      }}
      onMouseLeave={(e) => {
        manageModal(false, index, e.clientX, e.clientY);
      }}
      className="group flex w-full cursor-pointer items-center justify-between border-t border-light-gray px-[100px] py-[50px] transition-all duration-200 last-of-type:border-b last-of-type:border-solid last-of-type:border-light-gray md:px-[50px] lg:px-[150px]"
    >
      <h2 className="m-0 text-[24px] font-semibold leading-[1.5] tracking-[-0.2px] text-almost-black transition-all duration-[400ms] group-hover:-translate-x-[10px] group-hover:opacity-50 md:text-[32px] screen-1000:px-0 lg:px-0 lg:text-[46px] xl:text-[50px]">
        {title}
      </h2>
      <p className="font-medium text-black transition-all duration-[400ms] group-hover:translate-x-[10px] group-hover:opacity-50">
        {description}
      </p>
    </div>
  );
};
