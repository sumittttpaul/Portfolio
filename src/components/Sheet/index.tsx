"use client";

import { MotionDiv, MotionSpan } from "utils/FramerMotion";
import { ReactNode, useRef } from "react";
import { validateSnapTo } from "./utils";
import { useEvent } from "./hooks";
import {
  PanInfo,
  animate,
  Transition,
  MotionValue,
  DragHandlers,
  useTransform,
  useMotionValue,
} from "framer-motion";

export const DRAG_VELOCITY_THRESHOLD = 500;
export const DRAG_CLOSE_THRESHOLD = 0.6;

const transition: Transition = {
  type: "tween",
  duration: 0.8,
  ease: [0.76, 0, 0.24, 1],
};

type SheetType = {
  contentClass?: string;
  onClose: () => void;
  children: ReactNode;
  height: number;
  disable?: boolean;
};

type OpacityProps = {
  exit: { opacity: number };
  animate: { opacity: number };
  initial: { opacity: number };
  transition: Transition;
};

type SheetProps = {
  drag: "y" | boolean;
  dragElastic: number;
  exit: { y: number };
  initial: { y: number };
  animate: { y: number };
  transition: Transition;
  onDrag: DragHandlers["onDrag"];
  dragConstraints: { top: number };
  style: { y: MotionValue<number> };
  onDragEnd: DragHandlers["onDragEnd"];
};

export default function Sheet({
  height,
  disable,
  onClose,
  children,
  contentClass,
}: SheetType) {
  const sheetRef = useRef<HTMLDivElement>(null);
  const indicatorRotation = useMotionValue(0);
  const y = useMotionValue(0);

  const indicator1Transform = useTransform(
    indicatorRotation,
    (r) => `translateX(2px) rotate(${r}deg)`,
  );

  const indicator2Transform = useTransform(
    indicatorRotation,
    (r) => `translateX(-2px) rotate(${-1 * r}deg)`,
  );

  const onDrag = useEvent((_, { delta }: PanInfo) => {
    if (!disable) {
      // Update drag indicator rotation based on drag velocity
      const velocity = y.getVelocity();

      if (velocity > 0) indicatorRotation.set(10);
      if (velocity < 0) indicatorRotation.set(-10);

      // Make sure user cannot drag beyond the top of the sheet
      // y.set(Math.max(y.get() + delta.y, 0));
    }
  });

  const onDragEnd = useEvent((_, { velocity }: PanInfo) => {
    if (!disable) {
      if (velocity.y > DRAG_VELOCITY_THRESHOLD) {
        // User flicked the sheet down
        onClose();
      } else {
        const sheetEl = sheetRef.current;
        if (!sheetEl) return;
        const sheetHeight = sheetEl.clientHeight;
        const currentY = y.get();

        let snapTo = 0;

        if (currentY / sheetHeight > 0.4) snapTo = sheetHeight;

        snapTo = validateSnapTo({ snapTo, sheetHeight });
        // Update the spring value so that the sheet is animated to the snap point
        animate(y, snapTo);

        const roundedSheetHeight = Math.round(sheetHeight);
        const shouldClose = snapTo >= roundedSheetHeight;

        if (shouldClose) onClose();
      }

      // Reset indicator rotation after dragging
      indicatorRotation.set(0);
    }
  });

  const dragProps: SheetProps = {
    drag: !disable ? "y" : false,
    style: { y },
    dragElastic: 0.19,
    dragConstraints: { top: 0 },
    initial: { y: height + 44 },
    animate: { y: 0 },
    exit: { y: height + 44 },
    transition,
    onDrag,
    onDragEnd,
  };

  const opacityProps: OpacityProps = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition,
  };

  const contentProps: OpacityProps = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { ...transition, duration: 0.5 },
  };

  if (height > 0) {
    return (
      <div className="fixed inset-0 z-50 grid h-full w-full place-items-end ">
        <MotionDiv
          ref={sheetRef}
          {...dragProps}
          className="shadow-t-xl relative z-[1] mx-auto -mb-[300px] flex h-auto w-full max-w-screen-sm cursor-default flex-col overflow-hidden rounded-t-[20px] bg-svg-black"
        >
          <div className="absolute top-0 z-10 flex w-full cursor-ns-resize justify-center p-5 sm:p-6">
            <MotionSpan
              className="h-1 w-[18px] rounded-full bg-[#ddd]"
              style={{ transform: indicator1Transform }}
            />
            <MotionSpan
              className="h-1 w-[18px] rounded-full bg-[#ddd]"
              style={{ transform: indicator2Transform }}
            />
          </div>
          <MotionDiv
            {...contentProps}
            style={{ height: height + 44 }}
            className={`relative w-full ${contentClass}`}
          >
            {children}
          </MotionDiv>
        </MotionDiv>
        <MotionDiv
          {...opacityProps}
          onClick={onClose}
          className="absolute h-full w-full bg-black/75 backdrop-blur"
        />
      </div>
    );
  }
}
