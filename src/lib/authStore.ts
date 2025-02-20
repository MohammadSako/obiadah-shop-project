import { create } from "zustand";

type State = {
  isAuthOpen: boolean;
};

type Action = {
  setIsAuthOpen: (open: boolean) => void;
};

type Store = State & Action;

export const useAuthStore = create<Store>((set) => ({
  isAuthOpen: false,
  setIsAuthOpen: (open) => set({ isAuthOpen: open }),
}));
