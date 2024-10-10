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

const AudioClient = () => {
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
          Gerador de áudio
        </h1>
      </div>
      <div className="mt-8">
        <p>
          Para aproveitar ao máximo o gerador de áudio, é crucial dominar a arte
          de criar comandos eficazes. O comando é a chave para desbloquear a
          criatividade do {APP_NAME}, garantindo a geração de um áudio curto e
          envolvente. Aqui estão algumas dicas essenciais para otimizar seus
          comandos:
        </p>

        <div className="mt-5">
          <p className="font-bold">
            1. Descreva o estilo musical e ambiente em poucas palavras:
          </p>
          <p>
            • Em seu comando único, seja conciso e específico sobre o estilo
            musical desejado e o ambiente sonoro. Menos é mais!
          </p>
          <p>
            • Exemplo: &quot;Crie um breve áudio alegre com piano e batida
            animada.&quot;
          </p>
        </div>

        <div className="mt-5">
          <p className="font-bold">2. Explore ritmos simples e envolventes:</p>
          <p>
            • Varie seus comandos com ritmos simples e envolventes. Explore
            diferentes estilos musicais de forma sucinta.
          </p>
          <p>
            • Exemplo: &quot;Tente gerar um ritmo de bossa nova relaxante com
            guitarras acústicas.&quot;
          </p>
        </div>

        <div className="mt-5">
          <p className="font-bold">
            3. Explore variações em composições curtas:
          </p>
          <p>
            • Utilize cada comando para criar composições curtas e distintas.
            Descreva a atmosfera desejada em algumas palavras.
          </p>
          <p>
            • Exemplo: &quot;Crie um breve áudio misterioso com violinos e sons
            de fundo sutis.&quot;
          </p>
        </div>

        <div className="mt-5">
          <p className="font-bold">
            4. Adicione um Toque Inovador ou Surpreendente:
          </p>
          <p>
            • Experimente adicionar elementos inovadores ou distintivos para
            criar áudios memoráveis, mesmo em sua brevidade.
          </p>
          <p>
            • Exemplo: &quot;Inclua um elemento surpreendente, como um efeito
            sonoro peculiar, para dar um toque inusitado à sua melodia
            curta.&quot;
          </p>
        </div>

        <div className="mt-10">
          <p className="font-bold">Exemplos de comandos:</p>
          <p>
            1. &quot;Desenvolva um áudio curto e suave, perfeito para encerrar
            um vídeo, com piano e tons relaxantes.&quot;
          </p>
          <p>
            2. &quot;Crie um áudio relaxante para meditação, com destaque para
            sons de água corrente e instrumentos tranquilos.&quot;
          </p>
          <p>
            3. &quot;Desenvolva um áudio curto que transmita uma sensação de
            suspense, com efeitos sonoros e uma trilha misteriosa.&quot;
          </p>
          <p>
            4. &quot;Elabore uma composição moderna com influências de indie
            pop, incorporando guitarras melódicas e vocais suaves.&quot;
          </p>
          <p>
            5. &quot;Invente uma trilha sonora inspirada em música clássica, com
            uma composição orquestral emotiva.&quot;
          </p>
          <p className="mt-10">
            Lembre-se, a simplicidade é a chave para esses áudios curtos.
            Aproveite cada comando como uma oportunidade única para explorar
            breves melodias e adicione um toque especial ao seu conteúdo!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AudioClient;
