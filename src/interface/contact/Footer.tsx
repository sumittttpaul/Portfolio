import CurrentTime from "components/CurrentTime";
import Magnetic from "components/Magnetic";
import Link from "next/link";

export default function Footer({ device }: DeviceType) {
  return (
    <footer className="relative mt-20 flex w-full flex-col justify-between px-5 pb-5 sm:flex-row sm:px-10 sm:pb-10">
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
          <Magnetic device={device}>
            <Link
              scroll={false}
              href="https://www.linkedin.com/in/sumitttpaul"
              className="text-underline-black cursor-pointer text-sm font-medium text-black xs:text-base"
            >
              Linkedin
            </Link>
          </Magnetic>
          <Magnetic device={device}>
            <Link
              scroll={false}
              href="https://www.instagram.com/_sumitttpaul"
              className="text-underline-black cursor-pointer text-sm font-medium text-black xs:text-base"
            >
              Instagram
            </Link>
          </Magnetic>
          <Magnetic device={device}>
            <Link
              scroll={false}
              href="https://www.facebook.com/sumitttpaul"
              className="text-underline-black cursor-pointer text-sm font-medium text-black xs:text-base"
            >
              Facebook
            </Link>
          </Magnetic>
          <Magnetic device={device}>
            <Link
              scroll={false}
              href="https://twitter.com/sumitttkp16"
              className="text-underline-black cursor-pointer text-sm font-medium text-black xs:text-base"
            >
              Twitter
            </Link>
          </Magnetic>
        </div>
      </div>
    </footer>
  );
}
