import { Suspense } from "react";
import {
  CarouselPageSkeleton,
  CarouselListSkeleton,
} from "@/components/UI/skeletons";
import { getBrand } from "@/lib/db/products";
import BrandsList from "@/components/dashboard/brands-list";
import AddBrand from "../components/add-brand";

export default async function AddCarouselPage() {
  const { brandData = [] } = await getBrand();

  return (
    <>
      <header>
        <div className="mx-auto py-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-800">
            Add Brand
          </h1>
        </div>
      </header>
      
      <Suspense fallback={<CarouselPageSkeleton />}>
        <AddBrand />
      </Suspense>

      <Suspense fallback={<CarouselListSkeleton />}>
        {brandData.length > 0 ? (
          <BrandsList data={brandData} />
        ) : (
          <h2 className="mx-auto text-2xl font-bold text-gray-700 mt-10">
            No brands images available.
          </h2>
        )}
      </Suspense>

    </>
  );
}
