import { cn, formatPrice } from "@/lib/utils";
import { Poppins } from "next/font/google";
import React from "react";
import { Badge } from "./ui/badge";
import { Check, X } from "lucide-react";
import ButtonFreeTrial from "./button-free-trial";
import { MAX_FREE_COUNTS, PRICE_MONTHLY_NOSTRIPE } from "@/constants";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

const LandingPlans = () => {
  return (
    <article id="planos" className="py-10">
      <div className="mx-4 xl:mx-auto max-w-screen-xl">
        <h1
          className={cn(
            "text-4xl lg:text-5xl font-bold text-white",
            poppins.className
          )}
        >
          Planos
        </h1>
        <div className="grid grid-cols-12 gap-8 pt-6">
          <div className="col-span-12 lg:col-span-6">
            <div className="w-full rounded-lg border-4 py-4 lg:p-8 h-full">
              <div className="text-center">
                <Badge
                  variant="transparent"
                  className={cn(
                    "text-3xl font-semibold text-center text-white",
                    poppins.className
                  )}
                >
                  Gratuito
                </Badge>
              </div>
              <ul className="p-6">
                <li>
                  <div className="flex justify-between items-center text-white">
                    <p>Limite de geração de {MAX_FREE_COUNTS} itens</p>
                    <span className="bg-white rounded-lg p-1">
                      <Check
                        className="w-5 h-5 text-emerald-600"
                        strokeWidth={3}
                      />
                    </span>
                  </div>
                  <hr className="text-white my-4" />
                </li>
                <li>
                  <div className="flex justify-between items-center text-white">
                    <p>Chatbot</p>
                    <span className="bg-white rounded-lg p-1">
                      <Check
                        className="w-5 h-5 text-emerald-600"
                        strokeWidth={3}
                      />
                    </span>
                  </div>
                  <hr className="text-white my-4" />
                </li>
                <li>
                  <div className="flex justify-between items-center text-white">
                    <p>Gerador de imagens</p>
                    <span className="bg-white rounded-lg p-1">
                      <Check
                        className="w-5 h-5 text-emerald-600"
                        strokeWidth={3}
                      />
                    </span>
                  </div>
                  <hr className="text-white my-4" />
                </li>
                <li>
                  <div className="flex justify-between items-center text-white">
                    <p>Gerador de vídeos</p>
                    <span className="bg-white rounded-lg p-1">
                      <Check
                        className="w-5 h-5 text-emerald-600"
                        strokeWidth={3}
                      />
                    </span>
                  </div>
                  <hr className="text-white my-4" />
                </li>
                <li>
                  <div className="flex justify-between items-center text-white">
                    <p>Gerador de áudios</p>
                    <span className="bg-white rounded-lg p-1">
                      <Check
                        className="w-5 h-5 text-emerald-600"
                        strokeWidth={3}
                      />
                    </span>
                  </div>
                  <hr className="text-white my-4" />
                </li>
                <li>
                  <div className="flex justify-between items-center text-white">
                    <p>Gerar imagens na qualidade padrão</p>
                    <span className="bg-white rounded-lg p-1">
                      <Check
                        className="w-5 h-5 text-emerald-600"
                        strokeWidth={3}
                      />
                    </span>
                  </div>
                  <hr className="text-white my-4" />
                </li>
                <li>
                  <div className="flex justify-between items-center text-white">
                    <p>Gerar imagens com resolução 1024x1024</p>
                    <span className="bg-white rounded-lg p-1">
                      <Check
                        className="w-5 h-5 text-emerald-600"
                        strokeWidth={3}
                      />
                    </span>
                  </div>
                  <hr className="text-white my-4" />
                </li>
                <li>
                  <div className="flex justify-between items-center text-white">
                    <p>Animar imagem gerada</p>
                    <span className="bg-white rounded-lg p-1">
                      <X className="w-5 h-5 text-red-600" strokeWidth={3} />
                    </span>
                  </div>
                  <hr className="text-white my-4" />
                </li>
                <li>
                  <div className="flex justify-between items-center text-white">
                    <p>Gerar imagens na qualidade HD</p>
                    <span className="bg-white rounded-lg p-1">
                      <X className="w-5 h-5 text-red-600" strokeWidth={3} />
                    </span>
                  </div>
                  <hr className="text-white my-4" />
                </li>
                <li>
                  <div className="flex justify-between items-center text-white">
                    <p>Gerar imagens com resolução 1024x1792</p>
                    <span className="bg-white rounded-lg p-1">
                      <X className="w-5 h-5 text-red-600" strokeWidth={3} />
                    </span>
                  </div>
                  <hr className="text-white my-4" />
                </li>
                <li>
                  <div className="flex justify-between items-center text-white">
                    <p>Gerar imagens com resolução 1792x1024</p>
                    <span className="bg-white rounded-lg p-1">
                      <X className="w-5 h-5 text-red-600" strokeWidth={3} />
                    </span>
                  </div>
                  <hr className="text-white my-4" />
                </li>
              </ul>
              <p
                className={cn(
                  `text-center text-2xl lg:text-3xl font-bold text-white uppercase`,
                  poppins.className
                )}
              >
                GRÁTIS
              </p>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-6">
            <div className="w-full rounded-lg border-4 border-purple-500 py-4 lg:p-8 h-full">
              <div className="text-center">
                <Badge
                  variant="premium"
                  className={cn(
                    "uppercase text-3xl font-semibold text-white text-center",
                    poppins.className
                  )}
                >
                  PRO
                </Badge>
              </div>
              <ul className="p-6">
                <li>
                  <div className="flex justify-between items-center text-white">
                    <p>Sem limite de geração de itens</p>
                    <span className="bg-white rounded-lg p-1">
                      <Check
                        className="w-5 h-5 text-emerald-600"
                        strokeWidth={3}
                      />
                    </span>
                  </div>
                  <hr className="text-white my-4" />
                </li>
                <li>
                  <div className="flex justify-between items-center text-white">
                    <p>Chatbot</p>
                    <span className="bg-white rounded-lg p-1">
                      <Check
                        className="w-5 h-5 text-emerald-600"
                        strokeWidth={3}
                      />
                    </span>
                  </div>
                  <hr className="text-white my-4" />
                </li>
                <li>
                  <div className="flex justify-between items-center text-white">
                    <p>Gerador de imagens</p>
                    <span className="bg-white rounded-lg p-1">
                      <Check
                        className="w-5 h-5 text-emerald-600"
                        strokeWidth={3}
                      />
                    </span>
                  </div>
                  <hr className="text-white my-4" />
                </li>
                <li>
                  <div className="flex justify-between items-center text-white">
                    <p>Gerador de vídeos</p>
                    <span className="bg-white rounded-lg p-1">
                      <Check
                        className="w-5 h-5 text-emerald-600"
                        strokeWidth={3}
                      />
                    </span>
                  </div>
                  <hr className="text-white my-4" />
                </li>
                <li>
                  <div className="flex justify-between items-center text-white">
                    <p>Gerador de áudios</p>
                    <span className="bg-white rounded-lg p-1">
                      <Check
                        className="w-5 h-5 text-emerald-600"
                        strokeWidth={3}
                      />
                    </span>
                  </div>
                  <hr className="text-white my-4" />
                </li>
                <li>
                  <div className="flex justify-between items-center text-white">
                    <p>Gerar imagens na qualidade padrão</p>
                    <span className="bg-white rounded-lg p-1">
                      <Check
                        className="w-5 h-5 text-emerald-600"
                        strokeWidth={3}
                      />
                    </span>
                  </div>
                  <hr className="text-white my-4" />
                </li>
                <li>
                  <div className="flex justify-between items-center text-white">
                    <p>Gerar imagens com resolução 1024x1024</p>
                    <span className="bg-white rounded-lg p-1">
                      <Check
                        className="w-5 h-5 text-emerald-600"
                        strokeWidth={3}
                      />
                    </span>
                  </div>
                  <hr className="text-white my-4" />
                </li>
                <li>
                  <div className="flex justify-between items-center text-white">
                    <p>Animar imagem gerada</p>
                    <span className="bg-white rounded-lg p-1">
                      <Check
                        className="w-5 h-5 text-emerald-600"
                        strokeWidth={3}
                      />
                    </span>
                  </div>
                  <hr className="text-white my-4" />
                </li>
                <li>
                  <div className="flex justify-between items-center text-white">
                    <p>Gerar imagens na qualidade HD</p>
                    <span className="bg-white rounded-lg p-1">
                      <Check
                        className="w-5 h-5 text-emerald-600"
                        strokeWidth={3}
                      />
                    </span>
                  </div>
                  <hr className="text-white my-4" />
                </li>
                <li>
                  <div className="flex justify-between items-center text-white">
                    <p>Gerar imagens com resolução 1024x1792</p>
                    <span className="bg-white rounded-lg p-1">
                      <Check
                        className="w-5 h-5 text-emerald-600"
                        strokeWidth={3}
                      />
                    </span>
                  </div>
                  <hr className="text-white my-4" />
                </li>
                <li>
                  <div className="flex justify-between items-center text-white">
                    <p>Gerar imagens com resolução 1792x1024</p>
                    <span className="bg-white rounded-lg p-1">
                      <Check
                        className="w-5 h-5 text-emerald-600"
                        strokeWidth={3}
                      />
                    </span>
                  </div>
                  <hr className="text-white my-4" />
                </li>
              </ul>
              <p
                className={cn(
                  `text-center text-2xl lg:text-3xl font-bold text-white`,
                  poppins.className
                )}
              >
                {formatPrice(PRICE_MONTHLY_NOSTRIPE)} / mês
              </p>
            </div>
          </div>
        </div>
        <div className="w-max text-center pt-8 mx-auto">
          <ButtonFreeTrial />
          <p className="text-zinc-400 text-xs md:text-sm font-normal pt-5">
            Não é necessário cartão de crédito.
          </p>
        </div>
      </div>
    </article>
  );
};

export default LandingPlans;
