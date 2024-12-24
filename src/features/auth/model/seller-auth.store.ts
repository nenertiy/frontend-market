import { create } from "zustand";
import { isJwtAuth } from "./token.model";

interface SellerStore {
  isSellerAuth: boolean;
  login: () => void;
  logout: () => void;
}

export const useSellerStore = create<SellerStore>((set) => ({
  isSellerAuth: Boolean(isJwtAuth("seller")),
  login: () => set({ isSellerAuth: true }),
  logout: () => {
    set({ isSellerAuth: false });
  },
}));
