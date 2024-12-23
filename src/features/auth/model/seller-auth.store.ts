import { create } from "zustand";

interface SellerStore {
  isSellerAuth: boolean;
  login: () => void;
  logout: () => void;
}

export const useSellerStore = create<SellerStore>((set) => ({
  isSellerAuth: Boolean(),
  login: () => set({ isSellerAuth: true }),
  logout: () => {
    set({ isSellerAuth: false });
  },
}));
