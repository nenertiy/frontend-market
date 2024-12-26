import React, { FC } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode | React.ReactNode[];
  color?: "red" | "green";
}

const Button: FC<ButtonProps> = ({ children, onClick, color = "green" }) => {
  const backgroundColor =
    color === "red"
      ? "bg-red-500 hover:bg-red-600"
      : color === "green"
      ? "bg-[rgb(194,243,119)] hover:bg-[rgb(188,236,116)]"
      : "";

  return (
    <div>
      <button
        onClick={onClick}
        className={`${backgroundColor} w-full h-11  hover:scale-[1.02] transition ease-in-out duration-300 rounded-[10px] px-2 py-1 text-black text-base`}>
        {children}
      </button>
    </div>
  );
};

export default Button;
