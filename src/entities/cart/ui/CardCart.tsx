"use client";

import Image from "next/image";
import React, { FC } from "react";

interface CardCartProps {
  name: string;
  img: string;
  count: number;
  price: number;
  isDeleted: boolean;
  onIncrease: () => void;
  onDecrease: () => void;
  onRemove: () => void;
}

const CardCart: FC<CardCartProps> = ({
  name,
  img,
  count,
  price,
  isDeleted,
  onIncrease,
  onDecrease,
  onRemove,
}) => {
  return (
    <div
      className={`rounded-3xl p-5 flex flex-col sm:flex-row gap-4 items-center shadow-md ${
        isDeleted ? "bg-gray-300" : "bg-[rgb(248,249,254)]"
      }`}>
      <div className="w-[260px] h-[260px] relative">
        <img
          className={`rounded-xl w-[260px] aspect-square ${
            isDeleted ? "opacity-50" : ""
          }`}
          width={250}
          height={250}
          src={img}
          alt={name}
        />
        {isDeleted && (
          <div className="rounded-xl absolute inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center text-white font-medium text-xl">
            Товар удален
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col">
        <div
          className={`text-xl font-semibold ${
            isDeleted ? "text-gray-500" : ""
          }`}>
          {name}
        </div>
        <div
          className={`text-md text-gray-600 mt-1 ${
            isDeleted ? "line-through" : ""
          }`}>
          Цена за единицу: <span className="font-medium">{price} RUB</span>
        </div>
        <div
          className={`text-md text-gray-600 ${
            isDeleted ? "line-through" : ""
          }`}>
          Сумма:{" "}
          <span className="font-medium">{(price * count).toFixed(2)} RUB</span>
        </div>
      </div>

      <div className="flex items-center gap-2">
        {isDeleted ? (
          <span className="text-gray-500 text-sm">Недоступно</span>
        ) : (
          <>
            <button
              onClick={onDecrease}
              className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-300">
              −
            </button>
            <span className="w-6 text-center font-medium">{count}</span>
            <button
              onClick={onIncrease}
              className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-300">
              +
            </button>
          </>
        )}
      </div>

      <button
        onClick={onRemove}
        className="w-8 h-8 rounded-full flex items-center justify-center text-white bg-red-500 hover:bg-red-600">
        ✕
      </button>
    </div>
  );
};

export default CardCart;
