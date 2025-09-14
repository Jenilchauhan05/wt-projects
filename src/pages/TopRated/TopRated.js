import React, { useEffect } from 'react';
import { useMovies } from '../../context/MovieContext';
import { Award } from '../../components/Icons/Icons';
import ScrollableMovieSection from '../../components/ScrollableMovieSection/ScrollableMovieSection';

const TopRatedPage = () => {
  const { 
    topRatedMovies, 
    fetchTopRatedMovies, 
    loading, 
    error 
  } = useMovies();

  useEffect(() => {
    fetchTopRatedMovies();
  }, []);

  return (
    <main className="min-h-screen bg-gray-900 w-full">
      <div className="py-8">
        <div className="w-full px-4">
          <h1 className="text-4xl font-bold text-white mb-8 flex items-center">
            <Award className="h-10 w-10 text-yellow-400 mr-4" />
            Top Rated Movies
          </h1>
        </div>
      </div>

      <ScrollableMovieSection
        title="Highest Rated Movies"
        movies={topRatedMovies}
        loading={loading}
        error={error}
        icon={Award}
        bgColor="bg-gray-800"
      />
    </main>
  );
};

export default TopRatedPage;

