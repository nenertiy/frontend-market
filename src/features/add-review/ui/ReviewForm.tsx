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
      className="flex flex-col gap-4 mt-8">
      <h3 className="text-xl font-semibold mb-4">Оставить отзыв</h3>
      <textarea
        className="px-3 py-2 border rounded-lg bg-[rgb(250,250,254)]"
        placeholder="Напишите свой отзыв"
        {...register("description", { required: "Поле обязательно" })}
      />
      <input
        className="p-2 border rounded w-20"
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
      <Button type="submit">Оставить отзыв</Button>
    </form>
  );
};

export default ReviewForm;
