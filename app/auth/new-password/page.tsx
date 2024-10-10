import { NewPasswordForm } from "@/components/auth/new-password-form";
import { APP_NAME } from "@/constants";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: `Nova senha | ${APP_NAME}`,
  description:
    "A melhor ferramenta de IA para chatbot, gerar imagens, áudios e vídeos.",
};

const NewPasswordPage = () => {
  return <NewPasswordForm />;
};

export default NewPasswordPage;
