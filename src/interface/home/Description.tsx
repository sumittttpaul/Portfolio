import TextInViewAnimation from "components/Animations/TextInViewAnimation";
import RoundedMagneticLink from "components/Magnetic/RoundedMagneticLink";

export default function Description() {
  return (
    <section className="relative flex h-full w-full flex-col bg-white">
      {/* Description, about me and myself */}
      <div className="relative mx-auto flex w-full max-w-screen-screen-1180 flex-col items-center justify-center px-5 pb-[200px] pt-[60px] font-normal text-black sm:pt-[100px] md:flex-row md:space-x-[5em] md:py-[200px] max-size:mx-auto">
        {/* Left side description text */}
        <div className="flex w-full">
          <TextInViewAnimation Animation="Word" className="text-in-view">
            Elevating brands in the digital age. Let&apos;s redefine the norm
            collaboratively. Uncompromising innovation, constantly pushing
            boundaries.
          </TextInViewAnimation>
        </div>
        {/* Right side description text */}
        <div className="mr-auto mt-[30px] flex w-full max-w-[240px] flex-col md:mr-0 md:mt-0 md:w-auto">
          <p className="hidden text-[1em] md:flex md:text-[1.3em]">
            <TextInViewAnimation Animation="Opacity">
              My dedication to design, code, and interactive experiences places
              me in a distinctive position within the realm of web design.
            </TextInViewAnimation>
          </p>
          <p className="flex text-[1em] md:hidden md:text-[1.3em]">
            <TextInViewAnimation Animation="Opacity">
              My dedication to design, code, and interactive experiences places
              me in a distinctive position within the
            </TextInViewAnimation>
          </p>
          <p className="flex text-[1em] md:hidden md:text-[1.3em]">
            <TextInViewAnimation Animation="Opacity">
              realm of web design.
            </TextInViewAnimation>
          </p>
        </div>
        {/* About me magnetic button */}
        <div
          data-scroll
          data-scroll-speed={0.1}
          className="absolute right-10 top-[70%] z-[1] flex xs:right-14 xs:top-[66%] md:left-[calc(100%-340px)] md:top-[80%]"
        >
          <RoundedMagneticLink
            href="/about"
            className="flex h-[12em] w-[12em] bg-almost-black text-[12px] text-white xs:text-[13px] sm:h-[clamp(11em,12vw,13em)] sm:w-[clamp(11em,12vw,13em)] sm:text-base"
          >
            <span>About me</span>
          </RoundedMagneticLink>
        </div>
      </div>
    </section>
  );
}
