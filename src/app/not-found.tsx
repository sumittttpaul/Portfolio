import LargeTripleTextAnimation from "components/Animations/LargeTripleTextAnimation";
import CurrentTime from "components/CurrentTime";
import Magnetic from "components/Magnetic";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="fixed flex h-full w-full items-center bg-white">
      <LargeTripleTextAnimation />
      <h2 className="absolute top-0 z-[1] flex h-[50px] w-full items-center justify-center space-x-1 whitespace-nowrap px-5 pt-5 text-black sm:px-10 sm:pt-10">
        <span className="relative text-sm font-bold xs:text-base sm:-mt-0.5 sm:text-[20px] sm:font-[300]">
          ©
        </span>
        <span className="relative text-[13px] font-bold xs:text-[15px] sm:text-[17px] sm:font-[500]">
          Code by Sumeet Kumar Paul
        </span>
      </h2>
      <h1 className="absolute left-[50%] top-[40%] z-[1] flex -translate-x-[50%] -translate-y-[40%] whitespace-nowrap font-grtsk text-[10dvh] font-normal text-black sm:text-[20dvh]">
        404
      </h1>
      <div className="absolute bottom-0 z-[1] flex w-full flex-col justify-between px-5 pb-5 sm:flex-row sm:px-10 sm:pb-10">
        <div className="order-3 flex items-center justify-between space-x-10 sm:order-1 sm:justify-start">
          <div className="flex flex-col space-y-3">
            <h3 className="text-[10px] font-black uppercase tracking-wide text-black/50 xs:text-xs">
              Version
            </h3>
            <h4 className="text-sm font-medium text-black xs:text-base">
              2024 © Edition
            </h4>
          </div>
          <div className="flex flex-col space-y-3 text-end sm:text-start">
            <h3 className="text-[10px] font-black uppercase tracking-wide text-black/50 xs:text-xs">
              Local Time
            </h3>
            <CurrentTime className="text-sm font-medium text-black xs:text-base" />
          </div>
        </div>
        <div className="order-2 my-5 flex h-[1px] w-full bg-black/20 sm:hidden" />
        <div className="order-1 flex flex-col space-y-3 sm:order-2">
          <h3 className="text-[10px] font-black uppercase tracking-wide text-black/50 xs:text-xs">
            Socials
          </h3>
          <div className="flex w-full justify-between sm:w-auto sm:justify-end sm:space-x-5">
            <Magnetic>
              <Link
                href="#"
                scroll={false}
                className="text-underline-black cursor-pointer text-sm font-medium text-black xs:text-base"
              >
                Linkedin
              </Link>
            </Magnetic>
            <Magnetic>
              <Link
                href="#"
                scroll={false}
                className="text-underline-black cursor-pointer text-sm font-medium text-black xs:text-base"
              >
                Instagram
              </Link>
            </Magnetic>
            <Magnetic>
              <Link
                href="#"
                scroll={false}
                className="text-underline-black cursor-pointer text-sm font-medium text-black xs:text-base"
              >
                Facebook
              </Link>
            </Magnetic>
            <Magnetic>
              <Link
                href="#"
                scroll={false}
                className="text-underline-black cursor-pointer text-sm font-medium text-black xs:text-base"
              >
                Twitter
              </Link>
            </Magnetic>
          </div>
        </div>
      </div>
    </div>
  );
}
