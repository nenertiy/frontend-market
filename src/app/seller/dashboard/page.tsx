"use client";

import React, { useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteProduct, getSellerDashboard } from "@/entities/seller/api";
import SellerCardProduct from "@/entities/seller/ui/SellerCardProduct";
import Button from "@/shared/ui/Button/Button";
import CreateProductModal from "@/features/product-creation/ui/CreateProductModal";
import { toast } from "react-toastify";

const DashboardPage = () => {
  const { data: dashboard, isSuccess } = useQuery({
    queryKey: ["sellerDashboard"],
    queryFn: getSellerDashboard,
  });

  const queryClient = useQueryClient();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDeleteProduct = async (id: string) => {
    try {
      await deleteProduct(id);
      toast.success("Продукт удален");
      queryClient.invalidateQueries({
        queryKey: ["products", "sellerDashboard"],
      });
    } catch {
      toast.error("Не удалось удалить продукт. Попробуйте позже.");
    }
  };

  return (
    <div className="p-6">
      <div className="mb-6 flex justify-between items-center">
        <h1 className="text-3xl font-semibold">Ваши товары</h1>
        <Button
          onClick={() => setIsModalOpen(true)}
          color="green">
          Добавить товар
        </Button>
      </div>

      <div className="flex flex-wrap gap-6 lg:gap-y-[120px] lg:justify-between">
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
              onDelete={() => handleDeleteProduct(product.id)}
            />
          ))}
      </div>

      <CreateProductModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        sellerId={dashboard?.id || ""}
      />
    </div>
  );
};

export default DashboardPage;
