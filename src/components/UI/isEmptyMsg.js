"use client";

import Link from "next/link";
import { Button } from "./button";
import { IoArrowBackOutline } from "react-icons/io5";

export default function IsEmptyMsg({ page }) {
  return (
    <>
      {page === "/cart" && (
        <div>
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">
            Your bag is empty
          </h2>
          <p className="text-gray-500">
            You can add products to your shopping bag, either by searching or by{" "}
            <Link href="/" className="underline">
              browsing products.
            </Link>
          </p>
        </div>
      )}
      {page === "/favorite" && (
        <div>
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">
            Favourites is empty
          </h2>
          <Link href="/">
            <Button variant="outline" className="my-4 rounded-full">
              <IoArrowBackOutline className="mr-2" />
              Back to Items
            </Button>
          </Link>
          <p className="text-gray-500">
            This list is currently empty. Look around to find items you’d like
            to compare to save for your future home. We’ll keep them here until
            you’re ready for them.{" "}
          </p>
        </div>
      )}
    </>
  );
}
