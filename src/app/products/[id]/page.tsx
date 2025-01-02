"use client";

import { addToCart } from "@/entities/cart/api";
import { fetchProduct } from "@/entities/product/api";
import { useClientStore } from "@/features/auth/model/client-auth.store";
import { useSellerStore } from "@/features/auth/model/seller-auth.store";
import Button from "@/shared/ui/Button/Button";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import React from "react";

const ProductPage = () => {
  const params = useParams();
  const id = params?.id as string;

  const { userId, isClientAuth } = useClientStore();
  const { isSellerAuth } = useSellerStore();

  const handleAddToCart = async (productId: string) => {
    try {
      await addToCart(userId, productId);
      // alert("Success");
    } catch {
      // alert("Error");
    }
  };

  const { data: product } = useQuery({
    queryKey: ["productsByCategory", id],
    queryFn: () => fetchProduct(id),
  });

  return (
    <div className="flex flex-col gap-10 mx-auto">
      <div className="flex flex-col md:flex-row justify-center gap-10 xl:gap-[120px] items-center">
        <div className="flex justify-center items-center">
          <img
            className="rounded-2xl "
            src={product?.img}
            alt={product?.name || ""}
            width={500}
            height={500}
          />
        </div>
        <div className="flex flex-col justify-evenly md:gap-4 gap-6 w-[40%]">
          <div className="flex flex-col md:gap-4 gap-6 ">
            <h2 className="text-2xl font-semibold">{product?.name}</h2>
            <div>{product?.description}</div>
          </div>
          <Button
            disabled={!isClientAuth || isSellerAuth}
            onClick={() => handleAddToCart(product?.id || "")}>
            Добавить в корзину
          </Button>
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
