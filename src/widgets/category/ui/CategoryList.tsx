import { Category } from "@/entities/category/types";
import CardCategory from "@/entities/category/ui/CardCategory";
import React, { FC } from "react";

interface CategoryListProps {
  categories: Category[];
}

const CategoryList: FC<CategoryListProps> = ({ categories }) => {
  return (
    <div className="flex flex-wrap gap-6">
      {categories.map((category) => (
        <CardCategory
          key={category.id}
          id={category.id}
          name={category.name}
        />
      ))}
    </div>
  );
};

export default CategoryList;
