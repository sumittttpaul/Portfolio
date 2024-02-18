import { ArrowDownRightIcon } from "@heroicons/react/24/outline";

export default function Landing({ device }: DeviceType) {
  const { isMobile, isDesktop } = device;
  return (
    <section className="relative mx-auto w-full max-w-screen-max-size px-5 pt-[13vh] md:pt-[25vh]">
      <ArrowDownRightIcon className="absolute right-5 block h-[20px] w-[20px] rotate-[90deg] text-black xs:h-[25px] xs:w-[25px] sm:h-[30px] sm:w-[30px] " />
      {isDesktop && (
        <h1 className="flex flex-col text-[calc(clamp(2.7em,7vw,8em)*.875)] font-semibold leading-[1.065] text-almost-black">
          <span>Helping brands thrive</span>
          <span>in the digital world</span>
        </h1>
      )}
      {isMobile && (
        <h1 className="mt-16 flex flex-col text-[calc(clamp(2.7em,7vw,8em)*.875)] font-semibold leading-[1.065] text-almost-black">
          Helping brands thrive in the digital world
        </h1>
      )}
    </section>
  );
}
