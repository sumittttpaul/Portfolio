"use client";

import Sumit_Paul from "../../public/sumit_photo.png";
import { MotionButton } from "utils/FramerMotion";
import { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

const PhotoModal = dynamic(() => import("components/PhotoModal"), {
  ssr: false,
});

export default function PhotoButton() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <MotionButton
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="group relative -mt-[30px] max-h-[110px] max-w-[110px] overflow-hidden rounded-bl-[60px] rounded-br-[20px] rounded-tl-[60px] rounded-tr-[60px]"
      >
        <div className="absolute bottom-1.5 right-1.5 z-[1] flex h-6 w-6 items-center justify-center rounded-full bg-amber-400">
          <div className="block h-5 w-5 rounded-full bg-black" />
        </div>
        <Image
          src={Sumit_Paul}
          width={110}
          height={110}
          alt="sumit paul photo"
          className="transition-all duration-200 ease-linear group-hover:scale-[1.2]"
        />
      </MotionButton>
      <PhotoModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}
