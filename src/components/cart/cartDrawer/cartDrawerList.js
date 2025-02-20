"use client";

import Image from "next/image";
import { useItemStore } from "../../../lib/store";
import CartButton from "@/components/UI/cartButton";
import Checkout from "../../UI/checkout";
import { useCurrentLocale, useI18n } from "@/locales/client";

export default function CartDrawerList({ onClick }) {
  const { items, totalQuantity, totalAllPrice } = useItemStore();
  const t = useI18n();
  const locale = useCurrentLocale();

  return (
    <>
      <Checkout
        allPrice={totalAllPrice}
        totalQuantity={totalQuantity}
        pagePath="/drawer"
        onClick={onClick}
      />
      <div
        className="flex-1 overflow-y-auto px-4 py-6"
        dir={locale === "ar" ? "rtl" : "ltr"}
      >
        <div className="mt-4">
          <div className="flow-root">
            <ul role="list" className="-my-6 divide-y divide-gray-200">
              <p className="my-2 text-lg text-gray-600">
                {totalQuantity} {t("product.total")}
              </p>
              {items.map((product) => (
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
                      <div className="flex flex-row justify-between text-base font-semibold text-gray-800">
                        <h3 className="basis-3/4 truncate max-w-28">
                          {locale === "ar" ? product.titleAr : product.title}
                        </h3>
                        <p className="basis-1/4 font-bold justify-end">
                          {t("product.price")}
                          <span> {product.price}</span>
                        </p>
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

                      <div className="flex">
                        <CartButton
                          quantity={product.quantity}
                          id={product.id}
                        />
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
