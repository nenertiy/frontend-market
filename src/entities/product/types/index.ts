export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  img: string;
  review: Review[];
}

export interface Review {
  id: string;
  description?: string;
  rating: number;
  clientId: string;
  createdAt: string;
}
