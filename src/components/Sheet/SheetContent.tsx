"use client";

import * as React from "react";

import { SheetDraggableProps } from "./types";
import { useSheetScrollerContext, useSheetContext } from "./context";
import { useDragConstraints } from "./hooks";
import { mergeRefs } from "./utils";
import styles from "./styles";
import { MotionDiv } from "utils/FramerMotion";

const SheetContent = React.forwardRef<any, SheetDraggableProps>(
  ({ children, style, disableDrag, className = "", ...rest }, ref) => {
    const sheetContext = useSheetContext();
    const sheetScrollerContext = useSheetScrollerContext();
    const { constraintsRef, onMeasureDragConstraints } = useDragConstraints();

    const dragProps =
      disableDrag || sheetScrollerContext.disableDrag
        ? undefined
        : sheetContext.dragProps;

    return (
      <MotionDiv
        {...rest}
        ref={mergeRefs([ref, constraintsRef])}
        className={`react-modal-sheet-content ${className}`}
        style={{ ...styles.content, ...style }}
        {...dragProps}
        dragConstraints={constraintsRef}
        onMeasureDragConstraints={onMeasureDragConstraints}
      >
        {children}
      </MotionDiv>
    );
  },
);

SheetContent.displayName = "SheetHeader";

export default SheetContent;
