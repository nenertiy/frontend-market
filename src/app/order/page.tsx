"use client";

import { getOrder } from "@/entities/order/api";
import OrderList from "@/widgets/order/ui/OrderList";
import { useClientStore } from "@/features/auth/model/client-auth.store";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { ProtectedPage } from "@/features/auth/ui/protected-page";

const OrderPageContent = () => {
  const { userId } = useClientStore();

  const {
    data: orders,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["order", userId],
    queryFn: getOrder,
    enabled: !!userId,
  });

  if (isLoading) {
    return <div>Загрузка...</div>;
  }

  if (isError || !orders || orders.length < 1) {
    return (
      <div className="bg-[rgb(248,249,254)] px-3 py-2 rounded-xl text-2xl font-semibold mb-3">
        У вас пока нет заказов
      </div>
    );
  }

  return (
    <div>
      <div className="bg-[rgb(248,249,254)] px-3 py-2 rounded-xl text-2xl font-semibold mb-3">
        Заказы
      </div>
      <div>
        <OrderList orders={orders} />
      </div>
    </div>
  );
};

const OrderPage = () => (
  <ProtectedPage user="client">
    <OrderPageContent />
  </ProtectedPage>
);

export default OrderPage;
