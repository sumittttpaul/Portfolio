"use client";

import Image, { StaticImageData } from "next/image";
import { useState, useRef, useEffect } from "react";
import { MotionDiv, MotionSpan } from "utils/FramerMotion";
import { gsap } from "gsap/gsap-core";
import { useImageViewerState, useStopScrollingState } from "utils/Zustand";

// Authentication
import AuthenticationImage01 from "../../public/images/work/authentication/01.png";
import AuthenticationImage02 from "../../public/images/work/authentication/02.png";
import AuthenticationImage03 from "../../public/images/work/authentication/03.png";
import AuthenticationImage04 from "../../public/images/work/authentication/04.png";
import AuthenticationImage05 from "../../public/images/work/authentication/05.png";
import AuthenticationImage06 from "../../public/images/work/authentication/06.png";
import AuthenticationImage07 from "../../public/images/work/authentication/07.png";
import AuthenticationImage08 from "../../public/images/work/authentication/08.png";
import AuthenticationImage09 from "../../public/images/work/authentication/09.png";
import AuthenticationImage10 from "../../public/images/work/authentication/10.png";
import AuthenticationImage11 from "../../public/images/work/authentication/11.png";
import AuthenticationImage12 from "../../public/images/work/authentication/12.png";
import AuthenticationImage13 from "../../public/images/work/authentication/13.png";
import AuthenticationImage14 from "../../public/images/work/authentication/14.png";
import AuthenticationImage15 from "../../public/images/work/authentication/15.png";
import AuthenticationImage16 from "../../public/images/work/authentication/16.png";
import AuthenticationImage17 from "../../public/images/work/authentication/17.png";
import AuthenticationImage18 from "../../public/images/work/authentication/18.png";
import AuthenticationImage19 from "../../public/images/work/authentication/19.png";
import AuthenticationImage20 from "../../public/images/work/authentication/20.png";
import AuthenticationImage21 from "../../public/images/work/authentication/21.png";
import AuthenticationImage22 from "../../public/images/work/authentication/22.png";
import AuthenticationImage23 from "../../public/images/work/authentication/23.png";
import AuthenticationImage24 from "../../public/images/work/authentication/24.png";
import AuthenticationImage25 from "../../public/images/work/authentication/25.png";
// Clothing
import ClothingImage01 from "../../public/images/work/clothing/01.png";
// Emotion
import EmotionImage01 from "../../public/images/work/emotion/01.png";
import EmotionImage02 from "../../public/images/work/emotion/02.png";
import EmotionImage03 from "../../public/images/work/emotion/03.png";
import EmotionImage04 from "../../public/images/work/emotion/04.png";
import EmotionImage05 from "../../public/images/work/emotion/05.png";
// Portfolio
import PortfolioImage01 from "../../public/images/work/portfolio/01.png";

const ClothingImages = [ClothingImage01];
const PortfolioImages = [PortfolioImage01];
const EmotionImages = [
  EmotionImage01,
  EmotionImage02,
  EmotionImage03,
  EmotionImage04,
  EmotionImage05,
];
const AuthenticationImages = [
  AuthenticationImage01,
  AuthenticationImage02,
  AuthenticationImage03,
  AuthenticationImage04,
  AuthenticationImage05,
  AuthenticationImage06,
  AuthenticationImage07,
  AuthenticationImage08,
  AuthenticationImage09,
  AuthenticationImage10,
  AuthenticationImage11,
  AuthenticationImage12,
  AuthenticationImage13,
  AuthenticationImage14,
  AuthenticationImage15,
  AuthenticationImage16,
  AuthenticationImage17,
  AuthenticationImage18,
  AuthenticationImage19,
  AuthenticationImage20,
  AuthenticationImage21,
  AuthenticationImage22,
  AuthenticationImage23,
  AuthenticationImage24,
  AuthenticationImage25,
];
const images = {
  clothing: ClothingImages,
  portfolio: PortfolioImages,
  emotion: EmotionImages,
  authentication: AuthenticationImages,
};

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
    imageHeight: number;
    imageWidth: number;
    color: string;
  }[];
}) {
  const [modal, setModal] = useState({ active: false, index: 0 });
  const { active, index } = modal;
  const modalContainer = useRef<HTMLDivElement>(null);
  const cursor = useRef<HTMLSpanElement>(null);
  const cursorLabel = useRef<HTMLSpanElement>(null);

  const { ImageViewerData, setImageViewerData } = useImageViewerState();
  const { toggleIsScrolling } = useStopScrollingState();

  let xMoveContainer = useRef<gsap.QuickToFunc | null>(null);
  let yMoveContainer = useRef<gsap.QuickToFunc | null>(null);
  let xMoveCursor = useRef<gsap.QuickToFunc | null>(null);
  let yMoveCursor = useRef<gsap.QuickToFunc | null>(null);
  let xMoveCursorLabel = useRef<gsap.QuickToFunc | null>(null);
  let yMoveCursorLabel = useRef<gsap.QuickToFunc | null>(null);

  useEffect(() => {
    // Move Container
    xMoveContainer.current = gsap.quickTo(modalContainer.current, "left", {
      duration: 0.8,
      ease: "power3",
    });
    yMoveContainer.current = gsap.quickTo(modalContainer.current, "top", {
      duration: 0.8,
      ease: "power3",
    });
    // Move cursor
    xMoveCursor.current = gsap.quickTo(cursor.current, "left", {
      duration: 0.5,
      ease: "power3",
    });
    yMoveCursor.current = gsap.quickTo(cursor.current, "top", {
      duration: 0.5,
      ease: "power3",
    });
    // Move cursor label
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

  const handleImages = (image: WorkImagesType) => {
    if (!ImageViewerData.show) {
      if (image === "portfolio") {
        toggleIsScrolling();
        setImageViewerData({ images: images.portfolio, show: true });
      }
      if (image === "emotion") {
        toggleIsScrolling();
        setImageViewerData({ images: images.emotion, show: true });
      }
      if (image === "authentication") {
        toggleIsScrolling();
        setImageViewerData({ images: images.authentication, show: true });
      }
      if (image === "clothing") {
        toggleIsScrolling();
        setImageViewerData({ images: images.clothing, show: true });
      }
    }
  };

  const handleImagesSelection = () => {
    const Type1 = "sumeet kumar paul";
    const Type2 = "emotion";
    const Type3 = "agewear lifestyle";
    const Type4 = "authentication";
    // check
    if (projects[index].title.toLowerCase() === Type1) {
      handleImages("portfolio");
    }
    if (projects[index].title.toLowerCase() === Type2) {
      handleImages("emotion");
    }
    if (projects[index].title.toLowerCase() === Type3) {
      handleImages("clothing");
    }
    if (projects[index].title.toLowerCase() === Type4) {
      handleImages("authentication");
    }
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
              key={index}
              index={index}
              title={project.title}
              manageModal={manageModal}
              onClick={handleImagesSelection}
              description={project.description}
            />
          );
        })}
      </div>
      <MotionDiv
        initial="initial"
        ref={modalContainer}
        variants={scaleAnimation}
        animate={active ? "enter" : "closed"}
        className="pointer-events-none fixed left-[50%] top-[50%] z-[1] h-[450px] w-[450px] overflow-hidden bg-white"
      >
        <div
          style={{ top: index * -100 + "%" }}
          className="relative h-full w-full transition-[top] duration-[500ms] ease-[cubic-bezier(0.76,0,0.24,1)]"
        >
          {projects.map((project, index) => {
            const { image, imageWidth, imageHeight, color } = project;
            return (
              <div
                key={index}
                style={{ backgroundColor: color }}
                className="flex h-full w-full items-center justify-center"
              >
                <Image
                  src={image}
                  width={imageWidth}
                  alt="project image"
                  height={imageHeight}
                />
              </div>
            );
          })}
        </div>
      </MotionDiv>
      <MotionSpan
        ref={cursor}
        initial="initial"
        variants={scaleAnimation}
        animate={active ? "enter" : "closed"}
        className="pointer-events-none fixed z-[1] flex h-[80px] w-[80px] rounded-full bg-hover-blue"
      />
      <MotionSpan
        initial="initial"
        ref={cursorLabel}
        variants={scaleAnimation}
        animate={active ? "enter" : "closed"}
        className="pointer-events-none fixed z-[1] flex h-[80px] w-[80px] items-center justify-center rounded-full bg-transparent text-sm text-white"
      >
        View
      </MotionSpan>
    </div>
  );
}

const Project = ({
  index,
  title,
  onClick,
  description,
  manageModal,
}: {
  index: number;
  title: string;
  description: string;
  onClick: () => void;
  manageModal: (active: boolean, index: number, x: number, y: number) => void;
}) => {
  return (
    <div
      onClick={onClick}
      onMouseEnter={(e) => {
        manageModal(true, index, e.clientX, e.clientY);
      }}
      onMouseLeave={(e) => {
        manageModal(false, index, e.clientX, e.clientY);
      }}
      className="group m-0 flex w-full cursor-pointer items-center justify-between border-t border-light-gray px-[100px] py-[50px] transition-all duration-200 last-of-type:border-b last-of-type:border-solid last-of-type:border-light-gray md:px-[50px] lg:px-[150px]"
    >
      <h2 className="text-[24px] font-semibold leading-[1.5] tracking-[-0.2px] text-almost-black transition-all duration-[400ms] group-hover:-translate-x-[10px] group-hover:opacity-50 md:text-[32px] screen-1000:px-0 lg:px-0 lg:text-[46px] xl:text-[50px]">
        {title}
      </h2>
      <p className="font-medium text-black transition-all duration-[400ms] group-hover:translate-x-[10px] group-hover:opacity-50">
        {description}
      </p>
    </div>
  );
};
