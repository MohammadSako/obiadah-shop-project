"use client";

import { SearchCard } from "@/components/layouts/search-card";
import { Input } from "@/components/UI/input";
import { ScrollArea } from "@/components/UI/scroll-area";
import { searchInProducts } from "@/lib/db/products";
import { useI18n } from "@/locales/client";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { RxReload } from "react-icons/rx";
import { useDebounce } from "use-debounce";

export default function Search() {
  const [result, setResult] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [debouncedValue] = useDebounce(searchQuery, 500);
  const searchRef = useRef(null);
  const t = useI18n();

  useEffect(() => {
    async function Search() {
      if (!debouncedValue) return;
      setIsLoading(true);
      const response = await searchInProducts(debouncedValue);
      if (response.error) {
        console.error("Error fetching results:", response.error);
        setResult([]);
      } else {
        setResult(response.combinedResults || []);
      }
      setIsLoading(false);
    }
    Search();
  }, [debouncedValue]);

  useEffect(() => {
    if (!isFocused) {
      setSearchQuery("");
    }
  }, [isFocused]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsFocused(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchRef]);

  function resetSearch() {
    setSearchQuery("");
    setIsFocused(false);
  }

  return (
    <div
      ref={searchRef}
      className="lg:flex w-full items-center justify-center z-50"
    >
      <div className="relative flex w-full items-center">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <span className="text-gray-500 sm:text-sm">
            <FaMagnifyingGlass />
          </span>
        </div>
        <Input
          value={searchQuery}
          onFocus={() => setIsFocused(true)}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder={t("common.search.product")}
          className="block w-full rounded-md border-0 py-1.5 pl-9 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-6"
        />
      </div>
      <AnimatePresence>
        {isFocused && debouncedValue && (
          <motion.div
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleY: 1 }}
            exit={{ opacity: 0, scaleY: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute flex flex-col sm:w-[810px] w-fit rounded-lg bg-white top-10 shadow-md  border border-slate-200 px-2 overflow-hidden z-50"
          >
            <ScrollArea className="w-[full] h-[60vh]">
              <div
                onClick={() => setIsFocused(false)}
                className="absolute top-1 ltr:right-3 rtl:left-3 cursor-pointer text-lg"
              >
                <IoClose />
              </div>
              <div className="flex flex-col gap-2 mt-5">
                {!!result.length ? (
                  result.map((product) => (
                    <Link
                      href={`/product/${product.id}`}
                      key={product.id}
                      onClick={resetSearch}
                    >
                      <SearchCard product={product} />
                    </Link>
                  ))
                ) : (
                  <div className="flex flex-col h-full w-full items-center justify-center">
                    {isLoading ? (
                      <RxReload className="text-3xl animate-spin" />
                    ) : (
                      <span>Nothing Found</span>
                    )}
                  </div>
                )}
              </div>
            </ScrollArea>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
