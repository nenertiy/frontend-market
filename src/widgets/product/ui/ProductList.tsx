import React, { FC } from "react";
import { addToCart } from "@/entities/cart/api";
import { Product } from "@/entities/product/types";
import CardProduct from "@/entities/product/ui/CardProduct";
import { toast } from "react-toastify";

interface ProductListProps {
  products: Product[];
}

const ProductList: FC<ProductListProps> = ({ products }) => {
  const handleAddToCart = async (productId: string) => {
    try {
      await addToCart(productId);
      toast.success("Товар добавлен в корзину");
    } catch {}
  };

  return (
    <div className="flex flex-wrap gap-4 xl:gap-x-0 items-center justify-center md:justify-between md:gap-3 md:gap-y-20 850:gap-y-16 lg:gap-y-28 xl:gap-y-[140px]">
      {products.map((product) => (
        <CardProduct
          img={product.img}
          price={product.price}
          title={product.name}
          key={product.id}
          id={product.id}
          onClick={() => handleAddToCart(product.id)}
        />
      ))}
    </div>
  );
};

export default ProductList;
