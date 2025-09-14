import React, { useState, useEffect } from 'react';
import { useMovies, API_CONFIG } from '../../context/MovieContext';
import { Star, Calendar, Play, Loader2 } from '../Icons/Icons';

const HeroCarousel = () => {
  const { trendingMovies, fetchMovieDetails } = useMovies();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (trendingMovies.length > 0) {
      const interval = setInterval(() => {
        setCurrentSlide(prev => (prev + 1) % Math.min(trendingMovies.length, 5));
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [trendingMovies]);

  if (trendingMovies.length === 0) {
    return (
      <div className="relative h-96 bg-gray-800 flex items-center justify-center">
        <Loader2 className="h-12 w-12 animate-spin text-yellow-400" />
      </div>
    );
  }

  const currentMovie = trendingMovies[currentSlide];

  return (
    <div className="relative h-96 md:h-[500px] lg:h-[600px] overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
        style={{
          backgroundImage: `url(${API_CONFIG.backdropBaseURL}${currentMovie?.backdrop_path})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="w-full px-4">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              {currentMovie?.title}
            </h1>
            
            <div className="flex items-center space-x-4 mb-4">
              <div className="flex items-center bg-yellow-400 text-black px-3 py-1 rounded-full">
                <Star className="h-4 w-4 mr-1 fill-current" />
                <span className="font-bold">{currentMovie?.vote_average?.toFixed(1)}</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{new Date(currentMovie?.release_date).getFullYear()}</span>
              </div>
            </div>

            <p className="text-gray-200 text-lg mb-8 line-clamp-3">
              {currentMovie?.overview}
            </p>

            <div className="flex space-x-4">
              <button 
                onClick={() => fetchMovieDetails(currentMovie?.id)}
                className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-3 rounded-lg font-bold flex items-center space-x-2 transition-colors"
              >
                <Play className="h-5 w-5" />
                <span>Watch Now</span>
              </button>
              <button 
                onClick={() => fetchMovieDetails(currentMovie?.id)}
                className="border border-gray-400 hover:border-white text-white px-8 py-3 rounded-lg font-bold transition-colors"
              >
                More Info
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {trendingMovies.slice(0, 5).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              currentSlide === index ? 'bg-yellow-400' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;