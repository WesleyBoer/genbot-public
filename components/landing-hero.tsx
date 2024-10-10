"use client";

import { APP_NAME } from "@/constants";
import React from "react";
const TypewriterComponent = React.lazy(() => import("typewriter-effect"));
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { useSession } from "next-auth/react";
import ButtonFreeTrial from "./button-free-trial";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

const LandingHero = () => {
  const session = useSession();
  const isLogged = session.data?.user;
  return (
    <div className="text-white font-bold pt-36 text-center space-y-5 mx-4 xl:mx-0">
      <div
        className={cn(
          "text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-0 lg:space-y-5 font-extrabold",
          font.className
        )}
      >
        <h1>A melhor inteligência artificial para</h1>
        <React.Suspense fallback={null}>
          <div className="pb-2.5 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            <TypewriterComponent
              options={{
                strings: [
                  "chatbot.",
                  "gerar imagens.",
                  "gerar animações.",
                  "gerar vídeos.",
                  "gerar áudios.",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </React.Suspense>
      </div>
      <div className="text-sm md:text-xl font-light text-zinc-400">
        Crie conteúdos 10x mais rápido utilizando o {APP_NAME}.
      </div>
      <ButtonFreeTrial />
      <div className="text-zinc-400 text-xs md:text-sm font-normal">
        Não é necessário cartão de crédito.
      </div>
    </div>
  );
};

export default LandingHero;
