"use client";

import { HOME } from "@/shared/router/router";
import Button from "@/shared/ui/Button/Button";
import { redirect } from "next/navigation";
import React from "react";
import { authModel } from "../model/auth.model";
import Form, { Field as FieldForm } from "@/shared/ui/Form/Form";
import { toast } from "react-toastify";

const ClientSignUpForm = () => {
  const fields: FieldForm[] = [
    { name: "name", label: "Имя", type: "text", required: true },
    { name: "surname", label: "Фамилия", type: "text", required: true },
    { name: "phone", label: "Телефон", type: "phone", required: true },
    { name: "email", label: "Почта", type: "email", required: true },
    { name: "password", label: "Пароль", type: "password", required: true },
  ];

  const handleSubmit = async (data: { email: string; password: string }) => {
    const { success } = await authModel.registrationClient(data);
    if (success) {
      toast.success("Успешно зарегистрирован");
      redirect(HOME);
    } else {
      toast.error("Ошибка регистрации");
    }
  };
  return (
    <Form
      fields={fields}
      onSubmit={handleSubmit}>
      <Button>Регистрация</Button>
    </Form>
  );
};

export default ClientSignUpForm;
