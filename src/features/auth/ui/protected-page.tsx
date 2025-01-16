"use client";

import React, { ReactNode, useEffect } from "react";
import { useClientStore } from "../model/client-auth.store";
import { useRouter } from "next/navigation";
import { MENU } from "@/shared/router/router";
import { useSellerStore } from "../model/seller-auth.store";

interface ProtectedPageProps {
  user: "client" | "seller";
  children: ReactNode;
}

export const ProtectedPage: React.FC<ProtectedPageProps> = ({
  user,
  children,
}) => {
  const router = useRouter();

  const isAuthenticated =
    user === "client"
      ? useClientStore().isClientAuth
      : useSellerStore().isSellerAuth;

  useEffect(() => {
    if (!isAuthenticated) {
      router.replace(MENU);
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) {
    return null;
  }

  return <>{children}</>;
};
