import { Suspense } from "react";
import {
  CarouselPageSkeleton,
  CarouselListSkeleton,
} from "@/components/UI/skeletons";
import AddAdvertisment from "../components/add-advertisment";
import AdvertismentList from "@/components/dashboard/advertisement-list";
import { getAdvertisment } from "@/lib/db/products";

export default async function AddAdvertismentPage() {
  const { advertismentData = [] } = await getAdvertisment();

  return (
    <>
      <header>
        <div className="mx-auto py-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-800">
            Add Advertisment
          </h1>
        </div>
      </header>

      <Suspense fallback={<CarouselPageSkeleton />}>
        <AddAdvertisment />
      </Suspense>

      <Suspense fallback={<CarouselListSkeleton />}>
        {advertismentData.length > 0 ? (
          <AdvertismentList data={advertismentData} />
        ) : (
          <h2 className="mx-auto text-2xl font-bold text-gray-700 mt-10">
            No advertisment images available.
          </h2>
        )}
      </Suspense>
    </>
  );
}
