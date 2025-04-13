"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useCallback, useMemo, useState } from "react";
import { TbShoppingBagPlus, TbHeart, TbHeartFilled } from "react-icons/tb";
import { useItemStore } from "../../lib/store";
import { useToast } from "@/hooks/use-toast";
import { useCurrentLocale, useI18n } from "@/locales/client";
import Lottie from "lottie-react";
import Loading from "@/s3.json";

function ProductCard({
  id,
  title,
  titleAr,
  description,
  descriptionAr,
  image,
  price,
  color,
  colorAr,
  details,
  detailsAr,
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
  const { addItem, addFavorite, removeFavorite, favorite } = useItemStore();
  const { toast } = useToast();
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
      titleAr,
      description,
      descriptionAr,
      image,
      price,
      color,
      colorAr,
      alt,
      details,
      detailsAr,
      size,
      gender,
      type,
      imageid,
      category,
      dashboardType,
    });
    toast({
      title: `${locale === "ar" ? titleAr : title}`,
      description: t("common.favaddedmessage"),
      style: { backgroundColor: "#ff5454", color: "white" },
    });
  }, [
    addFavorite,
    id,
    title,
    titleAr,
    description,
    descriptionAr,
    image,
    price,
    color,
    colorAr,
    details,
    detailsAr,
    alt,
    size,
    gender,
    type,
    imageid,
    category,
    dashboardType,
    toast,
    t,
    locale,
  ]);

  const removeFromFavorite = useCallback(() => {
    removeFavorite(id);
    toast({
      title: `${locale === "ar" ? titleAr : title}`,
      description: t("common.favremovedmessage"),
    });
  }, [removeFavorite, id, title, toast, t, locale, titleAr]);

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
      alt,
      details,
      detailsAr,
      size,
      gender,
      type,
      imageid,
      category,
      dashboardType,
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
    details,
    detailsAr,
    alt,
    size,
    gender,
    type,
    imageid,
    category,
    dashboardType,
    toast,
    t,
    setCartPending,
    locale,
  ]);

  return (
    <div>
      <Link href={`product/${id}`}>
        <div className="group relative">
          <div className="p-2 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75">
            <Image
              src={image}
              alt={alt}
              width={200}
              height={200}
              className="w-[200px] h-[200px] object-contain rounded-xl"
            />
          </div>
          <div className="mt-4 flex justify-between">
            <div>
              <p className="rtl:font-arabic text-lg text-gray-900 font-sans truncate w-32">
                {locale === "ar" ? titleAr : title}
              </p>
              <p className="rtl:font-arabic mt-1 text-lg text-gray-900">
                {locale === "ar" ? colorAr : color}
              </p>
            </div>
            {dashboardType === "discounted" ? (
              <div className="bg-yellow-300 max-h-8 p-2 shadow-lg font-bold text-gray-900 flex items-center rounded-md">
                <p className="relative">
                  <span className="text-lg mt-1">
                    {t("product.price")}
                  </span>
                  {" "}<span className="text-2xl">{price}</span>
                </p>
              </div>
            ) : (
              <div className="bg-white max-h-8 p-2 flex items-center font-bold text-gray-900">
                <p className="relative">
                  <span className="text-lg mt-1">
                    {t("product.price")}
                  </span>
                  {" "}<span className="text-2xl">{price}</span>
                </p>
              </div>
            )}
          </div>
        </div>
      </Link>
      <p
        className={`mt-2 px-2 rounded-md w-fit ${
          qty <= 0 ? "bg-blue-500 text-white" : "text-blue-500"
        }`}
      >
        {qty <= 0 ? t("product.outstock") : t("product.instock")}
      </p>
      {qty > 0 && (
        <div className="flex flex-row gap-4 items-center">
          {!cartPending ? (
            <TbShoppingBagPlus
              title="Add to bag"
              onClick={addToCartHandler}
              className="mt-2 text-lg font-sans tracking-wide bg-blue-500 rounded-full w-10 h-10 text-white p-1.5 hover:bg-blue-800 cursor-pointer"
              aria-label="Add to cart"
            />
          ) : (
            <div className="w-10 h-10 mt-2">
              <Lottie animationData={Loading} loop={true} />
            </div>
          )}
          {isFavorite ? (
            <TbHeartFilled
              title="Remove from favorite"
              size={30}
              onClick={removeFromFavorite}
              className="mt-2 text-lg font-sans tracking-wide text-red-500 hover:text-red-400"
              aria-label="Remove from favorite"
            />
          ) : (
            <TbHeart
              title="Add to favorite"
              size={30}
              onClick={addToFavorite}
              className="mt-2 text-lg font-sans tracking-wide text-gray-400 hover:text-red-500"
              aria-label="Add to favorite"
            />
          )}
        </div>
      )}
    </div>
  );
}

export default ProductCard;
