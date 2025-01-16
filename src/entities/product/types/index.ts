import { Review } from "@/entities/review/types";
import { Seller } from "@/entities/seller/types";

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
  rating: number;
  review: Review[];
  seller: Seller;
}
