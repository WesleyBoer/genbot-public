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

const VideoClient = () => {
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
          Gerador de vídeo
        </h1>
      </div>
      <div className="mt-8">
        <p>
          Para aproveitar ao máximo o gerador de vídeo, é crucial dominar a arte
          de criar comandos eficazes. O comando é a chave para desbloquear a
          criatividade do {APP_NAME}, garantindo a geração de um vídeo curto e
          dinâmico. Aqui estão algumas dicas essenciais para otimizar seus
          comandos:
        </p>

        <div className="mt-5">
          <p className="font-bold">
            1. Descreva cenários e estilo visual em poucas palavras:
          </p>
          <p>
            • Seja claro e conciso ao descrever o que você quer ver no vídeo.
            Pense no ambiente, nas cores e no estilo visual desejado.
          </p>
          <p>
            • Exemplo: &quot;Crie um vídeo animado com paisagens urbanas
            coloridas e um toque moderno.&quot;
          </p>
        </div>

        <div className="mt-5">
          <p className="font-bold">
            2. Experimente com transições e efeitos visuais:
          </p>
          <p>
            • Varie seus comandos para explorar diferentes transições e efeitos
            visuais. Cada prompt é uma oportunidade única para experimentação.
          </p>
          <p>
            • Exemplo: &quot;Tente gerar um vídeo com transições suaves e
            efeitos de distorção para dar um ar intrigante.&quot;
          </p>
        </div>

        <div className="mt-5">
          <p className="font-bold">
            3. Explore narrativas visuais em breves sequências:
          </p>
          <p>
            • Utilize cada comando para criar breves sequências visuais.
            Descreva a atmosfera desejada e os elementos-chave da cena.
          </p>
          <p>
            • Exemplo: &quot;Gere um vídeo que conte uma história visual sobre a
            descoberta de um lugar mágico.&quot;
          </p>
        </div>

        <div className="mt-5">
          <p className="font-bold">
            4. Adicione um toque inovador ou surpreendente:
          </p>
          <p>
            • Experimente adicionar elementos inovadores ou distintivos para
            criar vídeos memoráveis. Explore a diversidade visual com cada
            comando.
          </p>
          <p>
            • Exemplo: &quot;Inclua um elemento surpreendente, como uma
            transição inesperada, para dar um toque inusitado ao vídeo.&quot;
          </p>
        </div>

        <div className="mt-10">
          <p className="font-bold">Exemplos de comandos:</p>
          <p>1. &quot;Crie um vídeo de um pássaro voando pelo céu.&quot;</p>
          <p>
            2. &quot;Crie um vídeo curto de uma borboleta pousando em uma
            flor.&quot;
          </p>
          <p>
            3. &quot;Invente uma cena de uma baleia nadando profundamente no
            oceano.&quot;
          </p>
          <p>
            4. &quot;Elabore um vídeo de um balão colorido subindo no ar.&quot;
          </p>
          <p>
            5. &quot;Invente uma cena de uma lua crescente iluminando uma noite
            estrelada.&quot;
          </p>
          <p className="mt-10">
            Lembre-se, cada comando oferece uma oportunidade única para explorar
            novos horizontes visuais com o {APP_NAME}. Divirta-se experimentando
            e descobrindo as maravilhas do mundo dos vídeos com a singularidade
            de cada comando!
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoClient;
