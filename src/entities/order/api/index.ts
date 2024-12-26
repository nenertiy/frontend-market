import { apiClient } from "@/shared/api";

export const getOrder = async (clientId: string) => {
  const response = await apiClient.get(`/order/${clientId}`);
  return response.data;
};

export const makeOrder = async (clientId: string) => {
  const response = await apiClient.post(`/order/${clientId}`);
  return response.data;
};
