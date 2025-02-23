"use client";

import { Suspense, useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/UI/button";
import { useCurrentLocale, useI18n } from "@/locales/client";
import { useOrderStore } from "@/lib/orderStore";

function OrderDetails({ data }) {
  const [orders, setOrders] = useState(null);
  const t = useI18n();
  const locale = useCurrentLocale();
  const { setIsBackdropOpen, setId } = useOrderStore();

  useEffect(() => {
    if (data) {
      setOrders(data);
    }
  }, [data]);

  const getCategoryLabel = (category) => {
    switch (category) {
      case "mtshirt":
        return "men T-Shirts";
      case "wtshirt":
        return "Women T-Shirts";
      case "mshirt":
        return "Men Shirts";
      case "wshirt":
        return "Women Shirts";
      case "mblouse":
        return "Men Wool blouses";
      case "wblouse":
        return "Women Wool blouses";
      case "mhats":
        return "Men Hats";
      case "whats":
        return "Women Hats";
      case "mwatches":
        return "Men Watches";
      case "wwatches":
        return "Women Watches";
      case "mbag":
        return "Men Bags";
      case "wbag":
        return "Women Bags";
      case "mjeans":
        return "Men Jeans";
      case "wjeans":
        return "Women Jeans";
      case "mpants":
        return "Men Pants";
      case "wpants":
        return "Women Pants";
      case "msocks":
        return "Men Socks";
      case "wsocks":
        return "Women Socks";
      case "mbelts":
        return "Men Belts";
      case "wbelts":
        return "Women Belts";
      case "mwork":
        return "Men Work & Safty Shoes";
      case "mloafers":
        return "Men Loafers & Slip-Ons";
      case "wloafers":
        return "Women Loafers & Slip-Ons";
      case "msnow":
        return "Men Snow Boots";
      case "wsnow":
        return "Women Snow Boots";
      case "mcasual":
        return "Men Casual Shoes";
      case "mboots":
        return "Men Boots";
      case "msandals":
        return "Men Sandals";
      case "mothers":
        return "Men Others";
      case "wothers":
        return "Women Others";
      case "wflats":
        return "Women Flats";
      case "wslippers":
        return "Women Slippers";
      case "wsneakers":
        return "Women Sneakers";
      default:
        return String(category); // Fallback if the category doesn't match
    }
  };

  async function orderDeleteHandler(id) {
    setId(id);
    setIsBackdropOpen(true);
  }

  if (!orders) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <div className="mt-6 p-4 rounded-md shadow-md shadow-blue-200 capitalize">
          <div className="flex lg:flex-row flex-col justify-between gap-4">
            <div className="space-y-2 sm:text-2xl font-bold">
              <p>
                {t("checkout.address.firstline")}:{" "}
                <span className="text-blue-600 font-medium">
                  {orders.firstline}
                </span>
              </p>
              <p>
                {t("checkout.address.secondline")}:{" "}
                <span className="text-blue-600 font-medium">
                  {orders.secondline}
                </span>
              </p>
              <p>
                {t("common.form.city")}:{" "}
                <span className="text-blue-600 font-medium">{orders.city}</span>
              </p>
              <p>
                {t("common.form.phonenumber")}:{" "}
                <span className="text-blue-600 font-medium">
                  {orders.phonenumber}
                </span>
              </p>
              <p>
                {t("common.form.email")}:{" "}
                <span className="text-blue-600 font-medium">
                  {orders.email}
                </span>
              </p>
              <p className="text-balance sm:max-w-[600px] max-w-60 h-auto">
                {t("common.form.additional")}:{" "}
                <span className="text-blue-600 font-medium break-words">
                  {orders.additional}
                </span>
              </p>
            </div>
            <div className="grid content-between capitalize sm:text-2xl font-bold gap-4">
              {!orders.delivered ? (
                <p className="flex justify-end text-blue-600">
                  {t("checkout.indelivery")}
                </p>
              ) : (
                <p className="flex justify-center p-2 text-3xl text-blue-600 bg-yellow-300 rounded-lg shadow-lg">
                  {t("checkout.delivered")}
                </p>
              )}
              <div className="flex justify-end gap-2">
                {t("product.total")}:
                <p className="bg-yellow-300 px-2 rounded-md">
                  <span className="text-blue-600">{orders.totalall} </span>
                  <span className="text-lg font-medium">
                    {t("product.price")}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {orders.items && (
          <div className="mt-6 p-4 rounded-md shadow-md shadow-blue-200">
            {orders.items.map((item, index) => (
              <div key={item.id}>
                <div className="flex lg:flex-row flex-col gap-4">
                  <div className="basis-1/2 space-y-4 sm:text-2xl text-xl capitalize font-bold">
                    <div className="flex flex-row gap-4 items-center">
                      <h1 className="sm:text-3xl font-bold text-gray-900 capitalize">
                        {locale === "ar" ? item.titleAr : item.title}
                      </h1>
                      <div className="h-25 w-25 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <Image
                          width={100}
                          height={100}
                          alt={item.image}
                          src={item.image}
                        />
                      </div>
                    </div>
                    <h4 className="text-lg text-blue-500 font-bold mt-2">
                      <span className="capitalize">{item.clotheType}</span>{" "}
                      {item.gender === "men"
                        ? t("categories.formen")
                        : t("categories.forwomen")}
                    </h4>
                    <div className="flex flex-row gap-2 items-center">
                      <h3 className="text-lg sm:text-xl text-gray-800">
                        {t("product.color")}
                      </h3>
                      <h4 className="w-fit text-lg sm:text-xl font-medium text-blue-600 border-gray-800 border rounded-md px-2 py-1 capitalize">
                        {locale === "ar" ? item.colorAr : item.color}
                      </h4>
                    </div>
                    <div className="flex flex-row gap-2 items-center">
                      <h3 className="text-lg sm:text-xl text-gray-800">
                        {t("product.size")}
                      </h3>
                      <h4 className="w-fit text-lg sm:text-xl text-blue-600 font-medium border-gray-800 border rounded-md px-2 py-1 ">
                        {item.size || "N/A"}
                      </h4>
                    </div>
                    <div className="flex flex-row gap-2 sm:text-2xl text-lg">
                      <p>{t("common.price")}:</p>
                      <p className="font-medium text-blue-600">
                        {item.price || "N/A"}
                        <span className="text-sm mx-1 text-gray-800">
                          {t("product.perunit")}
                        </span>
                      </p>
                    </div>
                    <div className="flex flex-row gap-2 sm:text-2xl text-lg items-center">
                      <p className="">{t("common.total")}:</p>
                      <p className="font-medium bg-yellow-300 px-1 rounded-md text-blue-600">
                        {item.totalPrice || "N/A"}
                        <span className="text-lg mx-1">
                          {t("product.price")}
                        </span>
                      </p>
                    </div>
                    {/* -------------- */}
                  </div>
                  <div className="basis-1/2 space-y-4 sm:text-2xl capitalize font-bold">
                    <p className="text-blue-500 font-bold mt-2 ">
                      <span className="capitalize bg-yellow-300 px-1 rounded-md">
                        {item.dashboardType}
                      </span>{" "}
                    </p>
                    <div className="flex flex-row gap-2">
                      <p>{t("product.quantity")}:</p>
                      <p className="font-medium text-blue-600">
                        {item.quantity || "N/A"}
                      </p>
                    </div>
                    <div>
                      <div className="flex flex-row gap-2">
                        <p>{t("dashboard.typeofitem")}:</p>
                        <p className="font-medium text-blue-600">
                          {item.type || "N/A"}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-2">
                      <p>{t("product.description")}:</p>
                      <p className="font-medium text-blue-600">
                        {locale === "ar"
                          ? item.descriptionAr
                          : item.description}
                      </p>
                    </div>
                    <div className="flex flex-row gap-2">
                      <p>{t("product.details")}:</p>
                      <p className="font-medium text-blue-600">
                        {locale === "ar" ? item.detailsAr : item.details}
                      </p>
                    </div>
                    <div className="flex flex-row gap-2">
                      <p>{t("dashboard.category")}:</p>
                      <p className="font-medium text-blue-600">
                        {getCategoryLabel(item.category) || "N/A"}
                      </p>
                    </div>
                  </div>
                </div>
                {index < orders.items.length - 1 && (
                  <div className="border-t border-1 border-gray-400 w-full my-6" />
                )}
              </div>
            ))}
          </div>
        )}
        <div className="my-10">
          <Button
            size={"lg"}
            disabled={!orders.delivered}
            onClick={() => orderDeleteHandler(orders.id)}
            className="bg-red-500 hover:bg-red-700 text-xl rounded-full shadow-md"
          >
            {t("common.delete")} {t("settings.orderslist")}
          </Button>
        </div>
      </Suspense>
    </>
  );
}

export default OrderDetails;
