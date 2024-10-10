import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import { APP_NAME } from "@/constants";
import { getApiLimitCount } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: `Painel | ${APP_NAME}`,
  description:
    "A melhor ferramenta de IA para chatbot, gerar imagens, áudios e vídeos.",
};

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const apiLimitCount = await getApiLimitCount();
  const isPro = await checkSubscription();
  return (
    <main className="h-full relative">
      <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 bg-gray-900">
        <Sidebar isPro={isPro} apiLimitCount={apiLimitCount} />
      </div>
      <main className="md:pl-72">
        <Navbar />
        {children}
      </main>
    </main>
  );
};

export default DashboardLayout;
