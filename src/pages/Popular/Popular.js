import React, { useEffect } from 'react';
import { useMovies } from '../../context/MovieContext';
import { Star } from '../../components/Icons/Icons';
import ScrollableMovieSection from '../../components/ScrollableMovieSection/ScrollableMovieSection';

const PopularPage = () => {
  const { 
    popularMovies, 
    fetchPopularMovies, 
    loading, 
    error 
  } = useMovies();

  useEffect(() => {
    fetchPopularMovies();
  }, []);

  return (
    <main className="min-h-screen bg-gray-900 w-full">
      <div className="py-8">
        <div className="w-full px-4">
          <h1 className="text-4xl font-bold text-white mb-8 flex items-center">
            <Star className="h-10 w-10 text-yellow-400 mr-4" />
            Popular Movies
          </h1>
        </div>
      </div>

      <ScrollableMovieSection
        title="Most Popular Movies"
        movies={popularMovies}
        loading={loading}
        error={error}
        icon={Star}
        bgColor="bg-gray-900"
      />
    </main>
  );
};

export default PopularPage;

