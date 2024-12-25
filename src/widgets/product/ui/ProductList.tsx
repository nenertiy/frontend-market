import { Product } from "@/entities/product/types";
import CardProduct from "@/entities/product/ui/CardProduct";
import React, { FC } from "react";

interface ProductListProps {
  products: Product[];
}

const ProductList: FC<ProductListProps> = ({ products }) => {
  return (
    <div className="flex flex-wrap gap-4 xl:gap-x-0 items-center justify-center md:justify-between md:gap-3 850:gap-y-16 lg:gap-y-20 xl:gap-y-[100px]">
      {products.map((product) => (
        <CardProduct
          img="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphone-14-pro-spaceblack-202404?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1712956909430"
          price={product.price}
          title={product.name}
          key={product.id}
          id={product.id}
        />
      ))}
    </div>
  );
};

export default ProductList;
