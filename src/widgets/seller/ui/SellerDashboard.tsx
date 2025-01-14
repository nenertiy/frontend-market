import { Product } from "@/entities/product/types";
import SellerCardProduct from "@/entities/seller/ui/SellerCardProduct";
import React, { FC } from "react";

interface SellerDashboardProps {
  dashboard: DashboardProduct;
  onChange: (id: string) => void;
  onDelete: (id: string) => void;
}

interface DashboardProduct {
  products: Product[];
}

const SellerDashboard: FC<SellerDashboardProps> = ({
  dashboard,
  onChange,
  onDelete,
}) => {
  return (
    <div className="flex flex-wrap w-full gap-y-[100px] gap-4 xl:gap-x-0 items-center justify-center 850:justify-between md:gap-y-[140px] 850:gap-y-[140px]">
      {dashboard?.products?.map((product) => (
        <SellerCardProduct
          key={product.id}
          img={product.img}
          id={product.id}
          title={product.name}
          price={product.price}
          onChange={() => onChange(product.id)}
          onDelete={() => onDelete(product.id)}
        />
      ))}
    </div>
  );
};

export default SellerDashboard;
