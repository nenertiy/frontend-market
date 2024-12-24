import ClientSignInForm from "@/features/auth/ui/client-sign-in-form";
import { CLIENT_SIGN_UP } from "@/shared/router/router";
import Link from "next/link";
import React from "react";

const ClientSignIn = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-6 mt-10 mb-10">
      <h1 className="text-2xl">Авторизация</h1>
      <ClientSignInForm />

      <Link href={CLIENT_SIGN_UP}>Нету аккаунта?</Link>
    </div>
  );
};

export default ClientSignIn;
