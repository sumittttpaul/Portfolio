import IdeasConnectThrough from "components/IdeasConnectThrough";
import ZoomCard from "components/ParallaxScroll/ZoomCard";
import { StaticImageData } from "next/image";

export default function Landing({
  device,
  projects,
}: {
  projects: {
    image: StaticImageData;
    title: string;
    description: string;
    color: string;
    date: string;
  }[];
} & DeviceType) {
  const { isMobile, isDesktop } = device;
  return (
    <section className="relative h-auto w-full pt-10 sm:pt-[20vh] ">
      {isDesktop && (
        <h1 className="mx-auto mb-[3vw] flex flex-col px-5 text-[calc(clamp(3.25em,7vw,8em)*.875)] font-semibold leading-[1.065] text-black sm:max-w-[80vw] sm:px-10">
          <span>Developing better digital</span>
          <span>solutions</span>
        </h1>
      )}
      {isMobile && <IdeasConnectThrough mobileOnly />}
      {isDesktop && <ZoomCard projects={projects} />}
    </section>
  );
}
