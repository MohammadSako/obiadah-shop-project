"use client";

import { Input } from "@/components/UI/input";
import { login } from "./action";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/UI/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useCurrentLocale, useI18n } from "@/locales/client";
import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { cn } from "@/lib/utils";
import { Button } from "@/components/UI/button";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export default function LoginPage() {
  const t = useI18n();
  const locale = useCurrentLocale();
  const dir = locale === "ar" ? "rtl" : "ltr";
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const userData = {
      email: values.email,
      password: values.password,
      locale: locale,
    };
    login(userData);
  }

  return (
    <div className="flex flex-col sm:mx-40 mx-4 gap-4 mt-32 min-h-screen">
      <p className="text-2xl text-[#06b6d4] font-bold text-center my-10">
        {t("dashboard.login")}
      </p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem dir={dir}>
                <FormLabel className="text-forest font-medium text-lg">
                  {t("common.form.email")}
                </FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem dir={dir}>
                <FormLabel className="text-forest font-medium text-lg">
                  {t("common.form.password")}
                </FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      {...field}
                      type={showPassword ? "text" : "password"}
                    />
                    <div
                      className={cn(
                        `absolute inset-y-0 flex items-center px-4  text-gray-500`,
                        { "left-0": dir === "rtl", "right-0": dir === "ltr" }
                      )}
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                    </div>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="my-10" type="submit">
            <span>{t("auth.signin")}</span>
          </Button>
        </form>
      </Form>
    </div>
  );
}
