"use client";

import Magnetic from "components/Magnetic";
import Link from "next/link";

export default function NavFooter({ device }: DeviceType) {
  return (
    <div className="flex w-full flex-col justify-between pb-12">
      <div className="my-8 flex sm:hidden h-[1px] w-full bg-white/20" />
      <div className="flex flex-col space-y-4">
        <h3 className="text-[10px] font-medium uppercase tracking-wide text-white/50 xs:text-xs">
          Socials
        </h3>
        <div className="flex w-full justify-between">
          <Magnetic device={device}>
            <Link
              href="#"
              scroll={false}
              className="text-underline-white cursor-pointer text-sm text-white xs:text-base"
            >
              Linkedin
            </Link>
          </Magnetic>
          <Magnetic device={device}>
            <Link
              href="#"
              scroll={false}
              className="text-underline-white cursor-pointer text-sm text-white xs:text-base"
            >
              Instagram
            </Link>
          </Magnetic>
          <Magnetic device={device}>
            <Link
              href="#"
              scroll={false}
              className="text-underline-white cursor-pointer text-sm text-white xs:text-base"
            >
              Facebook
            </Link>
          </Magnetic>
          <Magnetic device={device}>
            <Link
              href="#"
              scroll={false}
              className="text-underline-white cursor-pointer text-sm text-white xs:text-base"
            >
              Twitter
            </Link>
          </Magnetic>
        </div>
      </div>
    </div>
  );
}
