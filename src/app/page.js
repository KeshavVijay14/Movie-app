import Results from "@/components/Results";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default async function Home({ searchParams }) {
  let results = [];
  if (searchParams) {
    const res = await fetch(`${API_URL}/?api_key=${API_KEY}`, {
      next: { revalidate: 10000 },
    });
    const data = await res.json();
    if (res.Response === "False") {
      throw new Error("Failed to fetch data");
    }
    results = data.results || [];
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-center m-6">
        Search for Your Favorite Movie
      </h1>
      <p className="text-lg text-center text-gray-600">
        {`Enter the name of the movie you're looking for and we'll find it for you!`}
      </p>
      <Results results={results} />
    </div>
  );
}
