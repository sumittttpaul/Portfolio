"use client";

import * as React from "react";

import { SheetContainerProps } from "./types";
import { useSheetContext } from "./context";
import { useEventCallbacks } from "./hooks";
import { MAX_HEIGHT } from "./constants";
import { mergeRefs } from "./utils";
import styles from "./styles";
import { MotionDiv } from "utils/FramerMotion";

const SheetContainer = React.forwardRef<any, SheetContainerProps>(
  ({ children, style = {}, className = "", ...rest }, ref) => {
    const {
      y,
      isOpen,
      callbacks,
      snapPoints,
      initialSnap = 0,
      sheetRef,
      windowHeight,
      detent,
      animationOptions,
      reduceMotion,
    } = useSheetContext();

    const { handleAnimationComplete } = useEventCallbacks(isOpen, callbacks);
    const initialY = snapPoints ? snapPoints[0] - snapPoints[initialSnap] : 0;
    const maxSnapHeight = snapPoints ? snapPoints[0] : null;

    const height =
      maxSnapHeight !== null
        ? `min(${maxSnapHeight}px, ${MAX_HEIGHT})`
        : MAX_HEIGHT;

    return (
      <MotionDiv
        {...rest}
        ref={mergeRefs([sheetRef, ref])}
        className={`react-modal-sheet-container ${className}`}
        style={{
          ...styles.container,
          ...style,
          ...(detent === "full-height" && { height }),
          ...(detent === "content-height" && { maxHeight: height }),
          y,
        }}
        initial={reduceMotion ? false : { y: windowHeight, opacity: 0 }}
        animate={{ y: initialY, opacity: 1, transition: animationOptions }}
        exit={{ y: windowHeight, opacity: 0, transition: animationOptions }}
        onAnimationComplete={handleAnimationComplete}
      >
        {children}
      </MotionDiv>
    );
  },
);

SheetContainer.displayName = "SheetContainer";

export default SheetContainer;
