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

const ChatbotClient = () => {
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
          Chatbot
        </h1>
      </div>
      <div className="mt-8">
        <p>
          Para aproveitar ao máximo o chatbot, é crucial dominar a arte de criar
          comandos eficazes. O comando é a chave para desbloquear a criatividade
          do {APP_NAME}, garantindo respostas úteis e envolventes. Aqui estão
          algumas dicas essenciais para otimizar seus comandos:
        </p>

        <div className="mt-5">
          <p className="font-bold">1. Seja claro e direto:</p>
          <p>• Evite confusões. Seja específico sobre o que deseja.</p>
          <p>
            • Exemplo: &quot;Descreva um novo produto de tecnologia de maneira
            envolvente.&quot;
          </p>
        </div>

        <div className="mt-5">
          <p className="font-bold">2. Fornecer contexto é fundamental:</p>
          <p>
            • Ajude o {APP_NAME} a entender melhor fornecendo informações
            relevantes.
          </p>
          <p>
            • Exemplo: &quot;Como um crítico de cinema, escreva uma crítica
            positiva para um filme de ficção científica recente.&quot;
          </p>
        </div>

        <div className="mt-5">
          <p className="font-bold">3. Experimente com instruções detalhadas:</p>
          <p>
            • Quanto mais detalhes, melhor. Dê instruções específicas para
            orientar o {APP_NAME}.
          </p>
          <p>
            • Exemplo: &quot;Crie um diálogo entre dois personagens - um
            celebrando uma promoção e o outro surpreso.&quot;
          </p>
        </div>

        <div className="mt-5">
          <p className="font-bold">4. Use múltiplas abordagens:</p>
          <p>
            • Refine seus resultados pedindo diferentes versões ou ajustando o
            comando.
          </p>
          <p>
            • Exemplo: &quot;Crie uma história sobre um detetive resolvendo um
            mistério. Adicione detalhes sobre o ambiente urbano.&quot;
          </p>
        </div>

        <div className="mt-5">
          <p className="font-bold">5. Deixe a criatividade fluir:</p>
          <p>
            • Permita que o {APP_NAME} mostre sua criatividade. Não restrinja
            demais o comando.
          </p>
          <p>
            • Exemplo: &quot;Invente uma história original envolvendo viagem no
            tempo.&quot;
          </p>
        </div>

        <div className="mt-5">
          <p className="font-bold">6. Avalie e aprimore:</p>
          <p>
            • Analise os resultados e ajuste seu comando conforme necessário. A
            prática é essencial.
          </p>
          <p>
            • Exemplo: &quot;Revise a resposta anterior e ajuste o comando para
            obter uma descrição mais detalhada.&quot;
          </p>
        </div>

        <div className="mt-10">
          <p className="font-bold">Exemplos de comandos:</p>
          <p>
            1. &quot;Crie uma copy para promover nosso novo serviço de
            assinatura mensal.&quot;
          </p>
          <p>
            2. &quot;Elabore um e-mail de acompanhamento pós-venda, agradecendo
            pela compra e oferecendo um desconto na próxima compra.&quot;
          </p>
          <p>
            3. &quot;Como um redator de e-commerce, crie uma descrição atraente
            para um novo lançamento de produto.&quot;
          </p>
          <p>
            4. &quot;Desenvolva uma resposta persuasiva para lidar com objeções
            comuns durante uma chamada de vendas.&quot;
          </p>
          <p>
            5. &quot;Invente uma mensagem cativante para promover a participação
            em nosso próximo webinar.&quot;
          </p>
          <p>
            6. &quot;Crie uma CTA envolvente para incentivar os clientes a
            participar de nossa pesquisa de feedback.&quot;
          </p>
          <p>
            7. &quot;Crie uma resposta personalizada para uma avaliação online,
            destacando os pontos fortes de nosso produto e incentivando outros a
            experimentarem.&quot;
          </p>
          <p>
            8. &quot;Como um representante de vendas, crie uma resposta
            persuasiva para uma consulta de cliente interessado em nossa solução
            de software.&quot;
          </p>
          <p>
            9. &quot;Desenvolva uma mensagem de agradecimento para ser enviada
            aos participantes após um evento virtual, incentivando a
            participação em futuras ocasiões.&quot;
          </p>
          <p>
            10. &quot;Crie uma copy atraente para promover uma oferta limitada,
            incentivando a urgência entre os clientes.&quot;
          </p>
          <p className="mt-10">
            Lembre-se de experimentar e ajustar conforme necessário para
            aproveitar ao máximo as capacidades do {APP_NAME}. Divirta-se
            explorando novas possibilidades e desvendando as maravilhas da
            interação com esta incrível ferramenta!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChatbotClient;
