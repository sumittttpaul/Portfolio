"use client";

import { Controller, Virtual } from "swiper/modules";
import { Swiper as SwiperTypes } from "swiper/types";
import Image, { StaticImageData } from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import "swiper/css";

export default function MaterialCarousel({
  images,
}: {
  images: StaticImageData[];
}) {
  const [controlledSwiper, setControlledSwiper] = useState<SwiperTypes>();
  const [MainSwiper, setMainSwiper] = useState<SwiperTypes>();

  const ThumbnailClick = (index: number) => {
    setControlledSwiper((ThumbSwiper) => {
      if (ThumbSwiper && MainSwiper && MainSwiper.activeIndex !== index) {
        ThumbSwiper.slideTo(index);
        MainSwiper.slideTo(index);
      }
      return ThumbSwiper;
    });
  };

  return (
    <div className="relative space-y-2">
      <Swiper
        virtual
        spaceBetween={5}
        slidesPerView={1.1}
        modules={[Controller, Virtual]}
        controller={{ control: controlledSwiper }}
        onSwiper={(swiper) => setMainSwiper(swiper)}
        style={{ paddingLeft: 10, paddingRight: 10 }}
      >
        {images.map((image, index) => {
          return (
            <SwiperSlide
              virtualIndex={index}
              key={`swiper_slide_${index}`}
              className="relative h-auto w-auto overflow-hidden rounded-3xl"
            >
              <Image
                src={image}
                width={360}
                height={200}
                draggable={false}
                placeholder="blur"
                alt="material_carousel_slide"
                blurDataURL={image.blurDataURL}
                className="max-h-[200px] object-cover object-top"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Swiper
        virtual
        freeMode
        spaceBetween={5}
        slidesPerView={3.5}
        modules={[Controller, Virtual]}
        onSwiper={(swiper) => setControlledSwiper(swiper)}
        style={{ paddingLeft: 10, paddingRight: 10 }}
      >
        {images.map((image, index) => {
          return (
            <SwiperSlide
              virtualIndex={index}
              onClick={() => ThumbnailClick(index)}
              key={`swiper_slide_thumb_${index}`}
              className="relative h-auto w-auto overflow-hidden rounded-2xl"
            >
              <Image
                width={110}
                height={60}
                src={image}
                draggable={false}
                placeholder="blur"
                blurDataURL={image.blurDataURL}
                alt="material_carousel_slide_thumb"
                className="max-h-[60px] object-cover object-top"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
