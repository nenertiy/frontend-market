"use client";

import React, { useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteProduct, getSellerDashboard } from "@/entities/seller/api";
import Button from "@/shared/ui/Button/Button";
import CreateProductModal from "@/features/product-creation/ui/CreateProductModal";
import { toast } from "react-toastify";
import SellerDashboard from "@/widgets/seller/ui/SellerDashboard";
import { ProtectedPage } from "@/features/auth/ui/protected-page";

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
        queryKey: ["sellerDashboard"],
      });
    } catch (error) {
      console.error(error);
      toast.error("Не удалось удалить продукт. Попробуйте позже.");
    }
  };

  const handleAddProduct = () => {
    queryClient.invalidateQueries({
      queryKey: ["sellerDashboard"],
    });
    setIsModalOpen(false);
  };

  const handleChangeProduct = (id: string) => {
    console.log(`Редактирование продукта с ID: ${id}`);
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
        {isSuccess && (
          <SellerDashboard
            dashboard={dashboard}
            onDelete={handleDeleteProduct}
            onChange={handleChangeProduct}
          />
        )}
      </div>

      {isModalOpen && (
        <CreateProductModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSuccess={handleAddProduct}
        />
      )}
    </div>
  );
};

export default ProtectedPage(DashboardPage, "seller");
