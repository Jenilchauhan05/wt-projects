# MyIMDB - Movie Database Clone

A React-based movie database application that fetches data from The Movie Database (TMDb) API.

## Features

- 🎬 Popular Movies Section
- 🔥 Trending Movies Carousel
- ⭐ Top Rated Movies
- 🎭 Now Playing Movies
- 🔍 Movie Search Functionality
- 📱 Responsive Design
- 🎨 Modern UI with Tailwind CSS

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
   ```bash
   cd myimdb
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Project Structure

```
src/
├── components/
│   ├── Footer/
│   ├── HeroCarousel/
│   ├── Icons/
│   ├── MovieCard/
│   ├── MovieModal/
│   ├── Navbar/
│   └── PopularMovies/
├── context/
│   └── MovieContext.js
├── pages/
│   └── Home/
├── App.js
├── index.js
└── index.css
```

## API Configuration

The app uses The Movie Database (TMDb) API. The API key is currently set to a demo key. For production use, you should:

1. Get your own API key from [TMDb](https://www.themoviedb.org/settings/api)
2. Replace the API key in `src/context/MovieContext.js`

## Technologies Used

- React 19.1.1
- React Router DOM
- Tailwind CSS
- Bootstrap
- Custom SVG Icons
- TMDb API

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (one-way operation)

## Troubleshooting

If you encounter any issues:

1. Make sure all dependencies are installed: `npm install`
2. Clear the cache: `npm start -- --reset-cache`
3. Check if the API key is valid
4. Ensure you have a stable internet connection for API calls

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is for educational purposes only.