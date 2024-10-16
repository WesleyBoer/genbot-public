"use client";

import axios from "axios";
import * as z from "zod";
import Heading from "@/components/heading";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Music } from "lucide-react";
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
import { APP_NAME, MUSIC_GEN } from "@/constants";
import Link from "next/link";

const MusicPage = () => {
  const proModal = useProModal();
  const router = useRouter();
  const [music, setMusic] = useState<string>();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setMusic(undefined);

      const response = await axios.post("/api/music", values);
      setMusic(response.data.audio);

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

  if (MUSIC_GEN) {
    return (
      <div>
        <Heading
          title="Gerador de áudio"
          description={`Peça para o ${APP_NAME} gerar um áudio.`}
          icon={Music}
          iconColor="text-emerald-500"
          bgColor="bg-emerald-500/10"
        />
        <div className="px-4 lg:px-8">
          <div>
            <div className="bg-sky-500/10 p-2 rounded-lg w-full lg:w-max mb-4">
              <p className="text-sm">
                Está com dúvida do que pedir ou como pedir?{" "}
                <Link
                  href="/guia/gerador-de-audio"
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
                          placeholder="Exemplo: Solo de guitarra"
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
            {!music && !isLoading && <Empty label="Nenhuma música gerada." />}
            {music && (
              <audio controls className="w-full mt-8">
                <source src={music} />
              </audio>
            )}
          </div>
        </div>
      </div>
    );
  } else {
    router.push("/dashboard");
  }
};

export default MusicPage;
