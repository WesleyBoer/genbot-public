"use client";

import { cn } from "@/lib/utils";
import {
  Book,
  Code,
  ImageIcon,
  LayoutDashboard,
  MessageSquare,
  MusicIcon,
  Settings,
  VideoIcon,
} from "lucide-react";
import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import FreeCounter from "./free-counter";
import {
  APP_NAME,
  CODE_GEN,
  CONVERSATION_GEN,
  IMAGE_GEN,
  MUSIC_GEN,
  VIDEO_GEN,
} from "@/constants";
import SocialButtons from "./social-buttons";
import { useEffect, useState } from "react";
import { useCurrentRole } from "@/hooks/use-current-role";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-sky-500",
    isActive: true,
  },
  {
    label: "Chatbot",
    icon: MessageSquare,
    href: "/conversation",
    color: "text-violet-500",
    isActive: CONVERSATION_GEN,
  },
  {
    label: "Gerador de imagem",
    icon: ImageIcon,
    href: "/image",
    color: "text-pink-700",
    isActive: IMAGE_GEN,
  },
  {
    label: "Gerador de vídeo",
    icon: VideoIcon,
    href: "/video",
    color: "text-orange-700",
    isActive: VIDEO_GEN,
  },
  {
    label: "Gerador de áudio",
    icon: MusicIcon,
    href: "/music",
    color: "text-emerald-500",
    isActive: MUSIC_GEN,
  },
  {
    label: "Gerador de código",
    icon: Code,
    href: "/code",
    color: "text-green-700",
    isActive: CODE_GEN,
  },
  {
    label: "Guia",
    icon: Book,
    href: "/guia",
    color: "text-yellow-500",
    isActive: true,
    newTab: true,
  },
  {
    label: "Configurações",
    icon: Settings,
    href: "/settings",
    isActive: true,
  },
];

interface SidebarProps {
  apiLimitCount: number;
  isPro: boolean;
}

const Sidebar = ({ apiLimitCount = 0, isPro = false }: SidebarProps) => {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);
  const userRole = useCurrentRole();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
      <div className="px-3 py-2 flex-1">
        <Link href="/dashboard" className="flex items-center pl-3 mb-14">
          <div className="relative w-8 h-8 mr-2">
            <Image fill alt="Logo" src="/logo.png" />
          </div>
          <h1 className={cn("text-2xl font-bold", font.className)}>
            {APP_NAME}
          </h1>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <>
              {route.isActive && (
                <Link
                  href={route.href}
                  key={route.href}
                  target={route.newTab ? "_blank" : undefined}
                  className={cn(
                    "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                    pathname === route.href
                      ? "text-white bg-white/10"
                      : "text-zinc-400"
                  )}
                >
                  <div className="flex items-center flex-1">
                    <route.icon
                      className={cn("h-full w-5 mr-3", route.color)}
                    />
                    {route.label}
                  </div>
                </Link>
              )}
            </>
          ))}
        </div>
      </div>
      {userRole === "USER" && (
        <FreeCounter isPro={isPro} apiLimitCount={apiLimitCount} />
      )}
      <SocialButtons size={20} />
    </div>
  );
};

export default Sidebar;
