import React, { FC } from "react";

interface ButtonProps {
  children?: React.ReactNode | React.ReactNode[];
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <div>
      <button
        onClick={onClick}
        className="w-full h-11 bg-[#303030] dark:bg-[#7373a4] hover:bg-[#222222] dark:hover:bg-[#646499]  hover:scale-[1.02] transition ease-in-out duration-300 rounded-[10px] px-2 py-1 text-white dark:text-black text-base">
        {children}
      </button>
    </div>
  );
};

export default Button;
