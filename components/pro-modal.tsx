"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { useProModal } from "@/hooks/use-pro-modal";
import { Badge } from "./ui/badge";
import {
  Check,
  Clapperboard,
  Code,
  ImageIcon,
  MessageSquare,
  Music,
  VideoIcon,
  Zap,
} from "lucide-react";
import { Card } from "./ui/card";
import { cn, formatPrice } from "@/lib/utils";
import { Button } from "./ui/button";
import axios from "axios";
import toast from "react-hot-toast";
import {
  APP_NAME,
  CODE_GEN,
  CONVERSATION_GEN,
  IMAGE_GEN,
  MUSIC_GEN,
  PRICE_MONTHLY_NOSTRIPE,
  VIDEO_GEN,
  ANIMATION_GEN,
} from "@/constants";

const tools = [
  {
    label: "Chatbot",
    icon: MessageSquare,
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
    isActive: CONVERSATION_GEN,
  },
  {
    label: "Gerador de áudio",
    icon: Music,
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
    isActive: MUSIC_GEN,
  },
  {
    label: "Gerador de imagem",
    icon: ImageIcon,
    color: "text-pink-700",
    bgColor: "bg-pink-700/10",
    isActive: IMAGE_GEN,
  },
  {
    label: "Animar imagem gerada",
    icon: Clapperboard,
    color: "text-yellow-700",
    bgColor: "bg-yellow-700/10",
    isActive: ANIMATION_GEN,
  },
  {
    label: "Gerador de vídeo",
    icon: VideoIcon,
    color: "text-orange-700",
    bgColor: "bg-orange-700/10",
    isActive: VIDEO_GEN,
  },
  {
    label: "Gerador de código",
    icon: Code,
    color: "text-green-700",
    bgColor: "bg-green-700/10",
    isActive: CODE_GEN,
  },
];

const ProModal = () => {
  const proModal = useProModal();
  const [loading, setLoading] = useState(false);

  const onSubscribe = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/api/stripe");

      window.location.href = response.data.url;
    } catch (error) {
      toast.error("Algo deu errado...");
    } finally {
      setLoading(false);
    }
  };
  return (
    <Dialog open={proModal.isOpen} onOpenChange={proModal.onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex justify-center items-center flex-col gap-y-4 pb-2">
            <div className="flex items-center gap-x-2 font-bold py-1">
              {APP_NAME}
              <Badge variant="premium" className="uppercase text-sm py-1">
                pro
              </Badge>
            </div>
          </DialogTitle>
          <DialogDescription className="text-center pt-2 space-y-2 text-zinc-900 font-medium">
            {tools.map((tool) => (
              <>
                {tool.isActive && (
                  <Card
                    key={tool.label}
                    className="p-3 border-black/5 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-x-4">
                      <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                        <tool.icon className={cn("w-6 h-6", tool.color)} />
                      </div>
                      <div className="font-semibold text-sm">{tool.label}</div>
                    </div>
                    <Check className="text-primary w-5 h-5" />
                  </Card>
                )}
              </>
            ))}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            disabled={loading}
            onClick={onSubscribe}
            size="lg"
            variant="premium"
            className="w-full"
          >
            Virar PRO
            <Zap className="w-4 h-4 ml-2 mr-2 fill-white" />
            por apenas {formatPrice(PRICE_MONTHLY_NOSTRIPE)} / mês
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ProModal;
