"use client"

import { Suspense } from "react";
import { FormSkeleton } from "@/components/UI/skeletons";
import { addAdvertisment } from "@/lib/db/products";
import { AdvertismentForm } from "@/components/dashboard/advertisement-form";

export default function AddAdvertisment() {
  async function addAdvertismentHandle(advertisment) {
    try {
      await addAdvertisment(advertisment);
    } catch (error) {
      console.error("Error adding product:", error);
    }
  }

  return (
    <Suspense fallback={<FormSkeleton />}>
      <AdvertismentForm onAddAdvertisment={addAdvertismentHandle} />
    </Suspense>
  );
}
