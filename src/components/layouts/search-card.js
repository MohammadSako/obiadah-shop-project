"use client";

import { cn } from "@/lib/utils";
import { useCurrentLocale, useI18n } from "@/locales/client";
import Image from "next/image";

export const SearchCard = (props) => {
  const t = useI18n();
  const locale = useCurrentLocale();

  const { product, className } = props;
  return (
    <div
      className={cn(
        `flex items-start w-full m-2 h-[120px] gap-2 sm:gap-4 cursor-pointer hover:bg-gray-100 rounded-md p-3`,
        className
      )}
    >
      <div className="flex items-start gap-4 h-full w-full ">
        <div className="relative flex flex-col w-[100px] h-[115px] sm:w-[100px] sm:h-[100px]">
          <Image
            className="object-contain border border-[#E2E2E2] rounded-md"
            fill
            sizes="50vw"
            alt={`${product.title}-${product.id} Image`}
            src={product.image}
          />
        </div>
        <div className="flex flex-col w-full h-full justify-between ">
          <div className="flex flex-col gap-1 ">
            <span className="text-xs sm:text-base font-medium text-forest leading-4">
              {locale === "ar" ? product.titleAr : product.title}
            </span>
            <span className="text-[12px] sm:text-sm text-forest  line-clamp-2  text-ellipsis overflow-hidden sm:mb-1">
              {locale === "ar" ? product.descriptionAr : product.description}
            </span>
          </div>
          <div className="flex flex-col justify-end w-full h-full">
            <span className="font-medium text-forest text-sm justify-self-end">
              {product.price} {t("product.price")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
