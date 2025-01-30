'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaSearch } from 'react-icons/fa';  

export default function SearchBox() {
  const [search, setSearch] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search.trim() !== '') {
      router.push(`/search/${search}`);
    }
  };

  return (
    <form
      className='flex items-center bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-full shadow-md overflow-hidden max-w-2xl mx-auto px-4 py-2 space-x-3 w-full'
      onSubmit={handleSubmit}
    >
      <input
        type='text'
        placeholder='Search for movies...'
        className='w-full bg-transparent outline-none text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 px-2'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        className='text-white bg-amber-600 hover:bg-amber-700 dark:bg-yellow-500 dark:hover:bg-yellow-600 px-4 py-2 rounded-full transition disabled:opacity-50 flex items-center space-x-1'
        disabled={search.trim() === ''}
      >
        <FaSearch size={18} /> 
        <span>Search</span>
      </button>
    </form>
  );
}
