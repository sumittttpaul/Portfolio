"use client";

import Sumit_Photo from "../../../../public/images/sumit_photo.png";
import { useModalState } from "utils/Zustand";
import Sheet from "components/Sheet";
import Image from "next/image";

export default function Mobile() {
  const { PhotoShow, setPhotoShow } = useModalState();
  return (
    <Sheet
      isOpen={PhotoShow}
      detent="content-height"
      onClose={() => setPhotoShow(false)}
      className="mx-auto max-w-screen-sm"
    >
      <Sheet.Container>
        <Sheet.Header />
        <Sheet.Content className="relative h-auto w-auto px-5 pb-5 sm:px-6 sm:pb-6">
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
              className="mt-7 flex h-auto w-full cursor-default place-content-center rounded-full border border-solid border-white/20 p-3 text-[12px] outline-none transition-colors duration-300 ease-in-out xs:text-[13px] sm:text-base"
            >
              Close
            </button>
          </div>
        </Sheet.Content>
      </Sheet.Container>
      <Sheet.Backdrop onTap={() => setPhotoShow(false)} />
    </Sheet>
  );
}
