"use client";

import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { APP_NAME } from "@/constants";
import { useSession } from "next-auth/react";
import ButtonFreeTrial from "./button-free-trial";
import LoginButton from "./auth/login-button";
import { useEffect, useState } from "react";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

interface LandingNavbarProps {
  isGuidePage?: boolean;
}

const LandingNavbar = ({ isGuidePage = false }: LandingNavbarProps) => {
  const session = useSession();
  const isLogged = session.data?.user;

  const [hasShadow, setHasShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHasShadow(true); // Adicionar a classe shadow-sm
      } else {
        setHasShadow(false); // Remover a classe shadow-sm
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`w-full bg-[#111827] ${
        isGuidePage ? undefined : "fixed z-50"
      }`}
    >
      <nav
        className={`p-4 bg-transparent mx-auto max-w-screen-xl flex items-center justify-between ${
          hasShadow ? "shadow-2xl" : undefined
        }`}
      >
        <Link href="/" className="flex items-center">
          <div className="relative h-8 w-8 mr-2">
            <Image
              alt="Logo"
              src="/logo.png"
              width={32}
              height={32}
              loading="lazy"
            />
          </div>
          <h1
            className={cn(
              "hidden sm:block text-2xl font-bold text-white",
              font.className
            )}
          >
            {APP_NAME}
          </h1>
        </Link>
        {isLogged ? (
          <Link href="/dashboard">
            <Button variant="outline" className="rounded-full">
              Entrar
            </Button>
          </Link>
        ) : (
          <div className="flex flex-row gap-2 sm:gap-4">
            <ButtonFreeTrial isNavbar />
            <LoginButton mode="modal" asChild>
              <Button variant="outline" className="rounded-full">
                Entrar
              </Button>
            </LoginButton>
          </div>
        )}
      </nav>
    </header>
  );
};

export default LandingNavbar;
