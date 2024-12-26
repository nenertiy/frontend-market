import { apiClient } from "@/shared/api";

export const getProfile = async () => {
  const response = await apiClient.get("/clients/profile");
  return response.data;
};
