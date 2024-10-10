"use client";

import axios from "axios";
import * as z from "zod";
import Heading from "@/components/heading";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Clapperboard, Fullscreen, ImageIcon } from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

import {
  qualityOptions,
  qualityOptionsFree,
  formSchema,
  resolutionOptions,
  resolutionOptionsFree,
} from "./constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Empty from "@/components/empty";
import Loader from "@/components/loader";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardFooter, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { useProModal } from "@/hooks/use-pro-modal";
import toast from "react-hot-toast";
import { APP_NAME, IMAGE_GEN } from "@/constants";
import { useCurrentPlan } from "@/hooks/use-current-plan";
import Link from "next/link";

const ImagePage = () => {
  const proModal = useProModal();
  const router = useRouter();
  const [images, setImages] = useState<string[]>([]);
  const isPro = useCurrentPlan();
  const [animation, setAnimation] = useState<any>();

  const [animationLoading, setAnimationLoading] = useState(false);
  const [promptAnimation, setPromptAnimation] = useState();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
      quality: "standard",
      resolution: "1024x1024",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setImages([]);

      const response = await axios.post("/api/image", values);

      const urls = response.data.map((image: { url: string }) => image.url);
      const revisedPrompt = response.data[0]?.revised_prompt;

      setImages(urls);
      setPromptAnimation(revisedPrompt);

      form.reset();
    } catch (error: any) {
      if (error?.response?.status === 403) {
        proModal.onOpen();
      } else {
        toast.error("Algo deu errado...");
      }
    } finally {
      router.refresh();
    }
  };

  const onSubmitAnimation = async (src: string) => {
    if (isPro) {
      try {
        setAnimationLoading(true);
        setAnimation(undefined);

        const requestData = {
          src: src,
          promptAnimation: promptAnimation,
        };

        const response = await axios.post("/api/animation", requestData);
        setAnimation(response.data);
      } catch (error: any) {
        if (error?.response?.status === 403) {
          proModal.onOpen();
        } else {
          toast.error("Algo deu errado...");
        }
      } finally {
        setAnimationLoading(false);
        router.refresh();
      }
    } else {
      proModal.onOpen();
    }
  };

  if (IMAGE_GEN) {
    return (
      <div>
        <Heading
          title="Gerador de imagem"
          description={`Peça para o ${APP_NAME} gerar uma imagem.`}
          icon={ImageIcon}
          iconColor="text-pink-700"
          bgColor="bg-pink-700/10"
        />
        <div className="px-4 lg:px-8">
          <div className="bg-sky-500/10 p-2 rounded-lg w-full lg:w-max mb-4">
            <p className="text-sm">
              Está com dúvida do que pedir ou como pedir?{" "}
              <Link
                href="/guia/gerador-de-imagem"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="text-primary underline-offset-4 hover:underline">
                  Clique aqui
                </span>
              </Link>{" "}
              e veja nosso guia.
            </p>
          </div>
          <div>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2"
              >
                <FormField
                  name="prompt"
                  render={({ field }) => (
                    <FormItem className="col-span-12 lg:col-span-6">
                      <FormControl className="m-0 p-0">
                        <Input
                          className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                          disabled={isLoading || animationLoading}
                          placeholder="Exemplo: Uma paisagem de floresta noturna com animais fluorescentes."
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="quality"
                  render={({ field }) => (
                    <FormItem className="col-span-12 lg:col-span-2">
                      <Select
                        disabled={isLoading || animationLoading}
                        onValueChange={field.onChange}
                        value={field.value}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue defaultValue={field.value} />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {isPro &&
                            qualityOptions.map((option) => (
                              <SelectItem
                                key={option.value}
                                value={option.value}
                              >
                                {option.label}
                              </SelectItem>
                            ))}
                          {!isPro &&
                            qualityOptionsFree.map((option) => (
                              <SelectItem
                                key={option.value}
                                value={option.value}
                                disabled={option.disabled}
                              >
                                {option.label}
                              </SelectItem>
                            ))}
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="resolution"
                  render={({ field }) => (
                    <FormItem className="col-span-12 lg:col-span-2">
                      <Select
                        disabled={isLoading || animationLoading}
                        onValueChange={field.onChange}
                        value={field.value}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue defaultValue={field.value} />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {isPro &&
                            resolutionOptions.map((option) => (
                              <SelectItem
                                key={option.value}
                                value={option.value}
                              >
                                {option.label}
                              </SelectItem>
                            ))}
                          {!isPro &&
                            resolutionOptionsFree.map((option) => (
                              <SelectItem
                                key={option.value}
                                value={option.value}
                                disabled={option.disabled}
                              >
                                {option.label}
                              </SelectItem>
                            ))}
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                />
                <Button
                  className="col-span-12 lg:col-span-2 w-full"
                  disabled={isLoading || animationLoading}
                >
                  Gerar
                </Button>
              </form>
            </Form>
          </div>
          <div className="space-y-4 mt-4">
            {isLoading && (
              <div className="p-20">
                <Loader typeText="generate" />
              </div>
            )}
            {animationLoading && (
              <div className="p-20">
                <Loader typeText="generate" />
              </div>
            )}
            {images.length === 0 && !isLoading && (
              <Empty label="Nenhuma imagem gerada." />
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-8">
              {images.map((src) => (
                <Card key={src} className="rounded-lg overflow-hidden">
                  <div className="relative aspect-square">
                    <Image
                      fill
                      alt="Imagem gerada"
                      src={src}
                      className="object-cover h-full w-full"
                    />
                  </div>
                  <CardFooter className="p-2">
                    <div className="flex flex-col gap-2 w-full">
                      <Button
                        onClick={() => window.open(src)}
                        variant="secondary"
                        className="w-full"
                      >
                        <Fullscreen className="h-4 w-4 mr-2" />
                        Abrir em tela cheia
                      </Button>
                      <Button
                        onClick={() => onSubmitAnimation(src)}
                        variant="secondary"
                        className="w-full"
                        disabled={isLoading || animationLoading}
                      >
                        <Clapperboard className="h-4 w-4 mr-2" />
                        {isPro
                          ? "Animar imagem"
                          : "Animar imagem (Apenas usuários PRO)"}
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              ))}
              {animation && (
                <Card className="rounded-lg overflow-hidden">
                  <div className="relative aspect-square">
                    <video
                      controls
                      className="w-full aspect-video mt-8 rounded-lg border bg-black"
                    >
                      <source src={animation} />
                    </video>
                  </div>
                  <CardFooter className="p-2">
                    <div className="flex flex-col gap-2 w-full">
                      <Button
                        onClick={() => window.open(animation)}
                        variant="secondary"
                        className="w-full"
                      >
                        <Fullscreen className="h-4 w-4 mr-2" />
                        Abrir em tela cheia
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    router.push("/dashboard");
  }
};

export default ImagePage;
