import { Review } from "@/entities/review/types";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  img: string;
  isAvailable: boolean;
  isPopular: boolean;
  isDeleted: boolean;
  createdAt: string;
  sellerId: string;
  review: Review[];
}
