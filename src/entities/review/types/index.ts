import { Client } from "@/entities/client/types";

export interface Review {
  id: string;
  description: string;
  rating: number;
  productId: string;
  clientId?: string;
  createdAt?: string;
  client: Client;
}

export interface CreateReview {
  description: string;
  rating: number;
  productId: string;
}
