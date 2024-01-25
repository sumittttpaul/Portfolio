"use client";

import { AnimatePresence } from "framer-motion";
import { UserIcon } from "@heroicons/react/24/outline";
import { MotionDiv } from "utils/FramerMotion";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useModalState } from "utils/Zustand";
import Sumit_Photo from "../../../public/sumit_photo.png";
import Image from "next/image";

export default function PhotoModal() {
  const modalState = useModalState();
  return (
    <AnimatePresence>
      {modalState.PhotoShow && (
        <MotionDiv
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => modalState.setPhotoShow(false)}
          className="fixed inset-0 z-50 grid h-full w-full place-items-center overflow-y-scroll bg-black/75 p-8 backdrop-blur"
        >
          <MotionDiv
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="relative cursor-default overflow-hidden rounded-xl bg-gradient-to-br from-black to-almost-black p-5 text-white shadow-xl sm:p-6"
          >
            <UserIcon
              strokeWidth={1}
              className="absolute -left-[155px] -top-[85px] z-0 h-[600px] w-[600px] rotate-12 text-white/10 sm:-left-[200px] sm:h-[700px] sm:w-[700px] lg:-top-[102px] lg:h-[860px] lg:w-[860px]"
            />
            <div className="relative z-10">
              <h3 className="mb-6 text-left text-xl font-bold lg:text-2xl">
                Profile photo
              </h3>
              <div className="flex h-full w-full place-content-center lg:px-5 lg:pb-3">
                <div className="relative h-[300px] w-[300px] sm:h-[380px] sm:w-[380px] lg:h-[477px] lg:w-[477px]">
                  <Image
                    fill
                    src={Sumit_Photo}
                    alt="Sumeet Kumar Paul"
                    className="rounded-full"
                    sizes="(min-width: 1024px) 477px,(min-width: 640px) 382px, 300px"
                    placeholder="blur"
                    priority
                  />
                </div>
              </div>
              <button
                onClick={() => modalState.setPhotoShow(false)}
                className="absolute right-0 top-0 m-2 -mr-3 -mt-3 flex h-auto w-auto cursor-default place-content-center rounded-full p-3 outline-none transition-colors hover:bg-white/20"
              >
                <XMarkIcon height={30} width={30} className="text-white" />
              </button>
            </div>
          </MotionDiv>
        </MotionDiv>
      )}
    </AnimatePresence>
  );
}
