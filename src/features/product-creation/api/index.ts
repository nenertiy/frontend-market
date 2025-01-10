import { apiClient } from "@/shared/api";

export const makeProduct = async (
  name: string,
  description: string,
  price: number,
  img: string,
  productCategoryId: string
) => {
  const response = await apiClient.post("/products", {
    name,
    description,
    price,
    img,
    productCategoryId,
  });
  return response.data;
};
