import { apiClient } from "@/shared/api";

export const getSellerDashboard = async () => {
  const response = await apiClient.get("/sellers/profile");
  return response.data;
};

export const getSellerProfile = async (sellerId: string) => {
  const response = await apiClient.get(`/sellers/${sellerId}`);
  return response.data;
};
