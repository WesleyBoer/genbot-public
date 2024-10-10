import { APP_NAME } from "@/constants";
import React from "react";
import ChatbotClient from "./chatbot-client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Guia - Chatbot | ${APP_NAME}`,
  description: `Explore o Guia Definitivo do ${APP_NAME}: sua solução completa para IA de chatbot, criação de imagens, áudios e vídeos. Descubra como maximizar o potencial do ${APP_NAME} em seu projeto com dicas, tutoriais e exemplos práticos.`,
};

const ChatbotPage = () => {
  return (
    <div>
      <ChatbotClient />
    </div>
  );
};

export default ChatbotPage;
