"use client";

import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import SocialButtons from "./social-buttons";
import { APP_NAME, EMAIL_SUPPORT } from "@/constants";

const anoAtual: number = new Date().getFullYear();

const LandingFooter = () => {
  return (
    <footer className="pt-10">
      <div className="mx-4 xl:mx-auto max-w-screen-xl">
        <div className="grid grid-cols-12 px-4 xl:px-0">
          <div className="text-white col-span-6 lg:col-span-3">
            <p className="font-bold">Links úteis</p>
            <ul className="pt-4 flex flex-col">
              <li>
                <Link href="/">
                  <Button variant="link" className="p-0 text-white h-5">
                    Início
                  </Button>
                </Link>
              </li>
              <li>
                <Link href="/auth/login">
                  <Button variant="link" className="p-0 text-white h-5">
                    Login
                  </Button>
                </Link>
              </li>
              <li>
                <Link href="/auth/register">
                  <Button variant="link" className="p-0 text-white h-5">
                    Registrar
                  </Button>
                </Link>
              </li>
              <li>
                <Link href="/guia">
                  <Button variant="link" className="p-0 text-white h-5">
                    Guia
                  </Button>
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-white col:span-6 lg:col-span-4">
            <p className="font-bold">Redes sociais</p>
            <div className="w-max pt-4">
              <SocialButtons noPadding />
            </div>
          </div>

          <div className="py-8 lg:py-0 text-white col-span-12 lg:col-span-5">
            <p className="font-bold">Suporte</p>
            <p className="text-sm pt-4">
              Entre em contato conosco através do ícone de suporte na aplicação
              ou envie um e-mail para{" "}
              <span
                className="cursor-pointer hover:underline transition"
                onClick={() =>
                  (window.location.href = `mailto:${EMAIL_SUPPORT}`)
                }
              >
                {EMAIL_SUPPORT}
              </span>
            </p>
          </div>
        </div>
        <div className="text-center text-sm text-white py-2">
          <p>
            {APP_NAME} {anoAtual} | Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default LandingFooter;
