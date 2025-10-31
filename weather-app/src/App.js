import React, { useState } from "react";
import "./App.css";
import WeatherForm from "./components/WeatherForm";
import WeatherDisplay from "./components/WeatherDisplay";
import WeatherForecast from "./components/WeatherForecast";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);

  const fetchWeather = async (city) => {
    const apiKey = process.env.REACT_APP_API_KEY;
    const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;

    try {
      // Fetch both current weather and forecast together
      const [currentResponse, forecastResponse] = await Promise.all([
        fetch(currentWeatherUrl),
        fetch(forecastUrl),
      ]);

      const currentData = await currentResponse.json();
      const forecastData = await forecastResponse.json();

      const isCurrentValid = currentData.cod === 200;
      const isForecastValid = Number(forecastData.cod) === 200;

      if (isCurrentValid && isForecastValid) {
        setWeatherData(currentData);
        setForecastData(forecastData);
      } else {
        alert("City not found!");
        setWeatherData(null);
        setForecastData(null);
      }
    } catch (error) {
      console.error("Error fetching weather:", error);
      alert("Failed to fetch weather data. Please try again later.");
    }
  };

  return (
    <div className="app-shell">
      <div className="app-card">
        <h1 className="app-title">🌤️ Weather Outlook</h1>
        <p className="app-subtitle">Get the latest conditions and a five-day preview</p>
        <WeatherForm fetchWeather={fetchWeather} />
        <WeatherDisplay weatherData={weatherData} />
        <WeatherForecast forecastData={forecastData} />
      </div>
    </div>
  );
}

export default App;
