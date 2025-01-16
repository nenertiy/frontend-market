"use client";

import { fetchCategory } from "@/entities/category/api";
import ProductList from "@/widgets/product/ui/ProductList";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import React from "react";

const CategoryPage = () => {
  const params = useParams();
  const id = params?.id as string;

  const { data: productsByCategory, isSuccess } = useQuery({
    queryKey: ["productsByCategory", id],
    queryFn: () => fetchCategory(id),
  });

  return (
    <div>
      <div className="bg-[rgb(248,249,254)] px-3 py-2 rounded-xl text-2xl font-semibold mb-3">
        {productsByCategory?.name}
      </div>
      <div>
        {isSuccess && <ProductList products={productsByCategory.product} />}
      </div>
    </div>
  );
};

export default CategoryPage;
