import React, { FC } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface FormInputProps {
  name: string;
  label?: string;
  placeholder?: string;
  type?: string;
  register: UseFormRegisterReturn;
}

const FormInput: FC<FormInputProps> = ({
  name,
  label,
  placeholder,
  type,
  register,
}) => {
  return (
    <div className="flex flex-col gap-1">
      {label && <label htmlFor={name}>{label}</label>}
      <input
        id={name}
        placeholder={placeholder}
        type={type}
        {...register}
        className="border bg-white rounded-[10px] px-2 py-1 h-11 focus:outline-none"
      />
    </div>
  );
};

export default FormInput;
