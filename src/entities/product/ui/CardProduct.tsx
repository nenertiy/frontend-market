import Button from "@/shared/ui/Button/Button";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

interface CardProductProps {
  img: string;
  id: string;
  title: string;
  price: number;
}

const CardProduct: FC<CardProductProps> = ({ img, id, title, price }) => {
  return (
    <div className="xl:w-[400px] lg:w-[380px] 850:w-[350px] md:w-[320px] sm:w-[260px] w-[300px] flex flex-col gap-4 h-[460px] ">
      <Link
        href={`/products/${id}`}
        className="bg-[rgb(248,249,254)] xl:w-[400px] lg:w-[380px] 850:w-[350px] md:w-[320px] sm:w-[260px] w-[300px] rounded-3xl aspect-square flex justify-center items-center gap-1">
        <Image
          className="rounded-xl aspect-square xl:w-[360px] lg:w-[340px] 850:w-[310px] md:w-[280px] sm:w-[220px] w-[260px]"
          src={img}
          alt={img}
          width={240}
          height={240}
          // fill
        />
      </Link>
      <div className="xl:max-w-[400px] lg:max-w-[380px] 850:max-w-[350px] md:max-w-[320] sm:max-w-[260px] max-w-[300px] box-border text-wrap tracking-wide flex flex-col justify-center">
        <div className="text-2xl">{title}</div>
        <div className="font-semibold text-lg">{price} RUB</div>
        <div className="mt-4">
          <Button>Добавить в корзину</Button>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
