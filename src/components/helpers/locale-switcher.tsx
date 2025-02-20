"use client";

import { NavLink } from "../layouts/nav-link";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useChangeLocale, useCurrentLocale} from "@/locales/client";

interface Props {
  className?: string;
}

export const LocaleSwitcher = (props: Props) => {
  const { className } = props;
  const changeLocale = useChangeLocale();
  const locale = useCurrentLocale();
  // const t = useI18n();

  return (
    <NavLink
      icon={
        locale == "en" ? (
          <Image
            alt="locale switcher"
            src="/lang.svg"
            width={24}
            height={24}
            className={cn("w-7 h-7 object-contain", className)}
          />
        ) : undefined
      }
      onClick={() => changeLocale(locale === "en" ? "ar" : "en")}
      textClassName="text-lg font-bold select-none font-display"
      text={locale === "ar" ? "EN" : undefined}
      tooltipTx={locale === "en" ? "اللغه العربيه" : "English"}
    />
  );
};
