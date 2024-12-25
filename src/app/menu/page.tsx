"use client";

import { fetchProducts } from "@/entities/product/api";
import ProductList from "@/widgets/product/ui/ProductList";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const MenuPage = () => {
  const { data: products, isSuccess } = useQuery({
    queryKey: ["products"],
    queryFn: () => fetchProducts(),
  });
  return (
    <div className="lg:mb-[100px]">
      {isSuccess && <ProductList products={products} />}
    </div>
  );
};

export default MenuPage;
