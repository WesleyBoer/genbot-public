"use client";

import { EMAIL_SUPPORT } from "@/constants";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import Link from "next/link";
import React from "react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

const ContatoSuporteClient = () => {
  return (
    <div>
      <div className="text-center">
        <p className={cn("text-md text-[#111827]", poppins.className)}>
          <Link href="/guia" rel="noopener noreferrer" target="_blank">
            <span className="text-primary underline-offset-4 hover:underline">
              Guia
            </span>
          </Link>{" "}
          &gt;{" "}
          <Link href="/guia" rel="noopener noreferrer" target="_blank">
            <span className="text-primary underline-offset-4 hover:underline">
              Suporte
            </span>
          </Link>{" "}
          &gt;
        </p>
        <h1
          className={cn(
            "text-4xl lg:text-5xl font-bold text-[#111827]",
            poppins.className
          )}
        >
          Como entrar em contato com o suporte
        </h1>
      </div>
      <div className="mt-8">
        <p>
          Estamos aqui para ajudá-lo em qualquer dúvida ou questão que você
          possa ter em relação ao uso dos nossos serviços. Abaixo, você
          encontrará diferentes maneiras de entrar em contato conosco para obter
          suporte imediato:
        </p>

        <div className="mt-5">
          <p className="font-bold">1. Ícone de suporte:</p>
          <p>
            Você pode clicar no ícone de suporte localizado no canto inferior
            direito da página. Este ícone está sempre disponível para você, e
            nossa equipe de suporte estará pronta para ajudar assim que
            recebermos sua mensagem.
          </p>
        </div>

        <div className="mt-5">
          <p className="font-bold">2. E-mail:</p>
          <p>
            Se preferir, você pode enviar um e-mail diretamente para nós em{" "}
            <span
              className="cursor-pointer underline transition"
              onClick={() => (window.location.href = `mailto:${EMAIL_SUPPORT}`)}
            >
              {EMAIL_SUPPORT}
            </span>
            . Nossa equipe responderá prontamente para resolver suas questões e
            fornecer assistência personalizada.
          </p>
        </div>
        <p className="mt-5">
          Ambas as formas de contato são efetivas, e estamos comprometidos em
          oferecer o suporte necessário para garantir a melhor experiência
          possível para você.
        </p>
        <p className="mt-5">
          <span className="font-bold">Observação:</span> Em caso de solicitação
          de reembolso do valor pago, por favor, lembre-se de que deve ser feita
          exclusivamente por e-mail.
        </p>
      </div>
    </div>
  );
};

export default ContatoSuporteClient;
