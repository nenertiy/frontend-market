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
import ReactStars from "react-stars";

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
    <div className="flex flex-col gap-6 p-4">
      <div className="flex flex-col lg:flex-row justify-center gap-6 items-center">
        <div className="flex justify-center items-center w-full lg:w-1/2">
          <img
            className="rounded-2xl w-full max-w-[500px] xl:max-w-[600px] h-auto object-cover"
            src={product?.img}
            alt={product?.name}
          />
        </div>

        <div className="flex flex-col gap-4 w-full lg:w-1/2">
          <h2 className="text-xl lg:text-2xl font-semibold">{product?.name}</h2>
          {product?.rating !== undefined && product.rating > 0 && (
            <div className="flex items-center gap-4">
              <ReactStars
                count={5}
                size={24}
                edit={false}
                color2={"#ffd700"}
                value={product.rating}
              />
              <h1 className="text-lg font-semibold">
                {product.rating.toFixed(2)}
              </h1>
            </div>
          )}

          <div className="text-sm lg:text-base text-gray-700">
            {product?.description}
          </div>
          <div className="font-bold text-lg lg:text-xl">
            {product?.price} RUB
          </div>

          {isSellerAuth ? (
            <></>
          ) : isClientAuth ? (
            <Button
              className="w-full py-2"
              onClick={() => handleAddToCart(product?.id || "")}>
              Добавить в корзину
            </Button>
          ) : (
            <Button
              className="w-full py-2"
              onClick={() => redirect(CLIENT_SIGN_IN)}>
              Войдите в аккаунт
            </Button>
          )}
        </div>
      </div>

      <div className="mt-8">
        <div className="text-xl mb-4">Отзывы</div>
        <div className="space-y-4">
          {product?.review && product.review.length > 0 ? (
            product?.review.map((review) => (
              <ReviewCard
                key={review.id}
                description={review.description}
                rating={review.rating}
                name={review.client.name}
                surname={review.client.surname}
              />
            ))
          ) : (
            <div className=" text-gray-500">Оставьте первый отзыв</div>
          )}
        </div>
      </div>

      {isClientAuth && (
        <div className="mt-8">
          <ReviewForm onSubmit={handleAddReview} />
        </div>
      )}
    </div>
  );
};

export default ProductPage;
