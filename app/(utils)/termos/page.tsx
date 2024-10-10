import React from "react";
import TermosClient from "./termos-client";
import { APP_NAME } from "@/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Termos de uso | ${APP_NAME}`,
  description:
    "A melhor ferramenta de IA para chatbot, gerar imagens, áudios e vídeos.",
};

const TermosPage = () => {
  return (
    <div>
      <TermosClient />
    </div>
  );
};

export default TermosPage;
