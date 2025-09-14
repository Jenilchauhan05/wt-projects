import React, { createContext, useContext, useState } from 'react';

// API Configuration
const API_CONFIG = {
  baseURL: 'https://api.themoviedb.org/3',
  apiKey: '8265bd1679663a7ea12ac168da84d2e8', // Demo key - replace with your key
  imageBaseURL: 'https://image.tmdb.org/t/p/w500',
  backdropBaseURL: 'https://image.tmdb.org/t/p/w1280'
};

// API Functions
const movieAPI = {
  getPopularMovies: async (page = 1) => {
    const response = await fetch(
      `${API_CONFIG.baseURL}/movie/popular?api_key=${API_CONFIG.apiKey}&language=en-US&page=${page}`
    );
    if (!response.ok) throw new Error('Failed to fetch popular movies');
    return await response.json();
  },

  getTrendingMovies: async () => {
    const response = await fetch(
      `${API_CONFIG.baseURL}/trending/movie/week?api_key=${API_CONFIG.apiKey}&language=en-US`
    );
    if (!response.ok) throw new Error('Failed to fetch trending movies');
    return await response.json();
  },

  getTopRatedMovies: async () => {
    const response = await fetch(
      `${API_CONFIG.baseURL}/movie/top_rated?api_key=${API_CONFIG.apiKey}&language=en-US&page=1`
    );
    if (!response.ok) throw new Error('Failed to fetch top rated movies');
    return await response.json();
  },

  getMovieDetails: async (id) => {
    const response = await fetch(
      `${API_CONFIG.baseURL}/movie/${id}?api_key=${API_CONFIG.apiKey}&language=en-US&append_to_response=credits,videos,similar`
    );
    if (!response.ok) throw new Error('Failed to fetch movie details');
    return await response.json();
  },

  searchMovies: async (query) => {
    const response = await fetch(
      `${API_CONFIG.baseURL}/search/movie?api_key=${API_CONFIG.apiKey}&language=en-US&query=${encodeURIComponent(query)}&page=1`
    );
    if (!response.ok) throw new Error('Failed to search movies');
    return await response.json();
  },

  getNowPlayingMovies: async () => {
    const response = await fetch(
      `${API_CONFIG.baseURL}/movie/now_playing?api_key=${API_CONFIG.apiKey}&language=en-US&page=1`
    );
    if (!response.ok) throw new Error('Failed to fetch now playing movies');
    return await response.json();
  }
};

// Movie Context

const MovieContext = createContext();

const MovieProvider = ({ children }) => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showModal, setShowModal] = useState(false);

  const fetchPopularMovies = async () => {
    try {
      setLoading(true);
      const data = await movieAPI.getPopularMovies();
      setPopularMovies(data.results);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchTrendingMovies = async () => {
    try {
      const data = await movieAPI.getTrendingMovies();
      setTrendingMovies(data.results);
    } catch (err) {
      console.error('Error fetching trending movies:', err);
    }
  };

  const fetchTopRatedMovies = async () => {
    try {
      const data = await movieAPI.getTopRatedMovies();
      setTopRatedMovies(data.results);
    } catch (err) {
      console.error('Error fetching top rated movies:', err);
    }
  };

  const fetchNowPlayingMovies = async () => {
    try {
      const data = await movieAPI.getNowPlayingMovies();
      setNowPlayingMovies(data.results);
    } catch (err) {
      console.error('Error fetching now playing movies:', err);
    }
  };

  const fetchMovieDetails = async (id) => {
    try {
      setLoading(true);
      const data = await movieAPI.getMovieDetails(id);
      setSelectedMovie(data);
      setShowModal(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const searchMovies = async (query) => {
    if (!query.trim()) return;
    try {
      setLoading(true);
      setSearchQuery(query);
      const data = await movieAPI.searchMovies(query);
      setSearchResults(data.results);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const clearSearch = () => {
    setSearchResults([]);
    setSearchQuery('');
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedMovie(null);
  };

  const value = {
    popularMovies,
    trendingMovies,
    topRatedMovies,
    nowPlayingMovies,
    searchResults,
    selectedMovie,
    loading,
    error,
    searchQuery,
    showModal,
    fetchPopularMovies,
    fetchTrendingMovies,
    fetchTopRatedMovies,
    fetchNowPlayingMovies,
    fetchMovieDetails,
    searchMovies,
    clearSearch,
    closeModal
  };

  return <MovieContext.Provider value={value}>{children}</MovieContext.Provider>;
};

const useMovies = () => {
  const context = useContext(MovieContext);
  if (!context) {
    throw new Error('useMovies must be used within MovieProvider');
  }
  return context;
};

export { MovieProvider, useMovies, API_CONFIG };