import { useState } from 'react';
import Info from './Info';
import Search from './Search';

export default function Weather() {
  const [weatherData, setWeatherData] = useState({
    city: "Rajkot",
    description: "clear sky",
    feelslike: 27.68,
    humidity: 28,
    temp: 28.89,
    tempMax: 28.89,
    tempMin: 28.89,
    windSpeed: 3.32,
  });

  const updateWeather = (newInfo) => {
    setWeatherData(newInfo);
  };

  return (
    <>
      <h1>Weather Component</h1>
      <Search updateInfo={updateWeather} />
      <Info info={weatherData} />
    </>
  );
}
