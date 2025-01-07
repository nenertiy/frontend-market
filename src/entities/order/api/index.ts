import { apiClient } from "@/shared/api";

export const getOrder = async () => {
  const response = await apiClient.get(`/order`);
  return response.data;
};

export const makeOrder = async () => {
  const response = await apiClient.post(`/order`);
  return response.data;
};
