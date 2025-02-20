"use client";

import { motion } from "framer-motion";
import * as React from "react";
import { Carousel, CarouselContent, CarouselItem } from "../UI/carousel";
import Image from "next/image";
import Link from "next/link";
import { useItemStore } from "@/lib/store";
import Autoplay from "embla-carousel-autoplay";
import { useI18n } from "@/locales/client";

export function YourFavoriteItems() {
  const { favorite } = useItemStore();
  const t = useI18n();

  return (
    <>
      {favorite.length > 0 && (
        <motion.section
          initial={{ opacity: 0, translateY: 100 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col items-center gap-4 w-full overflow-hidden origin-center"
        >
          <div className="bg-white">
            <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
              <div className="mx-auto max-w-2xl py-4 sm:py-24 lg:max-w-none lg:py-10">
                <div className="lg:col-span-2 lg:pr-8 text-center">
                  <Link href="/favorite">
                    <h1 className="text-4xl font-medium tracking-tighter text-gray-900 sm:text-3xl">
                      {t("common.wishlist")}
                    </h1>
                  </Link>
                  <Carousel
                    className="w-full max-w-fit mt-4"
                    opts={{ align: "center", dragFree: true }}
                    plugins={[
                      Autoplay({
                        delay: 2000,
                      }),
                    ]}
                  >
                    <CarouselContent>
                      {favorite.map((product) => (
                        <CarouselItem className="max-w-fit" key={product.id}>
                          <Link key={product.id} href="/favorite">
                            <div className="group relative">
                              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75">
                                <Image
                                  src={product.image}
                                  style={{
                                    width: "100%",
                                    height: "auto",
                                  }}
                                  width={200}
                                  height={200}
                                  alt={product.image}
                                  priority
                                />
                              </div>
                            </div>
                          </Link>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                  </Carousel>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      )}
    </>
  );
}
