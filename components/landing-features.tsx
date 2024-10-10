import { APP_NAME } from "@/constants";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import Image from "next/image";
import React from "react";

import { ImageIcon, MessageSquare, MusicIcon, VideoIcon } from "lucide-react";
import ButtonFreeTrial from "./button-free-trial";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

const LandingFeatures = () => {
  return (
    <article
      id="funcionalidades"
      className="grid grid-cols-12 lg:gap-24 pt-20 pb-10 lg:pt-32 mx-4 xl:mx-auto max-w-screen-xl"
    >
      <div className="col-span-12 lg:col-span-6 text-white">
        <div className="flex flex-col gap-6">
          <h1
            className={cn("text-4xl lg:text-5xl font-bold", poppins.className)}
          >
            Funcionalidades
          </h1>
          <p>
            O {APP_NAME} é uma ferramenta de inteligência artificial que gera
            textos, imagens, animações, vídeos e áudios de forma rápida e
            prática, permitindo que você se concentre no que realmente importa:{" "}
            <span className="font-bold">vender!</span>
          </p>
          <div className="my-4">
            <ul className="grid grid-cols-2 md:flex md:flex-row md:justify-between gap-4 py-2">
              <li className="flex flex-col items-center gap-2 group">
                <div className="transform transition-transform group-hover:scale-110">
                  <MessageSquare size="30" />
                </div>
                <p className="text-sm">Chatbot</p>
              </li>
              <li className="flex flex-col items-center gap-2 group">
                <div className="transform transition-transform group-hover:scale-110">
                  <ImageIcon size="30" />
                </div>
                <p className="text-sm">Gerador de imagens</p>
              </li>
              <li className="flex flex-col items-center gap-2 group">
                <div className="transform transition-transform group-hover:scale-110">
                  <VideoIcon size="30" />
                </div>
                <p className="text-sm">Gerador de vídeos</p>
              </li>
              <li className="flex flex-col items-center gap-2 group">
                <div className="transform transition-transform group-hover:scale-110">
                  <MusicIcon size="30" />
                </div>
                <p className="text-sm">Gerador de áudios</p>
              </li>
            </ul>
          </div>
          <div className="w-max text-center mx-auto lg:mx-0">
            <ButtonFreeTrial />
            <p className="text-zinc-400 text-xs md:text-sm font-normal pt-5">
              Não é necessário cartão de crédito.
            </p>
          </div>
        </div>
      </div>
      <div className="hidden lg:block col-span-6">
        <div
          className="aspect-square
          w-max
          relative
          overflow-hidden
          h-auto
          z-10
          bottom-24
          left-8
          floating-image"
        >
          <Image
            src="/IA.svg"
            alt="Inteligência Artificial"
            width={480}
            height={270}
            className="object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </article>
  );
};

export default LandingFeatures;
