"use client";

import React from "react";
import Modal from "@/shared/ui/Modal/Modal";
import Button from "@/shared/ui/Button/Button";
import { fetchCategories } from "@/entities/category/api";
import { useQuery } from "@tanstack/react-query";
import { useForm, SubmitHandler } from "react-hook-form";
import { makeProduct } from "../api";
import { toast } from "react-toastify";

interface CreateProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: () => void;
}

interface FormData {
  name: string;
  description: string;
  price: number;
  img: string;
  productCategoryId: string;
}

const CreateProductModal: React.FC<CreateProductModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
}) => {
  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: () => fetchCategories(),
  });

  const { register, handleSubmit, reset } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      await makeProduct(
        data.name,
        data.description,
        Number(data.price),
        data.img,
        data.productCategoryId
      );
      toast.success("Товар успешно создан!");
      if (onSuccess) onSuccess();
      reset();
      onClose();
    } catch (error) {
      console.error(error);
      toast.error("Ошибка при создании товара!");
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}>
      <h2 className="text-xl font-semibold mb-4">Создание нового товара</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="name"
            className="text-sm font-medium">
            Название
          </label>
          <input
            {...register("name", { required: true })}
            type="text"
            placeholder="Введите название товара"
            className="p-2 border border-gray-300 rounded-lg"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="description"
            className="text-sm font-medium">
            Описание
          </label>
          <input
            {...register("description", { required: true })}
            placeholder="Введите описание товара"
            className="p-2 border border-gray-300 rounded-lg"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="price"
            className="text-sm font-medium">
            Цена
          </label>
          <input
            {...register("price", { required: true, valueAsNumber: true })}
            type="number"
            placeholder="Введите цену товара"
            className="p-2 border border-gray-300 rounded-lg"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="img"
            className="text-sm font-medium">
            Ссылка на изображение
          </label>
          <input
            {...register("img", { required: true })}
            type="text"
            placeholder="Введите URL изображения"
            className="p-2 border border-gray-300 rounded-lg"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="productCategoryId"
            className="text-sm font-medium">
            Категория
          </label>
          <select
            {...register("productCategoryId", { required: true })}
            className="p-2 border border-gray-300 rounded-lg"
            defaultValue="">
            <option
              value=""
              disabled>
              Выберите категорию
            </option>
            {categories?.map((category) => (
              <option
                key={category.id}
                value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        <Button
          type="submit"
          color="green">
          Создать
        </Button>
      </form>
    </Modal>
  );
};

export default CreateProductModal;
