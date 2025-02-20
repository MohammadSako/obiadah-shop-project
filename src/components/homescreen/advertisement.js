"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useCurrentLocale } from "@/locales/client";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { Button } from "../UI/button";

export function Advertisement({ data }) {
  const [activeBanner, setActiveBanner] = useState(0);
  const locale = useCurrentLocale();
  const isRTL = locale === "ar";

  useEffect(() => {
    if (data.length <= 1) return; // Avoid running if there's only one banner

    const timeout = setTimeout(() => {
      setActiveBanner((prev) => (prev === data.length - 1 ? 0 : prev + 1));
    }, 8000);

    return () => clearTimeout(timeout);
  }, [data.length]);

  function handleNext() {
    setActiveBanner((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  }

  function handlePrevious() {
    setActiveBanner((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  }

  return (
    <section className="relative flex flex-col w-full items-start justify-center sm:h-[600px] h-96">
      {/* Banner Text */}
      <div className="flex flex-col z-10 capitalize h-full w-full gap-6 px-8 justify-center text-center bg-opacity-10 bg-gray-900">
        {data[activeBanner]?.title && (
          <h1 className="text-4xl lg:text-8xl m-4 rtl:font-arabic text-white font-bold">
            {isRTL ? data[activeBanner]?.titleAr : data[activeBanner]?.title}
          </h1>
        )}
        {data[activeBanner]?.description && (
          <h2 className="text-lg lg:text-5xl rtl:font-arabic mb-6 text-white font-bold">
            {isRTL
              ? data[activeBanner]?.descriptionAr
              : data[activeBanner]?.description}
          </h2>
        )}
      </div>

      {/* Banner Image with Animation */}
      <AnimatePresence>
        {data.map(
          (banner, i) =>
            activeBanner === i && (
              <motion.div
                key={`banner-${i}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="absolute inset-0"
              >
                <Image
                  src={banner.image}
                  alt="Banner"
                  fill
                  sizes="100vw"
                  className="object-cover"
                  priority
                />
              </motion.div>
            )
        )}
      </AnimatePresence>

      {/* Navigation Buttons */}
      {data.length > 1 && (
        <div className="absolute bottom-10 flex w-[50%] items-center gap-10 justify-between self-center z-10">
          <Button
            variant="secondary"
            onClick={isRTL ? handlePrevious : handleNext}
          >
            {isRTL ? <FaChevronRight /> : <FaChevronLeft />}
          </Button>
          <Button
            variant="secondary"
            onClick={isRTL ? handleNext : handlePrevious}
          >
            {isRTL ? <FaChevronLeft /> : <FaChevronRight />}
          </Button>
        </div>
      )}
    </section>
  );
}
