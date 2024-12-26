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

export interface Review {
  id: string;
  description?: string;
  rating: number;
  clientId: string;
  createdAt: string;
}
