import Image, { StaticImageData } from "next/image";
import Script from "next/script";

// Edit "swiper-material" class in "swiper.css" file to change the height and width and to change the spaceBetween go to the "SwiperScript.js" and at the end you will see the options.
export default function MaterialCarousel({
  images,
}: {
  images: StaticImageData[];
}) {
  return (
    <>
      <Script type="module" src="/scripts/SwiperScript.js" async></Script>
      <section className="box-border flex h-[250px] w-full flex-col px-2.5 sm:hidden">
        <div className="demo-slider">
          <div className="swiper">
            <div className="swiper-wrapper">
              {images.map((src, i) => {
                return (
                  <div key={i} className="swiper-slide">
                    <div className="swiper-material-wrapper">
                      <div className="swiper-material-content">
                        <Image
                          src={src}
                          width={154}
                          height={250}
                          placeholder="blur"
                          alt="material carousel slide"
                          className="demo-material-image"
                          data-swiper-material-scale="1.25"
                          style={{
                            objectFit: "cover",
                            objectPosition: "top",
                          }}
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
