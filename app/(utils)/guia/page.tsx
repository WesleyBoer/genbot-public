import { APP_NAME } from "@/constants";
import { Metadata } from "next";
import React from "react";
import GuiaClient from "./guia-client";

export const metadata: Metadata = {
  title: `Guia | ${APP_NAME}`,
  description: `Explore o Guia Definitivo do ${APP_NAME}: sua solução completa para IA de chatbot, criação de imagens, áudios e vídeos. Descubra como maximizar o potencial do ${APP_NAME} em seu projeto com dicas, tutoriais e exemplos práticos.`,
};

const GuiaPage = () => {
  return (
    <div>
      <GuiaClient />
    </div>
  );
};

export default GuiaPage;
