"use client";

import React from "react";
import { motion } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem } from "../UI/carousel";
import ProductCard from "../categories/productCard";
import Autoplay from "embla-carousel-autoplay";
import { useI18n } from "@/locales/client";

function Discounted({ data }) {
  const t = useI18n();

  return (
    <motion.section
      initial={{ opacity: 0, translateY: 100 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="flex bg-blue-50 flex-col items-center h-auto gap-4 w-full overflow-hidden origin-center"
    >
      <div className="bg-blue-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-4 sm:py-20 lg:max-w-none lg:py-10 mt-6">
            <div className="lg:col-span-2">
              <h1 className="text-4xl  tracking-tighter text-center text-gray-900 sm:text-3xl">
                {t("common.discount")}
              </h1>
              <Carousel
                className="w-full max-w-fit mt-4"
                opts={{ align: "center", dragFree: true }}
                plugins={[
                  Autoplay({
                    delay: 2500,
                  }),
                ]}
              >
                <CarouselContent>
                  {data.map((product) => (
                    <CarouselItem className="max-w-fit" key={product.id}>
                      <ProductCard
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        color={product.color}
                        details={product.details}
                        description={product.description}
                        titleAr={product.titleAr}
                        colorAr={product.colorAr}
                        detailsAr={product.detailsAr}
                        descriptionAr={product.descriptionAr}
                        image={product.image}
                        alt={product.alt}
                        price={product.price}
                        size={product.size}
                        gender={product.gender}
                        type={product.type}
                        dashboardType={product.dashboardType}
                        imageid={product.imageid}
                        category={product.category}
                        qty={product.qty}
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Discounted;
