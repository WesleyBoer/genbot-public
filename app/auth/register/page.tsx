import { RegisterForm } from "@/components/auth/register-form";
import { APP_NAME } from "@/constants";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: `Cadastre-se | ${APP_NAME}`,
  description:
    "A melhor ferramenta de IA para chatbot, gerar imagens, áudios e vídeos.",
};

const RegisterPage = () => {
  return <RegisterForm />;
};

export default RegisterPage;
