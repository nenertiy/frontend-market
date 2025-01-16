import React, { FC } from "react";
import { Seller } from "../types";
import Link from "next/link";

interface SellerCardProfileProps {
  seller: Seller;
}

const SellerCardProfile: FC<SellerCardProfileProps> = ({ seller }) => {
  return (
    <Link href={`/seller/${seller.id}`}>
      <div className="p-4 border rounded-lg bg-[rgb(250,250,254)] shadow-sm">
        <div className="font-bold">{seller.shopName}</div>
        <div>
          {seller.surname} {seller.name} {seller.patronymic}
        </div>
        <div>{seller.email}</div>
      </div>
    </Link>
  );
};

export default SellerCardProfile;
