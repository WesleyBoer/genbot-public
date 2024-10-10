import { APP_NAME } from "@/constants";
import Image from "next/image";
import React from "react";

interface LoaderProps {
  noText?: boolean;
  typeText?: "thinking" | "generate";
}

const Loader = ({ noText = false, typeText }: LoaderProps) => {
  return (
    <div className="h-full flex flex-col gap-y-4 items-center justify-center">
      <div className="w-10 h-10 relative animate-spin">
        <Image alt="Logo" fill src="/logo.png" />
      </div>
      {!noText && (
        <p className="text-sm text-muted-foreground">
          {APP_NAME} está {typeText === "thinking" ? "pensando" : "gerando"}...
        </p>
      )}
    </div>
  );
};

export default Loader;
