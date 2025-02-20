import { Suspense } from "react";
import { getCustomers } from "@/lib/db/products";
import { DataTable } from "./components/orders-data-table";
import { TableSkeleton } from "@/components/UI/skeletons";
export default async function CustomersOrders() {
  const { customers = [] } = await getCustomers();

  return (
    <Suspense fallback={<TableSkeleton />}>
      <DataTable data={customers} />
    </Suspense>
  );
}
