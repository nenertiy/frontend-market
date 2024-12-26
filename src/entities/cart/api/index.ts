import { apiClient } from "@/shared/api";

export const addToCart = async (clientId: string, productId: string) => {
  const response = await apiClient.post("/cart/add", { clientId, productId });
  return response.data;
};

export const getCart = async (clientId: string) => {
  const response = await apiClient.get(`/cart/${clientId}`);
  return response.data;
};

export const decreaseCart = async (clientId: string, productId: string) => {
  const response = await apiClient.delete("/cart/decrease", {
    data: { clientId, productId },
  });
  return response.data;
};

export const removeFromCart = async (clientId: string, productId: string) => {
  const response = await apiClient.delete("/cart/remove", {
    data: { clientId, productId },
  });
  return response.data;
};
