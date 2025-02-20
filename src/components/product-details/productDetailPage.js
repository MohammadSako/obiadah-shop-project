"use client";

import { useCallback } from "react";
import Image from "next/image";
import { TbHeart, TbHeartFilled } from "react-icons/tb";
import { useToast } from "@/hooks/use-toast";
import { useItemStore } from "@/lib/store";
import { useCurrentLocale, useI18n } from "@/locales/client";
import { ProductDetailsSkeleton } from "../UI/skeletons";

function ProductDetailPage({ products }) {
  const { toast } = useToast();
  // const [clotheType, setClotheType] = useState("");
  const { addItem, addFavorite, removeFavorite, favorite } = useItemStore();
  const t = useI18n();
  const locale = useCurrentLocale();
  const {
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
    size,
    alt,
    gender,
    type,
    qty,
  } = products;

  const isFavorite = favorite.some((item) => item.id === id);
  const clotheType =
    {
      top: t("categories.top"),
      lower: t("categories.lower"),
      shoes: t("categories.shoes"),
    }[type] || "n/a";

  const addToFavoriteHandler = useCallback(() => {
    addFavorite({
      id,
      title,
      description,
      image,
      price,
      color,
      alt,
      details,
      titleAr,
      descriptionAr,
      colorAr,
      detailsAr,
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
    image,
    price,
    color,
    details,
    titleAr,
    descriptionAr,
    colorAr,
    detailsAr,
    alt,
    toast,
    t,
  ]);

  const removeFromFavoriteHandler = useCallback(() => {
    removeFavorite(id);
    toast({
      title: `${locale === "ar" ? titleAr : title}`,
      description: t("common.favremovedmessage"),
    });
  }, [locale, removeFavorite, id, title, titleAr, toast, t]);

  const addToCartHandler = useCallback(() => {
    addItem({
      id,
      title,
      description,
      image,
      price,
      color,
      alt,
      details,
      titleAr,
      descriptionAr,
      colorAr,
      detailsAr,
    });
    toast({
      title: `${locale === "ar" ? titleAr : title}`,
      description: t("common.addedmessage"),
    });
  }, [
    locale,
    addItem,
    id,
    title,
    description,
    image,
    price,
    color,
    details,
    titleAr,
    descriptionAr,
    colorAr,
    detailsAr,
    alt,
    toast,
    t,
  ]);

  if (!image) {
    return <ProductDetailsSkeleton />;
  }

  return (
    <main className="sm:flex flex-col shadow-md rounded-md sm:mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 mb-20 p-10">
      <div className="bg-white">
        <div className="pt-6">
          <div className="px-4 flex md:flex-row flex-col gap-10 ">
            <div className="basis-1/2 lg:col-span-2 lg:pr-8">
              {image ? (
                <>
                  <div className="relative bg-white">
                    <div className="absolute cursor-pointer right-2 top-2 text-xl text-black bg-white rounded-full w-8 h-8">
                      <div className="flex flex-row space-x-6">
                        {isFavorite ? (
                          <TbHeartFilled
                            title="Remove from favorite"
                            size={26}
                            onClick={removeFromFavoriteHandler}
                            className="mx-auto mt-1 text-lg font-sans tracking-wide text-red-500 hover:text-red-400"
                          />
                        ) : (
                          <TbHeart
                            title="Add to favorite"
                            size={26}
                            onClick={addToFavoriteHandler}
                            className="mx-auto mt-1 text-lg font-sans tracking-wide text-red-500 hover:text-red-500"
                          />
                        )}
                      </div>
                    </div>
                    <Image
                      src={image}
                      alt={alt || "Product Image"}
                      width={400}
                      height={400}
                      style={{
                        objectFit: "cover",
                        width: "100%",
                        height: "100%",
                      }}
                      className="rounded-lg"
                    />
                  </div>
                </>
              ) : (
                <p className="text-gray-500">{t("product.noimage")}</p>
              )}
            </div>

            <div className="basis-1/2 space-y-4">
              <div className="flex justify-between">
                <h1 className="text-3xl font-bold text-gray-900 capitalize">
                  {locale === "ar" ? titleAr : title}
                </h1>
              </div>

              <div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-xl text-gray-500 font-bold">
                    {t("product.details")}:
                  </h3>
                  <h4 className="w-fit text-lg text-gray-400 border-gray-800 capitalize">
                    {locale === "ar" ? detailsAr : details}
                  </h4>
                </div>
              </div>
              <div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-xl text-gray-500 font-bold">
                    {t("product.description")}:
                  </h3>
                  <h4 className="w-fit text-lg text-gray-400 border-gray-800 capitalize">
                    {locale === "ar" ? descriptionAr : description}
                  </h4>
                </div>
              </div>
              <h4 className="text-lg text-blue-500 font-bold mt-2">
                {clotheType}{" "}
                {gender === "men"
                  ? t("categories.formen")
                  : t("categories.forwomen")}
              </h4>
              <div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-xl text-gray-800">
                    {t("product.color")}
                  </h3>
                  <h4 className="w-fit text-xl font-medium text-blue-600 border-gray-800 border rounded-md px-4 py-1 capitalize">
                    {locale === "ar" ? colorAr : color}
                  </h4>
                </div>
              </div>
              <div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-xl text-gray-800">{t("product.size")}</h3>
                  <h4 className="w-fit text-xl text-blue-600 font-bold border-gray-800 border rounded-md px-4 py-1 ">
                    {size || "N/A"}
                  </h4>
                </div>
              </div>
              <div>
                <div className="flex flex-col gap-1 items-end">
                  <div className="bg-white max-h-8 p-2 flex items-center font-bold text-gray-900 text-end">
                    <div className="relative space-x-1">
                      <span className="text-md mt-0.5 -left-5 absolute">
                        {t("product.price")}
                      </span>
                      <span className="text-4xl">{price}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-t border-gray-400" />
              {qty === 0 ? (
                <button
                  disabled
                  onClick={addToCartHandler}
                  className="mt-6 w-full h-10 px-8 text-lg font-bold text-white bg-blue-400 rounded-full focus:ring-2 focus:ring-blue-500"
                >
                  {t("product.outstock")}
                </button>
              ) : (
                <button
                  onClick={addToCartHandler}
                  className="mt-6 w-full h-10 px-8 text-lg font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:ring-2 focus:ring-blue-500"
                >
                  {t("product.addtocart")}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProductDetailPage;
