"use client";

import React from "react";
import Image from "next/image";
import { MdOutlineDelete } from "react-icons/md";
import { TbShoppingBagPlus } from "react-icons/tb";
import { useItemStore } from "../../lib/store";
import Checkout from "./checkout";
import { useI18n } from "@/locales/client";

export default function ItemsList({
  totalQuantity,
  allPrice,
  pageData,
  pagePath,
}) {
  const { removeFavorite } = useItemStore();
  const t = useI18n();

  return (
    <div>
      <h2 className="text-4xl font-bold tracking-tight text-gray-900 my-8">
        Your favorites
      </h2>

      <div className="flex md:flex-row flex-col-reverse font-sans justify-center gap-10 ">
        <div className="basis-3/5">
          <div className="mt-4 space-y-4 ">
            <p className="">{totalQuantity} {t("product.total")}</p>

            <div className="flow-root">
              <ul
                role="list"
                className="-my-6 mt-2 divide-y divide-gray-200 border-t border-gray-200 "
              >
                {pageData.map((product) => (
                  <li key={product.id} className="flex py-6">
                    <div className="h-25 w-25 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                      <Image
                        width={100}
                        height={100}
                        alt={product.image}
                        src={product.image}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div className="ml-4 flex flex-1 flex-col gap-6">
                      <div>
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <h3>{product.title}</h3>
                          <p className="ml-4">
                            {product.price} {t("product.price")}
                          </p>
                        </div>
                        <p className="mt-1 text-sm text-gray-500">
                          {product.color}
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                          {product.description}
                        </p>
                      </div>

                      <div className="flex flex-1 items-end justify-between text-sm">
                        {pagePath === "/en/favorite" ||
                          (pagePath === "/ar/favorite" && (
                            <>
                              <TbShoppingBagPlus
                                size={30}
                                style={{ cursor: "pointer" }}
                                onClick={() => addToCartHandler(product)}
                                className="text-gray-400 hover:text-gray-800"
                              />
                              <MdOutlineDelete
                                size={30}
                                style={{ cursor: "pointer" }}
                                onClick={() => removeFavorite(product.id)}
                                className="text-gray-400 hover:text-red-600"
                              />
                            </>
                          ))}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="basis-2/5">
          <Checkout
            allPrice={allPrice}
            totalQuantity={totalQuantity}
            pagePath={pagePath}
          />
        </div>
      </div>
    </div>
  );
}
