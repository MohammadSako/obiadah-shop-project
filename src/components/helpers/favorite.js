"use client";

import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { motion } from "framer-motion";

export const FavoriteToggle = () => {
  const [isFavorite, setFavorite] = useState(false);

  const handleClick = (e) => {
    e.stopPropagation();
    setFavorite(!isFavorite);
  };

  return (
    <div className="flex items-center justify-center">
      <motion.div
        className={`w-8 h-8 rounded-full flex items-center justify-center cursor-pointer bg-gray-300`}
        onClick={handleClick}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.2 }}
      >
        {isFavorite ? (
          <FaHeart className="text-red-500" size={16} />
        ) : (
          <FaRegHeart className="text-white" size={16} />
        )}
      </motion.div>
    </div>
  );
};
