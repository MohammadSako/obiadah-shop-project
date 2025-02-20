"use client";

import React, { useCallback, useMemo, useState } from "react";
import { TbShoppingBagPlus, TbHeart, TbHeartFilled } from "react-icons/tb";
import { useToast } from "@/hooks/use-toast";
import { useItemStore } from "@/lib/store";
import Image from "next/image";
import Link from "next/link";
import { useCurrentLocale, useI18n } from "@/locales/client";
import Lottie from "lottie-react";
import Loading from "@/s3.json";
// Reusable icon styles
const iconStyles = "mt-2 text-lg font-sans tracking-wide cursor-pointer";

export function CardDetails({
  id,
  title,
  description,
  color,
  details,
  titleAr,
  descriptionAr,
  colorAr,
  detailsAr,
  image,
  price,
  url,
  alt,
  dashboardType,
  size,
  gender,
  type,
  imageid,
  category,
  qty,
}) {
  const [cartPending, setCartPending] = useState(false);
  const { toast } = useToast();
  const { addItem, addFavorite, removeFavorite, favorite } = useItemStore();
  const t = useI18n();
  const locale = useCurrentLocale();

  const isFavorite = useMemo(
    () => favorite.some((item) => item.id === id),
    [favorite, id]
  );

  const addToFavorite = useCallback(() => {
    addFavorite({
      id,
      title,
      description,
      titleAr,
      descriptionAr,
      image,
      price,
      color,
      colorAr,
      url,
      details,
      detailsAr,
      alt,
      dashboardType,
      size,
      gender,
      type,
      imageid,
      category,
    });
    toast({
      title: `${locale === "ar" ? titleAr : title}`,
      description: t("common.favaddedmessage"),
      style: { backgroundColor: "#ff5454", color: "white" },
    });
  }, [
    locale,
    addFavorite,
    id,
    title,
    description,
    titleAr,
    descriptionAr,
    image,
    price,
    color,
    colorAr,
    url,
    details,
    detailsAr,
    alt,
    dashboardType,
    size,
    gender,
    type,
    imageid,
    category,
    toast,
    t,
  ]);

  const removeFromFavorite = useCallback(() => {
    removeFavorite(id);
    toast({
      title: `${locale === "ar" ? titleAr : title}`,
      description: t("common.favremovedmessage"),
    });
  }, [removeFavorite, id, title, , locale, titleAr, toast, t]);

  const addToCartHandler = useCallback(() => {
    setCartPending(true);

    addItem({
      id,
      title,
      description,
      titleAr,
      descriptionAr,
      image,
      price,
      color,
      colorAr,
      url,
      details,
      detailsAr,
      alt,
      dashboardType,
      size,
      gender,
      type,
      imageid,
      category,
    });
    toast({
      title: `${locale === "ar" ? titleAr : title}`,
      description: t("common.addedmessage"),
    });
    setTimeout(() => {
      setCartPending(false);
    }, 2500);
  }, [
    addItem,
    id,
    title,
    description,
    titleAr,
    descriptionAr,
    image,
    price,
    color,
    colorAr,
    url,
    details,
    detailsAr,
    alt,
    dashboardType,
    size,
    gender,
    type,
    imageid,
    category,
    toast,
    locale,
    t,
  ]);

  return (
    <div className="sm:shadow-none sm:p-0 rounded-lg shadow-lg p-4 space-y-2">
      <Link href={`/product/${id}`}>
        <div className="p-4 aspect-h-1 aspect-w-1 md:w-full overflow-hidden rounded-md bg-white lg:aspect-none group-hover:opacity-75">
          <Image
            src={image}
            alt={alt}
            style={{ width: 400, height: "auto", objectFit: "fill" }}
            width={200}
            height={200}
          />
        </div>
      </Link>

      <div className="mt-4 flex md:flex-row flex-col sm:justify-between space-y-7">
        <div className="basis-2/3">
          {/* <p className="sm:text-lg text-5xl text-gray-700 font-semibold">{title}</p> */}
          <p className="sm:text-lg text-lg text-gray-700 h-20 sm:w-28 w-auto sm:text-wrap overflow-hidden ">
            {locale === "ar" ? descriptionAr : description}
          </p>
          <p className="mt-1 sm:text-lg text-2xl text-gray-500">
            {locale === "ar" ? colorAr : color}
          </p>
        </div>

        <div className="basis-1/3 bg-yellow-400 sm:w-auto w-24 sm:h-[32px] text-center shadow-lg">
          <p className="sm:text-2xl text-3xl px-1 font-medium text-gray-900 justify-center flex gap-2">
            <span className="font-semibold text-red-700">{price}</span>{" "}
            <span className="sm:text-lg text-xl mt-1">
              {t("product.price")}
            </span>
          </p>
        </div>
      </div>
      {qty === 0 ? (
        <p className="bg-blue-500 w-fit rounded-md px-2 text-white mt-2">
          {t("product.outstock")}
        </p>
      ) : (
        <p className="mt-2 text-blue-500">{t("product.instock")}</p>
      )}
      {qty > 0 && (
        <div className="flex flex-row gap-4 items-center">
          {!cartPending && (
            <TbShoppingBagPlus
              title="Add to bag"
              onClick={addToCartHandler}
              className="mt-2 text-lg font-sans tracking-wide bg-blue-500 rounded-full w-10 h-10 text-white p-1.5 hover:bg-blue-800 cursor-pointer"
            />
          )}
          {cartPending && (
            <div className="w-10 h-10 mt-2">
              <Lottie animationData={Loading} loop={true} />
            </div>
          )}

          {isFavorite ? (
            <TbHeartFilled
              title="Remove from favorite"
              size={35}
              onClick={() => removeFromFavorite(id)}
              className={`${iconStyles} ${
                isFavorite
                  ? "text-red-500 hover:text-red-400"
                  : "text-gray-400 hover:text-red-500"
              }`}
            />
          ) : (
            <TbHeart
              title="Add to favorite"
              size={35}
              onClick={addToFavorite}
              className={`${iconStyles} ${
                isFavorite
                  ? "text-red-500 hover:text-red-400"
                  : "text-gray-400 hover:text-red-500"
              }`}
            />
          )}
        </div>
      )}
    </div>
  );
}
