import ClientSignUpForm from "@/features/auth/ui/client-sign-up-form";
import { CLIENT_SIGN_IN } from "@/shared/router/router";
import Link from "next/link";
import React from "react";

const ClientSignUp = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-6 mt-10 mb-10">
      <h1 className="text-2xl">Регистрация</h1>
      <ClientSignUpForm />

      <Link href={CLIENT_SIGN_IN}>Есть аккаунт?</Link>
    </div>
  );
};

export default ClientSignUp;
