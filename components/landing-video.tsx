"use client";

import { APP_NAME } from "@/constants";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import React, { useEffect, useState } from "react";

import ReactPlayer from "react-player";
import ButtonFreeTrial from "./button-free-trial";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

const LandingVideo = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <article id="planos" className="pt-10 bg-zinc-100">
      <div className="mx-4 xl:mx-auto max-w-screen-xl">
        <h1
          className={cn(
            "text-4xl lg:text-5xl font-bold text-[#111827] pb-6",
            poppins.className
          )}
        >
          Veja como é fácil utilizar o {APP_NAME}
        </h1>
        <div className="player-wrapper h-[250px] sm:h-[366px] md:h-[520px] lg:h-[725px] border-4 border-[#111827] rounded-md">
          <ReactPlayer
            url="https://youtu.be/AeuSLyFLt-k"
            controls={true}
            className="react-player"
            width="100%"
            height="100%"
          />
        </div>
        <div className="w-max text-center pt-8 mx-auto">
          <ButtonFreeTrial whiteMode />
          <p className="text-[#111827] text-xs md:text-sm font-normal pt-5">
            Não é necessário cartão de crédito.
          </p>
        </div>
      </div>
    </article>
  );
};

export default LandingVideo;
