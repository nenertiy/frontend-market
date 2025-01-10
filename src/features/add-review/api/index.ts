import { CreateReview } from "@/entities/review/types";
import { apiClient } from "@/shared/api";

export const addReview = async (data: CreateReview) => {
  const response = await apiClient.post("/reviews", data);
  return response.data;
};
