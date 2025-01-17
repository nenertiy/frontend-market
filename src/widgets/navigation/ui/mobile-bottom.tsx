"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import cart from "../../../shared/img/cart.svg";
import order from "../../../shared/img/order.svg";
import user from "../../../shared/img/user.svg";
import menu from "../../../shared/img/menu.svg";

import { CART, CLIENT_SIGN_IN, DASHBOARD, ORDER } from "@/shared/router/router";
import { useClientStore } from "@/features/auth/model/client-auth.store";

const MobileBottom = () => {
  const { isClientAuth } = useClientStore();

  return (
    <nav className="fixed bottom-1 left-1/2 transform -translate-x-1/2 bg-[rgb(248,249,254)] border-t shadow-md rounded-xl w-[85%]">
      <div className="flex justify-around items-center py-2">
        <Link href="/menu">
          <Image
            src={menu}
            alt="home"
            width={30}
            height={30}
          />
        </Link>

        {isClientAuth && (
          <Link href={ORDER}>
            <Image
              src={order}
              alt="order"
              width={30}
              height={30}
            />
          </Link>
        )}

        {isClientAuth && (
          <Link href={CART}>
            <Image
              src={cart}
              alt="cart"
              width={30}
              height={30}
            />
          </Link>
        )}

        <Link href={isClientAuth ? DASHBOARD : CLIENT_SIGN_IN}>
          <Image
            src={user}
            alt="user"
            width={30}
            height={30}
          />
        </Link>
      </div>
    </nav>
  );
};

export default MobileBottom;
