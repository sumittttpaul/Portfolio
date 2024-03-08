"use client";

import Image, { StaticImageData } from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import "swiper/css/effect-cards";
import "swiper/css";
import { useEffect, useState } from "react";

export default function CardCarousel({
  images,
}: {
  images: StaticImageData[];
}) {
  const [Sizes, setSizes] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setSizes({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  return (
    <div className="flex w-full sm:hidden">
      <Swiper effect="cards" modules={[EffectCards]} className="flex h-[250px]">
        {images.map((image, index) => {
          return (
            <SwiperSlide
              key={index}
              className="relative flex max-w-[250px] rounded-xl"
            >
              <Image
                fill
                src={image}
                draggable={false}
                placeholder="blur"
                alt="card_carousel_slide"
                sizes="(min-width: 0px) 250px"
                blurDataURL={image.blurDataURL}
                className="object-cover object-top"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
