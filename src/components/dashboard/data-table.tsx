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
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react";

import { Button } from "@/components/UI/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
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
import Image from "next/image";
import { deleteImageByUrl, deleteProductById } from "@/lib/db/products";
import { useRouter } from "next/navigation";
import { useCurrentLocale, useI18n } from "@/locales/client";

export type Product = {
  id: string;
  title: string;
  titleAr: string;
  color: string;
  colorAr: string;
  size: string;
  price: string;
  image: string;
  imageid: string;
  alt: string;
  gender: string;
  type: string;
  description: string;
  descriptionAr: string;
  details: string;
  detailsAr: string;
  category: string;
  dashboardType: "product" | "discounted" | "bestseller" | "newarrival";
};

interface DataTableProps {
  data: Product[];
}

export function DataTable({ data }: DataTableProps) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});
  const router = useRouter();
  const t = useI18n();
  const locale = useCurrentLocale();

  const columns: ColumnDef<Product>[] = [
    {
      accessorKey: locale === "ar" ? "titleAr" : "title",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            {t("dashboard.list.name")}
            <ArrowUpDown />
          </Button>
        );
      },
      cell: ({ row }) => (
        <div className="capitalize font-bold truncate max-w-32 text-red-500">
          {row.getValue(locale === "ar" ? "titleAr" : "title")}
        </div>
      ),
    },
    {
      accessorKey: "qty",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            {t("dashboard.list.availableQty")}
            <ArrowUpDown />
          </Button>
        );
      },
      cell: ({ row }) => (
        <div className="capitalize font-bold">{row.getValue("qty")}</div>
      ),
    },
    {
      accessorKey: "dashboardType",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            {t("dashboard.list.type")}
            <ArrowUpDown />
          </Button>
        );
      },
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("dashboardType")}</div>
      ),
    },
    {
      accessorKey: "gender",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            {t("common.form.gender")}
            <ArrowUpDown />
          </Button>
        );
      },
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("gender")}</div>
      ),
    },

    {
      accessorKey: "type",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            {t("dashboard.list.toplow")}
            <ArrowUpDown />
          </Button>
        );
      },
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("type")}</div>
      ),
    },
    {
      accessorKey: "category",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            {t("dashboard.list.category")}
            <ArrowUpDown />
          </Button>
        );
      },
      cell: ({ row }) => {
        const category = row.getValue("category");
        let categoryLabel: string;
        switch (category) {
          case 1:
            categoryLabel = t("categories.tshirts");
            break;
          case 2:
            categoryLabel = t("categories.tshirts");
            break;
          case 3:
            categoryLabel = t("categories.shirts");
            break;
          case 4:
            categoryLabel = t("categories.shirts");
            break;
          case 5:
            categoryLabel = t("categories.woolblouses");
            break;
          case 6:
            categoryLabel = t("categories.woolblouses");
            break;
          case 7:
            categoryLabel = t("categories.hats");
            break;
          case 8:
            categoryLabel = t("categories.hats");
            break;
          case 9:
            categoryLabel = t("categories.watches");
            break;
          case 10:
            categoryLabel = t("categories.watches");
            break;
          case 11:
            categoryLabel = t("categories.bags");
            break;
          case 12:
            categoryLabel = t("categories.bags");
            break;
          case 13:
            categoryLabel = t("categories.jeans");
            break;
          case 14:
            categoryLabel = t("categories.jeans");
            break;
          case 15:
            categoryLabel = t("categories.pants");
            break;
          case 16:
            categoryLabel = t("categories.pants");
            break;
          case 17:
            categoryLabel = t("categories.socks");
            break;
          case 18:
            categoryLabel = t("categories.socks");
            break;
          case 19:
            categoryLabel = t("categories.belts");
            break;
          case 20:
            categoryLabel = t("categories.belts");
            break;
          case 21:
            categoryLabel = t("categories.safty");
            break;
          case 22:
            categoryLabel = t("categories.loafers");
            break;
          case 23:
            categoryLabel = t("categories.loafers");
            break;
          case 24:
            categoryLabel = t("categories.snow");
            break;
          case 25:
            categoryLabel = t("categories.snow");
            break;
          case 26:
            categoryLabel = t("categories.casual");
            break;
          case 27:
            categoryLabel = t("categories.boots");
            break;
          case 28:
            categoryLabel = t("categories.sandals");
            break;
          case 29:
            categoryLabel = t("categories.others");
            break;
          case 30:
            categoryLabel = t("categories.others");
            break;
          case 31:
            categoryLabel = t("categories.flats");
            break;
          case 32:
            categoryLabel = t("categories.slippers");
            break;
          case 33:
            categoryLabel = t("categories.sneakers");
            break;
          default:
            categoryLabel = String(category); // Fallback if the category doesn't match
            break;
        }
        return <div className="capitalize">{categoryLabel}</div>;
      },
    },
    {
      accessorKey: "size",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            {t("product.size")}
            <ArrowUpDown />
          </Button>
        );
      },
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("size")}</div>
      ),
    },
    {
      accessorKey: locale === "ar" ? "colorAr" : "color",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            {t("product.color")}
            <ArrowUpDown />
          </Button>
        );
      },
      cell: ({ row }) => (
        <div className="capitalize">
          {row.getValue(locale === "ar" ? "colorAr" : "color")}
        </div>
      ),
    },
    {
      accessorKey: "price",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            {t("product.price")}
            <ArrowUpDown />
          </Button>
        );
      },
      cell: ({ row }) => {
        const amount = parseFloat(row.getValue("price"));

        const formatted = new Intl.NumberFormat("en-JO", {
          style: "currency",
          currency: "JOD",
        }).format(amount);

        return <div className="text-right font-medium">{formatted}</div>;
      },
    },
    {
      accessorKey: locale === "ar" ? "descriptionAr" : "description",
      header: t("product.description"),
      cell: ({ row }) => (
        <div className="capitalize truncate w-20">
          {row.getValue(locale === "ar" ? "descriptionAr" : "description")}
        </div>
      ),
    },
    {
      accessorKey: locale === "ar" ? "detailsAr" : "details",
      header: t("product.details"),
      cell: ({ row }) => (
        <div className="capitalize truncate w-20">
          {row.getValue(locale === "ar" ? "detailsAr" : "details")}
        </div>
      ),
    },
    {
      accessorKey: "image",
      header: t("dashboard.list.image"),
      cell: ({ row }) => (
        <Image src={row.getValue("image")} width={50} height={50} alt="image" />
      ),
    },
    {
      id: "actions",
      enableHiding: false,
      cell: ({ row }) => {
        const product = row.original;
        const imageid = product.imageid;

        async function onDeleteHandle(id: string) {
          try {
            await deleteImageByUrl(imageid);
            await deleteProductById(id);
          } catch (error) {
            console.error("Error adding product:", error);
          }
        }
        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => onDeleteHandle(product.id)}>
                {t("dashboard.list.deleteprod")}
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={() => {
                  router.push("/dashboard/" + product.id + "/edit");
                }}
              >
                {t("dashboard.list.updateprod")}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
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
  return (
    <div className="w-full mt-4">
      <div className="mx-auto py-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-800">
          {t("dashboard.productlist")}
        </h1>
      </div>
      <div className="flex items-center py-4 gap-4">
        <Input
          placeholder={t("dashboard.list.filter")}
          value={
            (table
              .getColumn(locale === "ar" ? "titleAr" : "title")
              ?.getFilterValue() as string) ?? ""
          }
          onChange={(event) =>
            table
              .getColumn(locale === "ar" ? "titleAr" : "title")
              ?.setFilterValue(event.target.value)
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
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-lg text-muted-foreground">
          {t("dashboard.list.totalitems")}:{" "}
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
