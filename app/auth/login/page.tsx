import { LoginForm } from "@/components/auth/login-form";
import { APP_NAME } from "@/constants";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: `Login | ${APP_NAME}`,
  description:
    "A melhor ferramenta de IA para chatbot, gerar imagens, áudios e vídeos.",
};

const LoginPage = () => {
  return <LoginForm />;
};

export default LoginPage;
