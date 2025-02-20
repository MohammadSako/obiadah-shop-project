"use client";

import { useCurrentLocale, useI18n } from "@/locales/client";
import { usePathname, useRouter } from "next/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function NotFound() {
  const router = useRouter();
  const pathname = usePathname();
  const lastSlashIndex = pathname.lastIndexOf("/");
  const updatedPath = pathname.slice(0, lastSlashIndex);
  const t = useI18n();
  const locale = useCurrentLocale();

  return (
    <main className="min-h-screen items-center mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div className="bg-white">
        <div className="flex flex-col gap-2 items-center mx-auto px-4 py-16 sm:py-24 lg:max-w-7xl">
          <h2 className="rtl:font-arabic text-3xl text-gray-600 font-sans">
            {t("product.notfound")}
          </h2>
          <button
            onClick={() => router.push(updatedPath)}
            className="text-2xl flex flex-row items-center gap-4 rtl:font-arabic text-blue-500 mt-4 font-sans hover:text-blue-400 border-2 px-4 py-1 rounded-lg shadow-md hover:shadow-none"
          >
            <div>{locale === "ar" ? <FaArrowRight /> : <FaArrowLeft />}</div>
            <div>{t("success.backprev")}</div>
          </button>
          <button
            onClick={() => router.push("/")}
            className="text-lg rtl:font-arabic text-gray-500 mt-20 font-sans hover:text-red-400 px-4 py-1 rounded-lg"
          >
            {t("success.back")}
          </button>
        </div>
      </div>
    </main>
  );
}
