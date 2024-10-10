import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { ModalProvider } from "@/components/modal-provider";
import CrispProvider from "@/components/crisp-provider";
import { APP_NAME } from "@/constants";
import GoogleAnalytics from "@/components/google-analytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${APP_NAME} - Crie conteúdo com poucas palavras`,
  description:
    "A melhor ferramenta de IA para chatbot, gerar imagens, áudios e vídeos.",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    images: ["https://genbot.com.br/IA.svg"],
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  return (
    <SessionProvider session={session}>
      <html lang="pt-BR">
        <CrispProvider />
        <Toaster />
        <GoogleAnalytics />
        <body className={inter.className}>
          <ModalProvider />
          {children}
        </body>
      </html>
    </SessionProvider>
  );
}
