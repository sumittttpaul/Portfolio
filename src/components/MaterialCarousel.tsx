"use client";

import Image, { StaticImageData } from "next/image";
import Script from "next/script";
import "styles/swiper.css";

// Edit "swiper-material" class in "swiper.css" file to change the height and width and to change the spaceBetween go to the "SwiperScript.js" and at the end you will see the options.
export default function MaterialCarousel({
  images,
}: {
  images: StaticImageData[];
}) {
  return (
    <>
      <Script
        type="module"
        src="/scripts/SwiperScript.js"
        crossOrigin="anonymous"
        strategy="lazyOnload"
        async
      />
      <section className="box-border flex h-[250px] w-full flex-col px-2.5 sm:hidden">
        <div className="demo-slider">
          <div className="swiper">
            <div className="swiper-wrapper">
              {images.map((image, index) => {
                return (
                  <div key={`swiper_slide_${index}`} className="swiper-slide">
                    <div className="swiper-material-wrapper">
                      <div className="swiper-material-content">
                        <Image
                          src={image}
                          width={154}
                          height={250}
                          placeholder="blur"
                          draggable={false}
                          alt="material carousel slide"
                          data-swiper-material-scale="1.25"
                          blurDataURL={image.blurDataURL}
                          className="demo-material-image object-cover object-top"
                        />
                        {/* <span className="demo-material-label swiper-material-animate-opacity">
                          Slide
                        </span> */}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
