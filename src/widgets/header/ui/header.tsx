"use client";

import React from "react";
import logo from "../../../shared/img/logo.svg";
import cart from "../../../shared/img/cart.svg";
import order from "../../../shared/img/order.svg";
import user from "../../../shared/img/user.svg";
import Image from "next/image";
import { LINKS } from "@/shared/constants/links";
import Link from "next/link";
import {
  CART,
  CLIENT_SIGN_IN,
  DASHBOARD,
  HOME,
  ORDER,
  SELLER_SIGN_IN,
} from "@/shared/router/router";
import Icon from "@/shared/ui/Icon/Icon";
import { useClientStore } from "@/features/auth/model/client-auth.store";
import { useSellerStore } from "@/features/auth/model/seller-auth.store";
import Button from "@/shared/ui/Button/Button";
import { authModel } from "@/features/auth/model/auth.model";

const Header = () => {
  const { isClientAuth } = useClientStore();
  const { isSellerAuth } = useSellerStore();
  return (
    <div className="flex flex-col mt-2">
      <div className="flex justify-end gap-2">
        <div className="text-sm bg-[rgb(248,249,254)] hover:bg-[rgb(240,241,246)] transition duration-300 ease-in-out px-2 py-1 rounded-lg">
          RUB
        </div>
        <div className="text-sm bg-[rgb(248,249,254)] hover:bg-[rgb(240,241,246)] transition duration-300 ease-in-out px-2 py-1 rounded-lg">
          Москва
        </div>
        <Link
          className="text-sm bg-[rgb(248,249,254)] hover:bg-[rgb(240,241,246)] transition duration-300 ease-in-out px-2 py-1 rounded-lg"
          href={isSellerAuth ? DASHBOARD : SELLER_SIGN_IN}>
          Для для продавца
        </Link>
      </div>
      <div className="flex gap-6 mt-2 mb-4">
        <div className=" bg-[rgb(194,243,119)] h-20 flex px-5 py-3 rounded-3xl items-center justify-center aspect-square">
          <Link href={HOME}>
            <Image
              className="w-8 h-8"
              src={logo}
              alt="logo"
            />
          </Link>
        </div>
        <div className=" bg-[rgb(248,249,254)] h-20 flex justify-between px-5 py-3 rounded-3xl items-center w-[100%]">
          <div className="flex gap-6 font-medium">
            {LINKS.map((link) => (
              <Link
                href={link.link}
                key={link.link}>
                {link.name}
              </Link>
            ))}
          </div>
          <div className="flex gap-6">
            {isClientAuth && (
              <Icon
                link={ORDER}
                img={order}
                desc="order"
              />
            )}
            {isClientAuth && (
              <Icon
                link={CART}
                img={cart}
                desc="cart"
              />
            )}
            <Icon
              link={
                !isClientAuth && !isSellerAuth
                  ? CLIENT_SIGN_IN
                  : isSellerAuth
                  ? DASHBOARD
                  : ""
                // isClientAuth
                // ? PROFILE
                // : ""
              }
              img={user}
              desc="user"
            />
            {(isClientAuth || isSellerAuth) && (
              <Button onClick={() => authModel.logout()}>Выход</Button>
            )}
            {/* При многоразовом нажатии на иконку при селлере он дублирует адрес */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
