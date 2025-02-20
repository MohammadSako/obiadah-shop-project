"use client";

import React from "react";
import { useItemStore } from "@/lib/store";
import IsEmptyMsg from "../../../components/UI/isEmptyMsg";
import ItemsList from "../../../components/UI/itemsList";
import { usePathname } from "next/navigation";

export default function CartPage() {
  const path = usePathname();
  const { totalQuantity, totalAllPrice, items } = useItemStore();

  return (
    <main className="min-h-screen px-6 sm:px-6 lg:px-20">
      {totalQuantity === 0 && <IsEmptyMsg page={path} />}
      {totalQuantity > 0 && (
        <ItemsList
          totalQuantity={totalQuantity}
          allPrice={totalAllPrice}
          pageData={items}
          pagePath={path}
        />
      )}
    </main>
  );
}
