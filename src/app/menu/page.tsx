"use client";

import { fetchProducts } from "@/entities/product/api";
import SearchInput from "@/shared/ui/Input/SearchInput";
import ProductList from "@/widgets/product/ui/ProductList";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";

const MenuPage = () => {
  const [searchValue, setSearchValue] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchValue(value);
  };

  const { data: products, isSuccess } = useQuery({
    queryKey: ["products", searchValue],
    queryFn: () => fetchProducts(searchValue),
  });

  return (
    <div className="lg:mb-[100px]">
      <SearchInput
        handleChange={handleChange}
        value={searchValue}
      />
      {isSuccess && <ProductList products={products} />}
    </div>
  );
};

export default MenuPage;
