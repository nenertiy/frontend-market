import React, { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Button from "@/shared/ui/Button/Button";
import { toast } from "react-toastify";

interface ReviewFormProps {
  onSubmit: (data: { rating: number; description: string }) => void;
}

interface FormValues {
  rating: number;
  description: string;
}

const ReviewForm: FC<ReviewFormProps> = ({ onSubmit }) => {
  const { register, handleSubmit, reset } = useForm<FormValues>();

  const handleFormSubmit: SubmitHandler<FormValues> = (data) => {
    if (data.rating < 1 || data.rating > 5) {
      toast.error("Пожалуйста, укажите рейтинг от 1 до 5");
      return;
    }
    onSubmit(data);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="flex flex-col gap-4 mt-6 p-4 border rounded-xl bg-white shadow-md">
      <h3 className="text-lg font-semibold text-gray-800">Оставить отзыв</h3>
      <textarea
        className="w-full h-24 px-3 py-2 bg-[rgb(250,250,254)] border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-[rgb(194,243,119)]"
        placeholder="Напишите свой отзыв"
        {...register("description", { required: "Поле обязательно" })}
      />
      <input
        className="w-20 px-2 py-1 border rounded-md text-center focus:outline-none focus:ring-2 focus:ring-[rgb(194,243,119)] bg-[rgb(250,250,254)]"
        type="number"
        min={1}
        max={5}
        placeholder="Рейтинг"
        {...register("rating", {
          required: "Укажите рейтинг",
          min: { value: 1, message: "Минимальный рейтинг: 1" },
          max: { value: 5, message: "Максимальный рейтинг: 5" },
        })}
      />
      <Button>Оставить отзыв</Button>
    </form>
  );
};

export default ReviewForm;
