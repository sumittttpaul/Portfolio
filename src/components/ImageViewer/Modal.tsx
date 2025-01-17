"use client";

import { StaticImageData } from "next/image";
import dynamic from "next/dynamic";

const Mobile = dynamic(() => import("./Mobile"));
const Desktop = dynamic(() => import("./Desktop"));

export default function Modal({
  onClose,
  images,
  device,
}: {
  onClose: () => void;
  images: StaticImageData[];
} & DeviceType) {
  const { isMobile, isDesktop } = device;

  if (isMobile) {
    return <Mobile images={images} onClose={onClose} />;
  }

  if (isDesktop) {
    return <Desktop images={images} onClose={onClose} />;
  }
}
