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
        className="w-full h-11 bg-[rgb(194,243,119)] hover:bg-[rgb(188,236,116)]   hover:scale-[1.02] transition ease-in-out duration-300 rounded-[10px] px-2 py-1 text-black text-base">
        {children}
      </button>
    </div>
  );
};

export default Button;
