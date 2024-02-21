"use client";

import { useEffect, useState } from "react";
import { Slide, SlideProps } from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import { ToastContentProps } from "./Content";
import dynamic from "next/dynamic";

const ToastContent = dynamic<ToastContentProps>(() => import("./Content"));

export default function Toast(props: ToastProps) {
  const SlideTransition = (prop: SlideProps) => {
    return (
      <Slide
        {...prop}
        style={{ marginTop: 0, paddingTop: 0 }}
        direction={props.SlideDirection}
      />
    );
  };

  const [state, setState] = useState<{
    Open: boolean;
    Transition: React.ComponentType<
      TransitionProps & {
        children: React.ReactElement<any, any>;
      }
    >;
  }>({
    Open: false,
    Transition: SlideTransition,
  });

  const handleClose = () => {
    setState((prev) => {
      return {
        ...prev,
        Open: false,
      };
    });
    props.Toast.onClose(false);
  };

  useEffect(() => {
    if (state.Open === props.Toast.Open) {
      return;
    }
    setState({
      ...state,
      Open: props.Toast.Open,
    });
  }, [props.Toast.Open, state]);

  if (props.Toast.Type === "Error") {
    return (
      <ToastContent
        Open={state.Open}
        Color="bg-dark-red"
        Icon="/icons/x-circle.svg"
        MessageTitle={props.Toast.MessageTitle}
        MessageDescription={props.Toast.MessageDescription}
        HideDuration={props.HideDuration}
        onClose={handleClose}
        Transition={state.Transition}
        Vertical={props.Vertical}
        Horizontal={props.Horizontal}
      />
    );
  }

  if (props.Toast.Type === "Success") {
    return (
      <ToastContent
        Open={state.Open}
        Color="bg-dark-green"
        Icon="/icons/check-circle.svg"
        MessageTitle={props.Toast.MessageTitle}
        MessageDescription={props.Toast.MessageDescription}
        HideDuration={props.HideDuration}
        onClose={handleClose}
        Transition={state.Transition}
        Vertical={props.Vertical}
        Horizontal={props.Horizontal}
      />
    );
  }

  if (props.Toast.Type === "Info") {
    return (
      <ToastContent
        Open={state.Open}
        Color="bg-dark-blue"
        Icon="/icons/alert-circle.svg"
        MessageTitle={props.Toast.MessageTitle}
        MessageDescription={props.Toast.MessageDescription}
        HideDuration={props.HideDuration}
        onClose={handleClose}
        Transition={state.Transition}
        Vertical={props.Vertical}
        Horizontal={props.Horizontal}
      />
    );
  }

  if (props.Toast.Type === "Warning") {
    return (
      <ToastContent
        Open={state.Open}
        Color="bg-dark-orange"
        Icon="/icons/alert-triangle.svg"
        MessageTitle={props.Toast.MessageTitle}
        MessageDescription={props.Toast.MessageDescription}
        HideDuration={props.HideDuration}
        onClose={handleClose}
        Transition={state.Transition}
        Vertical={props.Vertical}
        Horizontal={props.Horizontal}
      />
    );
  }
}
