import {
  getBestSellers,
  getNewArrivals,
  getDiscounted,
  getCarousel,
  getAdvertisment,
  getBrand,
} from "@/lib/db/products";
import { Landing } from "../../components/homescreen/landing";
import { Categories } from "../../components/homescreen/categories";
import { YourFavoriteItems } from "../../components/homescreen/yourFavoriteItems";
import { Advertisement } from "@/components/homescreen/advertisement";
import BestSellers from "@/components/homescreen/best-sellers";
import NewArrivals from "@/components/homescreen/new-arrivals";
import Discounted from "@/components/homescreen/discounted";
import OurBrands from "@/components/homescreen/our-brands";
import { Metadata } from "next";
import { Suspense } from "react";
import { CarouselSkeleton } from "@/components/UI/skeletons";

export const metadata: Metadata = {
  title: "Obaidah Shop",
  description:
    "Browse & discover many of products. we ship to you. Shop top brands in clothing and more.",
  keywords: ["products", "shirt", "shoes", "jeans", "clothes", "men", "women", "shop"],
};

export default async function Home() {
  const { carouselData = [] } = await getCarousel();
  const { bestSellers = [] } = await getBestSellers();
  const { newArrivals = [] } = await getNewArrivals();
  const { discounted = [] } = await getDiscounted();
  const { advertismentData = [] } = await getAdvertisment();
  const { brandData = [] } = await getBrand();

  return (
    <div className="flex min-h-screen flex-col items-center overflow-x-hidden ">
      <Suspense fallback={<CarouselSkeleton />}>
        {carouselData.length > 0 && <Landing data={carouselData} />}
      </Suspense>
      {bestSellers.length > 0 && <BestSellers data={bestSellers} />}
      {discounted.length > 0 && <Discounted data={discounted} />}
      <YourFavoriteItems />
      {brandData.length > 0 && <OurBrands data={brandData} />}
      {newArrivals.length > 0 && <NewArrivals data={newArrivals} />}
      {advertismentData.length > 0 && <Advertisement data={advertismentData} />}
      <Categories />
    </div>
  );
}
