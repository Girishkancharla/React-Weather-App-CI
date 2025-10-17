import React from "react";

function WeatherDisplay({ weatherData }) {
  if (!weatherData) return null; 

  const { name, main, weather } = weatherData;
  const condition = weather[0].main;

  let bgColor = "#f0f0f0"; 
  if (condition === "Clear") bgColor = "#f7dc6f";
  else if (condition === "Clouds") bgColor = "#d6dbdf";
  else if (condition === "Rain") bgColor = "#85d5e9ff";

  const containerStyle = {
    marginTop: "20px",
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: bgColor,
    display: "inline-block",
  };

  return (
    <div style={containerStyle}>
      <h2>{name}</h2>
      <p>Temperature: {main.temp} °C</p>
      <p>Condition: {condition}</p>
    </div> 
  );
}

export default WeatherDisplay;

