"use client";

import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import Image from "next/image";
import React from "react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

const LandingSatisfaction = () => {
  return (
    <section id="satisfaction" className="pt-10 lg:py-10 bg-zinc-100">
      <div className="mx-4 xl:mx-auto max-w-screen-xl">
        <h1
          className={cn(
            "text-4xl lg:text-5xl font-bold text-[#111827]",
            poppins.className
          )}
        >
          Satisfação garantida ou seu dinheiro de volta!
        </h1>
        <div className="mt-10 grid grid-cols-12 items-center lg:gap-24">
          <div className="col-span-12 lg:col-span-3">
            <div
              className="aspect-square
          w-max
          relative
          overflow-hidden
          h-auto
          z-10
          lg:left-0
          mx-auto
          lg:mx-0"
            >
              <Image
                src="/garantia.png"
                alt="Inteligência Artificial"
                width={288}
                height={162}
                className="object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <div className="col-span-12 lg:col-span-9 mb-16">
            <p className="font-bold pb-5 text-lg">
              Temos total confiança em nossa solução!
            </p>
            <p>
              Então, se, por algum motivo, nos primeiros 7 dias da sua
              assinatura você não ficar satisfeito, pode ficar tranquilo:{" "}
              <span className="font-bold">
                devolveremos todo o seu dinheiro.
              </span>{" "}
              Queremos garantir que sua experiência conosco seja a melhor
              possível, e estamos aqui para resolver qualquer questão que possa
              surgir. Sua satisfação é a nossa prioridade número um.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingSatisfaction;
