import { apiClient } from "@/shared/api";

export const addToCart = async (productId: string) => {
  const response = await apiClient.post("/cart/add", { productId });
  return response.data;
};

export const getCart = async () => {
  const response = await apiClient.get(`/cart`);
  return response.data;
};

export const decreaseCart = async (productId: string) => {
  const response = await apiClient.delete("/cart/decrease", {
    data: { productId },
  });
  return response.data;
};

export const removeFromCart = async (productId: string) => {
  const response = await apiClient.delete("/cart/remove", {
    data: { productId },
  });
  return response.data;
};
