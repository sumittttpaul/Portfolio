"use client";

import MouseScaleCard from "components/MouseScaleCard";
import ProjectCard from "components/ProjectCard";
import ImageViewer from "components/ImageViewer";
import { StaticImageData } from "next/image";
import { useState } from "react";

type ModalState = {
  show: boolean;
  images: StaticImageData[] | null;
};

export default function Projects({
  device,
  projects,
  images,
}: {
  images: {
    clothing: StaticImageData[];
    portfolio: StaticImageData[];
    emotion: StaticImageData[];
    authentication: StaticImageData[];
  };
  projects: {
    image: StaticImageData;
    title: string;
    description: string;
    color: string;
    date: string;
  }[];
} & DeviceType) {
  const { isMobile, isDesktop } = device;
  const [ImageViewerData, setImageViewerData] = useState<ModalState>({
    show: false,
    images: null,
  });

  const handleClose = () => {
    setImageViewerData((prev) => {
      if (prev.show) {
        return { ...prev, show: false };
      } else {
        return { ...prev };
      }
    });
  };

  const handleImages = (image: WorkImagesType) => {
    setImageViewerData((prev) => {
      if (!prev.show) {
        if (image === "portfolio") {
          return { images: images.portfolio, show: true };
        }
        if (image === "emotion") {
          return { images: images.emotion, show: true };
        }
        if (image === "authentication") {
          return { images: images.authentication, show: true };
        }
        if (image === "clothing") {
          return { images: images.clothing, show: true };
        } else {
          return { ...prev, show: false };
        }
      } else {
        return { ...prev, show: false };
      }
    });
  };

  return (
    <section className="mx-auto w-full max-w-screen-max-size sm:pb-[5vw]">
      {isMobile && (
        <div className="mt-10 flex w-full flex-col">
          <ProjectCard
            handleImages={handleImages}
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
      <ImageViewer
        device={device}
        onClose={handleClose}
        open={ImageViewerData.show}
        images={ImageViewerData.images}
      />
    </section>
  );
}
