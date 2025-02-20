"use client";

import { I18nProviderClient } from "@/locales/client";
import { ReactNode } from "react";
import Loading from "./loading";

type ProviderProps = {
  locale: string;
  children: ReactNode;
};

export default function Providers({ children, locale }: ProviderProps) {
  return (
    <I18nProviderClient locale={locale} fallback={<Loading />}>
      {children}
    </I18nProviderClient>
  );
}
