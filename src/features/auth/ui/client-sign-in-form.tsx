"use client";

import { HOME } from "@/shared/router/router";
import Button from "@/shared/ui/Button/Button";
import { redirect } from "next/navigation";
import React from "react";
import { authModel } from "../model/auth.model";
import Form, { Field as FieldForm } from "@/shared/ui/Form/Form";

const ClientSignInForm = () => {
  const fields: FieldForm[] = [
    { name: "email", label: "Почта", type: "email", required: true },
    { name: "password", label: "Пароль", type: "password", required: true },
  ];

  const handleSubmit = async (data: { email: string; password: string }) => {
    const { success } = await authModel.loginClient(data);
    if (success) {
      alert(success);
      redirect(HOME);
    }
  };
  return (
    <Form
      fields={fields}
      onSubmit={handleSubmit}>
      <Button>Вход</Button>
    </Form>
  );
};

export default ClientSignInForm;
