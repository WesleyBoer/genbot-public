import { APP_NAME } from "@/constants";
import React from "react";
import { Metadata } from "next";
import ContatoSuporteClient from "./contato-suporte-client";

export const metadata: Metadata = {
  title: `Guia - Como entrar em contato com o suporte | ${APP_NAME}`,
  description: `Explore o Guia Definitivo do ${APP_NAME}: sua solução completa para IA de chatbot, criação de imagens, áudios e vídeos. Descubra como maximizar o potencial do ${APP_NAME} em seu projeto com dicas, tutoriais e exemplos práticos.`,
};

const ContatoSuporte = () => {
  return (
    <div>
      <ContatoSuporteClient />
    </div>
  );
};

export default ContatoSuporte;
