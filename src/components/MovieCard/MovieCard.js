import React from 'react';
import { useMovies, API_CONFIG } from '../../context/MovieContext';
import { Star, Calendar, Film, Play } from '../Icons/Icons';

const MovieCard = ({ movie, size = 'normal' }) => {
  const { fetchMovieDetails } = useMovies();

  const handleClick = () => {
    fetchMovieDetails(movie.id);
  };

  const cardClass = size === 'large' 
    ? 'w-full max-w-sm'
    : 'w-48 md:w-56';

  return (
    <div 
      className={`${cardClass} bg-gray-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-2xl border border-gray-700 hover:border-yellow-400/50 flex-shrink-0`}
      onClick={handleClick}
    >
      <div className="relative h-72 md:h-80 overflow-hidden">
        {movie.poster_path ? (
          <img 
            src={`${API_CONFIG.imageBaseURL}${movie.poster_path}`}
            alt={movie.title}
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
            <Film className="h-16 w-16 text-gray-500" />
          </div>
        )}
        
        {/* Rating Badge */}
        {movie.vote_average > 0 && (
          <div className="absolute top-2 right-2 bg-black/80 text-yellow-400 px-2 py-1 rounded-full flex items-center space-x-1 backdrop-blur-sm">
            <Star className="h-3 w-3 fill-current" />
            <span className="font-bold text-xs">{movie.vote_average.toFixed(1)}</span>
          </div>
        )}

        {/* Play Button Overlay */}
        <div className="absolute inset-0 bg-black/0 hover:bg-black/50 flex items-center justify-center transition-all duration-300 opacity-0 hover:opacity-100">
          <Play className="h-12 w-12 text-white" />
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-white font-bold text-base mb-2 line-clamp-2 hover:text-yellow-400 transition-colors">
          {movie.title}
        </h3>
        
        <div className="flex items-center justify-between text-gray-400 text-sm">
          <div className="flex items-center space-x-1">
            <Calendar className="h-3 w-3" />
            <span>{new Date(movie.release_date).getFullYear()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;