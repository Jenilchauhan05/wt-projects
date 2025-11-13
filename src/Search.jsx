import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function Search({ updateInfo }) {
  const [city, setCity] = useState("");

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "54442d071338f34c9a5231c7c0787074";

  const getWeather = async (q) => {
    try {
      const resp = await fetch(`${API_URL}?q=${encodeURIComponent(q)}&appid=${API_KEY}&units=metric`);
      const data = await resp.json();

      if (!resp.ok) {
        throw new Error(data?.message || "Failed to fetch weather");
      }

      const result = {
        city: data.name || q,
        temp: data.main.temp,
        tempMin: data.main.temp_min,
        tempMax: data.main.temp_max,
        feelslike: data.main.feels_like,
        description: data.weather?.[0]?.description || "",
        humidity: data.main.humidity,
        windSpeed: data.wind.speed
      };

      updateInfo(result);

    } catch (err) {
      console.error("Weather error:", err.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const q = city.trim();
    if (!q) return;
    await getWeather(q);
    setCity("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name :"
          variant="outlined"
          required
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <br /> <br />
        <Button variant="contained" type="submit">Search</Button>
      </form>
      <br />
    </>
  );
}
