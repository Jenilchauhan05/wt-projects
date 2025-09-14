import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from '../Icons/Icons';
import MovieCard from '../MovieCard/MovieCard';

const ScrollableMovieSection = ({ 
  title, 
  movies, 
  loading, 
  error, 
  icon: Icon,
  bgColor = "bg-gray-900"
}) => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -300,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 300,
        behavior: 'smooth'
      });
    }
  };

  if (loading) {
    return (
      <section className={`py-12 ${bgColor}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-yellow-400"></div>
            <span className="ml-2 text-white">Loading {title.toLowerCase()}...</span>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className={`py-12 ${bgColor}`}>
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="text-red-400 text-4xl mb-4">⚠️</div>
            <p className="text-red-200">Failed to load {title.toLowerCase()}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`py-12 ${bgColor} relative movie-section`}>
      <div className="w-full px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-white flex items-center">
            {Icon && <Icon className="h-8 w-8 text-yellow-400 mr-3" />}
            {title}
          </h2>
        </div>

        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={scrollLeft}
            className="scroll-arrow absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300"
            style={{ marginLeft: '-20px' }}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={scrollRight}
            className="scroll-arrow absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300"
            style={{ marginRight: '-20px' }}
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Movie Cards Container */}
          <div 
            ref={scrollRef}
            className="flex space-x-6 overflow-x-auto pb-4 scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollableMovieSection;
