import React, { PropsWithChildren, ReactElement, useEffect } from "react";
import { useClientStore } from "../model/client-auth.store";
import { useRouter } from "next/navigation";
import { MENU } from "@/shared/router/router";
import { useSellerStore } from "../model/seller-auth.store";

export function ProtectedPage<P>(
  Component: (props: P) => ReactElement,
  user: "client" | "seller"
) {
  return function ProtectedPageWrapper(props: PropsWithChildren<P>) {
    const router = useRouter();

    const isAuthenticated =
      user === "client"
        ? useClientStore.getState().isClientAuth
        : useSellerStore.getState().isSellerAuth;

    useEffect(() => {
      if (!isAuthenticated) {
        router.replace(MENU);
      }
    }, [isAuthenticated, router]);

    if (!isAuthenticated) {
      return null;
    }

    return <Component {...props} />;
  };
}
