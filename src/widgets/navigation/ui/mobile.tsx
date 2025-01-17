import React, { FC } from "react";
import MobileHeader from "./mobile-header";
import MobileBottom from "./mobile-bottom";

interface MobileProps {
  children: React.ReactNode | React.ReactNode[];
}

const Mobile: FC<MobileProps> = ({ children }) => {
  return (
    <>
      <MobileHeader />
      {children}
      <MobileBottom />
    </>
  );
};

export default Mobile;
