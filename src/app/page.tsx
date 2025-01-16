"use client";

import { MENU } from "@/shared/router/router";
import { redirect } from "next/navigation";
import { useEffect } from "react";

const Page = () => {
  useEffect(() => {
    redirect(MENU);
  });
};

export default Page;
