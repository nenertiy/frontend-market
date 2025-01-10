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
    <div className="flex flex-row gap-4 xl:gap-x-0 items-center justify-center md:justify-between md:gap-3 850:gap-y-16 lg:gap-y-20 xl:gap-y-[100px]">
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
