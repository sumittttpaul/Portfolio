"use client";

import { ToastHook } from "utils/Zustand";
import dynamic from "next/dynamic";

const Toast = dynamic(() => import("components/Toast"));

export default function ContactToast() {
  const { ToastValue, setToastValue } = ToastHook();
  return (
    <Toast
      Toast={{
        Open: ToastValue.Show,
        onClose: (value) =>
          setToastValue({
            ...ToastValue,
            Show: value,
          }),
        MessageTitle: ToastValue.Title,
        MessageDescription: ToastValue.Description,
        Type: ToastValue.Type,
      }}
      SlideDirection="down"
      Vertical="top"
      Horizontal="center"
      HideDuration={6}
    />
  );
}
