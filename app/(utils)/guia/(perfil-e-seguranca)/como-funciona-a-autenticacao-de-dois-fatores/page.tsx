import { APP_NAME } from "@/constants";
import React from "react";
import { Metadata } from "next";
import AutenticacaoDoisFatoresClient from "./autenticacao-dois-fatores";

export const metadata: Metadata = {
  title: `Guia - Como funciona a autenticacao de dois fatores | ${APP_NAME}`,
  description: `Explore o Guia Definitivo do ${APP_NAME}: sua solução completa para IA de chatbot, criação de imagens, áudios e vídeos. Descubra como maximizar o potencial do ${APP_NAME} em seu projeto com dicas, tutoriais e exemplos práticos.`,
};

const AutenticacaoDoisFatoresPage = () => {
  return (
    <div>
      <AutenticacaoDoisFatoresClient />
    </div>
  );
};

export default AutenticacaoDoisFatoresPage;
