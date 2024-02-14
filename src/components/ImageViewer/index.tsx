"use client";

import { useImageViewerState, useStopScrollingState } from "utils/Zustand";
import { AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";

const Modal = dynamic(() => import("./Modal"));

export default function ImageViewer({ device }: DeviceType) {
  const { ImageViewerData, setImageViewerData } = useImageViewerState();
  const { toggleIsScrolling } = useStopScrollingState();

  return (
    <AnimatePresence>
      {ImageViewerData.show && ImageViewerData.images && (
        <Modal
          device={device}
          images={ImageViewerData.images}
          onClose={() => {
            if (ImageViewerData.show) {
              setImageViewerData({ ...ImageViewerData, show: false });
              toggleIsScrolling();
            }
          }}
        />
      )}
    </AnimatePresence>
  );
}
