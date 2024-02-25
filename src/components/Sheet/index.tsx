"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import { MotionDiv, MotionSpan } from "utils/FramerMotion";
import { validateSnapTo } from "./utils";
import { useEvent } from "./hooks";
import {
  PanInfo,
  Transition,
  useTransform,
  useMotionValue,
  animate,
  DragHandlers,
  MotionValue,
} from "framer-motion";

export const DRAG_VELOCITY_THRESHOLD = 500;
export const DRAG_CLOSE_THRESHOLD = 0.6;

const transition: Transition = {
  type: "tween",
  duration: 0.8,
  ease: [0.76, 0, 0.24, 1],
};

type SheetType = {
  onClose: () => void;
  children: ReactNode;
};

type OpacityProps = {
  exit: { opacity: number };
  animate: { opacity: number };
  initial: { opacity: number };
  transition: Transition;
};

type SheetProps = {
  drag: "y";
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

export default function Sheet({ children, onClose }: SheetType) {
  const sheetRef = useRef<HTMLDivElement>(null);
  const [ChildHeight, setChildHeight] = useState(0);
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
    // Update drag indicator rotation based on drag velocity
    const velocity = y.getVelocity();

    if (velocity > 0) indicatorRotation.set(10);
    if (velocity < 0) indicatorRotation.set(-10);

    // Make sure user cannot drag beyond the top of the sheet
    // y.set(Math.max(y.get() + delta.y, 0));
  });

  const onDragEnd = useEvent((_, { velocity }: PanInfo) => {
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
  });

  const dragProps: SheetProps = {
    drag: "y",
    style: { y },
    dragElastic: 0.19,
    dragConstraints: { top: 0 },
    initial: { y: 702 },
    animate: { y: 0 },
    exit: { y: 702 },
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

  useEffect(() => {
    const handleResize = () =>
      window.innerWidth > 640
        ? setChildHeight(760)
        : window.innerWidth > 400
          ? setChildHeight(685)
          : setChildHeight(665);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="fixed inset-0 z-50 grid h-full w-full place-items-end ">
      <MotionDiv
        ref={sheetRef}
        {...dragProps}
        className="shadow-t-xl relative z-[1] mx-auto -mb-[200px] flex h-auto w-full max-w-screen-sm cursor-default flex-col overflow-hidden rounded-t-[40px] bg-svg-black"
      >
        <div className="flex w-full cursor-ns-resize justify-center p-5 sm:p-6">
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
          {...opacityProps}
          style={{ height: ChildHeight }}
          className="relative w-full px-5 pb-5 sm:px-6 sm:pb-6"
        >
          {children}
        </MotionDiv>
      </MotionDiv>
      <MotionDiv
        onClick={onClose}
        {...opacityProps}
        className="absolute h-full w-full bg-black/75 backdrop-blur"
      />
    </div>
  );
}
