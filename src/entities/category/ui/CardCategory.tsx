import Link from "next/link";
import React, { FC } from "react";

interface CardCategoryProps {
  id: string;
  name: string;
}

const CardCategory: FC<CardCategoryProps> = ({ name, id }) => {
  return (
    <Link
      href={`/categories/${id}`}
      className="bg-[rgb(248,249,254)] px-3 py-2 rounded-xl text-lg">
      {name}
    </Link>
  );
};

export default CardCategory;
