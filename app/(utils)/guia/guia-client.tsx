"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { APP_NAME } from "@/constants";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import Link from "next/link";
import React from "react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

const GuiaClient = () => {
  return (
    <div>
      <h1
        className={cn(
          "text-4xl lg:text-5xl font-bold text-center text-[#111827]",
          poppins.className
        )}
      >
        Guia
      </h1>
      <div className="mt-8">
        <p>
          Bem-vindo à página de guia do {APP_NAME}! Aqui, temos guias práticos
          para você aproveitar ao máximo a aplicação. Explore tutoriais simples
          para aprender a usar as funcionalidades essenciais.
        </p>
        <p className="mt-5">
          Se tiver alguma dúvida ou precisar de ajuda,{" "}
          <span className="font-bold">
            é só clicar no ícone de suporte no canto inferior direito da tela.
          </span>{" "}
          Estamos aqui para ajudar!
        </p>
      </div>
      <div className="flex flex-col lg:grid lg:grid-cols-12 lg:gap-8 pt-6">
        <div className="lg:col-span-6">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-[#111827] font-bold text-start">
                Dicas de uso
              </AccordionTrigger>
              <AccordionContent className="text-[#111827]">
                <ul>
                  <li>
                    <Link
                      href="/guia/chatbot"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <span className="text-primary underline-offset-4 hover:underline">
                        Chatbot
                      </span>
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/guia/gerador-de-imagem"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <span className="text-primary underline-offset-4 hover:underline">
                        Gerador de imagem
                      </span>
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/guia/gerador-de-audio"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <span className="text-primary underline-offset-4 hover:underline">
                        Gerador de áudio
                      </span>
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/guia/gerador-de-video"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <span className="text-primary underline-offset-4 hover:underline">
                        Gerador de vídeo
                      </span>
                    </Link>
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-[#111827] font-bold text-start">
                Pagamentos e mensalidades
              </AccordionTrigger>
              <AccordionContent className="text-[#111827]">
                <ul>
                  <li>
                    <Link
                      href="/guia/como-cancelar-a-sua-assinatura"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <span className="text-primary underline-offset-4 hover:underline">
                        Como cancelar a sua assinatura
                      </span>
                    </Link>
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="lg:col-span-6">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-[#111827] font-bold text-start">
                Perfil e segurança
              </AccordionTrigger>
              <AccordionContent className="text-[#111827]">
                <ul>
                  <li>
                    <Link
                      href="/guia/como-funciona-a-autenticacao-de-dois-fatores"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <span className="text-primary underline-offset-4 hover:underline">
                        Como funciona a autenticação de dois fatores
                      </span>
                    </Link>
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-[#111827] font-bold text-start">
                Suporte
              </AccordionTrigger>
              <AccordionContent className="text-[#111827]">
                <ul>
                  <li>
                    <Link
                      href="/guia/como-entrar-em-contato-com-o-suporte"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <span className="text-primary underline-offset-4 hover:underline">
                        Como entrar em contato com o suporte do {APP_NAME}
                      </span>
                    </Link>
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default GuiaClient;
