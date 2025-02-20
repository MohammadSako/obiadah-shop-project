import {
  CarouselPageSkeleton,
  CarouselListSkeleton,
} from "@/components/UI/skeletons";

export default function Loading() {
  return (
    <>
      <CarouselPageSkeleton />
      <CarouselListSkeleton />
    </>
  );
}
