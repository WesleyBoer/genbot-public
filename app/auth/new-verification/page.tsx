import NewVerificationForm from "@/components/auth/new-verification-form";
import { APP_NAME } from "@/constants";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: `Confirmação de e-mail | ${APP_NAME}`,
  description:
    "A melhor ferramenta de IA para chatbot, gerar imagens, áudios e vídeos.",
};

const NewVerificationPage = () => {
  return <NewVerificationForm />;
};

export default NewVerificationPage;
