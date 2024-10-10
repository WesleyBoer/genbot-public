import * as z from "zod";

export const formSchema = z.object({
  prompt: z.string().min(1, {
    message: "Image Prompt is required",
  }),
  quality: z.string().min(1),
  resolution: z.string().min(1),
});

export const qualityOptions = [
  {
    value: "standard",
    label: "Qualidade padrão",
  },
  {
    value: "hd",
    label: "Qualidade HD",
  },
];

export const qualityOptionsFree = [
  {
    value: "standard",
    label: "Qualidade padrão",
  },
  {
    value: "hd",
    label: "Qualidade HD (Apenas usuários PRO)",
    disabled: true,
  },
];

export const resolutionOptions = [
  {
    value: "1024x1024",
    label: "1024x1024",
  },
  {
    value: "1024x1792",
    label: "1024x1792",
  },
  {
    value: "1792x1024",
    label: "1792x1024",
  },
];

export const resolutionOptionsFree = [
  {
    value: "1024x1024",
    label: "1024x1024",
  },
  {
    value: "1024x1792",
    label: "1024x1792 (Apenas usuários PRO)",
    disabled: true,
  },
  {
    value: "1792x1024",
    label: "1792x1024 (Apenas usuários PRO)",
    disabled: true,
  },
];
