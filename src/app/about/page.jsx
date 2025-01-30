 

export default function About() {
  return (
    <div className='max-w-6xl mt-4 mx-auto p-6 space-y-6 dark:bg-gray-900 dark:text-white bg-gray-100 text-gray-900 rounded-lg shadow-lg'>
      <h1 className='text-3xl font-bold text-amber-600 dark:text-yellow-400'>About Us 🎬</h1>
      
      <p>
        Welcome to <span className='font-semibold'>MovieVerse</span>, your ultimate destination for everything cinema! Whether you’re a casual viewer or a dedicated film buff, our platform is designed to bring you the latest and greatest from the world of movies.
      </p>
      
      <h2 className='text-xl font-semibold text-blue-600 dark:text-yellow-300'>🎥 What We Offer:</h2>
      <ul className='list-disc list-inside space-y-2'>
        <li><span className='font-semibold'>Comprehensive Movie Database:</span> Explore a vast collection of films, from timeless classics to the latest blockbusters.</li>
        <li><span className='font-semibold'>Detailed Information:</span> Find movie details, cast, directors, genres, release dates, and box office performance.</li>
        <li><span className='font-semibold'>Live Ratings & Reviews:</span> Stay updated with IMDb scores, Rotten Tomatoes percentages, and user reviews.</li>
        <li><span className='font-semibold'>Latest Trailers & News:</span> Get the freshest updates on upcoming movies, interviews, and behind-the-scenes insights.</li>
        <li><span className='font-semibold'>Community Engagement:</span> Join discussions, share opinions, and connect with fellow movie lovers.</li>
      </ul>
      
      <p>
        At <span className='font-semibold'>MovieVerse</span>, we’re passionate about cinema and committed to creating an interactive space for movie enthusiasts worldwide. Your feedback helps us improve, so feel free to reach out and share your thoughts.
      </p>
      
      <p className='text-lg font-medium text-center'>Enjoy your movie journey! 🍿</p>
    </div>
  );
}