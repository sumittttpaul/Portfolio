"use client";

import { AnimatePresence } from "framer-motion";
import { StaticImageData } from "next/image";
import dynamic from "next/dynamic";

const Modal = dynamic(() => import("./Modal"));

export default function ImageViewer({
  open,
  onClose,
  images,
  device
}: {
  open: boolean;
  onClose: () => void;
  images: StaticImageData[] | null;
} & DeviceType) {
  return (
    <AnimatePresence>
      {open && images && <Modal device={device} images={images} onClose={onClose} />}
    </AnimatePresence>
  );
}
