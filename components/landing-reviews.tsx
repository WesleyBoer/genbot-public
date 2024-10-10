"use client";

import { APP_NAME } from "@/constants";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import React, { useEffect, useState } from "react";
import { VscCircleFilled } from "react-icons/vsc";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

const reviews = [
  {
    text: `Eu tinha muita dificuldade para gerar boas copys para minhas postagens e o ${APP_NAME} resolveu o meu problema!`,
    author: "Fernando N.",
  },
  {
    text: `O ${APP_NAME} me ajuda a economizar tempo pensando em conteúdos para as redes sociais e posso focar mais nas minhas vendas.`,
    author: "Leonardo S.",
  },
  {
    text: "A ferramenta é sensacional! Gastava muito tempo elaborando conteúdos e não focava nos meus clientes. Vale cada centavo!",
    author: "Isabella B.",
  },
];

const LandingReviews = () => {
  const [currentReview, setCurrentReview] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prevReview) => (prevReview + 1) % reviews.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="depoimentos" className="py-10 bg-zinc-100">
      <div className="mx-4 xl:mx-auto max-w-screen-xl">
        <h1
          className={cn(
            "text-4xl lg:text-5xl font-bold text-[#111827]",
            poppins.className
          )}
        >
          Depoimentos dos nossos usuários
        </h1>
        <div className="flex flex-col gap-4 text-[#111827] mt-4">
          <div className="lg:flex lg:flex-row lg:justify-between lg:gap-20 mt-4">
            {reviews.map((review, index) => (
              <div
                key={index}
                className={`w-full lg:w-2/6 relative ${
                  currentReview === index ? "block" : "hidden"
                } lg:block`}
              >
                <blockquote>
                  <p className="sm:px-2 lg:px-0 h-24 lg:h-auto">
                    “{review.text}”
                  </p>
                </blockquote>
                <p className="text-center -mt-2 lg:mt-4 font-bold">
                  {review.author}
                </p>
              </div>
            ))}
          </div>
          <div className="lg:hidden flex flex-row gap-2 justify-center">
            {reviews.map((_, index) => (
              <span
                key={index}
                className={`${
                  currentReview === index ? "text-base-9" : "text-base-4"
                }`}
                aria-label={`Depoimento ${index + 1}`}
              >
                <VscCircleFilled size={10} />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingReviews;
