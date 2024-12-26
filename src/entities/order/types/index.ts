import { Product } from "@/entities/product/types";

export interface OrderProduct {
  orderId: string;
  productId: string;
  count: number;
  product: Product;
}

export interface Order {
  id: string;
  date: string;
  sum: number;
  clientId: string;
  orderProduct: OrderProduct[];
}
