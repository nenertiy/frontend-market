"use client";

import React from "react";
import Modal from "@/shared/ui/Modal/Modal";
import Button from "@/shared/ui/Button/Button";
import { makeProduct } from "@/entities/product/api";
import { fetchCategories } from "@/entities/category/api";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useForm, SubmitHandler } from "react-hook-form";

interface CreateProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  sellerId: string;
}

interface FormData {
  name: string;
  description: string;
  price: number;
  img: string;
  productCategoryId: string;
}

interface Field {
  name: keyof FormData;
  label: string;
  placeholder: string;
  type: string;
  required: boolean;
}

const CreateProductModal: React.FC<CreateProductModalProps> = ({
  isOpen,
  onClose,
  sellerId,
}) => {
  const queryClient = useQueryClient();

  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: () => fetchCategories(),
  });

  const { register, handleSubmit } = useForm<FormData>();

  const fields: Field[] = [
    {
      name: "name",
      label: "Название",
      placeholder: "Введите название товара",
      type: "text",
      required: true,
    },
    {
      name: "description",
      label: "Описание",
      placeholder: "Введите описание товара",
      type: "text",
      required: true,
    },
    {
      name: "price",
      label: "Цена",
      placeholder: "Введите цену товара",
      type: "text",
      required: true,
    },
    {
      name: "img",
      label: "Ссылка на изображение",
      placeholder: "Введите URL изображения",
      type: "text",
      required: true,
    },
  ];

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      await makeProduct(
        data.name,
        data.description,
        Number(data.price),
        data.img,
        sellerId,
        [data.productCategoryId]
      );
      alert("Товар успешно создан!");
      queryClient.invalidateQueries({
        queryKey: ["products", "sellerDashboard"],
      });

      onClose();
    } catch (error) {
      console.error("Ошибка при создании товара:", error);
      alert("Не удалось создать товар.");
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
        {fields.map((field) => (
          <div
            key={field.name}
            className="flex flex-col gap-2">
            <label
              htmlFor={field.name}
              className="text-sm font-medium">
              {field.label}
            </label>
            <input
              {...register(field.name as keyof FormData, {
                required: field.required,
              })}
              type={field.type}
              placeholder={field.placeholder}
              className="p-2 border border-gray-300 rounded-lg"
            />
          </div>
        ))}

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

        <Button color="green">Создать</Button>
      </form>
    </Modal>
  );
};

export default CreateProductModal;
