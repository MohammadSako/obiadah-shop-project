"use client"

import { Suspense } from "react";
import { FormSkeleton } from "@/components/UI/skeletons";
import { CarouselForm } from "@/components/dashboard/carousel-form";
import { addCarousel } from "@/lib/db/products";

export default function AddCarousel() {
  async function addCarouselHandle(carousel) {
    try {
      await addCarousel(carousel);
    } catch (error) {
      console.error("Error adding product:", error);
    }
  }

  return (
    <Suspense fallback={<FormSkeleton />}>
      <CarouselForm onAddCarousel={addCarouselHandle} />
    </Suspense>
  );
}
