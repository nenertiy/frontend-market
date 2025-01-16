"use client";

import { getSellerProfile } from "@/entities/seller/api";
import ProductList from "@/widgets/product/ui/ProductList";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import React from "react";
import ReactStars from "react-stars";

const SellerPage = () => {
  const { id } = useParams<{ id: string }>();

  const { data: seller, isSuccess } = useQuery({
    queryKey: ["sellerProducts", id],
    queryFn: () => getSellerProfile(id),
  });

  return (
    <div>
      <div className="bg-[rgb(248,249,254)] px-3 py-2 rounded-xl text-2xl font-semibold mb-3 flex justify-between">
        <div>{seller?.shopName}</div>
        {seller?.rating != undefined && seller.rating > 0 && (
          <div className="flex gap-2">
            <ReactStars
              count={1}
              size={24}
              edit={false}
              color2={"#ffd700"}
              value={1}
            />
            <div>{seller?.rating}</div>
          </div>
        )}
      </div>
      <div className="bg-[rgb(248,249,254)] px-3 py-2 rounded-xl text-base mb-3 ">
        <div>
          {seller?.surname} {seller?.name} {seller?.patronymic}
        </div>
        <div>{seller?.email}</div>
      </div>
      <div>{isSuccess && <ProductList products={seller.products} />}</div>
    </div>
  );
};

export default SellerPage;
