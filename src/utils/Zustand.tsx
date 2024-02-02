import { create } from "zustand";

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
