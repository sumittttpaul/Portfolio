"use client";

import DivInViewAnimation from "./Animations/DivInViewAnimation";
import Image, { StaticImageData } from "next/image";
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
  const { ImageViewerData, setImageViewerData } = useImageViewerState();
  const { toggleIsScrolling } = useStopScrollingState();

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
              name="div_inview_button"
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
