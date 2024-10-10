"use client";

import { Poppins } from "next/font/google";
import React from "react";
import LandingNavbar from "./landing-navbar";
import Link from "next/link";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

const NotFoundClient = () => {
  return (
    <main className="h-full bg-[#111827] overflow-auto">
      <div className="mx-auto max-w-screen-xl h-full w-full">
        <LandingNavbar />
        <div className="mt-20 lg:mt-36 flex flex-col items-center">
          <div className="text-white text-center mb-6">
            <h1 className={cn("text-6xl", poppins.className)}>Oops!</h1>
            <h2 className="mt-5">Não conseguimos encontrar essa página :(</h2>
          </div>
          <Link href="/">
            <Button variant="outline" className="rounded-full">
              Retornar a página inicial
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NotFoundClient;
