"use client";

import Lottie from "lottie-react";
import SuccessLottie from "@/success-lottie.json";
import Link from "next/link";
import { useI18n } from "@/locales/client";
import { Button } from "@/components/UI/button";

export default function Success() {
  const t = useI18n();

  return (
    <section className="flex flex-col w-full min-h-screen items-center justify-center">
      <div className="text-center max-w-screen-sm flex flex-col gap-3 items-center">
        {/* Success Animation */}
        <div className="w-24 h-24">
          <Lottie animationData={SuccessLottie} loop={false} />
        </div>

        {/* Success Messages */}
        <h1 className="font-bold text-forest text-3xl mt-3">{t("success.placed")}</h1>
        <p className="text-slate-600 font-medium text-lg">{t("success.thanks")}</p>
        <p className="text-slate-600 font-medium text-lg">{t("checkout.orders.success2")}</p>

        {/* Navigation Buttons */}
        <div className="flex items-center gap-4 mt-4">
          <Link href="/" passHref>
            <Button variant="outline">{t("success.back")}</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
