"use client";
import { useMemo } from "react";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../../../../../components/UI/carousel";
import RelatedCard from "./related-card";
import Autoplay from "embla-carousel-autoplay";
import { useI18n } from "@/locales/client";

function RelatedProducts({ data }) {
  const t = useI18n();

  const renderedProducts = useMemo(
    () =>
      data.map((product) => (
        <CarouselItem className="max-w-fit" key={product.id}>
          <RelatedCard {...product} />
        </CarouselItem>
      )),
    [data]
  );
  if (!data || data.length === 0) {
    return null;
  }
  const autoplay = Autoplay({ delay: 2000, stopOnInteraction: true });

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="flex flex-col items-center gap-4 w-full overflow-hidden origin-center"
    >
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-4 sm:py-20 sm:max-w-none lg:py-10">
            <div className="lg:col-span-2 lg:pr-8">
              <h1 className="text-4xl font-medium tracking-tighter text-center text-gray-900 sm:text-3xl">
                {t("product.mayalso")}
              </h1>
              <Carousel
                className="w-full max-w-fit mt-4"
                opts={{ align: "center", dragFree: true }}
                plugins={[autoplay]}
              >
                <CarouselContent>{renderedProducts}</CarouselContent>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default RelatedProducts;
