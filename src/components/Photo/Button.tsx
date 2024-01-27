"use client";

import Sumit_Paul from "../../../public/sumit_photo.png";
import { MotionButton } from "utils/FramerMotion";
import { useModalState } from "utils/Zustand";
import Image from "next/image";

export default function PhotoButton() {
  const modalState = useModalState();
  return (
    <MotionButton
      whileTap={{ scale: 0.9 }}
      onClick={() => modalState.setPhotoShow(true)}
      className="group relative mb-2 h-[80px] w-[80px] min-w-[80px] overflow-hidden rounded-full rounded-bl-[0px] xs:mb-2.5 xs:h-[110px] xs:w-[110px] sm:h-[90px] sm:w-[90px] sm:min-w-[90px] sm:rounded-bl-full sm:rounded-br-[0px] screen-1000:h-[150px] screen-1000:w-[150px] screen-1180:h-[175px] screen-1180:w-[175px]"
    >
      <Image
        fill
        src={Sumit_Paul}
        sizes="(min-width: 1180px) 175px, (min-width: 1000px) 150px,(min-width: 640px) 90px, 110px"
        className="transition-all duration-200 ease-linear group-hover:scale-[1.2]"
        alt="sumit paul photo"
      />
    </MotionButton>
  );
}
