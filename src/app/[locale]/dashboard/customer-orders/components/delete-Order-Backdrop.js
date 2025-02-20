import React, { useState } from "react";
import { useI18n } from "@/locales/client";
import { useOrderStore } from "@/lib/orderStore";
import { deleteOrderById } from "@/lib/db/products";
import { useRouter } from "next/navigation";
import Loading from "@/app/[locale]/loading";

function OrderDeleteBackdrop() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { setIsBackdropOpen, id } = useOrderStore();
  const t = useI18n();

  async function deleteHandler() {
    setIsLoading(true);
    setIsBackdropOpen(false);
    try {
      await deleteOrderById(id);
      router.push("/dashboard/customer-orders");
    } catch (error) {
      console.error("Error deleting order:", error);
    } finally {
      setIsLoading(false);
    }
  }
  
  function BackDropClick() {
    setIsBackdropOpen(false);
  }

  return (
    <>
      {isLoading && <Loading />}
      <div
        onClick={BackDropClick}
        className="flex fixed top-0 w-[100%] h-[100vh] z-10 bg-gray-500 bg-opacity-40"
      />
      <div className="flex fixed top-[30vh] sm:left-[25%] sm:w-[50%] mx-4 z-20 overflow-hidden rounded-2xl shadow-lg bg-white">
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <button
            onClick={() => setIsBackdropOpen(false)}
            className="absolute top-2 left-5 text-gray-600 text-4xl font-bold hover:text-gray-800"
          >
            &times;
          </button>
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="text-center text-2xl/9 font-bold tracking-tight text-gray-900">
              {t("orders.delete")}
            </h2>
          </div>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <div>
              <button
                onClick={deleteHandler}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {t("orders.confirm")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderDeleteBackdrop;
