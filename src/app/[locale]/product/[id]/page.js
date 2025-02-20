"use client";
import { useEffect, useState, useCallback } from "react";
import { useParams } from "next/navigation";
import ProductDetailPage from "../../../../components/product-details/productDetailPage";
import { getProductsById, searchedRelatedProducts } from "@/lib/db/products";
import NotFound from "@/app/not-found";
import { ProductDetailsSkeleton } from "@/components/UI/skeletons";
import RelatedProducts from "./components/related-products";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(true);

  const getDetails = useCallback(async () => {
    if (!id) return;

    setLoading(true);

    try {
      const { products } = await getProductsById(id);
      if (!products) {
        console.warn(`Product with ID ${id} not found.`);
        setLoading(false);
        return;
      }

      setProduct(products);

      const response = await searchedRelatedProducts([products.type]);
      setRelated(response?.combinedResults || []);
    } catch (error) {
      console.error("Error fetching product details:", error);
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    getDetails();
  }, [getDetails]);

  if (loading) {
    return <ProductDetailsSkeleton />;
  }

  if (!product) {
    return <NotFound />;
  }

  return (
    <>
      <ProductDetailPage products={product} />
      {related.length > 0 && <RelatedProducts data={related} />}
    </>
  );
}

export default ProductDetails;
