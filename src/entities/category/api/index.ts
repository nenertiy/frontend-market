import { apiClient } from "@/shared/api";
import { Category } from "../types";

export const fetchCategories = async (
  search: string = ""
): Promise<Category[]> => {
  const response = await apiClient.get(`/product-categories?search=${search}`);
  return response.data;
};

export const fetchCategory = async (id: string) => {
  const response = await apiClient.get(`/product-categories/${id}`);
  return response.data;
};
