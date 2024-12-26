import { create } from "zustand";
import { decodeJwtToken, isJwtAuth } from "./token.model";

interface ClientStore {
  isClientAuth: boolean;
  userId: string;
  login: () => void;
  logout: () => void;
}

export const useClientStore = create<ClientStore>((set) => ({
  isClientAuth: Boolean(isJwtAuth("client")),
  userId: decodeJwtToken(false) || "",
  login: () => set({ isClientAuth: true }),
  logout: () => {
    set({ isClientAuth: false });
  },
}));
