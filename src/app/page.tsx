"use client";

import { HOME } from "@/shared/router/router";
import { redirect } from "next/navigation";
import React, { useEffect } from "react";

const Page = () => {
  useEffect(() => {
    redirect(HOME);
  });
};

export default Page;
