"use client";

import { useKeyPress, KeyboardKey } from "utils/Hooks";
import { MotionDiv } from "utils/FramerMotion";
import { StaticImageData } from "next/image";
import Thumbnail from "./Thumbnails";
import BigImage from "./BigImage";
import {
  ExitButton,
  ImagePagination,
  DesktopLeftArrowButton,
  DesktopRightArrowButton,
} from "./Buttons";
import { useState, useRef } from "react";

type Props = {
  onClose: () => void;
  images: StaticImageData[];
};

export default function Desktop({ images, onClose }: Props) {
  const [currentImage, setCurrentImage] = useState(0);
  const [direction, setDirection] = useState(0);
  const ThumbnailRef = useRef<HTMLButtonElement>(null);
  const ContainerRef = useRef<HTMLDivElement>(null);

  const currentImageIndex = currentImage;
  const currentIndex = currentImage + 1;
  const TotalIndex = images.length;
  const IsNextImage = currentImage < images.length - 1;
  const IsPreviousImage = currentImage > 0;

  const handleChangeImage = (newValue: number) => {
    if (newValue > currentImageIndex) setDirection(1);
    else setDirection(-1);
    setCurrentImage(() => {
      handleThumbnailScroll(newValue);
      return newValue;
    });
  };

  const handleNextImage = () => {
    if (IsNextImage) {
      setCurrentImage((prev) => {
        handleThumbnailScroll(prev + 1);
        return prev + 1;
      });
      setDirection(1);
    }
  };

  const handlePreviousImage = () => {
    if (IsPreviousImage) {
      setCurrentImage((prev) => {
        handleThumbnailScroll(prev - 1);
        return prev - 1;
      });
      setDirection(-1);
    }
  };

  const handleThumbnailScroll = (newValue: number) => {
    const _thumbnailRef = ThumbnailRef.current;
    const _containerRef = ContainerRef.current;
    if (_thumbnailRef && _containerRef) {
      const totalThumbnailWidth = _thumbnailRef.offsetWidth;
      const totalMargin = 4 + 4; // margin left and right.
      const totalWidth = totalThumbnailWidth + totalMargin;
      const index = newValue + 1;
      const ContentExceed = totalWidth * index;
      const extraPadding = 20; // just added some space for looking ui better.
      if (ContentExceed > _containerRef.offsetWidth) {
        const getScrollToValue =
          ContentExceed - _containerRef.offsetWidth + extraPadding;
        _containerRef.scrollTo({
          left: getScrollToValue,
          behavior: "smooth",
        });
      } else {
        _containerRef.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      }
    }
  };

  const BackdropAnimation = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const ContainerAnimation = {
    initial: { scale: 0.95 },
    exit: { scale: 0.95 },
    animate: { scale: 1 },
  };

  useKeyPress(() => {
    handlePreviousImage();
  }, [KeyboardKey.ArrowLeft]);

  useKeyPress(() => {
    handleNextImage();
  }, [KeyboardKey.ArrowRight]);

  useKeyPress(() => {
    onClose();
  }, [KeyboardKey.Escape]);

  return (
    <MotionDiv
      {...BackdropAnimation}
      className="fixed inset-0 z-50 grid h-full w-full place-items-center bg-black/95 backdrop-blur"
    >
      <MotionDiv
        {...ContainerAnimation}
        onClick={(e) => e.stopPropagation()}
        className="relative mx-auto flex h-full w-full max-w-[1570px] cursor-default flex-col items-center justify-center bg-transparent"
      >
        <div className="flex h-auto w-full flex-col items-center justify-center">
          <BigImage
            images={images}
            direction={direction}
            handleNextImage={handleNextImage}
            currentImageIndex={currentImageIndex}
            handlePreviousImage={handlePreviousImage}
          />
          <div className="flex items-center space-x-10 screen-1000:pb-20">
            <DesktopLeftArrowButton
              IsPreviousImage={IsPreviousImage}
              handlePreviousImage={handlePreviousImage}
            />
            <ImagePagination
              TotalIndex={TotalIndex}
              currentIndex={currentIndex}
            />
            <DesktopRightArrowButton
              IsNextImage={IsNextImage}
              handleNextImage={handleNextImage}
            />
          </div>
          <Thumbnail
            images={images}
            ContainerRef={ContainerRef}
            ThumbnailRef={ThumbnailRef}
            handleChangeImage={handleChangeImage}
            currentImageIndex={currentImageIndex}
          />
          <ExitButton onClick={onClose} />
        </div>
      </MotionDiv>
    </MotionDiv>
  );
}
