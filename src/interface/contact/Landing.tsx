import SignatureAnimation from "components/Animations/SignatureAnimation";
import { ArrowDownRightIcon } from "@heroicons/react/24/outline";
import PhotoButton from "components/Photo/Button";
import ContactForm from "components/ContactForm";
import Magnetic from "components/Magnetic";
import Link from "next/link";

export default function Landing({ device }: DeviceType) {
  const { isMobile, isDesktop } = device;
  return (
    <section className="relative mx-auto flex h-auto w-full max-w-screen-max-size flex-col justify-between px-5 pt-[13vh] md:flex-row md:pt-[25vh]">
      {/* Left side */}
      <div className="relative order-2 flex h-full w-full flex-col transition-all duration-300 md:order-1 md:pr-[3vw]">
        <h1 className="hidden flex-col text-[calc(clamp(3.25em,7vw,8em)*.875)] font-semibold leading-[1.065] text-black md:flex">
          <span>Let&apos;s start a</span>
          <span>project together</span>
        </h1>
        <ContactForm device={device} />
      </div>
      {/* Right side */}
      <div className="order-1 flex h-full flex-col md:order-2 md:space-y-[6em] md:pl-[3vw]">
        <div className="flex flex-col space-y-5 md:space-y-10">
          {isDesktop && (
            <PhotoButton
              className="h-[100px] w-[100px] rounded-full md:h-[150px] md:w-[150px]"
              sizes="(min-width: 768px) 150px, 100px"
            />
          )}
          {isMobile && (
            <h1 className="flex flex-col pt-[7vh] text-[calc(clamp(2.7em,7vw,8em)*.875)] font-semibold leading-[1.065] text-black md:hidden">
              <span className="flex items-center space-x-2.5">
                <PhotoButton
                  className="h-[50px] w-[50px] rounded-full sm:h-[100px] sm:w-[100px]"
                  sizes="(min-width: 640px) 100px, 50px"
                />
                <span>Let&apos;s start a</span>
              </span>
              <span>project together</span>
            </h1>
          )}
          <div className="flex h-[69px] w-[250] md:h-[83px] md:w-[300px]">
            <SignatureAnimation device={device} />
          </div>
        </div>
        <ArrowDownRightIcon className="absolute right-5 block h-[20px] w-[20px] rotate-[90deg] text-black xs:h-[25px] xs:w-[25px] sm:h-[30px] sm:w-[30px] md:relative md:left-0 md:rotate-0" />
        <div className="mt-[2em] flex flex-col space-y-10 md:mt-0">
          <div className="flex flex-col space-y-[1em]">
            <h3 className="text-[10px] font-black uppercase leading-[.05em] tracking-wide text-black/50 xs:text-[.75em]">
              Contact Details
            </h3>
            <div className="flex flex-col items-start justify-start space-y-0.5">
              <Magnetic device={device}>
                <Link
                  href="#"
                  scroll={false}
                  className="text-underline-black cursor-pointer text-[14px] font-medium leading-[1.5] text-black xs:text-[clamp(16px,1.2vw,19px)]"
                >
                  sumitpaul.work@gmail.com
                </Link>
              </Magnetic>
              <Magnetic device={device}>
                <Link
                  href="#"
                  scroll={false}
                  className="text-underline-black cursor-pointer text-[14px] font-medium leading-[1.5] text-black xs:text-[clamp(16px,1.2vw,19px)]"
                >
                  +91 879 407 993
                </Link>
              </Magnetic>
            </div>
          </div>
          <div className="flex flex-col space-y-[1em]">
            <h3 className="text-[10px] font-black uppercase leading-[.05em] tracking-wide text-black/50 xs:text-[.75em]">
              Personal Details
            </h3>
            <div className="flex flex-col items-start justify-start space-y-0.5">
              <h6 className="text-[14px] font-medium leading-[1.5] text-black xs:text-[clamp(16px,1.2vw,19px)]">
                Freelancer
              </h6>
              <h6 className="text-[14px] font-medium leading-[1.5] text-black xs:text-[clamp(16px,1.2vw,19px)]">
                From Bharat
              </h6>
            </div>
          </div>
          {isDesktop && (
            <div className="flex flex-col space-y-[1em]">
              <h3 className="text-[.75em] font-black uppercase leading-[.05em] tracking-wide text-black/50">
                Socials
              </h3>
              <div className="flex flex-col items-start justify-start space-y-0.5">
                <Magnetic device={device}>
                  <Link
                    href="#"
                    scroll={false}
                    className="text-underline-black cursor-pointer text-[clamp(16px,1.2vw,19px)] font-medium leading-[1.5] text-black"
                  >
                    Linkedin
                  </Link>
                </Magnetic>
                <Magnetic device={device}>
                  <Link
                    href="#"
                    scroll={false}
                    className="text-underline-black cursor-pointer text-[clamp(16px,1.2vw,19px)] font-medium leading-[1.5] text-black"
                  >
                    Instagram
                  </Link>
                </Magnetic>
                <Magnetic device={device}>
                  <Link
                    href="#"
                    scroll={false}
                    className="text-underline-black cursor-pointer text-[clamp(16px,1.2vw,19px)] font-medium leading-[1.5] text-black"
                  >
                    Facebook
                  </Link>
                </Magnetic>
                <Magnetic device={device}>
                  <Link
                    href="#"
                    scroll={false}
                    className="text-underline-black cursor-pointer text-[clamp(16px,1.2vw,19px)] font-medium leading-[1.5] text-black"
                  >
                    Twitter
                  </Link>
                </Magnetic>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
