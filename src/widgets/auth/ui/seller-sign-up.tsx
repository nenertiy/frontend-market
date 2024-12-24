import SellerSignUpForm from "@/features/auth/ui/seller-sign-up-form";
import { SELLER_SIGN_IN } from "@/shared/router/router";
import Link from "next/link";
import React from "react";

const SellerSignUp = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-6 mt-10 mb-10">
      <h1 className="text-2xl">Регистрация продавца</h1>
      <SellerSignUpForm />

      <Link href={SELLER_SIGN_IN}>Есть аккаунт?</Link>
    </div>
  );
};

export default SellerSignUp;
