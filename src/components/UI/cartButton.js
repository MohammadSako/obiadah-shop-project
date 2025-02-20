import { useItemStore } from "@/lib/store";
import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";

function CartButton({ quantity, id }) {
  const { increaseItem, decreaseItem } = useItemStore();

  function increaseItemHandle() {
    increaseItem(id);
  }
  function decreaseItemHandle() {
    decreaseItem(id);
  }

  return (
    <>
      <div className="flex items-center py-1 px-1.5 border border-gray-400 rounded-md w-24 justify-between">
        <FaPlus
          onClick={() => increaseItemHandle(id)}
          className=" cursor-pointer"
        />
        <p className="flex items-center font-medium pointer-events-none ">
          {quantity}
        </p>
        <FaMinus
          onClick={() => decreaseItemHandle(id)}
          className=" cursor-pointer"
        />
      </div>
    </>
  );
}

export default CartButton;
