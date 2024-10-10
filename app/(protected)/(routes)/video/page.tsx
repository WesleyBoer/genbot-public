"use client";

import axios from "axios";
import * as z from "zod";
import Heading from "@/components/heading";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { VideoIcon } from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

import { formSchema } from "./constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Empty from "@/components/empty";
import Loader from "@/components/loader";
import { useProModal } from "@/hooks/use-pro-modal";
import toast from "react-hot-toast";
import { APP_NAME, VIDEO_GEN } from "@/constants";
import Link from "next/link";

const VideoPage = () => {
  const proModal = useProModal();
  const router = useRouter();
  const [video, setVideo] = useState<string>();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setVideo(undefined);

      const response = await axios.post("/api/video", values);
      setVideo(response.data[0]);

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

  if (VIDEO_GEN) {
    return (
      <div>
        <Heading
          title="Gerador de vídeo"
          description={`Peça para o ${APP_NAME} gerar um vídeo.`}
          icon={VideoIcon}
          iconColor="text-orange-700"
          bgColor="bg-orange-700/10"
        />
        <div className="px-4 lg:px-8">
          <div>
            <div className="bg-sky-500/10 p-2 rounded-lg w-full lg:w-max mb-4">
              <p className="text-sm">
                Está com dúvida do que pedir ou como pedir?{" "}
                <Link
                  href="/guia/gerador-de-video"
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
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2"
              >
                <FormField
                  name="prompt"
                  render={({ field }) => (
                    <FormItem className="col-span-12 lg:col-span-10">
                      <FormControl className="m-0 p-0">
                        <Input
                          className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                          disabled={isLoading}
                          placeholder="Exemplo: Um peixe nadando no aquário"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <Button
                  className="col-span-12 lg:col-span-2 w-full"
                  disabled={isLoading}
                >
                  Gerar
                </Button>
              </form>
            </Form>
          </div>
          <div className="space-y-4 mt-4">
            {isLoading && (
              <div className="p-8 rounded-lg w-full flex items-center justify-center bg-muted">
                <Loader typeText="generate" />
              </div>
            )}
            {!video && !isLoading && <Empty label="Nenhum vídeo gerado." />}
            {video && (
              <video
                controls
                className="w-full aspect-video mt-8 rounded-lg border bg-black"
              >
                <source src={video} />
              </video>
            )}
          </div>
        </div>
      </div>
    );
  } else {
    router.push("/dashboard");
  }
};

export default VideoPage;
