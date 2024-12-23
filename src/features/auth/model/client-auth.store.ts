import { create } from "zustand";

interface ClientStore {
  isClientAuth: boolean;
  login: () => void;
  logout: () => void;
}

export const useClientStore = create<ClientStore>((set) => ({
  isClientAuth: Boolean(),
  login: () => set({ isClientAuth: true }),
  logout: () => {
    set({ isClientAuth: false });
  },
}));
