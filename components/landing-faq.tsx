"use client";

import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { APP_NAME, EMAIL_SUPPORT, MAX_FREE_COUNTS } from "@/constants";
import ButtonFreeTrial from "./button-free-trial";
import Link from "next/link";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

const LandingFaq = () => {
  return (
    <section id="faq" className="pb-10 xl:px-0 bg-zinc-100">
      <div className="mx-4 xl:mx-auto max-w-screen-xl">
        <h1
          className={cn(
            "text-4xl lg:text-5xl font-bold text-[#111827]",
            poppins.className
          )}
        >
          Perguntas frequentes
        </h1>
        <div className="flex flex-col lg:grid lg:grid-cols-12 lg:gap-8 pt-6">
          <div className="lg:col-span-6">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-[#111827] font-bold text-start">
                  O que é o {APP_NAME}?
                </AccordionTrigger>
                <AccordionContent className="text-[#111827]">
                  O {APP_NAME} aplicação de inteligência artificial que permite
                  aos usuários gerar textos, imagens, vídeos e áudios de maneira
                  fácil e eficiente utilizando um chatbot.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-[#111827] font-bold text-start">
                  Quais são os planos disponíveis?
                </AccordionTrigger>
                <AccordionContent className="text-[#111827]">
                  Oferecemos dois planos: o gratuito e o PRO. No plano gratuito,
                  os usuários podem gerar até {MAX_FREE_COUNTS} itens. Além
                  disso, as imagens possuem uma limitação de qualidade. No plano
                  PRO, não há limites na quantidade de itens gerados, e as
                  imagens podem ser geradas em HD. Além disso, no plano PRO, as
                  imagens geradas também podem ser animadas, proporcionando uma
                  experiência ainda mais rica e dinâmica.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-[#111827] font-bold text-start">
                  Preciso cadastrar o meu cartão de crédito no plano gratuito?
                </AccordionTrigger>
                <AccordionContent className="text-[#111827]">
                  Não, você não precisa cadastrar o seu cartão de crédito para
                  utilizar o plano gratuito.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-[#111827] font-bold text-start">
                  Como funciona a assinatura PRO?
                </AccordionTrigger>
                <AccordionContent className="text-[#111827]">
                  A assinatura PRO é um plano mensal que oferece benefícios
                  premium, incluindo a capacidade ilimitada de gerar itens, a
                  geração de imagens em qualidade HD e a opção de animar as
                  imagens geradas. A mensalidade é automaticamente descontada no
                  cartão de crédito do usuário.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-[#111827] font-bold text-start">
                  É possível transferir minha assinatura PRO para outra conta?
                </AccordionTrigger>
                <AccordionContent className="text-[#111827]">
                  No momento, as assinaturas PRO são vinculadas à conta
                  específica e não podem ser transferidas.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-[#111827] font-bold text-start">
                  Como faço para atualizar minhas informações de pagamento no
                  plano PRO?
                </AccordionTrigger>
                <AccordionContent className="text-[#111827]">
                  Você pode atualizar suas informações de pagamento na seção de
                  configurações da aplicação.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="lg:col-span-6">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-[#111827] font-bold text-start">
                  Posso cancelar minha assinatura PRO a qualquer momento?
                </AccordionTrigger>
                <AccordionContent className="text-[#111827]">
                  Sim, os usuários podem cancelar a assinatura PRO a qualquer
                  momento. O acesso aos benefícios do plano PRO continuará até o
                  final do período de cobrança mensal.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-[#111827] font-bold text-start">
                  Há algum período de teste gratuito para o plano PRO?
                </AccordionTrigger>
                <AccordionContent className="text-[#111827]">
                  No momento, não oferecemos um período de teste gratuito para o
                  plano PRO. No entanto, você pode começar a usar a aplicação
                  gratuitamente e, se desejar, atualizar para o plano PRO a
                  qualquer momento.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-[#111827] font-bold text-start">
                  Quais tipos de conteúdo posso gerar com o {APP_NAME}?
                </AccordionTrigger>
                <AccordionContent className="text-[#111827]">
                  O {APP_NAME} permite gerar textos, imagens, vídeos e áudios,
                  proporcionando uma ampla variedade de opções de conteúdo.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-[#111827] font-bold text-start">
                  Como garantir a segurança dos dados do meu cartão de crédito?
                </AccordionTrigger>
                <AccordionContent className="text-[#111827]">
                  Priorizamos a segurança dos dados.{" "}
                  <span className="font-bold">
                    Não armazenamos nenhuma informação referente ao pagamento,
                    pois toda a transação é realizada pela Stripe, uma
                    plataforma segura e confiável.
                  </span>{" "}
                  Se tiver alguma preocupação, entre em contato com nossa equipe
                  de suporte.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-[#111827] font-bold text-start">
                  Posso solicitar o reembolso da minha assinatura PRO?
                </AccordionTrigger>
                <AccordionContent className="text-[#111827]">
                  <p>
                    Se você é um novo assinante, pode solicitar um reembolso
                    total somente durante o primeiro mês de assinatura,{" "}
                    <span className="font-bold">
                      desde que solicite o cancelamento dentro de sete dias após
                      a compra.
                    </span>{" "}
                    Nos meses seguintes, não será possível solicitar reembolso.
                  </p>
                  <p className="mt-5">
                    Para solicitar um reembolso, envie um e-mail para{" "}
                    <span
                      className="cursor-pointer underline transition"
                      onClick={() =>
                        (window.location.href = `mailto:${EMAIL_SUPPORT}`)
                      }
                    >
                      {EMAIL_SUPPORT}
                    </span>{" "}
                    e iremos responder em até 2 dias úteis.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-[#111827] font-bold text-start">
                  Existe suporte ao cliente disponível?
                </AccordionTrigger>
                <AccordionContent className="text-[#111827]">
                  <p>
                    Sim, oferecemos suporte ao cliente para ajudar com qualquer
                    dúvida ou problema. Se tiver alguma dúvida ou precisar de
                    ajuda, é só clicar no ícone de suporte no canto inferior
                    direito da tela ou envie um e-mail para{" "}
                    <span
                      className="cursor-pointer underline transition"
                      onClick={() =>
                        (window.location.href = `mailto:${EMAIL_SUPPORT}`)
                      }
                    >
                      {EMAIL_SUPPORT}
                    </span>
                    .
                  </p>
                  <p className="mt-5">
                    Recomendamos também que consulte nosso{" "}
                    <Link
                      href="/guia"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <span className="text-[#111827] underline-offset-4 underline">
                        guia
                      </span>
                    </Link>{" "}
                    sempre que surgir uma dúvida.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
        <div className="w-max text-center pt-8 mx-auto">
          <ButtonFreeTrial whiteMode />
          <p className="text-[#111827] text-xs md:text-sm font-normal pt-5">
            Não é necessário cartão de crédito.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LandingFaq;
