"use client";

import { Suspense } from "react";
import Image from "next/image";
import { CategoryImagesSkeleton } from "@/components/UI/skeletons";

const CategoriesLayout = ({ children }: { children: React.ReactNode }) => {
  const imageUrl = `${process.env
    .NEXT_PUBLIC_SUPABASE_URL!}/storage/v1/object/public/shopimages/category_images/store.avif`;

  return (
    <>
      <div className="relative flex flex-col w-full h-[20vh]">
        <Image
          src={imageUrl}
          fill
          sizes="100vw"
          alt="Store Image"
          style={{ objectFit: "cover" }}
          priority
        />
      </div>
      <div className="flex flex-col w-full">
        <Suspense fallback={<CategoryImagesSkeleton />}>{children}</Suspense>
      </div>
    </>
  );
};

export default CategoriesLayout;
