"use client";

import Loading from "@/app/[locale]/categories/loading";
import CategoriesCard from "@/components/helpers/catgories/categoriesCard";
import NotFound from "@/components/UI/product-not-found";
import { getProductByItemId } from "@/lib/db/products";
import { usePathname } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { CategoryImagesSkeleton } from "@/components/UI/skeletons";
import PreviousPageBtn from "@/components/UI/previous-page-button";

export default function CategoriesPage({ data }) {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  const getProductsByPathname = (pathname, data) => {
    const mapping = {
      "/en/categories/men/clothing": data[0]?.SubCategory || [],
      "/ar/categories/men/clothing": data[0]?.SubCategory || [],
      "/en/categories/men/clothing/top": data[0]?.SubCategory[0]?.items || [],
      "/ar/categories/men/clothing/top": data[0]?.SubCategory[0]?.items || [],
      "/en/categories/men/clothing/lower": data[0]?.SubCategory[1]?.items || [],
      "/ar/categories/men/clothing/lower": data[0]?.SubCategory[1]?.items || [],
      "/en/categories/men/shoes": data[2]?.SubCategory[0]?.items || [],
      "/ar/categories/men/shoes": data[2]?.SubCategory[0]?.items || [],
      "/en/categories/women/clothing": data[1]?.SubCategory || [],
      "/ar/categories/women/clothing": data[1]?.SubCategory || [],
      "/en/categories/women/clothing/top": data[1]?.SubCategory[0]?.items || [],
      "/ar/categories/women/clothing/top": data[1]?.SubCategory[0]?.items || [],
      "/en/categories/women/clothing/lower": data[1]?.SubCategory[1]?.items || [],
      "/ar/categories/women/clothing/lower": data[1]?.SubCategory[1]?.items || [],
      "/en/categories/women/shoes": data[3]?.SubCategory[0]?.items || [],
      "/ar/categories/women/shoes": data[3]?.SubCategory[0]?.items || [],
    };
    return mapping[pathname] || null;
  };

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const staticProducts = getProductsByPathname(pathname, data);
      if (staticProducts) {
        setProducts(staticProducts);
        setLoading(false);
        return;
      }
      
      const parts = pathname.split("/");
      const lastPart = parts[parts.length - 1];
      if (lastPart) {
        try {
          const { productByItemId } = await getProductByItemId(lastPart);
          setProducts(productByItemId?.[0]?.item_detail || []);
        } catch (error) {
          console.error("Error fetching products:", error);
        } finally {
          setLoading(false);
        }
      }
    };
    fetchProducts();
  }, [pathname, data]);

  if (loading) return <CategoryImagesSkeleton />;
  if (!products || products.length === 0) return <NotFound />;

  return (
    <>
      <Suspense fallback={<Loading />}>
        <main className="sm:flex min-h-screen flex-col items-center sm:mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="bg-white">
            {(products[0]?.backbtn || products[0]?.price) && (
              <PreviousPageBtn />
            )}
            <div className="mx-auto px-4 sm:py-4 lg:max-w-7xl">
              <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-8">
                {products.map((product) => (
                  <CategoriesCard key={product.id} {...product} />
                ))}
              </div>
            </div>
          </div>
        </main>
      </Suspense>
    </>
  );
}
