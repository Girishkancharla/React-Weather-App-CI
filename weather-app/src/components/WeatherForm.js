import React, { useState } from "react";

function WeatherForm({ fetchWeather }) {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim() !== "") {
      fetchWeather(city);
      setCity("");
    }
  };

  return (
    <form className="weather-form" onSubmit={handleSubmit}>
      <input
        className="weather-input"
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button className="weather-button" type="submit">
        Check Weather
      </button>
    </form>
  );
}

export default WeatherForm;
