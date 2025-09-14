import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Correct imports — jo teri project structure me available hain
import { MovieProvider } from './context/MovieContext';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import TrendingPage from './pages/Trending/Trending';
import PopularPage from './pages/Popular/Popular';
import TopRatedPage from './pages/TopRated/TopRated';
import NowPlayingPage from './pages/NowPlaying/NowPlaying';
import MovieModal from './components/MovieModal/MovieModal';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <MovieProvider>
      <Router>
        <div className="min-h-screen bg-gray-900 w-full">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/trending" element={<TrendingPage />} />
            <Route path="/popular" element={<PopularPage />} />
            <Route path="/top-rated" element={<TopRatedPage />} />
            <Route path="/now-playing" element={<NowPlayingPage />} />
          </Routes>
          <MovieModal />
          <Footer />
        </div>
      </Router>
      
      {/* Custom Scrollbar Styles */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </MovieProvider>
  );
};

export default App;