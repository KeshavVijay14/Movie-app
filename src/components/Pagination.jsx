 'use client';

import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

export default function Pagination({ totalResults, currentPage, searchTerm }) {
  const totalPages = Math.ceil(totalResults / 10); // Assuming 10 results per page

  // Handle page change
  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    window.location.href = `/search/${searchTerm}?page=${page}`;
  };

  // Handle next and previous page navigation
  const handleNext = () => handlePageChange(currentPage + 1);
  const handlePrev = () => handlePageChange(currentPage - 1);

  return (
    <div className='flex items-center justify-center'>
      {/* Previous Button with Icon */}
      <button
        onClick={handlePrev}
        className='bg-amber-600 hover:bg-amber-700 text-white px-2 py-2 rounded-full shadow-lg transform transition duration-300 
                   hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed'
        disabled={currentPage === 1}
      >
        <FaArrowLeft size={20} />
      </button>

      {/* Current Page Display */}
      <div className='flex items-center space-x-4 px-2'>
        <span className='text-lg font-semibold text-gray-800 dark:text-white'>Page</span>
        <span className='px-4 py-2 text-xl font-bold text-amber-600 bg-gray-100 dark:bg-gray-700 rounded-full'>
          {currentPage}
        </span>
        <span className='text-lg font-semibold text-gray-800 dark:text-white'>of {totalPages}</span>
      </div>

      {/* Next Button with Icon */}
      <button
        onClick={handleNext}
        className='bg-amber-600 hover:bg-amber-700 text-white px-2 py-2 rounded-full shadow-lg transform transition duration-300 
                   hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed'
        disabled={currentPage === totalPages}
      >
        <FaArrowRight size={20} />
      </button>
    </div>
  );
}
