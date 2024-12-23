import React, { FC } from "react";
import FormInput from "../Input/FormInput";
import { SubmitHandler, useForm } from "react-hook-form";

interface FormProps {
  children?: React.ReactNode | React.ReactNode[];
  onSubmit: SubmitHandler<any>;
  fields: Field[];
}

export interface Field {
  name: string;
  label?: string;
  placeholder?: string;
  type?: "text" | "password" | "email";
  required: boolean;
}

const Form: FC<FormProps> = ({ children, fields, onSubmit }) => {
  const { handleSubmit, register } = useForm();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-6 bg-gray-100 dark:bg-[#1e1e2e] sm:px-8 sm:py-10 px-6 py-8 rounded-2xl justify-center w-[85%] max-w-80 box-content">
      {fields.map((field) => (
        <FormInput
          key={field.name}
          name={field.name}
          label={field.label}
          placeholder={field.placeholder}
          type={field.type}
          register={register(field.name, { required: field.required })}
        />
      ))}
      {children}
    </form>
  );
};

export default Form;
