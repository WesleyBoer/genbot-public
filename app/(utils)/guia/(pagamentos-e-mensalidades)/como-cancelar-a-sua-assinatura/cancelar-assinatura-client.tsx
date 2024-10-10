"use client";

import { APP_NAME, EMAIL_SUPPORT } from "@/constants";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import Link from "next/link";
import React from "react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

const CancelarAssinaturaClient = () => {
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
          <Link href="/guia" rel="noopener noreferrer" target="_blank">
            <span className="text-primary underline-offset-4 hover:underline">
              Suporte
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
          Como cancelar a sua assinatura
        </h1>
      </div>
      <div className="mt-8">
        <p>
          Estamos aqui para tornar o processo o mais simples e transparente
          possível. Abaixo, você encontrará um passo a passo detalhado sobre
          como cancelar sua assinatura, juntamente com informações importantes
          sobre reembolsos e prazos.
        </p>

        <div className="mt-5">
          <p className="font-bold">Passo a passo:</p>
          <p className="font-bold mt-5">
            1. Acesse as configurações do seu perfil:
          </p>
          <p>
            Quando estiver logado no {APP_NAME}, vá para a aba de{" "}
            <Link href="/settings" rel="noopener noreferrer" target="_blank">
              <span className="text-primary underline-offset-4 hover:underline">
                configurações do seu perfil.
              </span>
            </Link>
          </p>
        </div>

        <div className="mt-5">
          <p className="font-bold">2. Localize o seu plano atual:</p>
          <p>
            Na seção de configurações do perfil, você encontrará informações
            sobre o seu plano atual. Se você estiver em um plano PRO, verá um
            item chamado &quot;Gerencie seu plano&quot;.
          </p>
        </div>

        <div className="mt-5">
          <p className="font-bold">3. Gerencie seu plano:</p>
          <p>
            Ao clicar em &quot;Gerencie seu plano&quot;, você será redirecionado
            para a página de assinatura da Stripe, nossa intermediadora de
            pagamentos.
          </p>
        </div>

        <div className="mt-5">
          <p className="font-bold">4. Cancelamento da assinatura:</p>
          <p>
            Na página da Stripe, você poderá visualizar suas informações de
            pagamento. Lá, estará disponível um botão para cancelar sua
            assinatura. Clique neste botão para prosseguir com o cancelamento.
          </p>
        </div>

        <div className="mt-10">
          <p className="font-bold">Informações importantes:</p>
          <p className="mt-5">
            • O cancelamento será efetivo no próximo ciclo de cobrança. O acesso
            ao Serviço permanecerá disponível até o final do período de
            assinatura pago.
          </p>
          <p>
            • Se você é um novo assinante, pode solicitar um reembolso total
            somente durante o primeiro mês de assinatura,{" "}
            <span className="font-bold">
              desde que solicite o cancelamento dentro de sete dias após a
              compra.
            </span>{" "}
            Nos meses seguintes, não será possível solicitar reembolso. Para
            solicitar um reembolso, envie um e-mail para{" "}
            <span
              className="cursor-pointer underline transition"
              onClick={() => (window.location.href = `mailto:${EMAIL_SUPPORT}`)}
            >
              {EMAIL_SUPPORT}
            </span>{" "}
            e iremos responder em até 2 dias úteis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CancelarAssinaturaClient;
