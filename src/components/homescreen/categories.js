"use client";

import { useI18n } from "@/locales/client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";

export function Categories() {
  const t = useI18n();

  const Images = [
    {
      src: "/3.avif",
      alt: "product 1",
      description: t("categories.men"),
      url: "/categories/men/clothing",
    },
    {
      src: "/wshirt.avif",
      alt: "product 2",
      description: t("categories.women"),
      url: "/categories/women/clothing",
    },
    {
      src: "/1.avif",
      alt: "product 3",
      description: t("categories.menshoes"),
      url: "/categories/men/shoes",
    },
    {
      src: "/2.avif",
      alt: "product 3",
      description: t("categories.womenshoes"),
      url: "/categories/women/shoes",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="flex flex-col items-center my-2 gap-4 w-full overflow-hidden origin-center"
    >
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-10 sm:py-24 lg:max-w-none lg:py-10">
            <div className="lg:col-span-2 lg:pr-8 text-center">
              <h1 className="text-2xl font-medium tracking-tighter text-gray-900 sm:text-3xl">
                {t("home.popularcategories")}
              </h1>
            </div>
            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-4 lg:gap-x-6 lg:space-y-0">
              {Images.map((categ, index) => (
                <Link key={index} href={categ.url}>
                  <div key={index} className="group relative mt-6">
                    <div className="relative w-full overflow-hidden shadow-lg rounded-full bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75">
                      <Image
                        src={categ.src}
                        style={{
                          width: "100%",
                          height: "auto",
                        }}
                        width={100}
                        height={100}
                        alt={categ.alt}
                        priority
                      />
                    </div>

                    <h3 className="mt-2 text-2xl text-center">
                      <span className="absolute inset-0" />
                      {categ.description}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>{" "}
    </motion.section>
  );
}
