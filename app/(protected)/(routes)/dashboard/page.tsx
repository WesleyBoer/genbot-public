"use client";

import { Card } from "@/components/ui/card";
import {
  CODE_GEN,
  CONVERSATION_GEN,
  IMAGE_GEN,
  MUSIC_GEN,
  VIDEO_GEN,
} from "@/constants";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  Code,
  ImageIcon,
  MessageSquare,
  Music,
  VideoIcon,
} from "lucide-react";
import { useRouter } from "next/navigation";

const tools = [
  {
    label: "Chatbot",
    icon: MessageSquare,
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
    href: "/conversation",
    isActive: CONVERSATION_GEN,
  },
  {
    label: "Gerador de áudio",
    icon: Music,
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
    href: "/music",
    isActive: MUSIC_GEN,
  },
  {
    label: "Gerador de imagem",
    icon: ImageIcon,
    color: "text-pink-700",
    bgColor: "bg-pink-700/10",
    href: "/image",
    isActive: IMAGE_GEN,
  },
  {
    label: "Gerador de vídeo",
    icon: VideoIcon,
    color: "text-orange-700",
    bgColor: "bg-orange-700/10",
    href: "/video",
    isActive: VIDEO_GEN,
  },
  {
    label: "Gerador de código",
    icon: Code,
    color: "text-green-700",
    bgColor: "bg-green-700/10",
    href: "/code",
    isActive: CODE_GEN,
  },
];

const DashboardPage = () => {
  const router = useRouter();
  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          Explore o poder da Inteligência Artificial!
        </h2>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
          Crie textos, imagens, áudios e vídeos de forma simples e rápida!
        </p>
      </div>
      <div className="px-4 md:px-20 lg:px-32 space-y-4">
        {tools.map((tool) => (
          <>
            {tool.isActive && (
              <Card
                onClick={() => router.push(tool.href)}
                key={tool.href}
                className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer"
              >
                <div className="flex items-center gap-x-4">
                  <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                    <tool.icon className={cn("w-8 h-8", tool.color)} />
                  </div>
                  <div className="font-semibold">{tool.label}</div>
                </div>
                <ArrowRight className="w-5 h-5" />
              </Card>
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
