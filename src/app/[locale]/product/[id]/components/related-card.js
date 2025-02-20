"use client";

import Link from "next/link";
import Image from "next/image";
import { useCurrentLocale, useI18n } from "@/locales/client";

function RelatedCard({
  id,
  title,
  color,
  titleAr,
  colorAr,
  image,
  price,
  alt,
}) {
  const t = useI18n();
  const locale = useCurrentLocale();
  const productTitle = locale === "ar" ? titleAr : title;
  const productColor = locale === "ar" ? colorAr : color;

  return (
    <div className="max-w-xs">
      <Link href={`/product/${id}`} className="block group">
        <div className="relative w-full h-[200px] overflow-hidden rounded-md group-hover:opacity-75">
          <Image
            src={image}
            alt={alt || productTitle}
            width={200}
            height={200}
            className="w-full h-full object-contain"
            priority
          />
        </div>
        <div className="mt-4 flex justify-between items-start">
          <div>
            <p className="text-lg text-gray-700 w-32 truncate">
              {productTitle}
            </p>
            <p className="mt-1 text-lg text-gray-500">{productColor}</p>
          </div>
          <div className="bg-yellow-300 shadow-lg flex items-center rounded">
            <div className="flex flex-col gap-1 items-end">
              <div className=" max-h-8 px-1 flex items-center font-bold text-gray-900">
                <div className="relative">
                  <span className="text-xs mt-1 -left-5 absolute">
                    {t("product.price")}
                  </span>
                  <span className="text-lg">{price}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default RelatedCard;
