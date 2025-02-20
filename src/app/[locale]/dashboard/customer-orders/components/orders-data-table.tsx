"use client";

import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ArrowUpDown, ChevronDown } from "lucide-react";
import { Button } from "@/components/UI/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/UI/dropdown-menu";
import { Input } from "@/components/UI/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/UI/table";
import { useRouter } from "next/navigation";
import { useI18n } from "@/locales/client";

export type Customer = {
  id: number;
  firstname: string;
  lastname: string;
  phonenumber: string;
  delivered: boolean;
  firstline: string;
  secondline: string;
  email: string;
  city: string;
  additional: string;
};

interface DataTableProps {
  data: Customer[];
}

export function DataTable({ data }: DataTableProps) {
  const router = useRouter();
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});
  const t = useI18n();

  const columns: ColumnDef<Customer>[] = [
    {
      accessorKey: "firstname",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            {t("common.form.name")}
            <ArrowUpDown />
          </Button>
        );
      },
      cell: ({ row }) => (
        <div className="capitalize font-bold truncate max-w-32 text-red-500">
          {row.getValue("firstname")}
        </div>
      ),
    },
    {
      accessorKey: "lastname",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            {t("common.form.lastname")}
            <ArrowUpDown />
          </Button>
        );
      },
      cell: ({ row }) => (
        <div className="capitalize font-bold truncate max-w-32 text-gray-700">
          {row.getValue("lastname")}
        </div>
      ),
    },
    {
      accessorKey: "delivered",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            {t("common.form.delivery")}
            <ArrowUpDown />
          </Button>
        );
      },
      cell: ({ row }) => (
        <div className="capitalize font-bold truncate max-w-32 text-gray-700">
          {row.getValue("delivered")
            ? t("common.form.isDelivered")
            : t("common.form.notDelivered")}
        </div>
      ),
    },
    {
      accessorKey: "phonenumber",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            {t("common.form.phonenumber")}
            <ArrowUpDown />
          </Button>
        );
      },
      cell: ({ row }) => <div className="">{row.getValue("phonenumber")}</div>,
    },
    {
      accessorKey: "firstline",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            {t("checkout.address.firstline")}
            <ArrowUpDown />
          </Button>
        );
      },
      cell: ({ row }) => (
        <div className="capitalize truncate max-w-32">
          {row.getValue("firstline")}
        </div>
      ),
    },
    {
      accessorKey: "secondline",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            {t("checkout.address.secondline")}
            <ArrowUpDown />
          </Button>
        );
      },
      cell: ({ row }) => (
        <div className="capitalize truncate max-w-32">
          {row.getValue("secondline")}
        </div>
      ),
    },
    {
      accessorKey: "city",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            {t("common.form.city")}
            <ArrowUpDown />
          </Button>
        );
      },
      cell: ({ row }) => (
        <div className="capitalize truncate max-w-32">
          {row.getValue("city")}
        </div>
      ),
    },
    {
      accessorKey: "email",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            {t("common.form.email")}
            <ArrowUpDown />
          </Button>
        );
      },
      cell: ({ row }) => (
        <div className="truncate">{row.getValue("email")}</div>
      ),
    },
    {
      accessorKey: "additional",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            {t("common.form.additional")}
            <ArrowUpDown />
          </Button>
        );
      },
      cell: ({ row }) => (
        <div className="truncate">{row.getValue("additional")}</div>
      ),
    },
  ];

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  function customerDetailHandler(id: number) {
    router.push(`/dashboard/customer-orders/${id}`);
  }

  return (
    <div className="w-full mt-4">
      <div className="mx-auto py-6">
        <h1 className="text-3xl font-bold tracking-tight text-blue-700">
          {t("settings.orderslist")}
        </h1>
      </div>
      <div className="flex items-center py-4 gap-4">
        <Input
          placeholder={t("dashboard.list.filter")}
          value={
            (table.getColumn("firstname")?.getFilterValue() as string) ?? ""
          }
          onChange={(event) =>
            table.getColumn("firstname")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              {t("dashboard.list.columns")} <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  className="cursor-pointer"
                  onClick={() => customerDetailHandler(row.original.id)}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  {t("common.noresults")}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* last section */}
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-lg text-muted-foreground">
          {t("dashboard.orders")}:{" "}
          <span className="font-bold">
            {table.getFilteredRowModel().rows.length}
          </span>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            {t("common.previous")}
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            {t("common.next")}
          </Button>
        </div>
      </div>
    </div>
  );
}
