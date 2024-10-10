"use client";

import {
  APP_NAME,
  EMAIL_SUPPORT,
  MAX_FREE_COUNTS,
  PRICE_MONTHLY_NOSTRIPE,
} from "@/constants";
import { cn, formatPrice } from "@/lib/utils";
import { Poppins } from "next/font/google";
import React from "react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

const TermosClient = () => {
  return (
    <div>
      <h1
        className={cn(
          "text-4xl lg:text-5xl font-bold text-center text-[#111827]",
          poppins.className
        )}
      >
        Termos de uso
      </h1>
      <div className="mt-8">
        <p>
          Estes Termos regem o uso da plataforma {APP_NAME}{" "}
          (&quot;Serviço&quot;). Ao utilizar o Serviço, você
          (&quot;Usuário&quot;) concorda com estes Termos.
        </p>
        <div className="mt-5">
          <p className="font-bold">1. Cadastro e versão de teste gratuito:</p>
          <p>
            1.1 Ao se cadastrar no {APP_NAME}, você terá acesso a uma versão de
            teste gratuito que permite a geração de até {MAX_FREE_COUNTS} itens,
            incluindo perguntas ao chatbot, imagens, vídeos e áudios. Nesta
            versão, há uma limitação na qualidade e resolução das imagens, onde
            você poderá gerar imagens na qualidade padrão e de 1024x1024 pixels.
            Nesta versão de teste gratuito, não é possível animar as imagens
            geradas dentro da plataforma.
          </p>
        </div>

        <div className="mt-5">
          <p className="font-bold">2. Assinatura e limites de uso:</p>
          <p>
            2.1 Ao exceder o limite de {MAX_FREE_COUNTS} itens na versão de
            teste gratuito, o usuário poderá realizar uma assinatura mensal no
            valor de {formatPrice(PRICE_MONTHLY_NOSTRIPE)} para continuar
            gerando conteúdo dentro da plataforma.
          </p>
          <p>
            2.2 A assinatura será automaticamente cobrada no cartão de crédito
            fornecido durante o processo de assinatura.
          </p>
          <p>
            2.3 A assinatura concede o direito de gerar itens ilimitados durante
            o período de assinatura, bem como a capacidade de animar as imagens
            geradas dentro da plataforma.
          </p>
        </div>

        <div className="mt-5">
          <p className="font-bold">3. Cancelamento e Reembolso:</p>
          <p>
            3.1 Você pode cancelar a assinatura a qualquer momento dentro das
            configurações do seu perfil. O cancelamento será efetivo no próximo
            ciclo de cobrança, e o acesso ao Serviço permanecerá disponível até
            o final do período de assinatura pago.
          </p>
          <p>
            3.2 Se você é um novo assinante, pode solicitar um reembolso total
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

        <div className="mt-5">
          <p className="font-bold">4. Responsabilidades do Usuário:</p>
          <p>
            4.1 É sua responsabilidade manter suas informações de cadastro
            atualizadas.
          </p>
          <p>
            4.2 Você concorda em utilizar o Serviço de acordo com todas as leis
            e regulamentações aplicáveis.
          </p>
        </div>

        <div className="mt-5">
          <p className="font-bold">5. Alterações nos Termos:</p>
          <p>
            5.1 Reservamos o direito de alterar estes Termos, notificando você
            por meio do Serviço ou outros meios adequados.
          </p>
          <p>
            5.2 O uso contínuo do Serviço após as alterações constitui aceitação
            dos Termos revisados.
          </p>
        </div>

        <div className="mt-5">
          <p className="font-bold">6. Limitação de Responsabilidade:</p>
          <p>
            6.1 Não nos responsabilizamos por danos decorrentes do uso ou
            incapacidade de uso do Serviço.
          </p>
        </div>

        <div className="mt-5">
          <p className="font-bold">7. Disposições Gerais:</p>
          <p>
            7.1 Estes Termos representam o acordo integral entre você e o{" "}
            {APP_NAME}, substituindo quaisquer acordos anteriores.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermosClient;
