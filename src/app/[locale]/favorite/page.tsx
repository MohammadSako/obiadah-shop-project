"use client";

import React from "react";
import { useItemStore } from "@/lib/store";
import IsEmptyMsg from "../../../components/UI/isEmptyMsg";
import ItemsList from "../../../components/UI/itemsList";
import { usePathname } from "next/navigation";

export default function FavoritePage() {
  const path = usePathname();
  const { totalFavQuantity, totalFavAllPrice, favorite } = useItemStore();

  return (
    <main className="min-h-screen px-6 sm:px-6 lg:px-20">
      {totalFavQuantity === 0 && <IsEmptyMsg page={path} />}
      {totalFavQuantity > 0 && (
        <ItemsList
          totalQuantity={totalFavQuantity}
          allPrice={totalFavAllPrice}
          pageData={favorite}
          pagePath={path}
        />
      )}
    </main>
  );
}
