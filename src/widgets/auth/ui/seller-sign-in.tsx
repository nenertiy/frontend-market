import SellerSignInForm from "@/features/auth/ui/seller-sign-in-form";
import { SELLER_SIGN_UP } from "@/shared/router/router";
import Link from "next/link";
import React from "react";

const SellerSignIn = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-6 mt-10 mb-10">
      <h1 className="text-2xl">Авторизация для продавца</h1>
      <SellerSignInForm />

      <Link href={SELLER_SIGN_UP}>Нету аккаунта?</Link>
    </div>
  );
};

export default SellerSignIn;
