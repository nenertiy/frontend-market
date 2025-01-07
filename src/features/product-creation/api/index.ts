import { apiClient } from "@/shared/api";

export const makeProduct = async (
  name: string,
  description: string,
  price: number,
  img: string,
  // sellerId: string,
  productCategoryId: string[]
) => {
  const response = await apiClient.post("/products", {
    name,
    description,
    price,
    img,
    // sellerId,
    productCategoryId,
  });
  return response.data;
};
