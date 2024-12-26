import { apiClient } from "@/shared/api";
import { Product } from "../types";

export const fetchProducts = async (
  search: string = "",
  take: number = 100,
  skip: number = 0
): Promise<Product[]> => {
  const response = await apiClient.get(
    `/products?search=${search}&take=${take}&skip=${skip}`
  );
  return response.data;
};
