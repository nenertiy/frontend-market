"use client";

import { Order } from "@/entities/order/types";
import CardOrder from "@/entities/order/ui/CardOrder";
import React, { FC } from "react";

interface OrderListProps {
  orders: Order[];
}

const OrderList: FC<OrderListProps> = ({ orders }) => {
  if (orders.length === 0) {
    return (
      <div className="bg-[rgb(248,249,254)] px-3 py-2 rounded-xl text-2xl font-semibold mb-3">
        У вас пока нет заказов.
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      {orders.map((order) => (
        <CardOrder
          key={order.id}
          orderDate={order.date}
          totalSum={order.sum}
          orderProducts={order.orderProduct}
        />
      ))}
    </div>
  );
};

export default OrderList;
