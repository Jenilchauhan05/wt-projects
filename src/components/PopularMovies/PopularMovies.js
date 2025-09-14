import React from 'react';
import { useMovies } from '../../context/MovieContext';
import { Star, Loader2, AlertCircle } from '../Icons/Icons';
import MovieCard from '../MovieCard/MovieCard';

const PopularMovies = () => {
  const { popularMovies, loading, error } = useMovies();

  if (loading) {
    return (
      <section className="py-12 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center">
            <Loader2 className="h-8 w-8 animate-spin text-yellow-400" />
            <span className="ml-2 text-white">Loading popular movies...</span>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-12 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <AlertCircle className="h-12 w-12 text-red-400 mx-auto mb-4" />
            <p className="text-red-200">Failed to load popular movies</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-white flex items-center">
            <Star className="h-8 w-8 text-yellow-400 mr-3" />
            Popular Movies
          </h2>
        </div>

        <div className="flex space-x-6 overflow-x-auto pb-4 scrollbar-hide">
          {popularMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularMovies;