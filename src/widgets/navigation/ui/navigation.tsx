"use client";

import React, { FC } from "react";
import Header from "./header";
import { getDeviceType } from "@/shared/utils/lib/device-type";
import Mobile from "./mobile";

interface NavigationProps {
  children: React.ReactNode | React.ReactNode[];
}

const Navigation: FC<NavigationProps> = ({ children }) => {
  if (getDeviceType() == "desktop") {
    return (
      <>
        <Header />
        {children}
      </>
    );
  } else {
    return (
      <>
        <Mobile children={children} />
      </>
    );
  }
};

export default Navigation;
