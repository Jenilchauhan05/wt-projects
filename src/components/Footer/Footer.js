import React from 'react';
import { Film } from '../Icons/Icons';

const Footer = () => {
  return (
    <footer className="bg-gray-800 border-t border-gray-700">
      <div className="w-full px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-yellow-400 p-2 rounded-lg">
                <Film className="h-6 w-6 text-black" />
              </div>
              <span className="text-white text-2xl font-bold">IMDB</span>
            </div>
            <p className="text-gray-400">
              Your ultimate destination for discovering amazing movies and TV shows.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Movies</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Popular</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Top Rated</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Now Playing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Upcoming</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">TV Shows</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Popular</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Top Rated</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">On The Air</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Airing Today</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">About</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 MovieDB. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;