import { Product } from "@/entities/product/types";

export interface Seller {
  id: string;
  shopName: string;
  surname: string;
  name: string;
  patronymic?: string;
  email: string;
  phone: string;
  INN: string;
  logo?: string;
  rating: number;
  products: Product[];
}
