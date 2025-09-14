import React from 'react';
import { useMovies, API_CONFIG } from '../../context/MovieContext';
import { X, Star, Calendar, Clock, Film } from '../Icons/Icons';

const MovieModal = () => {
  const { selectedMovie, showModal, closeModal } = useMovies();

  if (!showModal || !selectedMovie) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
      <div className="bg-gray-900 rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto border border-gray-700">
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-6 right-6 bg-gray-800 hover:bg-gray-700 text-white rounded-full p-3 z-10 transition-colors"
        >
          <X className="h-6 w-6" />
        </button>
        
        <div className="flex flex-col lg:flex-row">
          {/* Movie Poster */}
          <div className="lg:w-2/5">
            {selectedMovie.poster_path ? (
              <img 
                src={`${API_CONFIG.imageBaseURL}${selectedMovie.poster_path}`}
                alt={selectedMovie.title}
                className="w-full h-96 lg:h-full object-cover rounded-t-2xl lg:rounded-l-2xl lg:rounded-t-none"
              />
            ) : (
              <div className="w-full h-96 lg:h-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center rounded-t-2xl lg:rounded-l-2xl lg:rounded-t-none">
                <Film className="h-24 w-24 text-gray-500" />
              </div>
            )}
          </div>
          
          {/* Movie Details */}
          <div className="lg:w-3/5 p-8">
            <h2 className="text-4xl font-bold text-white mb-2">{selectedMovie.title}</h2>
            {selectedMovie.tagline && (
              <p className="text-yellow-400 text-lg italic mb-6">"{selectedMovie.tagline}"</p>
            )}
            
            {/* Movie Stats */}
            <div className="flex flex-wrap gap-4 mb-8">
              {selectedMovie.vote_average > 0 && (
                <div className="flex items-center bg-yellow-400 text-black px-4 py-2 rounded-full">
                  <Star className="h-5 w-5 mr-2 fill-current" />
                  <span className="font-bold">{selectedMovie.vote_average.toFixed(1)}/10</span>
                </div>
              )}
              
              <div className="flex items-center text-gray-300 bg-gray-800 px-4 py-2 rounded-full">
                <Calendar className="h-5 w-5 mr-2" />
                <span>{new Date(selectedMovie.release_date).getFullYear()}</span>
              </div>
              
              {selectedMovie.runtime && (
                <div className="flex items-center text-gray-300 bg-gray-800 px-4 py-2 rounded-full">
                  <Clock className="h-5 w-5 mr-2" />
                  <span>{selectedMovie.runtime} min</span>
                </div>
              )}
            </div>
            
            {/* Genres */}
            {selectedMovie.genres && selectedMovie.genres.length > 0 && (
              <div className="mb-6">
                <h4 className="text-xl font-semibold text-white mb-3">Genres</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedMovie.genres.map((genre) => (
                    <span 
                      key={genre.id} 
                      className="bg-gray-700 text-gray-300 px-4 py-2 rounded-full text-sm font-medium"
                    >
                      {genre.name}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            {/* Overview */}
            <div className="mb-6">
              <h4 className="text-xl font-semibold text-white mb-3">Overview</h4>
              <p className="text-gray-300 leading-relaxed text-lg">{selectedMovie.overview}</p>
            </div>
            
            {/* Cast */}
            {selectedMovie.credits?.cast && (
              <div className="mb-6">
                <h4 className="text-xl font-semibold text-white mb-3">Cast</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedMovie.credits.cast.slice(0, 10).map((actor) => (
                    <span key={actor.id} className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm">
                      {actor.name}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            {/* Production Companies */}
            {selectedMovie.production_companies && selectedMovie.production_companies.length > 0 && (
              <div className="mb-6">
                <h4 className="text-xl font-semibold text-white mb-3">Production</h4>
                <p className="text-gray-300">
                  {selectedMovie.production_companies.map(company => company.name).join(', ')}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;