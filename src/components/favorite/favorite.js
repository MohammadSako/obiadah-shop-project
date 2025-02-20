"use client";

import { useState } from "react";
import HeaderFavoriteButton from "./HeaderFavoriteButton";
import FavoriteDrawer from "../favorite/favoriteDrawer/favoriteDrawer";

export default function Favorite() {
  const [isOpen, setIsOpen] = useState(false);

  function closeButtonHandler() {
    setIsOpen(false);
  }
  return (
    <div className="flex sm:flex-none flex-1 items-center justify-center sm:items-stretch">
      <div className="flex flex-shrink-0 items-center justify-items-start">
        <HeaderFavoriteButton
          onClick={() => setIsOpen(true)}
          size={30}
          className="text-lg font-sans tracking-wide text-gray-400 hover:text-gray-800"
        />
        <FavoriteDrawer
          open={isOpen}
          onClose={setIsOpen}
          closeButton={closeButtonHandler}
        />
      </div>
    </div>
  );
}
