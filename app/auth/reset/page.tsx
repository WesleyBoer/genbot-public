import { ResetForm } from "@/components/auth/reset-form";
import { APP_NAME } from "@/constants";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: `Recuperar senha | ${APP_NAME}`,
  description:
    "A melhor ferramenta de IA para chatbot, gerar imagens, áudios e vídeos.",
};

const ResetPage = () => {
  return <ResetForm />;
};

export default ResetPage;
