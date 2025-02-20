import { create } from "zustand";

type State = {
  isBackdropOpen: boolean;
  isDeliverdBackdrop: boolean;
  isCancelBackdrop: boolean;
  id: string;
};

type Action = {
  setIsBackdropOpen: (open: boolean) => void;
  setIsDeliverdBackdrop: (open: boolean) => void;
  setIsCancelBackdrop: (open: boolean) => void;
  setId: (id: string) => void;
};

type Store = State & Action;

export const useOrderStore = create<Store>((set) => ({
  id: "",
  isBackdropOpen: false,
  isDeliverdBackdrop: false,
  isCancelBackdrop: false,
  setId: (id) => set({ id }),
  setIsBackdropOpen: (open) => set({ isBackdropOpen: open }),
  setIsDeliverdBackdrop: (open) => set({ isDeliverdBackdrop: open }),
  setIsCancelBackdrop: (open) => set({ isCancelBackdrop: open }),
}));
