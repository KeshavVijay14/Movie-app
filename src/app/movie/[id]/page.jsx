import Image from "next/image";

export default async function MoviePage({ params }) {
  const movieId = params.id;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/?apikey=${process.env.NEXT_PUBLIC_API_KEY}&i=${movieId}`
  );
  const movie = await res.json();

  return (
    <div className="w-full min-h-screen p-4 dark:bg-gray-700 dark:text-white   text-gray-900">
      <div className="max-w-6xl mx-auto p-6 dark:bg-gray-800 bg-white rounded-lg shadow-lg flex flex-col md:flex-row md:space-x-6">
        {/* Movie Poster */}
        {/* <Image
          src={movie?.Poster !== "N/A" ? movie?.Poster : "/"  }
          width={400}
          height={600}
          className='rounded-lg object-cover shadow-md'
          alt={movie?.Title}
          style={{ maxWidth: '100%', height: 'auto' }}
        /> */}
        {movie?.Poster !== "N/A" ? (
          <Image
            src={movie?.Poster}
            width={400}
            height={600}
            className="rounded-lg object-cover shadow-md"
            alt={movie?.Title}
            style={{ maxWidth: "100%", height: "auto" }}
          />
        ) : (
          <div
            className="rounded-lg object-cover shadow-md flex justify-center items-center"
            style={{
              width: "400px",
              height: "600px",
              backgroundColor: "#f0f0f0", // Placeholder background color
            }}
          >
            <span style={{ color: "#999" }}>Image Not Available</span>
          </div>
        )}
        {/* Movie Details */}
        <div className="flex-1 p-4">
          <h2 className="text-3xl font-bold mb-3 dark:text-yellow-400 text-blue-600">
            {movie?.Title}
          </h2>
          <p className="text-lg italic text-gray-500 mb-3">{movie?.Genre}</p>
          <p className="mb-3">
            <span className="font-semibold dark:text-yellow-400 text-blue-600">
              Released:
            </span>{" "}
            {movie?.Released}
          </p>
          <p className="mb-3">
            <span className="font-semibold dark:text-yellow-400 text-blue-600">
              IMDB Rating:
            </span>{" "}
            ⭐ {movie?.imdbRating}
          </p>
          <p className="mb-3">
            <span className="font-semibold dark:text-yellow-400 text-blue-600">
              Box Office:
            </span>{" "}
            {movie?.BoxOffice}
          </p>
          <p className="mb-4 text-gray-600">{movie?.Plot}</p>

          {/* Directors */}
          <div className="mb-3">
            <h3 className="font-semibold dark:text-yellow-400 text-blue-600 mb-2">
              Director
            </h3>
            <div className="flex flex-wrap gap-2">
              {movie?.Director.split(", ").map((director, index) => (
                <span
                  key={index}
                  className="px-3 py-1 dark:bg-gray-700 bg-gray-300 text-sm rounded-md"
                >
                  {director}
                </span>
              ))}
            </div>
          </div>

          {/* Cast */}
          <div className="mb-3">
            <h3 className="font-semibold dark:text-yellow-400 text-blue-600 mb-2">
              Cast
            </h3>
            <div className="flex flex-wrap gap-2">
              {movie?.Actors.split(", ").map((actor, index) => (
                <span
                  key={index}
                  className="px-3 py-1 dark:bg-gray-700 bg-gray-300 text-sm rounded-md"
                >
                  {actor}
                </span>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="mb-3">
            <h3 className="font-semibold dark:text-yellow-400 text-blue-600 mb-2">
              Languages
            </h3>
            <div className="flex flex-wrap gap-2">
              {movie?.Language.split(", ").map((lang, index) => (
                <span
                  key={index}
                  className="px-3 py-1 dark:bg-gray-700 bg-gray-300 text-sm rounded-md"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>

          {/* Ratings */}
          <div>
            <h3 className="font-semibold dark:text-yellow-400 text-blue-600 mb-2">
              Ratings
            </h3>
            <div className="flex flex-wrap gap-2">
              {movie?.Ratings.map((rating, index) => (
                <div
                  key={index}
                  className="px-4 py-2 dark:bg-gray-700 bg-gray-300 rounded-md text-sm"
                >
                  <span className="font-semibold">{rating.Source}:</span>{" "}
                  {rating.Value}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function generateMetadata({ params }) {
  return {
    title: `Movie: ${params.id}`,
  };
}
