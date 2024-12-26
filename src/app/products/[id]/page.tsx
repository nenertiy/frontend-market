"use client";

import { fetchProduct } from "@/entities/product/api";
import Button from "@/shared/ui/Button/Button";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useParams } from "next/navigation";
import React from "react";

const ProductPage = () => {
  const params = useParams();
  const id = params?.id as string;

  const { data: product, isSuccess } = useQuery({
    queryKey: ["productsByCategory", id],
    queryFn: () => fetchProduct(id),
  });

  console.log(product);
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-row justify-center xl:gap-[120px]">
        <div className="">
          <Image
            // src={product?.img}
            src={
              "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphone-14-pro-spaceblack-202404?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1712956909430"
            }
            alt={product?.name || ""}
            width={500}
            height={500}
          />
        </div>
        <div className="flex flex-col justify-evenly">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold">{product?.name}</h2>
            <div>{product?.description}</div>
          </div>
          <Button>Добавить в корзину</Button>
        </div>
      </div>
      <div>
        <div className="text-2xl">Отзывы</div>
        <div>
          {product?.review.map((rating) => (
            <div>{rating.rating}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
