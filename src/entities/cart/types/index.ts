import { Product } from "@/entities/product/types";

export interface Cart {
  id: string;
  clientId: string;
  cartProduct: CartProduct[];
}

export interface CartProduct {
  productId: string;
  cartId: string;
  count: number;
  product: Product;
}
