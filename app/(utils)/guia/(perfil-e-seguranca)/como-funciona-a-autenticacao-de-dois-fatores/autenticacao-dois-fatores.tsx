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

const AutenticacaoDoisFatoresClient = () => {
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
              Perfil e segurança
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
          Como funciona a autenticação de dois fatores
        </h1>
      </div>
      <div className="mt-8">
        <p>
          A segurança da sua conta é uma prioridade para nós. Por isso,
          oferecemos a opção de autenticação de dois fatores, uma medida
          fundamental para proteger seus dados e garantir a integridade da sua
          conta.
        </p>

        <div className="mt-5">
          <p className="font-bold">
            A importância da autenticação de dois fatores:
          </p>
          <p>
            A autenticação de dois fatores adiciona uma camada extra de
            segurança à sua conta. Além de precisar do seu nome de usuário e
            senha para fazer login, você também precisará de um código de
            verificação único, que é enviado para o seu e-mail cadastrado. Isso
            significa que mesmo que alguém tenha acesso às suas credenciais de
            login, eles não poderão acessar sua conta sem o código adicional.
          </p>
        </div>

        <div className="mt-5">
          <p className="font-bold">
            Como ativar a autenticação de dois fatores:
          </p>
          <p>
            Você pode habilitar a autenticação de dois fatores na aba de{" "}
            <Link href="/settings" rel="noopener noreferrer" target="_blank">
              <span className="text-primary underline-offset-4 hover:underline">
                configurações do seu perfil.
              </span>
            </Link>{" "}
            Basta acessar suas configurações e encontrar a opção de{" "}
            <span className="font-bold">autenticação de dois fatores.</span> Lá,
            você poderá configurar a autenticação de dois fatores de forma
            simples e rápida.
          </p>
        </div>

        <div className="mt-5">
          <p className="font-bold">Como funciona:</p>
          <p>
            Com a autenticação de dois fatores ativada, sempre que você tentar
            fazer login na sua conta, será enviado um código de verificação para
            o seu e-mail cadastrado. Após receber o código, basta inseri-lo no
            campo especificado durante o processo de login. Somente com o código
            correto será possível acessar sua conta, adicionando uma camada
            extra de proteção aos seus dados.
          </p>
          <p className="mt-5">
            Priorizamos a segurança e a privacidade dos nossos usuários e
            encorajamos fortemente a ativação da autenticação de dois fatores
            para proteger sua conta de acessos não autorizados.
          </p>
          <p className="mt-5">
            Se tiver alguma dúvida ou precisar de assistência para configurar a
            autenticação de dois fatores, não hesite em entrar em contato
            conosco. Estamos aqui para ajudar a garantir a segurança da sua
            conta.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AutenticacaoDoisFatoresClient;
