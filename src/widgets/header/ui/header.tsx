import React from "react";
import logo from "../../../shared/img/logo.svg";
import cart from "../../../shared/img/cart.svg";
import user from "../../../shared/img/user.svg";
import Image from "next/image";
import { LINKS } from "@/shared/constants/links";
import Link from "next/link";
import { CART, CLIENT_SIGN_IN, HOME } from "@/shared/router/router";
import Icon from "@/shared/ui/Icon/Icon";

const Header = () => {
  return (
    <div className="flex gap-6">
      <div className="my-4 bg-[rgb(194,243,119)] h-20 flex px-5 py-3 rounded-3xl items-center justify-center aspect-square">
        <Link href={HOME}>
          <Image
            className="w-8 h-8"
            src={logo}
            alt="logo"
          />
        </Link>
      </div>
      <div className="my-4 bg-[rgb(248,249,254)] h-20 flex justify-between px-5 py-3 rounded-3xl items-center w-[100%]">
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
          <Icon
            link={CART}
            img={cart}
            desc="cart"
          />
          <Icon
            link={CLIENT_SIGN_IN}
            img={user}
            desc="user"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
