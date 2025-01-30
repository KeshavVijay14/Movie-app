"use client";

import { useEffect, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

export default function AddToFavoritesButton({ result }) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    // Check if the item is in localStorage
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const isItemFavorite = favorites.some(
      (item) => item.imdbID === result.imdbID
    );
    setIsFavorite(isItemFavorite);
  }, [result]);

  const handleAddToFavorites = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    if (!isFavorite) {
      // Add to favorites
      favorites.push(result);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      setIsFavorite(true);
    } else {
      // Remove from favorites
      const updatedFavorites = favorites.filter(
        (item) => item.imdbID !== result.imdbID
      );
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      setIsFavorite(false);
    }
  };

  return (
    <div
      onClick={handleAddToFavorites}
      className={`cursor-pointer text-2xl transition duration-200 
        ${
          isFavorite
            ? "text-red-600 dark:text-red-700 hover:text-red-700 dark:hover:text-red-800"
            : "text-gray-400 dark:text-gray-600 hover:text-red-600 dark:hover:text-red-700"
        }`}
    >
      {isFavorite ? <FaHeart /> : <FaRegHeart />}
    </div>
  );
}
