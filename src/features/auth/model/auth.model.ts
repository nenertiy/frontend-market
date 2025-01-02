import { toast } from "react-toastify";
import { apiAuth } from "../api";
import { useClientStore } from "./client-auth.store";
import { useSellerStore } from "./seller-auth.store";
import { removeToken, setToken } from "./token.model";

export const authModel = {
  async loginClient(data: any) {
    try {
      const response = await apiAuth.loginClient(data);
      setToken(response.data.accessToken, response.data.refreshToken);
      useClientStore.getState().login();
      return { success: true };
    } catch {
      return {
        success: false,
        message: "Login failed",
      };
    }
  },

  async registrationClient(data: any) {
    try {
      const response = await apiAuth.registrationClient(data);
      setToken(response.data.accessToken, response.data.refreshToken);
      useClientStore.getState().login();
      return { success: true };
    } catch {
      return {
        success: false,
        message: "Registration failed",
      };
    }
  },

  async loginSeller(data: any) {
    try {
      const response = await apiAuth.loginSeller(data);
      setToken(response.data.accessToken, response.data.refreshToken);
      useSellerStore.getState().login();
      return { success: true };
    } catch {
      return {
        success: false,
        message: "Login failed",
      };
    }
  },

  async registrationSeller(data: any) {
    try {
      const response = await apiAuth.registrationSeller(data);
      setToken(response.data.accessToken, response.data.refreshToken);
      useSellerStore.getState().login();
      return { success: true };
    } catch {
      return {
        success: false,
        message: "Registration failed",
      };
    }
  },

  async logout() {
    removeToken(true);
    toast.success("Выход успешно выполнен");
    useClientStore.getState().logout();
    useSellerStore.getState().logout();
  },
};
