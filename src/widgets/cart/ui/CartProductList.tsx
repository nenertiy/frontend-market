import { addToCart, decreaseCart, removeFromCart } from "@/entities/cart/api";
import { Cart } from "@/entities/cart/types";
import CardCart from "@/entities/cart/ui/CardCart";
import { makeOrder } from "@/entities/order/api";
import { ORDER } from "@/shared/router/router";
import Button from "@/shared/ui/Button/Button";
import { useQueryClient } from "@tanstack/react-query";
import { redirect } from "next/navigation";
import React, { FC } from "react";

interface CartProductListProps {
  cart: Cart;
  userId: string;
}

const CartProductList: FC<CartProductListProps> = ({ cart, userId }) => {
  const queryClient = useQueryClient();

  const totalItems = cart?.cartProduct.reduce(
    (acc, item) => acc + item.count,
    0
  );
  const totalPrice = cart?.cartProduct.reduce(
    (acc, item) => acc + item.product.price * item.count,
    0
  );

  const onIncrease = async (productId: string) => {
    await addToCart(userId, productId);
    queryClient.invalidateQueries({ queryKey: ["cart", userId] });
  };

  const onDecrease = async (productId: string) => {
    await decreaseCart(userId, productId);
    queryClient.invalidateQueries({ queryKey: ["cart", userId] });
  };

  const onRemove = async (productId: string) => {
    await removeFromCart(userId, productId);
    queryClient.invalidateQueries({ queryKey: ["cart", userId] });
  };

  const postOrder = async () => {
    await makeOrder(userId);
    queryClient.invalidateQueries({ queryKey: ["order", userId] });
    queryClient.invalidateQueries({ queryKey: ["cart", userId] });
    redirect(ORDER);
  };

  return (
    <div className="flex lg:flex-row flex-col lg:justify-between justify-center lg:items-start items-center gap-6">
      <div className="flex flex-col gap-6 w-full lg:w-2/3 lg:max-h-[800px] lg:overflow-y-auto">
        {cart?.cartProduct.map((cartProduct) => (
          <CardCart
            key={cartProduct.product.id}
            name={cartProduct.product.name}
            img={cartProduct.product.img}
            count={cartProduct.count}
            price={cartProduct.product.price}
            onIncrease={() => onIncrease(cartProduct.product.id)}
            onDecrease={() => onDecrease(cartProduct.product.id)}
            onRemove={() => onRemove(cartProduct.product.id)}
          />
        ))}
      </div>

      <div className="bg-[rgb(248,249,254)] lg:w-1/3 w-full p-5 rounded-3xl shadow-md h-fit">
        <h2 className="text-xl font-semibold mb-4">Итого:</h2>
        <div className="text-lg font-medium mb-2">
          Количество товаров: <span>{totalItems}</span>
        </div>
        <div className="text-lg font-medium mb-6">
          Сумма: <span>{totalPrice} ₽</span>
        </div>
        <Button onClick={postOrder}>Заказать</Button>
      </div>
    </div>
  );
};

export default CartProductList;
