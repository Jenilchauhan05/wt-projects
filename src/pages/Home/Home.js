import React, { useEffect } from 'react';
import { useMovies } from '../../context/MovieContext';
import { Award, Play, Star, Trending } from '../../components/Icons/Icons';
import HeroCarousel from '../../components/HeroCarousel/HeroCarousel';
import ScrollableMovieSection from '../../components/ScrollableMovieSection/ScrollableMovieSection';
import MovieCard from '../../components/MovieCard/MovieCard';

const Home = () => {
  const { 
    fetchTrendingMovies, 
    fetchPopularMovies, 
    fetchTopRatedMovies,
    fetchNowPlayingMovies,
    popularMovies,
    trendingMovies,
    topRatedMovies,
    nowPlayingMovies,
    searchQuery,
    searchResults,
    loading,
    error
  } = useMovies();

  useEffect(() => {
    fetchTrendingMovies();
    fetchPopularMovies();
    fetchTopRatedMovies();
    fetchNowPlayingMovies();
  }, []);

  if (searchQuery && searchResults.length > 0) {
    return (
      <main className="min-h-screen bg-gray-900 w-full">
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white mb-8">
              Search Results for "{searchQuery}"
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {searchResults.map((movie) => (
                <MovieCard key={movie.id} movie={movie} size="large" />
              ))}
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-900 w-full">
      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Popular Movies */}
      <ScrollableMovieSection
        title="Popular Movies"
        movies={popularMovies}
        loading={loading}
        error={error}
        icon={Star}
        bgColor="bg-gray-900"
      />

      {/* Trending Movies */}
      <ScrollableMovieSection
        title="Trending Movies"
        movies={trendingMovies}
        loading={loading}
        error={error}
        icon={Trending}
        bgColor="bg-gray-800"
      />

      {/* Top Rated Movies */}
      <ScrollableMovieSection
        title="Top Rated Movies"
        movies={topRatedMovies}
        loading={loading}
        error={error}
        icon={Award}
        bgColor="bg-gray-900"
      />

      {/* Now Playing Movies */}
      <ScrollableMovieSection
        title="Now Playing"
        movies={nowPlayingMovies}
        loading={loading}
        error={error}
        icon={Play}
        bgColor="bg-gray-800"
      />
    </main>
  );
};

export default Home;
