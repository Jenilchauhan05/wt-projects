import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useMovies } from '../../context/MovieContext';
import { Search, X, Film, Home, Trending, Award, Menu } from '../Icons/Icons';

const Navbar = () => {
  const { searchMovies, clearSearch } = useMovies();
  const [searchInput, setSearchInput] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const handleSearch = () => {
    if (searchInput.trim()) {
      searchMovies(searchInput);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleClear = () => {
    setSearchInput('');
    clearSearch();
  };

  return (
    <nav className="bg-gray-900 border-b border-gray-800 sticky top-0 z-40 backdrop-blur-sm">
      <div className="w-full px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-yellow-400 p-2 rounded-lg">
              <Film className="h-6 w-6 text-black" />
            </div>
            <span className="text-white text-2xl font-bold">IMDB</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`flex items-center space-x-1 transition-colors ${
                location.pathname === '/' 
                  ? 'text-yellow-400' 
                  : 'text-gray-300 hover:text-yellow-400'
              }`}
            >
              <Home className="h-4 w-4" />
              <span>Home</span>
            </Link>
            <Link 
              to="/trending" 
              className={`flex items-center space-x-1 transition-colors ${
                location.pathname === '/trending' 
                  ? 'text-yellow-400' 
                  : 'text-gray-300 hover:text-yellow-400'
              }`}
            >
              <Trending className="h-4 w-4" />
              <span>Trending</span>
            </Link>
            <Link 
              to="/top-rated" 
              className={`flex items-center space-x-1 transition-colors ${
                location.pathname === '/top-rated' 
                  ? 'text-yellow-400' 
                  : 'text-gray-300 hover:text-yellow-400'
              }`}
            >
              <Award className="h-4 w-4" />
              <span>Top Rated</span>
            </Link>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-md mx-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Search movies..."
                className="w-full bg-gray-800 text-white pl-10 pr-24 py-2 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm"
              />
              <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex space-x-1">
                {searchInput && (
                  <button
                    onClick={handleClear}
                    className="text-gray-400 hover:text-white p-1"
                  >
                    <X className="h-3 w-3" />
                  </button>
                )}
                <button
                  onClick={handleSearch}
                  className="bg-yellow-400 hover:bg-yellow-500 text-black px-3 py-1 rounded text-xs font-medium transition-colors"
                >
                  Search
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-400 hover:text-white"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-800 py-4">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className={`flex items-center space-x-2 transition-colors ${
                  location.pathname === '/' 
                    ? 'text-yellow-400' 
                    : 'text-gray-300 hover:text-yellow-400'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Home className="h-4 w-4" />
                <span>Home</span>
              </Link>
              <Link 
                to="/trending" 
                className={`flex items-center space-x-2 transition-colors ${
                  location.pathname === '/trending' 
                    ? 'text-yellow-400' 
                    : 'text-gray-300 hover:text-yellow-400'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Trending className="h-4 w-4" />
                <span>Trending</span>
              </Link>
              <Link 
                to="/top-rated" 
                className={`flex items-center space-x-2 transition-colors ${
                  location.pathname === '/top-rated' 
                    ? 'text-yellow-400' 
                    : 'text-gray-300 hover:text-yellow-400'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Award className="h-4 w-4" />
                <span>Top Rated</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;