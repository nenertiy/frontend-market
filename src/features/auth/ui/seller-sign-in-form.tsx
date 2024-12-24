"use client";

import { HOME } from "@/shared/router/router";
import Button from "@/shared/ui/Button/Button";
import Form, { Field as FieldForm } from "@/shared/ui/Form/Form";
import { redirect } from "next/navigation";
import React from "react";
import { authModel } from "../model/auth.model";

const SellerSignInForm = () => {
  const fields: FieldForm[] = [
    { name: "email", label: "Почта", type: "email", required: true },
    { name: "password", label: "Пароль", type: "password", required: true },
  ];

  const handleSubmit = async (data: { email: string; password: string }) => {
    const { success } = await authModel.loginSeller(data);
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

export default SellerSignInForm;
