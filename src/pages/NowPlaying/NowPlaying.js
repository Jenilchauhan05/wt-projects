import React, { useEffect } from 'react';
import { useMovies } from '../../context/MovieContext';
import { Play } from '../../components/Icons/Icons';
import ScrollableMovieSection from '../../components/ScrollableMovieSection/ScrollableMovieSection';

const NowPlayingPage = () => {
  const { 
    nowPlayingMovies, 
    fetchNowPlayingMovies, 
    loading, 
    error 
  } = useMovies();

  useEffect(() => {
    fetchNowPlayingMovies();
  }, []);

  return (
    <main className="min-h-screen bg-gray-900 w-full">
      <div className="py-8">
        <div className="w-full px-4">
          <h1 className="text-4xl font-bold text-white mb-8 flex items-center">
            <Play className="h-10 w-10 text-yellow-400 mr-4" />
            Now Playing
          </h1>
        </div>
      </div>

      <ScrollableMovieSection
        title="Currently in Theaters"
        movies={nowPlayingMovies}
        loading={loading}
        error={error}
        icon={Play}
        bgColor="bg-gray-800"
      />
    </main>
  );
};

export default NowPlayingPage;

