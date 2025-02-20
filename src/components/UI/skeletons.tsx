const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

export function CategoryBackgroundImageSkeleton() {
  return (
    <main className="animate-pulse flex flex-row mx-auto gap-4 mt-20">
      <div className="flex flex-col items-center space-y-4">
        <div className="h-[400px] w-screen rounded-lg bg-gray-200"></div>
      </div>
    </main>
  );
}
export function CategoryImagesSkeleton() {
  return (
    <main className="animate-pulse flex flex-row mx-auto gap-4 mt-20">
      <div className="flex flex-col items-center space-y-4">
        <div className="h-[30px] w-[150px] rounded-lg bg-gray-50"></div>
        <div className="h-[200px] w-[200px] rounded-lg bg-gray-100"></div>
      </div>
      <div className="flex flex-col items-center space-y-4">
        <div className="h-[30px] w-[150px] rounded-lg bg-gray-50"></div>
        <div className="h-[200px] w-[200px] rounded-lg bg-gray-100"></div>
      </div>
    </main>
  );
}

export function CardImagesSkeleton() {
  return (
    <main className="animate-pulse flex flex-row mx-auto mt-20">
      <div className="flex flex-col space-y-4">
        <div className="flex flex-col items-center space-y-4">
          <div className="h-[40px] w-[150px] rounded-lg bg-gray-50"></div>
          <div className="h-[300px] w-[260px] rounded-lg bg-gray-100 shadow-lg"></div>
        </div>
        <div className="flex flex-row justify-between">
          <div className="flex flex-col space-y-2">
            <div className="h-[22px] w-[100px] rounded-lg bg-gray-100"></div>
            <div className="h-[15px] w-[70px] rounded-lg bg-gray-100"></div>
            <div className="h-[15px] w-[90px] rounded-lg bg-gray-100"></div>
          </div>
          <div className="flex flex-col">
            <div className="h-[70px] w-[70px] rounded-lg bg-gray-100"></div>
          </div>
        </div>
      </div>
    </main>
  );
}
export function ProductDetailsSkeleton() {
  return (
    <main className="animate-pulse container flex mx-auto mt-8 min-h-screen">
      <div className=" flex sm:flex-row flex-col sm:h-[500px] h-[300px] sm:w-[1100px] w-80 mx-auto rounded-md bg-gray-100 shadow-lg">
        <div className="basis-1/2 p-6">
          <div className="sm:h-[450px] h-64 sm:w-[500px] bg-gray-200"></div>
        </div>
        <div className="basis-1/2 flex flex-col p-6 gap-10">
          <div className="h-[40px] w-[200px] rounded-lg bg-gray-200" />
          <div className="h-[20px] w-[70px] rounded-lg bg-gray-200" />
          <div className="h-[20px] w-[150px] rounded-lg bg-gray-200" />
          <div className="h-[20px] w-[200px] rounded-lg bg-gray-200" />
          <div className="h-[40px] w-[100px] rounded-lg bg-gray-200" />
          <div className="h-[40px] w-[100px] rounded-lg bg-gray-200" />
          <div className="h-[40px] sm:w-[400px] rounded-full bg-gray-200" />
        </div>
      </div>
    </main>
  );
}

export function TableSkeleton() {
  return (
    <div className="animate-pulse mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            <InvoicesMobileSkeleton />
            <InvoicesMobileSkeleton />
            <InvoicesMobileSkeleton />
            <InvoicesMobileSkeleton />
            <InvoicesMobileSkeleton />
            <InvoicesMobileSkeleton />
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Name
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Type
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Gender
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Top/Lower
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Category
                </th>
                <th
                  scope="col"
                  className="relative pb-4 pl-3 pr-6 pt-2 sm:pr-6"
                >
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default function DashboardSkeleton() {
  return (
    <>
      <div
        className={`${shimmer} animate-pulse relative mb-4 h-8 w-48 overflow-hidden rounded-md bg-gray-100`}
      />
      <div className="animate-pulse mt-6 grid grid-cols-1 gap-6 ">
        <LatestInvoicesSkeleton />
      </div>
    </>
  );
}

export function FormSkeleton() {
  return (
    <div className="flex sm:flex-row gap-8 flex-col-reverse">
      <div
        className={`${shimmer} animate-pulse relative flex w-full flex-col overflow-hidden md:col-span-4`}
      >
        <div className="mb-8 h-10 w-60 rounded-md bg-gray-100" />
        <div className="bg-white">
          <div className="flex flex-col justify-between gap-12">
            <div className="flex  flex-row space-x-8">
              <div className="grow">
                <div className="h-10  rounded-md bg-gray-200" />
              </div>
              <div className="grow">
                <div className="h-10  rounded-md bg-gray-200" />
              </div>
            </div>
            <div className="flex  flex-row space-x-8">
              <div className="grow">
                <div className="h-10  rounded-md bg-gray-200" />
              </div>
              <div className="grow">
                <div className="h-10  rounded-md bg-gray-200" />
              </div>
            </div>
            <div className="flex  flex-row space-x-8">
              <div className="grow">
                <div className="h-10  rounded-md bg-gray-200" />
              </div>
              <div className="grow">
                <div className="h-10  rounded-md bg-gray-200" />
              </div>
            </div>
            <div className="flex  flex-row space-x-8">
              <div className="grow">
                <div className="h-10  rounded-md bg-gray-200" />
              </div>
              <div className="grow">
                <div className="h-10  rounded-md bg-gray-200" />
              </div>
            </div>
            <div className="flex  flex-row space-x-8">
              <div className="grow">
                <div className="h-10  rounded-md bg-gray-200" />
              </div>
              <div className="grow">
                <div className="h-20  rounded-md bg-gray-200" />
              </div>
            </div>
          </div>
        </div>
        <div className="pb-2 pt-6">
          <div className="h-10 w-32 rounded-md bg-gray-200" />
        </div>
      </div>
      <div className="mt-20 h-96 w-96 rounded-md bg-gray-100" />
    </div>
  );
}

export function CardSkeleton() {
  return (
    <div
      className={`${shimmer} animate-pulse relative overflow-hidden rounded-xl bg-gray-100 p-2 shadow-sm`}
    >
      <div className="flex p-4">
        <div className="h-5 w-5 rounded-md bg-gray-200" />
        <div className="ml-2 h-6 w-16 rounded-md bg-gray-200 text-sm font-medium" />
      </div>
      <div className="flex items-center justify-center truncate rounded-xl bg-white px-4 py-8">
        <div className="h-7 w-20 rounded-md bg-gray-200" />
      </div>
    </div>
  );
}

export function CardsSkeleton() {
  return (
    <>
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </>
  );
}

export function CarouselPageSkeleton() {
  return (
    <>
      <div className="h-10 w-52 rounded-md bg-gray-100 my-4 mt-6" />
      <div
        className={`${shimmer} animate-pulse relative overflow-hidden rounded-xl bg-gray-100 p-2 shadow-sm`}
      >
        <div className="flex flex-col items-center justify-center truncate rounded-xl bg-white px-4 py-6 space-y-2">
          <div className="h-10 w-10 rounded-md bg-gray-100" />
          <div className="h-4 w-52 rounded-md bg-gray-100 text-sm font-medium" />
          <div className="h-4 w-64 rounded-md bg-gray-100" />
          <div className="h-10 w-80 rounded-md bg-gray-100" />
        </div>
      </div>
      <div className="h-4 w-28 rounded-md bg-gray-100 mt-4" />
      <div className="h-10 w-80 rounded-md bg-gray-100 mt-4" />
      <div className="h-10 w-36 rounded-md bg-gray-100 mt-4" />
    </>
  );
}
export function CarouselSkeleton() {
  return (
    <>
      <div
        className={`${shimmer} animate-pulse mx-10 w-full mt-10 relative overflow-hidden bg-gray-100 p-2 shadow-sm`}
      >
        <div className="flex flex-col items-center justify-center truncate bg-white px-4 py-4 space-y-2">
          <div className="h-[400px] w-full rounded-md bg-gray-100" />
        </div>
      </div>
    </>
  );
}
export function CarouselListSkeleton() {
  return (
    <>
      <div className="h-8 w-44 rounded-md bg-gray-100 my-4 mt-14" />
      <div
        className={`${shimmer} animate-pulse relative overflow-hidden rounded-xl bg-gray-100 p-2 shadow-sm`}
      >
        <div className="flex flex-row justify-between items-center truncate bg-white px-4 py-4 space-y-2">
          <div className="h-32 w-96 rounded-md bg-gray-200" />
          <div className="h-14 w-10 rounded-md bg-gray-200" />
        </div>
        <div className="flex flex-row justify-between items-center truncate bg-white px-4 py-4 space-y-2">
          <div className="h-32 w-96 rounded-md bg-gray-200" />
          <div className="h-14 w-10 rounded-md bg-gray-200" />
        </div>
        <div className="flex flex-row justify-between items-center truncate bg-white px-4 py-4 space-y-2">
          <div className="h-32 w-96 rounded-md bg-gray-200" />
          <div className="h-14 w-10 rounded-md bg-gray-200" />
        </div>
      </div>
    </>
  );
}

export function RevenueChartSkeleton() {
  return (
    <div
      className={`${shimmer} animate-pulse relative w-full overflow-hidden md:col-span-4`}
    >
      <div className="mb-4 h-8 w-36 rounded-md bg-gray-100" />
      <div className="rounded-xl bg-gray-100 p-4">
        <div className="mt-0 grid h-[410px] grid-cols-12 items-end gap-2 rounded-md bg-white p-4 sm:grid-cols-13 md:gap-4" />
        <div className="flex items-center pb-2 pt-6">
          <div className="h-5 w-5 rounded-full bg-gray-200" />
          <div className="ml-2 h-4 w-20 rounded-md bg-gray-200" />
        </div>
      </div>
    </div>
  );
}

export function InvoiceSkeleton() {
  return (
    <div className="animate-pulse flex flex-row items-center justify-between border-b border-gray-100 py-4">
      <div className="flex flex-row gap-10">
        <div className="min-w-0">
          <div className="h-5 w-24 rounded-md bg-gray-200" />
        </div>
        <div className="min-w-0">
          <div className="h-5 w-20 rounded-md bg-gray-200" />
        </div>
        <div className="min-w-0">
          <div className="h-5 w-20 rounded-md bg-gray-200" />
        </div>
        <div className="min-w-0">
          <div className="h-5 w-20 rounded-md bg-gray-200" />
        </div>
        <div className="min-w-0">
          <div className="h-5 w-20 rounded-md bg-gray-200" />
        </div>
        <div className="min-w-0">
          <div className="h-5 w-20 rounded-md bg-gray-200" />
        </div>
        <div className="min-w-0">
          <div className="h-5 w-20 rounded-md bg-gray-200" />
        </div>
        <div className="min-w-0">
          <div className="h-5 w-20 rounded-md bg-gray-200" />
        </div>
        <div className="min-w-0">
          <div className="h-5 w-20 rounded-md bg-gray-200" />
        </div>
        <div className="min-w-0">
          <div className="h-5 w-20 rounded-md bg-gray-200" />
        </div>
      </div>
      <div className="min-w-0">
        <div className="h-14 w-10 rounded-md bg-gray-200" />
      </div>
    </div>
  );
}

export function LatestInvoicesSkeleton() {
  return (
    <div
      className={`${shimmer} animate-pulse relative flex w-full flex-col overflow-hidden md:col-span-4`}
    >
      <div className="mb-4 h-8 w-96 rounded-md bg-gray-100" />
      <div className="flex grow flex-col justify-between rounded-xl bg-gray-100 p-4">
        <div className="bg-white px-6">
          <InvoiceSkeleton />
          <InvoiceSkeleton />
          <InvoiceSkeleton />
          <InvoiceSkeleton />
          <InvoiceSkeleton />
        </div>
      </div>
      <div className="flex items-center pb-2 pt-6 space-x-2">
        <div className="ml-2 h-4 w-20 rounded-md bg-gray-200" />
        <div className="h-5 w-5 rounded-full bg-gray-200" />
      </div>
    </div>
  );
}
export function DataSkeleton() {
  return (
    <div
      className={`${shimmer} animate-pulse relative flex w-full flex-col overflow-hidden md:col-span-4`}
    >
      <div className="flex grow flex-col justify-between rounded-xl bg-gray-100 p-4">
        <div className="bg-white px-6">
          <InvoiceSkeleton />
          <InvoiceSkeleton />
          <InvoiceSkeleton />
          <InvoiceSkeleton />
          <InvoiceSkeleton />
        </div>
      </div>
    </div>
  );
}

export function ListSkeleton() {
  return (
    <>
      <div className="animate-pulse mt-6 grid grid-cols-1 gap-6 ">
        <DataSkeleton />
      </div>
    </>
  );
}

export function TableRowSkeleton() {
  return (
    <tr className=" animate-pulse w-full border-b border-gray-100 last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
      {/* Customer Name and Image */}
      <td className="relative overflow-hidden whitespace-nowrap py-3 pl-6 pr-3">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-gray-100"></div>
          <div className="h-6 w-24 rounded bg-gray-100"></div>
        </div>
      </td>
      {/* Email */}
      <td className="whitespace-nowrap px-3 py-3">
        <div className="h-6 w-32 rounded bg-gray-100"></div>
      </td>
      {/* Amount */}
      <td className="whitespace-nowrap px-3 py-3">
        <div className="h-6 w-16 rounded bg-gray-100"></div>
      </td>
      {/* Date */}
      <td className="whitespace-nowrap px-3 py-3">
        <div className="h-6 w-16 rounded bg-gray-100"></div>
      </td>
      {/* Status */}
      <td className="whitespace-nowrap px-3 py-3">
        <div className="h-6 w-16 rounded bg-gray-100"></div>
      </td>
      {/* Actions */}
      <td className="whitespace-nowrap py-3 pl-6 pr-3">
        <div className="flex justify-end gap-3">
          <div className="h-[38px] w-[38px] rounded bg-gray-100"></div>
          <div className="h-[38px] w-[38px] rounded bg-gray-100"></div>
        </div>
      </td>
    </tr>
  );
}

export function InvoicesMobileSkeleton() {
  return (
    <div className="animate-pulse mb-2 w-full rounded-md bg-white p-4">
      <div className="flex items-center justify-between border-b border-gray-100 pb-8">
        <div className="flex items-center">
          <div className="mr-2 h-8 w-8 rounded-full bg-gray-100"></div>
          <div className="h-6 w-16 rounded bg-gray-100"></div>
        </div>
        <div className="h-6 w-16 rounded bg-gray-100"></div>
      </div>
      <div className="flex w-full items-center justify-between pt-4">
        <div>
          <div className="h-6 w-16 rounded bg-gray-100"></div>
          <div className="mt-2 h-6 w-24 rounded bg-gray-100"></div>
        </div>
        <div className="flex justify-end gap-2">
          <div className="h-10 w-10 rounded bg-gray-100"></div>
          <div className="h-10 w-10 rounded bg-gray-100"></div>
        </div>
      </div>
    </div>
  );
}