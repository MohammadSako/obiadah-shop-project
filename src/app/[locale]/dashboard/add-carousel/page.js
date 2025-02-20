import { Suspense } from "react";
import {
  CarouselPageSkeleton,
  CarouselListSkeleton,
} from "@/components/UI/skeletons";
import { getCarousel } from "@/lib/db/products";
import ImagesList from "@/components/dashboard/images-list";
import AddCarousel from "../components/add-carousel";

export default async function AddCarouselPage() {
  const { carouselData = [] } = await getCarousel();

  return (
    <>
      <header>
        <div className="mx-auto py-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-800">
            Add Carousel
          </h1>
        </div>
      </header>
      
      <Suspense fallback={<CarouselPageSkeleton />}>
        <AddCarousel />
      </Suspense>

      <Suspense fallback={<CarouselListSkeleton />}>
        {carouselData.length > 0 ? (
          <ImagesList data={carouselData} />
        ) : (
          <h2 className="mx-auto text-2xl font-bold text-gray-700 mt-10">
            No carousel images available.
          </h2>
        )}
      </Suspense>

    </>
  );
}
