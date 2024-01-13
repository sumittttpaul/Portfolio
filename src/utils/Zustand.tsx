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
  Visible: boolean;
  toggleVisible: () => void;
}

export const usePreloaderState = create<PreloaderState>()((set) => ({
  Visible: true,
  toggleVisible: () => set((value) => ({ Visible: !value.Visible })),
}));
