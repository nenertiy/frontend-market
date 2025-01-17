"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useClientStore } from "@/features/auth/model/client-auth.store";
import { useSellerStore } from "@/features/auth/model/seller-auth.store";
import { authModel } from "@/features/auth/model/auth.model";
import logo from "../../../shared/img/logo.svg";

import { CLIENT_SIGN_IN } from "@/shared/router/router";

const MobileHeader = () => {
  const { isClientAuth } = useClientStore();
  const { isSellerAuth } = useSellerStore();

  return (
    <header className="flex justify-between items-center bg-[rgb(248,249,254)] px-5 py-4 border-b mb-4 rounded-2xl">
      <div className="flex items-center">
        <Link href="/">
          <Image
            src={logo}
            alt="logo"
            width={30}
            height={30}
          />
        </Link>
      </div>

      <div className="flex items-center gap-4">
        {!isClientAuth && !isSellerAuth ? (
          <Link
            href={CLIENT_SIGN_IN}
            className="text-sm font-medium text-gray-700">
            Войти
          </Link>
        ) : (
          <button
            onClick={() => authModel.logout()}
            className="text-sm font-medium text-red-600">
            Выход
          </button>
        )}
      </div>
    </header>
  );
};

export default MobileHeader;
