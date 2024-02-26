"use client";

import Image, { StaticImageData } from "next/image";
import { MotionButton } from "utils/FramerMotion";
import { useEffect } from "react";

export default function Thumbnail({
  images,
  currentImageIndex,
  handleChangeImage,
  ThumbnailRef,
  ContainerRef,
}: {
  images: StaticImageData[];
  currentImageIndex: number;
  handleChangeImage: (index: number) => void;
  ThumbnailRef: React.RefObject<HTMLButtonElement>;
  ContainerRef: React.RefObject<HTMLDivElement>;
}) {
  useEffect(() => {
    const el = ContainerRef.current;
    if (el) {
      const onWheel = (e: WheelEvent) => {
        if (e.deltaY == 0) return;
        if (
          !(el.scrollLeft === 0 && e.deltaY < 0) &&
          !(
            el.scrollWidth - el.clientWidth - Math.round(el.scrollLeft) === 0 &&
            e.deltaY > 0
          )
        ) {
          // e.preventDefault();
        }
        el.scrollBy({
          left: e.deltaY < 0 ? -el.clientWidth * 0.5 : el.clientWidth * 0.5,
          behavior: "smooth",
        });
      };
      el.addEventListener("wheel", onWheel, { passive: true });
      return () => el.removeEventListener("wheel", onWheel);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      ref={ContainerRef}
      className="screen-1000:scrollbar-x-visible absolute bottom-10 flex w-full overflow-y-hidden overflow-x-scroll px-2.5 pb-1.5 sm:bottom-5 screen-1000:bottom-1.5 screen-1000:px-0"
    >
      <div className="mx-auto flex">
        {images.map((image, index) => (
          <MotionButton
            name="work_image_thumbnail_button"
            key={index}
            ref={ThumbnailRef}
            whileTap={{ scale: 0.9 }}
            onClick={() => handleChangeImage(index)}
            className={`${currentImageIndex === index ? "border-white/75" : "border-white/0 screen-1000:hover:border-white/30"} ml-1 mr-1 block min-h-[70px] min-w-[125px] border border-solid transition-colors duration-200 ease-in`}
          >
            <Image
              width={125}
              height={70}
              src={image}
              draggable={false}
              placeholder="blur"
              alt="Thumbnail Image"
              blurDataURL={image.blurDataURL}
            />
          </MotionButton>
        ))}
      </div>
    </div>
  );
}
