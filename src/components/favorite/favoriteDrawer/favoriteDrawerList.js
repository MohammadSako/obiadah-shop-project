"use client";

import Image from "next/image";
import { useItemStore } from "../../../lib/store";
import Checkout from "../../UI/checkout";
import { useCurrentLocale, useI18n } from "@/locales/client";
import { MdDeleteOutline } from "react-icons/md";

export default function FavoriteDrawerList({ onClick }) {
  const { favorite, totalFavQuantity, totalFavAllPrice, removeFavorite } =
    useItemStore();
  const t = useI18n();
  const locale = useCurrentLocale();

  return (
    <>
      <div
        className="flex-1 overflow-y-auto px-4 py-6 z-300"
        dir={locale === "ar" ? "rtl" : "ltr"}
      >
        <div className="mt-4">
          <div className="flow-root">
            <ul role="list" className="-my-6 divide-y divide-gray-200">
              <p className="my-2 text-lg text-gray-600">
                {totalFavQuantity} {t("product.totalfavorite")}
              </p>
              {favorite.map((product) => (
                <li key={product.id} className="flex py-4">
                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                    <Image
                      width={500}
                      height={500}
                      alt={product.image}
                      src={product.image}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>

                  <div className="mx-4 flex flex-1 flex-col gap-2">
                    <div>
                      <div className="flex justify-between text-gray-800">
                        <div>
                          {locale === "ar" ? product.titleAr : product.title}
                        </div>
                        <div className="flex flex-row font-bold gap-1">
                          <span className="text-lg">{product.price}</span>
                          <span className="text-sm">{t("product.price")}</span>
                        </div>
                      </div>
                      <p className="mt-1 text-sm text-gray-500">
                        {locale === "ar" ? product.colorAr : product.color}
                      </p>
                      <p className="mt-1 text-sm text-gray-500">
                        {locale === "ar"
                          ? product.descriptionAr
                          : product.description}
                      </p>
                      <p className="mt-1 text-xs text-gray-500">
                        {product.price} {t("product.perunit")}
                      </p>
                    </div>
                    <div className="flex flex-1 items-end justify-between text-sm">
                      <p className="text-gray-500">
                        {t("product.quantity")}{" "}
                        <span className="font-bold text-lg">
                          {product.quantity}
                        </span>
                      </p>
                      <div>
                        <MdDeleteOutline
                          title="Remove from favorite"
                          size={25}
                          color="red"
                          onClick={() => removeFavorite(product.id)}
                        />
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className=""></div>
          <Checkout
            allPrice={totalFavAllPrice}
            totalQuantity={totalFavQuantity}
            pagePath="/favorite"
            onClick={onClick}
          />
        </div>
      </div>
    </>
  );
}
