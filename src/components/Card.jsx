import Image from "next/image";
import Link from "next/link";
import AddToFavoritesButton from "./AddToFavoriteBtn";

export default function Card({ result }) {
  return (
    <div className="group sm:hover:shadow-xl sm:shadow-lg rounded-lg sm:border sm:border-gray-300 m-2 transition-all duration-300 transform hover:scale-105">
      <div className="relative w-full h-56 sm:h-72">
        {result?.Poster !== "N/A" ? (
          <Image
            src={result?.Poster}
            alt={result?.Title || "Movie Poster"}
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg group-hover:opacity-80 transition-opacity duration-300"
          />
        ) : (
          <div className="flex items-center justify-center w-full h-full bg-gray-300 rounded-t-lg text-white text-lg font-semibold">
            No Image Available
          </div>
        )}
      </div>

      <div className="bg-white dark:bg-gray-800 p-4 rounded-b-lg">
        <div className="flex justify-between">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {result?.Year}
          </p>
          <AddToFavoritesButton result={result} />
        </div>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white truncate">
          {result?.Title}
        </h2>
        <div className="mt-4">
          <Link
            href={`/movie/${result?.imdbID}`}
            className="inline-block text-center w-full bg-amber-600 hover:bg-amber-700 text-white py-2 px-4 rounded-full transition duration-200"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
