import { create } from "zustand";
import { isJwtAuth } from "./token.model";

interface ClientStore {
  isClientAuth: boolean;
  login: () => void;
  logout: () => void;
}

export const useClientStore = create<ClientStore>((set) => ({
  isClientAuth: Boolean(isJwtAuth("client")),
  login: () => set({ isClientAuth: true }),
  logout: () => {
    set({ isClientAuth: false });
  },
}));
