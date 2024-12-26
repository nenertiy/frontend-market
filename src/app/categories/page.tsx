"use client";

import { fetchCategories } from "@/entities/category/api";
import SearchInput from "@/shared/ui/Input/SearchInput";
import CategoryList from "@/widgets/category/ui/CategoryList";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";

const CategoriesPage = () => {
  const [searchValue, setSearchValue] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchValue(value);
  };

  const { data: categories, isSuccess } = useQuery({
    queryKey: ["categories", searchValue],
    queryFn: () => fetchCategories(searchValue),
  });
  return (
    <div>
      <SearchInput
        handleChange={handleChange}
        value={searchValue}
      />
      {isSuccess && <CategoryList categories={categories} />}
    </div>
  );
};

export default CategoriesPage;
