"use client";

import FormError from "@/components/form-error";
import FormSuccess from "@/components/form-success";
import Heading from "@/components/heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { useCurrentPlan } from "@/hooks/use-current-plan";
import { useCurrentUser } from "@/hooks/use-current-user";
import { SettingsSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Settings } from "lucide-react";
import { useSession } from "next-auth/react";
import React, { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { settings } from "@/actions/settings";
import axios from "axios";
import toast from "react-hot-toast";
import { useCurrentRole } from "@/hooks/use-current-role";

const SettingsPage = () => {
  const user = useCurrentUser();
  const isPro = useCurrentPlan();
  const userRole = useCurrentRole();

  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();
  const { update } = useSession();
  const [isPending, startTransition] = useTransition();
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof SettingsSchema>>({
    resolver: zodResolver(SettingsSchema),
    defaultValues: {
      name: user?.name || undefined,
      email: user?.email || undefined,
      password: undefined,
      newPassword: undefined,
      role: user?.role || undefined,
      isTwoFactorEnabled: user?.isTwoFactorEnabled || undefined,
    },
  });

  const onSubmit = (values: z.infer<typeof SettingsSchema>) => {
    startTransition(() => {
      settings(values)
        .then((data) => {
          if (data.error) {
            setError(data.error);
          }
          if (data.success) {
            update();
            setSuccess(data?.success);
          }
        })
        .catch(() => setError("Algo deu errado..."));
    });
  };

  const onClickSubscription = async () => {
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
    <div>
      <Heading
        title="Configurações"
        description="Gerencie as informações da sua conta"
        icon={Settings}
        iconColor="text-gray-700"
        bgColor="bg-gray-700/10"
      />
      <div className="grid grid-cols-12 w-full">
        <div className="px-4 lg:px-8 space-y-4 col-span-12 2xl:col-span-5">
          <Form {...form}>
            <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nome</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Wesley"
                          disabled={isPending}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {user?.isOAuth === false && (
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>E-mail</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="wesley@mail.com"
                            disabled={isPending}
                            type="email"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}

                {user?.isOAuth === false && (
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Senha atual</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="******"
                            disabled={isPending}
                            type="password"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}

                {user?.isOAuth === false && (
                  <FormField
                    control={form.control}
                    name="newPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nova senha</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="******"
                            disabled={isPending}
                            type="password"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}

                {user?.isOAuth === false && (
                  <FormField
                    control={form.control}
                    name="isTwoFactorEnabled"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                        <div className="space-y-0.5">
                          <FormLabel>Autenticação de dois fatores</FormLabel>
                          <FormDescription>
                            Ative a autenticação de dois fatores para receber
                            códigos por e-mail em cada login, reforçando a
                            segurança.
                          </FormDescription>
                        </div>
                        <FormControl>
                          <Switch
                            disabled={isPending}
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                )}
                <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                  <div>
                    <p className="text-sm font-medium">Plano atual</p>
                    {isPro ? (
                      <p className="text-sm">
                        Você é um usuário PRO.{" "}
                        {userRole === "USER" && (
                          <span
                            className="text-primary underline-offset-4 hover:underline cursor-pointer transition"
                            onClick={onClickSubscription}
                          >
                            Gerencie seu plano.
                          </span>
                        )}
                      </p>
                    ) : (
                      <p className="text-sm">Você é um usuário gratuito.</p>
                    )}
                  </div>
                  <Badge variant={isPro ? "premium" : "success"}>
                    {isPro ? "PRO" : "Gratuito"}
                  </Badge>
                </div>
              </div>
              {!success && <FormError message={error} />}
              {!error && <FormSuccess message={success} />}
              <Button disabled={isPending} type="submit">
                Salvar
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
