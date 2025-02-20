import { CategoryImagesSkeleton } from "@/components/UI/skeletons";
import Image from "next/image";
import { Suspense } from "react";

export function CardImage({ image }) {
  return (
    <Suspense fallback={<CategoryImagesSkeleton />}>
      <div className="aspect-h-1 aspect-w-1 md:w-full w-[200px] mx-auto overflow-hidden rounded-full bg-gray-50 lg:aspect-none group-hover:opacity-75 shadow-lg">
        <Image
          src={image}
          style={{
            width: 400,
            height: "auto",
            padding: 10
          }}
          width={200}
          height={200}
          alt={image}
        />
      </div>
    </Suspense>
  );
}
