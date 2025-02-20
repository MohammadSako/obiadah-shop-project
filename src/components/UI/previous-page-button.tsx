"use client";

import { useI18n } from "@/locales/client";
import { usePathname, useRouter } from "next/navigation";

export default function PreviousPageBtn() {
  const router = useRouter();
  const pathname = usePathname();
  const lastSlashIndex = pathname.lastIndexOf("/");
  const updatedPath = pathname.slice(0, lastSlashIndex);
  const t = useI18n();


  return (
    <button
       onClick={() => router.push(updatedPath)}
      className="text-xl rtl:font-arabic text-blue-500 mt-10 hover:text-blue-400 sm:mx-0 mx-4"
    >
      {t("success.backBtn")}
    </button>
  );
}
