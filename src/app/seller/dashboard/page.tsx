"use client";

import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getSellerDashboard } from "@/entities/seller/api";
import SellerCardProduct from "@/entities/seller/ui/SellerCardProduct";
import Button from "@/shared/ui/Button/Button";
import CreateProductModal from "@/widgets/product/ui/CreateProductModal";

const DashboardPage = () => {
  const { data: dashboard, isSuccess } = useQuery({
    queryKey: ["sellerDashboard"],
    queryFn: getSellerDashboard,
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="p-6">
      <div className="mb-6 flex justify-between items-center">
        <h1 className="text-3xl font-semibold">Ваши товары</h1>
        <Button
          onClick={openModal}
          color="green">
          Добавить товар
        </Button>
      </div>

      <div className="flex flex-wrap gap-6">
        {isSuccess &&
          dashboard?.products?.map((product: any) => (
            <SellerCardProduct
              key={product.id}
              img={product.img}
              id={product.id}
              title={product.name}
              price={product.price}
              onChange={() =>
                console.log(`Редактирование продукта: ${product.id}`)
              }
              onDelete={() => console.log(`Удаление продукта: ${product.id}`)}
            />
          ))}
      </div>

      <CreateProductModal
        isOpen={isModalOpen}
        onClose={closeModal}
        sellerId={dashboard?.id || ""}
      />
    </div>
  );
};

export default DashboardPage;
