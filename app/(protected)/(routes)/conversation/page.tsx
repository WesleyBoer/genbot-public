"use client";

import axios from "axios";
import * as z from "zod";
import Heading from "@/components/heading";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { MessageSquare } from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

import { formSchema } from "./constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { ChatCompletionMessage } from "openai/resources/chat/completions.mjs";
import Empty from "@/components/empty";
import Loader from "@/components/loader";
import { cn } from "@/lib/utils";
import UserAvatar from "@/components/user-avatar";
import BotAvatar from "@/components/bot-avatar";
import { useProModal } from "@/hooks/use-pro-modal";
import toast from "react-hot-toast";
import { APP_NAME, CONVERSATION_GEN } from "@/constants";
import Link from "next/link";

const ConversationPage = () => {
  const proModal = useProModal();
  const router = useRouter();
  const [messages, setMessages] = useState<ChatCompletionMessage[]>([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const userMessage = {
        role: "user",
        content: values.prompt,
      };

      const newMessages = [...messages, userMessage];

      const response = await axios.post("/api/conversation", {
        messages: newMessages,
      });

      setMessages((current) => [...current, userMessage, response.data]);

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

  if (CONVERSATION_GEN) {
    return (
      <div>
        <Heading
          title="Chatbot"
          description={`Faça uma pergunta ou peça para o ${APP_NAME} gerar algo.`}
          icon={MessageSquare}
          iconColor="text-violet-500"
          bgColor="bg-violet-500/10"
        />
        <div className="px-4 lg:px-8">
          <div>
            <div className="bg-sky-500/10 p-2 rounded-lg w-full lg:w-max mb-4">
              <p className="text-sm">
                Está com dúvida do que perguntar ou como perguntar?{" "}
                <Link
                  href="/guia/chatbot"
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
                          placeholder="Exemplo: Qual é a distância entre a Terra e a Lua?"
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
                  Enviar
                </Button>
              </form>
            </Form>
          </div>
          <div className="space-y-4 mt-4">
            {isLoading && (
              <div className="p-8 rounded-lg w-full flex items-center justify-center bg-muted">
                <Loader typeText="thinking" />
              </div>
            )}
            {messages.length === 0 && !isLoading && (
              <Empty label="Nenhuma conversa iniciada." />
            )}
            <div className="flex flex-col-reverse gap-y-4">
              {messages.map((message) => (
                <div
                  key={message.content}
                  className={cn(
                    "p-8 w-full flex items-start gap-x-8 rounded-lg",
                    message.role !== "assistant"
                      ? "bg-white border border-black/10"
                      : "bg-muted"
                  )}
                >
                  <div className="flex flex-col justify-center items-center gap-1">
                    {message.role !== "assistant" ? (
                      <UserAvatar />
                    ) : (
                      <BotAvatar />
                    )}
                    {message.role !== "assistant" ? (
                      <span className="text-sm font-medium w-12 text-center">
                        Você
                      </span>
                    ) : (
                      <span className="text-sm font-medium w-12 text-center">
                        {APP_NAME}
                      </span>
                    )}
                  </div>
                  <p className="text-sm">{message.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    router.push("/dashboard");
  }
};

export default ConversationPage;
