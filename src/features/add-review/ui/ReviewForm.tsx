import React, { FC } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import Button from "@/shared/ui/Button/Button";
import { toast } from "react-toastify";
import ReactStars from "react-stars";

interface ReviewFormProps {
  onSubmit: (data: { rating: number; description: string }) => void;
}

interface FormValues {
  rating: number;
  description: string;
}

const ReviewForm: FC<ReviewFormProps> = ({ onSubmit }) => {
  const { control, register, handleSubmit, reset } = useForm<FormValues>();

  const handleFormSubmit: SubmitHandler<FormValues> = (data) => {
    if (data.rating < 1 || data.rating > 5) {
      toast.error("Пожалуйста, укажите рейтинг");
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
      <div className="flex flex-col gap-2">
        <label className="text-gray-600 text-sm">Рейтинг:</label>
        <Controller
          name="rating"
          control={control}
          defaultValue={0}
          render={({ field }) => (
            <ReactStars
              count={5}
              size={28}
              value={field.value}
              onChange={field.onChange}
              half={false}
              color2={"#ffd700"}
            />
          )}
        />
      </div>
      <Button>Оставить отзыв</Button>
    </form>
  );
};

export default ReviewForm;
