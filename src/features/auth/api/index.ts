import { apiClient } from "@/shared/api";

export const apiAuth = {
  async loginClient(data: any) {
    const response = await apiClient.post("/auth/client/sign-in", data);
    return response;
  },

  async registrationClient(data: any) {
    const response = await apiClient.post("/auth/client/sign-up", data);
    return response;
  },

  async loginSeller(data: any) {
    const response = await apiClient.post("/auth/seller/sign-in", data);
    return response;
  },

  async registrationSeller(data: any) {
    const response = await apiClient.post("/auth/seller/sign-up", data);
    return response;
  },
};
