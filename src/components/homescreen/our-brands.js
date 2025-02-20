"use client";

import React from "react";
import { motion } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem } from "../UI/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useCurrentLocale, useI18n } from "@/locales/client";

function OurBrands({ data }) {
  const t = useI18n();
  const locale = useCurrentLocale();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="flex flex-col items-center gap-4 w-full overflow-hidden origin-center"
    >
      <div className="bg-white">
        <div className="mx-auto max-w-7xl h-[300px] p-10">
          <div className="mx-auto max-w-2xl  lg:max-w-none">
            <div className="lg:col-span-2 text-center ">
              <h1 className="text-4xl font-medium tracking-tighter text-gray-900 sm:text-3xl">
                {t("home.ourbrands")}
              </h1>
              <Carousel
                className="w-full max-w-fit mt-10"
                opts={{ align: "center", dragFree: true }}
                plugins={[
                  Autoplay({
                    delay: 3000,
                  }),
                ]}
              >
                <CarouselContent>
                  {data.map((product) => (
                    <CarouselItem className="max-w-fit mx-20 sm:mx-32" key={product.id}>
                      <Image
                        src={product.image}
                        width={400}
                        height={200}
                        alt="our brands"
                        style={{ width: "auto", height: "70px" }}
                        priority
                      />
                      <div className="space-y-2">
                        <p className="text-xl font-bold text-gray-700">
                          {locale === "ar" ? product.titleAr : product.title}
                        </p>
                        <p className="text-lg text-gray-700">
                          {locale === "ar"
                            ? product.descriptionAr
                            : product.description}
                        </p>
                      </div>
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

export default OurBrands;
