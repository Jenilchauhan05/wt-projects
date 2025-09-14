const MovieDetails = () => {
  const { selectedMovie, loading } = useMovies();

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <Loader2 className="h-12 w-12 animate-spin text-yellow-400" />
      </div>
    );
  }

  if (!selectedMovie) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <Film className="h-24 w-24 text-gray-500 mx-auto mb-4" />
          <p className="text-gray-400 text-xl">Movie not found</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <div 
        className="relative h-96 md:h-[500px] bg-cover bg-center"
        style={{
          backgroundImage: `url(${API_CONFIG.backdropBaseURL}${selectedMovie.backdrop_path})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80"></div>
        
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
              {/* Poster */}
              <div className="flex-shrink-0">
                <img 
                  src={`${API_CONFIG.imageBaseURL}${selectedMovie.poster_path}`}
                  alt={selectedMovie.title}
                  className="w-64 h-96 object-cover rounded-xl shadow-2xl"
                />
              </div>
              
              {/* Details */}
              <div className="flex-1">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  {selectedMovie.title}
                </h1>
                
                {selectedMovie.tagline && (
                  <p className="text-yellow-400 text-xl italic mb-6">
                    "{selectedMovie.tagline}"
                  </p>
                )}
                
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center bg-yellow-400 text-black px-4 py-2 rounded-full">
                    <Star className="h-5 w-5 mr-2 fill-current" />
                    <span className="font-bold">{selectedMovie.vote_average?.toFixed(1)}/10</span>
                  </div>
                  
                  <div className="flex items-center text-gray-300 bg-gray-800/80 px-4 py-2 rounded-full">
                    <Calendar className="h-5 w-5 mr-2" />
                    <span>{new Date(selectedMovie.release_date).getFullYear()}</span>
                  </div>
                  
                  {selectedMovie.runtime && (
                    <div className="flex items-center text-gray-300 bg-gray-800/80 px-4 py-2 rounded-full">
                      <Clock className="h-5 w-5 mr-2" />
                      <span>{selectedMovie.runtime} min</span>
                    </div>
                  )}
                </div>
                
                <p className="text-gray-200 text-lg mb-8 max-w-2xl">
                  {selectedMovie.overview}
                </p>
                
                <div className="flex space-x-4">
                  <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-3 rounded-lg font-bold flex items-center space-x-2 transition-colors">
                    <Play className="h-5 w-5" />
                    <span>Watch Trailer</span>
                  </button>
                  <button className="border border-gray-400 hover:border-white text-white px-8 py-3 rounded-lg font-bold transition-colors">
                    Add to Watchlist
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Details */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Genres */}
            {selectedMovie.genres && selectedMovie.genres.length > 0 && (
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Genres</h3>
                <div className="flex flex-wrap gap-3">
                  {selectedMovie.genres.map((genre) => (
                    <span 
                      key={genre.id}
                      className="bg-gray-700 text-gray-300 px-4 py-2 rounded-full font-medium"
                    >
                      {genre.name}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Cast */}
            {selectedMovie.credits?.cast && (
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Cast</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {selectedMovie.credits.cast.slice(0, 12).map((actor) => (
                    <div key={actor.id} className="bg-gray-800 p-4 rounded-lg">
                      <h4 className="text-white font-semibold">{actor.name}</h4>
                      <p className="text-gray-400 text-sm">{actor.character}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Movie Facts */}
            <div className="bg-gray-800 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-white mb-4">Movie Facts</h3>
              <div className="space-y-4">
                {selectedMovie.budget > 0 && (
                  <div>
                    <h4 className="text-gray-400 text-sm font-semibold">Budget</h4>
                    <p className="text-white">${selectedMovie.budget.toLocaleString()}</p>
                  </div>
                )}
                
                {selectedMovie.revenue > 0 && (
                  <div>
                    <h4 className="text-gray-400 text-sm font-semibold">Revenue</h4>
                    <p className="text-white">${selectedMovie.revenue.toLocaleString()}</p>
                  </div>
                )}
                
                {selectedMovie.production_companies && selectedMovie.production_companies.length > 0 && (
                  <div>
                    <h4 className="text-gray-400 text-sm font-semibold">Production</h4>
                    <p className="text-white">
                      {selectedMovie.production_companies.map(company => company.name).join(', ')}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Similar Movies */}
            {selectedMovie.similar?.results && selectedMovie.similar.results.length > 0 && (
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Similar Movies</h3>
                <div className="space-y-4">
                  {selectedMovie.similar.results.slice(0, 5).map((movie) => (
                    <div key={movie.id} className="flex space-x-4 bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer">
                      <img 
                        src={`${API_CONFIG.imageBaseURL}${movie.poster_path}`}
                        alt={movie.title}
                        className="w-16 h-24 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h4 className="text-white font-semibold line-clamp-2">{movie.title}</h4>
                        <div className="flex items-center mt-1">
                          <Star className="h-3 w-3 text-yellow-400 fill-current mr-1" />
                          <span className="text-gray-400 text-sm">{movie.vote_average?.toFixed(1)}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};