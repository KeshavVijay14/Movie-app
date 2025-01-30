 

import Results from '@/components/Results';
import Pagination from '@/components/Pagination';

export default async function SearchPage({ params, searchParams }) {
  const searchTerm = params?.searchTerm;
  const currentPage = parseInt(searchParams.page) || 1; 

  
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/?apikey=${process.env.NEXT_PUBLIC_API_KEY}&s=${searchTerm}&page=${currentPage}`
  );
  const data = await res.json();
  const results = data.Search || [];
  const totalResults = parseInt(data.totalResults) || 0;
 
  return (
    <div>
      {results.length === 0 ? (
        <h1 className='text-center pt-6'>No results found</h1>
      ) : (
        <div>
          <Results results={results} />
          <Pagination
            totalResults={totalResults}
            currentPage={currentPage}
            searchTerm={searchTerm}
          />
        </div>
      )}
    </div>
  );
}
