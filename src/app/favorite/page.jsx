"use client"; 

import { useEffect, useState } from "react";
import Results from "@/components/Results";

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    // Fetch favorites from localStorage
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

 

  return (
    <div className="p-6">
      <h1 className="text-2xl flex justify-center font-semibold mb-4">Your Favorite Movies</h1>
      {favorites.length === 0 ? (
        <p className=" flex justify-center">No favorites added yet.</p>
      ) : (
        <Results results={favorites} />
      )}
    </div>
  );
}
