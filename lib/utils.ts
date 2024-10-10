import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function absoluteUrl(path: string) {
  return `${process.env.NEXT_PUBLIC_APP_URL}${path}`;
}

export function formatPrice(price: number | null): string {
  const formattedPrice = price?.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  if ((price && price % 1 === 0) || price === 0) {
    // Verifica se o preço é redondo (não possui centavos)
    return formattedPrice!.replace(",00", ""); // Remove a parte decimal e os zeros
  }

  return formattedPrice!;
}
