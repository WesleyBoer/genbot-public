import NotFoundClient from "@/components/not-found-client";
import { APP_NAME } from "@/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Página não encontrada | ${APP_NAME}`,
  description:
    "A melhor ferramenta de IA para chatbot, gerar imagens, áudios e vídeos.",
};

const NotFound = () => {
  return <NotFoundClient />;
};

export default NotFound;
