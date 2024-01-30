import TextInViewAnimation from "components/Animations/TextInViewAnimation";
import RoundedMagneticLink from "components/Magnetic/RoundedMagneticLink";

export default function Description() {
  return (
    <section className="relative flex h-full w-full flex-col bg-white">
      {/* Description, about me and myself */}
      <div className="relative mx-auto flex w-full max-w-screen-max-size flex-col items-center justify-center px-5 pb-[200px] pt-[60px] font-normal text-black sm:pt-[100px] md:flex-row md:space-x-[5em] md:py-[200px] max-size:mx-auto">
        {/* Left side description text */}
        <div className="flex w-full">
          <TextInViewAnimation Animation="Word">
            Elevating brands in the digital age. Let&apos;s redefine the norm
            collaboratively. Uncompromising innovation, constantly pushing
            boundaries.
          </TextInViewAnimation>
        </div>
        {/* Right side description text */}
        <div className="mr-auto mt-[20px] flex w-full max-w-[240px] flex-col md:mr-0 md:mt-[50px] md:w-auto">
          <TextInViewAnimation Animation="Opacity" className="hidden md:flex">
            My dedication to design, code, and interactive experiences places me
            in a distinctive position within the realm of web design.
          </TextInViewAnimation>
          <TextInViewAnimation Animation="Opacity" className="flex md:hidden">
            My dedication to design, code, and interactive experiences places me
            in a distinctive position within the
          </TextInViewAnimation>
          <TextInViewAnimation Animation="Opacity" className="flex md:hidden">
            realm of web design.
          </TextInViewAnimation>
          {/* About me magnetic button */}
        </div>
        <div
          data-scroll
          data-scroll-speed={0.1}
          className="absolute right-10 xs:right-14 top-[70%] flex md:left-[calc(100%-340px)] md:top-[80%]"
        >
          <RoundedMagneticLink
            href="/about"
            disableHoverEffectOnMobile
            className="flex h-[12em] w-[12em] bg-almost-black text-[12px] text-white xs:text-[13px] sm:h-[clamp(9em,12vw,11em)] sm:w-[clamp(9em,12vw,11em)] sm:text-base"
          >
            <span>About me</span>
          </RoundedMagneticLink>
        </div>
      </div>
    </section>
  );
}
