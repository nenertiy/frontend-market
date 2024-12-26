"use client";

import Image from "next/image";
import React, { FC } from "react";
import { OrderProduct } from "../types";

interface CardOrderProps {
  orderDate: string;
  totalSum: number;
  orderProducts: OrderProduct[];
}

const CardOrder: FC<CardOrderProps> = ({
  orderDate,
  totalSum,
  orderProducts,
}) => {
  return (
    <div className="bg-[rgb(248,249,254)] rounded-3xl p-5 flex flex-col gap-4 shadow-md">
      <div className="text-xl font-semibold">
        Заказ от {new Date(orderDate).toLocaleDateString()}
      </div>
      <div className="text-lg font-medium mb-4">
        Общая сумма: <span>{totalSum.toFixed(2)} ₽</span>
      </div>
      <div className="flex flex-col gap-4">
        {orderProducts.map((orderProduct) => (
          <div
            key={orderProduct.product.id}
            className="flex flex-col sm:flex-row gap-4 items-center bg-white rounded-xl p-4 shadow-sm">
            <div className="w-[200px] h-[200px]">
              <Image
                className="rounded-xl"
                width={200}
                height={200}
                src={orderProduct.product.img}
                alt={orderProduct.product.name}
              />
            </div>

            <div className="flex flex-col flex-1">
              <div className="text-lg font-semibold">
                {orderProduct.product.name}
              </div>
              <div className="text-sm text-gray-600 mt-1">
                Цена за единицу:{" "}
                <span className="font-medium">
                  {orderProduct.product.price} ₽
                </span>
              </div>
              <div className="text-sm text-gray-600">
                Количество:{" "}
                <span className="font-medium">{orderProduct.count}</span>
              </div>
              <div className="text-sm text-gray-600">
                Сумма:{" "}
                <span className="font-medium">
                  {(orderProduct.product.price * orderProduct.count).toFixed(2)}{" "}
                  ₽
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardOrder;
