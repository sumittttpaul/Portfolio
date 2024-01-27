import { create } from "zustand";

const White = "#ffffff";
const Black = "#000000";

interface HeaderColorState {
  Color: string;
  toggleColor: (value: "White" | "Black") => void;
}

export const useHeaderColorState = create<HeaderColorState>()((set) => ({
  Color: White, // default value : White
  toggleColor: (value) =>
    set(() => ({ Color: value == "White" ? White : Black })),
}));

interface PreloaderState {
  Visible: boolean;
  toggleVisible: () => void;
}

export const usePreloaderState = create<PreloaderState>()((set) => ({
  Visible: true, // default value : true
  toggleVisible: () => set((value) => ({ Visible: !value.Visible })),
}));

interface ModalState {
  PhotoShow: boolean;
  setPhotoShow: (value: boolean) => void;
}

export const useModalState = create<ModalState>()((set) => ({
  PhotoShow: false, // default value : false
  setPhotoShow: (value) => set(() => ({ PhotoShow: value })),
}));
