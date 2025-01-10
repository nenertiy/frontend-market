import React, { FC } from "react";

interface ReviewCardProps {
  rating: number;
  description?: string;
  name: string;
  surname: string;
}

const ReviewCard: FC<ReviewCardProps> = ({
  rating,
  description,
  name,
  surname,
}) => {
  return (
    <div className="px-4 py-3 border rounded-lg bg-[rgb(250,250,254)]">
      <div>
        {surname} {name}
      </div>
      <div className="font-bold text-lg">Рейтинг: {rating}/5</div>
      <div>{description}</div>
    </div>
  );
};

export default ReviewCard;
