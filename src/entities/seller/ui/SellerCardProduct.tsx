"use client";

import Button from "@/shared/ui/Button/Button";
import React, { FC } from "react";

interface SellerCardProductProps {
  img: string;
  id: string;
  title: string;
  price: number;
  onDelete: () => void;
  onChange: () => void;
}

const SellerCardProduct: FC<SellerCardProductProps> = ({
  img,
  id,
  title,
  price,
  onDelete,
  onChange,
}) => {
  return (
    <div className="w-full max-w-[350px] flex flex-col gap-4 h-[460px]">
      <div className="bg-[rgb(248,249,254)] rounded-3xl aspect-square flex justify-center items-center">
        <img
          className="rounded-xl aspect-square max-w-[90%]"
          src={img}
          alt={title}
          width={240}
          height={240}
        />
      </div>
      <div className="flex flex-col justify-center items-start">
        <div className="text-2xl font-medium">{title}</div>
        <div className="font-semibold text-lg mt-1">{price} RUB</div>
        <div className="flex flex-col gap-2 mt-4 w-full">
          <Button
            onClick={onChange}
            color="green">
            Редактировать
          </Button>
          <Button
            onClick={onDelete}
            color="red">
            Удалить
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SellerCardProduct;
