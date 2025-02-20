"use client";

import { useItemStore } from "@/lib/store";
import { useCurrentLocale, useI18n } from "@/locales/client";
// import { Button } from "../UI/button";
import Image from "next/image";
import { FaMoneyBill1Wave } from "react-icons/fa6";

export type Item = {
  id: string;
  title: string;
  description?: string;
  titleAr: string;
  descriptionAr?: string;
  image: string;
  price: number;
  color: string;
  colorAr: string;
  quantity: number;
  totalPrice: number;
};

export const OrderSummary = () => {
  const { items, totalAllPrice } = useItemStore();
  const t = useI18n();
  const locale = useCurrentLocale();

  return (
    <form>
      <h2 className="font-display font-semibold text-3xl py-5">Your Orders</h2>
      {items.map((product: Item) => (
        <div key={product.id} className="border-b border-gray">
          <li className="flex flex-row  gap-4 py-6">
            <div className="h-25 w-25 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
              <Image
                width={50}
                height={50}
                alt={product.image}
                src={product.image}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="flex flex-1 flex-col gap-6">
              <div>
                <div className="flex justify-between text-base font-medium text-gray-900">
                  <p>{locale === "ar" ? product.titleAr : product.title}</p>
                  <p className="">
                    {product.price} {t("product.price")}
                  </p>
                </div>
                <div className="mt-1 text-sm text-gray-500">
                  <p>{locale === "ar" ? product.colorAr : product.color}</p>
                </div>
                <p className="mt-1 text-sm text-gray-500">
                  {locale === "ar"
                    ? product.descriptionAr
                    : product.description}
                </p>
                <p className="text-gray-500">
                  {t("product.quantity")}{" "}
                  <span className="font-bold text-lg">{product.quantity}</span>
                </p>
              </div>
            </div>
          </li>
        </div>
      ))}
      <div className="flex flex-col mt-5">
        <div className="flex justify-between">
          <p className="text-md text-slate-600">{t("common.subtotal")}</p>
          <p className="flex flex-row gap-2 text-md text-slate-600 ">
            <span>{totalAllPrice}</span>
            <span>{t("product.price")}</span>
          </p>
        </div>
        <div className="flex justify-between">
          <p className="text-md text-slate-600">{t("common.shipping")}</p>
          <p className="text-md text-slate-600">{t("product.price")}</p>
        </div>
        <div className="flex justify-between my-3">
          <p className="text-md font-semibold">{t("common.total")}</p>
          <p className="flex flex-row gap-2 text-md font-semibold">
            <span>{totalAllPrice}</span>
            <span>{t("product.price")}</span>
          </p>
        </div>
        <div className="flex flex-col justify-between gap-2 mt-6">
          <p className="text-md font-semibold">
            {t("checkout.payment.methods")}:
          </p>
          <p className="flex flex-row gap-2 text-md font-semibold">
            <span>{t("checkout.payments.cash")}</span>
            <FaMoneyBill1Wave className="text-xl text-green-600" />
          </p>
        </div>
      </div>
    </form>
  );
};
