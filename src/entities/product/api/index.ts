import { apiClient } from "@/shared/api";

export const fetchProducts = async (
  search: string = "",
  take: number = 100,
  skip: number = 0
) => {
  const response = await apiClient.get(
    `/products?search=${search}&take=${take}&skip=${skip}`
  );
  return response.data;
};
