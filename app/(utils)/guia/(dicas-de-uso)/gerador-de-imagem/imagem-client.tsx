"use client";

import { APP_NAME } from "@/constants";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import Link from "next/link";
import React from "react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

const ImagemClient = () => {
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
          <Link
            href="/guia/dicas-de-uso"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="text-primary underline-offset-4 hover:underline">
              Dicas de uso
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
          Gerador de imagem
        </h1>
      </div>
      <div className="mt-8">
        <p>
          Para aproveitar ao máximo o gerador de imagem, é crucial dominar a
          arte de criar comandos eficazes. O comando é a chave para desbloquear
          a criatividade do {APP_NAME}, garantindo a geração de imagens lindas e
          cativantes. Aqui estão algumas dicas essenciais para otimizar seus
          comandos:
        </p>

        <div className="mt-5">
          <p className="font-bold">1. Descreva com detalhes:</p>
          <p>
            • Seja específico e detalhado ao formular sua descrição. Quanto mais
            informações, mais rica será a imagem gerada.
          </p>
          <p>
            • Exemplo: &quot;Crie uma imagem de uma paisagem urbana noturna com
            arranha-céus iluminados e reflexos na água.&quot;
          </p>
        </div>

        <div className="mt-5">
          <p className="font-bold">2. Experimente diferentes abordagens:</p>
          <p>
            • Não tenha medo de experimentar com diferentes descrições para a
            mesma ideia. Isso proporciona interpretações visuais diversas.
          </p>
          <p>
            • Exemplo: &quot;Tente gerar uma imagem de um jardim encantado com
            flores brilhantes e borboletas coloridas.&quot;
          </p>
        </div>

        <div className="mt-5">
          <p className="font-bold">3. Simplifique quando necessário:</p>
          <p>
            • Se sua descrição for complexa, divida-a em partes ou forneça
            instruções claras para obter resultados mais precisos.
          </p>
          <p>
            • Exemplo: &quot;Crie uma imagem minimalista de uma xícara de café
            fumegante em uma mesa de madeira.&quot;
          </p>
        </div>

        <div className="mt-5">
          <p className="font-bold">4. Explore diferentes estilos e cenários:</p>
          <p>
            • Varie suas descrições para explorar uma ampla gama de estilos
            visuais e cenários únicos.
          </p>
          <p>
            • Exemplo: &quot;Experimente criar uma representação visual de um
            sonho surreal com elementos fantásticos.&quot;
          </p>
        </div>

        <div className="mt-5">
          <p className="font-bold">5. Adapte com feedback:</p>
          <p>
            • Avalie as imagens geradas e ajuste suas descrições conforme
            necessário. Isso ajuda a refinar e aprimorar os resultados.
          </p>
          <p>
            • Exemplo: &quot;Analise a imagem e ajuste a descrição para incluir
            mais detalhes na atmosfera do cenário.&quot;
          </p>
        </div>

        <div className="mt-10">
          <p className="font-bold">Exemplos de comandos:</p>
          <p>
            1. &quot;Crie uma imagem que transmita serenidade e tranquilidade em
            um ambiente natural.&quot;
          </p>
          <p>
            2. &quot;Desenvolva uma representação visual de uma ideia abstrata,
            como o conceito de liberdade.&quot;
          </p>
          <p>
            3. &quot;Crie uma ilustração minimalista de um objeto do cotidiano
            transformado em arte.&quot;
          </p>
          <p>
            4. &quot;Descreva uma cena urbana movimentada, capturando a energia
            vibrante da cidade à noite.&quot;
          </p>
          <p>
            5. &quot;Elabore uma imagem que represente a conexão entre seres
            humanos e a natureza de forma única.&quot;
          </p>
          <p>
            6. &quot;Elabore uma imagem que capture a essência da diversidade
            cultural, incorporando elementos de várias tradições.&quot;
          </p>
          <p>
            7. &quot;Invente uma cena de ficção científica, retratando uma
            exploração interestelar com naves espaciais avançadas.&quot;
          </p>
          <p>
            8. &quot;Invente uma cena futurista de uma metrópole tecnológica,
            com arranha-céus inteligentes e veículos voadores.&quot;
          </p>
          <p>
            9. &quot;Crie uma imagem que represente a sensação de nostalgia,
            incorporando elementos vintage e tons suaves.&quot;
          </p>
          <p>
            10. &quot;Elabore uma imagem que capture a atmosfera nostálgica de
            uma cafeteria clássica, com mesas de madeira e aroma de café.&quot;
          </p>
          <p className="mt-10">
            Lembre-se de que a criatividade é a chave! Experimente, ajuste
            conforme necessário e desfrute da incrível capacidade do {APP_NAME}{" "}
            para transformar suas ideias em visuais surpreendentes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImagemClient;
