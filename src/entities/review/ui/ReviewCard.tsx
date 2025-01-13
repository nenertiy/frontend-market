import React, { FC } from "react";
import ReactStars from "react-stars";

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
    <div className="p-4 border rounded-lg bg-[rgb(250,250,254)] shadow-sm">
      <div className="text-sm text-gray-600 font-medium">
        {surname} {name}
      </div>
      {/* <div className="font-bold text-lg mt-2">Рейтинг: {rating}/5</div> */}
      <ReactStars
        count={5}
        size={20}
        edit={false}
        color2={"#ffd700"}
        value={rating}
      />
      {description && (
        <div className="mt-2 text-gray-700">
          <p>{description}</p>
        </div>
      )}
    </div>
  );
};

export default ReviewCard;
