"use client"

import { Suspense } from "react";
import { FormSkeleton } from "@/components/UI/skeletons";
import { addBrand } from "@/lib/db/products";
import { BrandForm } from "@/components/dashboard/brands-form";

export default function AddBrand() {
  async function addBrandHandle(brand) {
    try {
      await addBrand(brand);
    } catch (error) {
      console.error("Error adding product:", error);
    }
  }

  return (
    <Suspense fallback={<FormSkeleton />}>
      <BrandForm onAddBrand={addBrandHandle} />
    </Suspense>
  );
}
