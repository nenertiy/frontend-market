"use client";

import { addToCart } from "@/entities/cart/api";
import { fetchProduct } from "@/entities/product/api";
import ReviewCard from "@/entities/review/ui/ReviewCard";
import { addReview } from "@/features/add-review/api";
import ReviewForm from "@/features/add-review/ui/ReviewForm";
import { useClientStore } from "@/features/auth/model/client-auth.store";
import { useSellerStore } from "@/features/auth/model/seller-auth.store";
import { CLIENT_SIGN_IN } from "@/shared/router/router";
import Button from "@/shared/ui/Button/Button";
import { useQuery } from "@tanstack/react-query";
import { redirect, useParams } from "next/navigation";
import React from "react";
import { toast } from "react-toastify";

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();

  const { isClientAuth } = useClientStore();
  const { isSellerAuth } = useSellerStore();

  const handleAddToCart = async (productId: string) => {
    try {
      await addToCart(productId);
      toast.success("Товар добавлен в корзину");
    } catch {
      toast.error("Ошибка при добавлении товара в корзину");
    }
  };

  const { data: product, refetch } = useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProduct(id),
  });

  const handleAddReview = async (data: {
    rating: number;
    description: string;
  }) => {
    try {
      await addReview({ ...data, productId: id });
      toast.success("Отзыв добавлен!");
      refetch();
    } catch (error) {
      toast.error("Ошибка при добавлении отзыва");
    }
  };

  return (
    <div className="flex flex-col gap-10 mx-auto">
      <div className="flex flex-col md:flex-row justify-center gap-10 xl:gap-[120px] items-center">
        <div className="flex justify-center items-center">
          <img
            className="rounded-2xl"
            src={product?.img}
            alt={product?.name}
            width={500}
            height={500}
          />
        </div>
        <div className="flex flex-col justify-evenly md:gap-4 gap-6 w-[40%]">
          <div className="flex flex-col md:gap-4 gap-6">
            <h2 className="text-2xl font-semibold">{product?.name}</h2>
            <div>{product?.description}</div>
            <div className="font-semibold text-lg">{product?.price} RUB</div>
          </div>
          {isSellerAuth ? (
            ""
          ) : isClientAuth ? (
            <Button onClick={() => handleAddToCart(product?.id || "")}>
              Добавить в корзину
            </Button>
          ) : (
            <Button onClick={() => redirect(CLIENT_SIGN_IN)}>
              Войдите в аккаунт
            </Button>
          )}
        </div>
      </div>
      <div>
        <div className="text-2xl mb-4">Отзывы</div>
        <div className="space-y-4">
          {product?.review.map((review) => (
            <ReviewCard
              key={review.id}
              description={review.description}
              rating={review.rating}
              name={review.client.name}
              surname={review.client.surname}
            />
          ))}
        </div>
        {isClientAuth && <ReviewForm onSubmit={handleAddReview} />}
      </div>
    </div>
  );
};

export default ProductPage;
