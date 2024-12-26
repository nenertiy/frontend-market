"use client";

import Image from "next/image";
import React, { FC } from "react";

interface CardCartProps {
  name: string;
  img: string;
  count: number;
  price: number;
  onIncrease: () => void;
  onDecrease: () => void;
  onRemove: () => void;
}

const CardCart: FC<CardCartProps> = ({
  name,
  img,
  count,
  price,
  onIncrease,
  onDecrease,
  onRemove,
}) => {
  return (
    <div className="bg-[rgb(248,249,254)] rounded-3xl p-5 flex flex-col sm:flex-row gap-4 items-center shadow-md">
      <div className="w-[260px] h-[260px]">
        <Image
          className="rounded-xl"
          width={250}
          height={250}
          src={img}
          // src={
          //   "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphone-14-pro-spaceblack-202404?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1712956909430"
          // }
          alt={name}
        />
      </div>

      <div className="flex flex-1 flex-col">
        <div className="text-xl font-semibold">{name}</div>
        <div className="text-md text-gray-600 mt-1">
          Цена за единицу: <span className="font-medium">{price} RUB</span>
        </div>
        <div className="text-md text-gray-600">
          Сумма: <span className="font-medium">{price * count} RUB</span>
        </div>
      </div>

      <div className="flex items-center gap-2">
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
      </div>

      <button
        onClick={onRemove}
        className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white hover:bg-red-600">
        ✕
      </button>
    </div>
  );
};

export default CardCart;
