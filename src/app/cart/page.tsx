"use client";

import { getCart } from "@/entities/cart/api";
import CartProductList from "@/widgets/cart/ui/CartProductList";
import { useClientStore } from "@/features/auth/model/client-auth.store";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const CartPage = () => {
  const { userId } = useClientStore();

  const {
    data: cart,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["cart", userId],
    queryFn: () => getCart(userId),
    enabled: !!userId,
  });

  if (isLoading) {
    return <div>Загрузка...</div>;
  }

  if (isError || !cart) {
    return (
      <div className="bg-[rgb(248,249,254)] px-3 py-2 rounded-xl text-2xl font-semibold mb-3">
        Корзина пуста
      </div>
    );
  }

  return (
    <div>
      <div className="bg-[rgb(248,249,254)] px-3 py-2 rounded-xl text-2xl font-semibold mb-3">
        Корзина
      </div>
      <div>
        <CartProductList
          cart={cart}
          userId={userId}
        />
      </div>
    </div>
  );
};

export default CartPage;
