import { create } from "zustand";

const White = "#ffffff";
const Black = "#000000";

interface HeaderColorState {
  Color: string;
  toggleColor: (value: "White" | "Black") => void;
}

export const useHeaderColorState = create<HeaderColorState>()((set) => ({
  Color: White,
  toggleColor: (value) =>
    set(() => ({ Color: value == "White" ? White : Black })),
}));

interface PreloaderState {
  Start: boolean;
  Visible: boolean;
  toggleVisible: () => void;
  toggleStart: () => void;
}

export const usePreloaderState = create<PreloaderState>()((set) => ({
  Visible: true,
  Start: false,
  toggleVisible: () => set((value) => ({ Visible: !value.Visible })),
  toggleStart: () => set((value) => ({ Start: !value.Start })),
}));
