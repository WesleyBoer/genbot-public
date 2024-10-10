"use client";

import { cn } from "@/lib/utils";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import RegisterButton from "./auth/register-button";
import { Poppins } from "next/font/google";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

interface ButtonFreeTrialProps {
  isNavbar?: boolean;
  whiteMode?: boolean;
}

const ButtonFreeTrial = ({
  isNavbar = false,
  whiteMode = false,
}: ButtonFreeTrialProps) => {
  const session = useSession();
  const isLogged = session.data?.user;
  return (
    <div className={cn(font.className)}>
      {isLogged && (
        <Link href="/dashboard">
          <Button
            variant="premium"
            className={`rounded-full font-semibold ${
              isNavbar ? undefined : "md:text-lg p-4 md:p-6"
            } ${whiteMode ? undefined : "shadow-lg"}`}
          >
            TESTAR GRATUITAMENTE
          </Button>
        </Link>
      )}
      {!isLogged && (
        <RegisterButton mode="modal" asChild>
          <Button
            variant="premium"
            className={`rounded-full font-semibold ${
              isNavbar ? undefined : "md:text-lg p-4 md:p-6"
            } ${whiteMode ? "shadow-lg" : undefined}`}
          >
            TESTAR GRATUITAMENTE
          </Button>
        </RegisterButton>
      )}
    </div>
  );
};

export default ButtonFreeTrial;
