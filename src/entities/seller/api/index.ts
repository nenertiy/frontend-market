import { apiClient } from "@/shared/api";
import { Seller } from "../types";

export const getSellerDashboard = async () => {
  const response = await apiClient.get("/sellers/profile");
  return response.data;
};

export const getSellerProfile = async (sellerId: string): Promise<Seller> => {
  const response = await apiClient.get(`/sellers/${sellerId}`);
  return response.data;
};

export const deleteProduct = async (productId: string) => {
  const response = await apiClient.patch(`/products/delete/${productId}`);
  return response.data;
};

export const changeProduct = async (productId: string) => {
  const response = await apiClient.patch(`/product/${productId}`);
  return response.data;
};
