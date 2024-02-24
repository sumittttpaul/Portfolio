"use client";

import Sumit_Photo from "../../../../public/images/sumit_photo.png";
import { MotionDiv } from "utils/FramerMotion";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { UserIcon } from "@heroicons/react/24/outline";
import { useModalState } from "utils/Zustand";
import Image from "next/image";

export default function Desktop() {
  const { setPhotoShow } = useModalState();
  return (
    <MotionDiv
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setPhotoShow(false)}
      className="fixed inset-0 z-50 grid h-full w-full place-items-center overflow-y-scroll bg-black/75 p-5 backdrop-blur sm:p-8"
    >
      <MotionDiv
        initial={{ scale: 0, rotate: "12.5deg" }}
        animate={{ scale: 1, rotate: "0deg" }}
        exit={{ scale: 0, rotate: "0deg" }}
        onClick={(e) => e.stopPropagation()}
        className="relative h-auto w-auto cursor-default overflow-hidden rounded-xl bg-gradient-to-br from-black to-almost-black p-5 text-white shadow-xl sm:p-6"
      >
        <UserIcon
          strokeWidth={1}
          className="absolute -left-[155px] -top-[85px] z-0 h-[600px] w-[600px] rotate-12 text-white/5 sm:-left-[200px] sm:h-[700px] sm:w-[700px] lg:-top-[102px] lg:h-[860px] lg:w-[860px]"
        />
        <div className="relative z-10">
          <h3 className="mb-2 text-left text-base font-medium sm:font-bold lg:text-xl">
            Profile photo
          </h3>
          <p className="mb-6 text-sm text-gray-400 lg:text-base">
            Sumeet Kumar Paul&apos;s profile photo.
          </p>
          <div className="flex h-full w-full place-content-center lg:px-5 lg:pb-3">
            <div className="relative h-[290px] w-[290px] xs:h-[310px] xs:w-[310px] sm:h-[380px] sm:w-[380px] lg:h-[477px] lg:w-[477px]">
              <Image
                fill
                draggable={false}
                src={Sumit_Photo}
                placeholder="blur"
                blurDataURL={Sumit_Photo.blurDataURL}
                alt="Sumeet Kumar Paul"
                className="rounded-full"
                sizes="(min-width: 1024px) 477px,(min-width: 640px) 382px,(min-width: 401px) 310px, 290px"
              />
            </div>
          </div>
          <button
            name="sumit_photo_exit_modal_button"
            onClick={() => setPhotoShow(false)}
            className="absolute right-0 top-0 m-2 -mr-3 -mt-3 flex h-auto w-auto cursor-default place-content-center rounded-full p-3 outline-none transition-colors duration-300 ease-in-out hover:bg-white/20"
          >
            <XMarkIcon className="h-[25px] w-[25px] text-white sm:h-[30px] sm:w-[30px] sm:stroke-[1]" />
          </button>
        </div>
      </MotionDiv>
    </MotionDiv>
  );
}
