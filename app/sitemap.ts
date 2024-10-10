import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: `${process.env.NEXT_PUBLIC_APP_URL}`,
      lastModified: "2024-02-02",
    },
    {
      url: `${process.env.NEXT_PUBLIC_APP_URL}/guia`,
      lastModified: "2024-02-02",
    },
    {
      url: `${process.env.NEXT_PUBLIC_APP_URL}/auth/login`,
      lastModified: "2024-01-26",
    },
    {
      url: `${process.env.NEXT_PUBLIC_APP_URL}/auth/register`,
      lastModified: "2024-01-26",
    },
    {
      url: `${process.env.NEXT_PUBLIC_APP_URL}/guia/chatbot`,
      lastModified: "2024-01-26",
    },
    {
      url: `${process.env.NEXT_PUBLIC_APP_URL}/guia/gerador-de-imagem`,
      lastModified: "2024-01-26",
    },
    {
      url: `${process.env.NEXT_PUBLIC_APP_URL}/guia/gerador-de-audio`,
      lastModified: "2024-01-26",
    },
    {
      url: `${process.env.NEXT_PUBLIC_APP_URL}/guia/gerador-de-video`,
      lastModified: "2024-01-26",
    },
    {
      url: `${process.env.NEXT_PUBLIC_APP_URL}/guia/como-cancelar-a-sua-assinatura`,
      lastModified: "2024-01-26",
    },
    {
      url: `${process.env.NEXT_PUBLIC_APP_URL}/guia/como-entrar-em-contato-com-o-suporte`,
      lastModified: "2024-01-26",
    },
    {
      url: `${process.env.NEXT_PUBLIC_APP_URL}/guia/como-funciona-a-autenticacao-de-dois-fatores`,
      lastModified: "2024-01-26",
    },
    {
      url: `${process.env.NEXT_PUBLIC_APP_URL}/termos`,
      lastModified: "2024-01-26",
    },
  ];
}
