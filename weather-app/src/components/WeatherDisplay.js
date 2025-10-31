import React from "react";

function WeatherDisplay({ weatherData }) {
  if (!weatherData) return null;

  const { name, main, weather, wind } = weatherData;
  const condition = weather[0].main;
  const description = weather[0].description;

  const conditionBackground = {
    Clear: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
    Clouds: "linear-gradient(135deg, #bdc3c7 0%, #2c3e50 100%)",
    Rain: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    Snow: "linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%)",
    Thunderstorm: "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)",
  };

  const cardStyle = {
    background:
      conditionBackground[condition] ||
      "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    color: "#fff",
    padding: "20px",
    borderRadius: "10px",
    marginTop: "20px",
  };

  return (
    <section className="weather-display" style={cardStyle}>
      <div className="weather-display__header">
        <h2>{name}</h2>
        <span className="weather-display__badge">{condition}</span>
      </div>
      <div className="weather-display__temperature">
        <span className="weather-display__temp-value">
          {Math.round(main.temp)}°C
        </span>
        <span className="weather-display__feels">
          Feels like {Math.round(main.feels_like)}°C
        </span>
      </div>
      <div className="weather-display__details">
        <div>
          <span className="label">Humidity</span>
          <span className="value">{main.humidity}%</span>
        </div>
        <div>
          <span className="label">Wind</span>
          <span className="value">{Math.round(wind.speed)} m/s</span>
        </div>
        <div>
          <span className="label">Summary</span>
          <span className="value">{description}</span>
        </div>
      </div>
    </section>
  );
}

export default WeatherDisplay;
