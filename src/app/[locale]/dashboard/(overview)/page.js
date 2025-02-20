import React from "react";
import { Suspense } from "react";
import { TableSkeleton } from "@/components/UI/skeletons";
import { getProducts } from "@/lib/db/products";
import { DataTable } from "@/components/dashboard/data-table";

export default async function Dashboard() {
  const { products = [] } = await getProducts();

  return (
    <Suspense fallback={<TableSkeleton />}>
      <DataTable data={products} />
    </Suspense>
  );
}
